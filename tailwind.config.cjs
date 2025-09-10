// tailwind.config.js
/**
 *  Arquivo de configuração do Tailwind CSS.
 * Configura o modo escuro para ser ativado via classe CSS.
 *  Define os arquivos que o Tailwind deve escanear para gerar os estilos.
 * Personaliza o tema padrão do Tailwind.
 *
 *  nome do arquivo: tailwind.config.js
 */
module.exports = {
  darkMode: 'class', // <- importante
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:'#f0f7ff',100:'#d9ebff',200:'#b3d6ff',300:'#86bfff',
          400:'#58a7ff',500:'#2a8fff',600:'#0e72e6',700:'#0958b4',
          800:'#073f82',900:'#052b59'
        }
      }
    }
  },
  plugins: []
};