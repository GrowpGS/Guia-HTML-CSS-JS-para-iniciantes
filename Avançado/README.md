## Avançado

# Fundamentos do JavaScript

JavaScript é uma linguagem de programação que permite adicionar interatividade e lógica às páginas web. Junto com HTML e CSS, forma a base do desenvolvimento web moderno.

### O que você vai aprender:

1. O que é JavaScript e como funciona.
2. Como integrar JavaScript com HTML e CSS.
3. Noções básicas: variáveis, funções e eventos.
4. Prática com dois projetos interativos: uma Calculadora de IMC e um Blog com funcionalidades CRUD.

### Como funciona o JavaScript?

JavaScript pode ser adicionado ao HTML de três formas:

1. Inline: Diretamente em atributos como onclick ou onchange.
2. Interno: Dentro de uma tag <script> no arquivo HTML.
3. Externo: Em um arquivo separado com extensão .js.

#### Exemplo de Integração

#### JS Inline

```html
<button onclick="alert('Olá!')">Clique Aqui</button>
```

#### JS Interno

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <title>JS Interno</title>
  </head>
  <body>
    <button id="botao">Clique Aqui</button>
    <script>
      document.getElementById("botao").onclick = function () {
        alert("Olá!");
      };
    </script>
  </body>
</html>
```

#### JS Externo Arquivo HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <title>JS Externo</title>
    <script src="script.js"></script>
  </head>
  <body>
    <button id="botao">Clique Aqui</button>
  </body>
</html>
```

Arquivo JavaScript (script.js): javascript Copy Edit

```js
document.getElementById("botao").onclick = function () {
  alert("Olá!");
};
```

### Projetos

#### Projeto 1: Calculadora de IMC

Para mais informações abra o arquivo Projeto 1

1. Objetivo: Criar uma calculadora quepermite ao usuário inserir altura e peso, calcular o IMC e exibir o resultado.
2. Arquivos necessários: index.html: Estrutura HTML. style.css: Estilo para o layout. script.js: Lógica do JavaScript.

#### Projeto 2: Blog com CRUD

Para mais informações abra o arquivo Projeto 2

1. Objetivo: Criar um blog simples onde o usuário pode adicionar, editar e excluir posts.
2. Funcionalidades: Adicionar novos posts com título e conteúdo. Editar posts existentes. Excluir posts. Interface estilizada com CSS. Funcionalidade implementada com JavaScript e fetch para simular operações de envio de dados (mock).
3. Arquivos necessários: index.html: Estrutura da página. style.css: Estilo da página. script.js: Funcionalidade CRUD.
