Param(
  [string]$Message = "chore: atualizações de tema e ajustes Tailwind"
)

# Uso:
#   powershell -ExecutionPolicy Bypass -File .\git-push-changes.ps1 -Message "feat: habilitar dark mode via @custom-variant"
# ou no PowerShell: .\git-push-changes.ps1 -Message "sua mensagem"

# 1) Verifica se é repo git
git rev-parse --is-inside-work-tree *> $null
if ($LASTEXITCODE -ne 0) {
  Write-Error "Este diretório não é um repositório Git."
  exit 1
}

# 2) Descobre branch e remoto
$branch = (& git rev-parse --abbrev-ref HEAD).Trim()
$remote = (& git config --get "branch.$branch.remote").Trim()

if ([string]::IsNullOrWhiteSpace($remote)) {
  Write-Error "Nenhum remoto configurado para a branch '$branch'."
  Write-Host "Configure com: git branch --set-upstream-to origin/$branch (ajuste se necessário)"
  exit 1
}

Write-Host "📦 Branch: $branch"
Write-Host "🌐 Remoto: $remote"

# 3) Atualiza/rebase
git fetch --all --prune
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

git pull --rebase --autostash $remote $branch
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# 4) Adiciona tudo
git add -A
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# 5) Evita commit vazio
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host "ℹ️  Sem mudanças para commitar. Nada foi enviado."
  exit 0
}

# 6) Commit + push
git commit -m "$Message"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

git push $remote $branch
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "✅ Push concluído: $branch → $remote"
