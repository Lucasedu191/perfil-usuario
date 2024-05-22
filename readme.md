# Página de Perfil de Usuário

Este projeto consiste em uma página de perfil de usuário que interage com uma API REST fictícia para obter e enviar dados do usuário. A página é responsiva e inclui funcionalidades para visualizar e editar informações do perfil.

## Funcionalidades

- Visualização de dados do usuário (imagem, nome, cpf,email, celular).
- Edição de dados do usuário com validação e envio para uma API REST fictícia.
- Design responsivo para desktop, tablet e mobile.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- JSON

## Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/perfil-usuario.git

2. Baixar NPM para criação do servidor local para a comunicação da API REST.
    ```bash
    npm install -g json-server
    
    -comando para ler o arquivo db.json com a informação referente ao perfil
   
    json-server --watch db.json

    -acessar no navegador o resultado JSON
    http://localhost:3000/user

3.Após iniciar o servidor, abra o arquivo HTML do projeto no seu navegador:
    <br>
   index.html<br>
   Isso abrirá a interface do usuário no seu navegador local.<br>

## Como Funciona o JSON Server
O JSON Server é uma ferramenta que permite simular uma API REST completa com base em um arquivo JSON. No nosso caso, o arquivo db.json contém os dados do perfil do usuário. Quando você executa o comando json-server --watch db.json, ele cria um servidor local que fornece endpoints RESTful para acessar e manipular esses dados. Por exemplo, ao acessar http://localhost:3000/user, você estará acessando os dados do usuário no formato JSON. Isso simplifica o desenvolvimento, pois permite interagir com os dados como se estivessem vindo de um servidor real, mesmo estando apenas em um arquivo JSON local.<br><br>
![Screenshot_7](https://github.com/Lucasedu191/perfil-usuario/assets/21348214/62b43c65-6a69-4114-9f7c-ffad2ae8cc8e)

## Interface
Esta interface permite visualizar as informações de cadastro do usuário. Para editar essas informações, basta clicar no botão "Editar" ou na área correspondente, onde será possível fazer as alterações necessárias.<br><br>
![Screenshot_5](https://github.com/Lucasedu191/perfil-usuario/assets/21348214/90ebf680-c271-4d92-bc7d-ce1582dc105b)<br><br>
Ao clicar em editar irá abrir um popup com um modal exibindo os campos de cadastro e automaticamente os campos de parâmetro da API.<br><br>
![Screenshot_6](https://github.com/Lucasedu191/perfil-usuario/assets/21348214/325b9969-5d93-468a-b715-c1fbf0a0a6d6)<br><br>
O campo de imagem foi criado para incluir a URL da imagem, evitando a necessidade de ter arquivos de mídia dentro do projeto. Isso facilita a gestão das imagens, já que elas podem ser hospedadas externamente e referenciadas pela URL.<br><br>
Após fazer as alterações e clicar em "Salvar":<br>
- O popup é fechado.<br>
- A API é atualizada com as novas informações.<br>
- A interface do usuário é atualizada para exibir as novas informações.<br><br>
![Screenshot_8](https://github.com/Lucasedu191/perfil-usuario/assets/21348214/e178e924-6188-43ce-941d-57a1fc220d1e)



