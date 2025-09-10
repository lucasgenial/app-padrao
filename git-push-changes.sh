#!/usr/bin/env bash
set -euo pipefail

# Uso:
#   bash git-push-changes.sh "feat: habilitar dark mode via @custom-variant"
# Se não passar argumento, usa a mensagem padrão abaixo.
COMMIT_MSG="${1:-"chore: atualizações de tema e ajustes Tailwind"}"

# 1) Verifica se estamos num repositório git
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
  echo "❌ Este diretório não é um repositório Git." >&2
  exit 1
}

# 2) Descobre branch atual e remoto configurado
BRANCH="$(git rev-parse --abbrev-ref HEAD)"
REMOTE="$(git config --get branch."$BRANCH".remote || true)"

if [[ -z "$REMOTE" ]]; then
  echo "❌ Nenhum remoto configurado para a branch '$BRANCH'." >&2
  echo "   Configure com:  git branch --set-upstream-to origin/$BRANCH  (ajuste se necessário)"
  exit 1
fi

echo "📦 Branch: $BRANCH"
echo "🌐 Remoto: $REMOTE"

# 3) Atualiza/rebase antes de enviar
git fetch --all --prune
git pull --rebase --autostash "$REMOTE" "$BRANCH"

# 4) Adiciona todas as alterações (tracked + untracked)
git add -A

# 5) Evita commit vazio
if git diff --cached --quiet; then
  echo "ℹ️  Sem mudanças para commitar. Nada foi enviado."
  exit 0
fi

# 6) Commit + push
git commit -m "$COMMIT_MSG"
git push "$REMOTE" "$BRANCH"

echo "✅ Push concluído: $BRANCH → $REMOTE"