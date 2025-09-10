# 🌬️ MQA · Dashboard Geral (Admin)

[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue?logo=tailwindcss)](https://tailwindcss.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

> **MQA** (Monitoramento da Qualidade do Ar)  
> Este é o painel administrativo do sistema SaaS de monitoramento de ambientes escolares.  
> O objetivo é fornecer uma **visão geral em tempo real** de escolas, boxes (dispositivos), alertas, relatórios e uso.

---

## ✨ Funcionalidades

- 📊 **Dashboard Geral** com KPIs (escolas ativas, boxes ativos, alertas, leituras).  
- 🌗 **Tema Claro/Escuro** com persistência (`localStorage`) e toggle automático.  
- 📈 **Gráficos** integrados (Chart.js 4).  
- 📑 **Tabelas** com paginação, busca e tradução para PT-BR (DataTables).  
- 🏫 Módulos: Escolas, Boxes, Alertas, Relatórios, Usuários e Suporte.  
- 🔔 Menu de **notificações** e menu de **usuário** no topo.  
- 📱 **Responsivo**: sidebar colapsável no desktop e drawer no mobile.  

---

## 🖼️ Preview

> Exemplo da tela principal do Dashboard (tema escuro):

![Preview do Dashboard](./docs/screenshot-dark.png)

---

## 🚀 Tecnologias utilizadas

- [React 18+](https://react.dev/)  
- [TailwindCSS 3.4+](https://tailwindcss.com/)  
- [Chart.js](https://www.chartjs.org/)  
- [DataTables.js](https://datatables.net/)  

---

## 🔧 Como rodar o projeto

### Pré-requisitos
- [Node.js 18+](https://nodejs.org/en/)  
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação
```bash
# Clonar este repositório
git clone https://github.com/seu-usuario/app-padrao.git
cd app-padrao

# Instalar dependências
npm install
# ou
yarn install


🌗 Tema Claro/Escuro

O sistema utiliza @custom-variant dark no Tailwind para permitir que a classe dark seja aplicada no elemento <html>.
O tema atual é salvo no localStorage (mqa.theme), garantindo que o usuário retorne na mesma preferência.


app-padrao/
├── public/             # index.html, assets estáticos
├── src/
│   ├── components/     # componentes React
│   ├── pages/          # telas e rotas
│   ├── app.css         # Tailwind + custom-variant
│   └── main.tsx        # entrada da aplicação
├── package.json
└── README.md


📝 Licença

Este projeto está sob a licença MIT
.
Sinta-se livre para usar, modificar e compartilhar 🚀


👨‍💻 Autor

Lucas Matos
Professor, TI e criador do projeto MQA
📍 Bahia, Brasil