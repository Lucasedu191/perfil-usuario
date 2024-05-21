# Página de Perfil de Usuário

Este projeto consiste em uma página de perfil de usuário que interage com uma API REST fictícia para obter e enviar dados do usuário. A página é responsiva e inclui funcionalidades para visualizar e editar informações do perfil.

## Funcionalidades

- Visualização de dados do usuário (nome, email, telefone)
- Edição de dados do usuário com validação e envio para uma API REST fictícia
- Design responsivo para desktop, tablet e mobile

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/perfil-usuario.git

2. Baixar NPM para criação do servidor local para a comunicação da API REST
    ```bash
    npm install -g json-server
    
    -comando para ler o arquivo json com a informação referente ao perfil
    ```bash
    json-server --watch db.json

    -acessar no navegador o resultado JSON
    http://localhost:3000/user
