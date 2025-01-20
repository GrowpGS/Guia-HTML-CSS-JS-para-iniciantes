# Projeto: Calculadora de IMC

## Objetivo

Este projeto consiste em criar uma aplicação interativa que calcula o **Índice de Massa Corporal (IMC)** com base no peso e altura fornecidos pelo usuário. O objetivo é aprender a integrar HTML, CSS e JavaScript em uma aplicação funcional.

---

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

1. `index.html` - Contém a estrutura básica da página.
2. `style.css` - Define o estilo visual da página.
3. `script.js` - Implementa a lógica da calculadora.

---

## Funcionalidades

- Entrada para peso (em kg) e altura (em metros).
- Botão para calcular o IMC.
- Exibição do resultado com a classificação correspondente (Ex: Magreza, Normal, Sobrepeso etc.).
- Validação para garantir que os campos não fiquem vazios ou tenham valores inválidos.

---

## Fórmula do IMC

A fórmula para calcular o IMC é:

```
IMC = Peso / (Altura * Altura)
```

Com base no valor do IMC, utilizamos a seguinte tabela para classificar o resultado:

| IMC (kg/m²)       | Classificação |
| ----------------- | ------------- |
| Menor que 18.5    | Magreza       |
| Entre 18.5 e 24.9 | Normal        |
| Entre 25 e 29.9   | Sobrepeso     |
| Maior que 30      | Obesidade     |

---

## Instruções para Uso

1. Abra o arquivo `index.html` no navegador.
2. Insira seu peso (em kg) e altura (em metros) nos campos indicados.
3. Clique no botão **Calcular IMC**.
4. Veja o resultado exibido na tela com a classificação correspondente.
