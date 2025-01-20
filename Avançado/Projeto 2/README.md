# Projeto: Blog com CRUD (Usando API)

## Objetivo

Este projeto consiste em criar um blog simples, funcional, que utiliza JavaScript para fazer requisições HTTP a uma API pública. As funcionalidades incluem:

1. Listar posts.
2. Pesquisar posts por título.
3. Publicar novos posts.
4. Editar posts existentes.
5. Excluir posts.

O objetivo é aprender a trabalhar com APIs usando JavaScript e fetch, implementando operações CRUD (Create, Read, Update, Delete).

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

1. index.html - Contém a estrutura básica da página.
2. style.css - Define o estilo visual da página.
3. script.js - Implementa as funcionalidades do blog utilizando JavaScript.

## API Utilizada

Usaremos a JSONPlaceholder como API pública para simular um backend.

1. Endpoint base: https://jsonplaceholder.typicode.com/posts
2. Cada post tem o seguinte formato:

```json
{
  "id": 1,
  "title": "Titulo do Post",
  "body": "Conteúdo do post",
  "userId": 1
}
```

## Funcionalidades do Blog

1. Listar Posts
1. Requisição: GET para https://jsonplaceholder.typicode.com/posts.
1. Exibe todos os posts retornados pela API.

1. Pesquisar Posts
1. Permite ao usuário pesquisar posts pelo título.
1. Implementado com JavaScript, filtrando os resultados obtidos da API.

1. Publicar um Novo Post
1. Requisição: POST para https://jsonplaceholder.typicode.com/posts.
1. Corpo da requisição:

```json
{
  "title": "Novo Post",
  "body": "Conteúdo do novo post",
  "userId": 1
}
```

3. O post criado é adicionado à lista de posts na interface.

4. Editar um Post
5. Requisição: PUT para https://jsonplaceholder.typicode.com/posts/{id}.
6. Corpo da requisição:

```json
{
  "id": 1,
  "title": "Titulo Editado",
  "body": "Conteúdo editado",
  "userId": 1
}
```

3. Atualiza o post na interface.

4. Excluir um Post
5. Requisição: DELETE para https://jsonplaceholder.typicode.com/posts/{id}.
6. Remove o post da interface.

## Instruções para Uso

1. Abra o arquivo index.html no navegador.
2. Veja os posts listados automaticamente ao carregar a página.
3. Use os campos de pesquisa, publicação, edição ou exclusão para interagir com os posts.

## Explicação do Código

1. Estrutura Básica do HTML
   No arquivo index.html, criamos:

1. Um campo de pesquisa.
1. Uma área para listar os posts.
1. Formulários para criar e editar posts.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Projeto Blog</title>
    <link rel="stylesheet" href="style.css" />
    <script src="script.js"></script>
  </head>
  <body>
    <div>
      <input type="text" id="search" placeholder="Pesquisar posts" />
      <button id="searchButton">Pesquisar</button>
    </div>

    <div id="postList"></div>

    <form id="newPostForm">
      <input type="text" id="title" placeholder="Título" />
      <textarea id="body" placeholder="Conteúdo"></textarea>
      <button type="submit">Publicar</button>
    </form>
  </body>
</html>
```

2. Estrutura Básica do CSS

```css
/* Estilos gerais */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
  color: #333;
}

h1,
h3 {
  color: #222;
}

.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Campo de pesquisa */
#search {
  width: calc(100% - 100px);
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#searchButton {
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#searchButton:hover {
  background-color: #0056b3;
}

/* Lista de posts */
#postList {
  margin-top: 20px;
}

#postList div {
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fafafa;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

#postList h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
}

#postList p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}

/* Formulários */
form {
  margin-top: 20px;
}

form input,
form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

form button {
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

form button:hover {
  background-color: #218838;
}

/* Responsividade */
@media (max-width: 768px) {
  #search {
    width: calc(100% - 80px);
  }
}
```

3. Lógica no JavaScript
   No arquivo script.js:

1. Listar Posts

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const postList = document.getElementById("postList");
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      postList.appendChild(postElement);
    });
  });
```

2. Pesquisar Posts

```js
document.getElementById("searchButton").onclick = () => {
  const query = document.getElementById("search").value.toLowerCase();
  const posts = document.querySelectorAll("#postList div");
  posts.forEach((post) => {
    const title = post.querySelector("h3").innerText.toLowerCase();
    post.style.display = title.includes(query) ? "block" : "none";
  });
};
```

3. Publicar Novo Post

```js
document.getElementById("newPostForm").onsubmit = (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body, userId: 1 }),
  })
    .then((response) => response.json())
    .then((newPost) => {
      const postList = document.getElementById("postList");
      const postElement = document.createElement("div");
      postElement.innerHTML = `<h3>${newPost.title}</h3><p>${newPost.body}</p>`;
      postList.appendChild(postElement);
    });
};
```

4. Editar e Excluir Posts
   Edite e exclua posts utilizando as requisições PUT e DELETE respectivamente, usando a mesma lógica acima para atualizar a interface.

## Conclusão

Este projeto mostra como usar JavaScript para consumir APIs e implementar funcionalidades CRUD em uma aplicação web. Pratique criando novas funcionalidades e personalizando o estilo para consolidar seu aprendizado!
