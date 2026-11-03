# Visualizador de Perfil do GitHub

Aplicação web simples para consultar informações públicas de um usuário do GitHub e visualizar seus repositórios.

## Funcionalidades

- Busca de usuário pelo nome de usuário do GitHub.
- Exibição da foto, nome, biografia, seguidores e pessoas seguidas.
- Exibição de até 10 repositórios, com estrelas, forks, watchers e linguagem.
- Busca pelo botão **Buscar** ou pressionando **Enter**.

## Como executar

Não é necessário instalar dependências.

1. Clone ou baixe este repositório.
2. Abra a pasta do projeto em um servidor web local, como a extensão **Live Server** do Visual Studio Code.
3. Acesse a página no navegador e pesquise um nome de usuário público do GitHub.

> Como o projeto usa módulos JavaScript, execute-o por um servidor local em vez de abrir o `index.html` diretamente como arquivo.

## Tecnologias

- HTML
- CSS
- JavaScript (ES modules)
- GitHub REST API

## Estrutura do projeto

```text
.
├── index.html
├── src/
│   ├── css/
│   └── js/
│       ├── githubApi.js
│       ├── index.js
│       └── profileView.js
└── README.md
```

## API utilizada

Os dados são consultados publicamente pela [GitHub REST API](https://docs.github.com/pt/rest). A aplicação não solicita autenticação.
