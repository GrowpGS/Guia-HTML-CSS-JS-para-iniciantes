## Intermediário

# Fundamentos do CSS

CSS (Cascading Style Sheets) é uma linguagem de estilo usada para definir a aparência de documentos HTML. Com o CSS, você pode controlar cores, fontes, layouts e muito mais.

### O que você vai aprender:

- Como funciona o CSS.
- Sintaxe básica do CSS.
- Seletores e propriedades.
- Integração de CSS e HTML.

### Como funciona o CSS?

O CSS pode ser aplicado ao HTML de três maneiras:

1. **Inline**: Diretamente na tag HTML usando o atributo `style`.
2. **Interno**: Dentro de um bloco `<style>` no `<head>` do documento.
3. **Externo**: Em um arquivo separado com extensão `.css`.

### Exemplo de Integração

#### CSS Inline

```html
<p style="color: blue; font-size: 18px;">Texto com estilo inline.</p>
```

#### CSS Interno

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <style>
        p {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>Texto com estilo interno.</p>
</body>
</html>
```

#### CSS Externo

**Arquivo HTML:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>Texto com estilo externo.</p>
</body>
</html>
```

**Arquivo CSS (`styles.css`):**

```css
p {
    color: blue;
    font-size: 18px;
}
```

### Projeto

Você criará uma página com o seguinte layout estilizado:

1. Um cabeçalho com fundo colorido e um título centralizado.
2. Uma seção com texto formatado.
3. Um rodapé com links estilizados.

---

### Projeto Passo a Passo

#### Código do Projeto

**Arquivo HTML:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Estilizada</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Cabeçalho -->
    <header>
        <h1>Minha Página Estilizada</h1>
    </header>

    <!-- Seção principal -->
    <main>
        <p>Esta página demonstra o uso de CSS para estilizar elementos HTML.</p>
    </main>

    <!-- Rodapé -->
    <footer>
        <a href="#">Link 1</a> | <a href="#">Link 2</a>
    </footer>
</body>
</html>
```

**Arquivo CSS (`styles.css`):**

```css
/* Estilo do cabeçalho */
header {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 10px;
}

/* Estilo da seção principal */
main {
    font-family: Arial, sans-serif;
    margin: 20px;
    line-height: 1.6;
}

/* Estilo do rodapé */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
}

footer a {
    color: #4CAF50;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}
```

---

#### O que fazer:

1. Crie dois arquivos: `index.html` e `styles.css`.
2. Copie o código correspondente para cada arquivo.
3. Abra o arquivo HTML no navegador para ver o resultado.
4. Experimente alterar os estilos no arquivo CSS para ver como afetam o layout.