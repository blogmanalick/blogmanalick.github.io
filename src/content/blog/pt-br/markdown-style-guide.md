---
title: 'Guia de Estilo Markdown'
description: 'Aqui está uma amostra de algumas sintaxes básicas de Markdown que podem ser usadas ao escrever conteúdo Markdown no Astro.'
pubDate: '19 Jun 2024'
heroImage: '../../../assets/blog-placeholder-1.jpg'
langLinks:
  en: 'markdown-style-guide'
  es: 'markdown-style-guide'
---

Aqui está uma amostra de algumas sintaxes básicas de Markdown que podem ser usadas ao escrever conteúdo Markdown no Astro.

## Cabeçalhos

Os seguintes elementos HTML `<h1>`—`<h6>` representam seis níveis de cabeçalhos de seção. `<h1>` é o nível mais alto enquanto `<h6>` é o mais baixo.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Parágrafo

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Imagens

### Sintaxe

```markdown
![Alt text](./full/or/relative/path/of/image)
```

### Resultado

![blog placeholder](../../../assets/blog-placeholder-about.jpg)

## Citações

O elemento blockquote representa conteúdo citado de outra fonte, opcionalmente com uma citação que deve estar dentro de um elemento `footer` ou `cite`, e opcionalmente com alterações em linha como anotações e abreviações.

### Citação sem atribuição

#### Sintaxe

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Nota** que você pode usar _sintaxe Markdown_ dentro de uma citação.
```

#### Resultado

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Nota** que você pode usar _sintaxe Markdown_ dentro de uma citação.

### Citação com atribuição

#### Sintaxe

```markdown
> Não se comunique compartilhando memória, compartilhe memória se comunicando.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Resultado

> Não se comunique compartilhando memória, compartilhe memória se comunicando.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: A citação acima foi extraída da [palestra](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike durante o Gopherfest, 18 de novembro de 2015.

## Tabelas

### Sintaxe

```markdown
| Itálico | Negrito   | Código  |
| ------ | --------- | ------- |
| _itálico_ | **negrito** | `código` |
```

### Resultado

| Itálico | Negrito   | Código  |
| ------ | --------- | ------- |
| _itálico_ | **negrito** | `código` |

## Blocos de Código

### Sintaxe

Podemos usar 3 backticks ``` em uma nova linha e escrever o snippet e fechar com 3 backticks em uma nova linha. Para destacar sintaxe específica de linguagem, escreva uma palavra do nome da linguagem após os primeiros 3 backticks, por exemplo: html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Documento HTML5 de Exemplo</title>
  </head>
  <body>
    <p>Teste</p>
  </body>
</html>
```
````

### Resultado

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Documento HTML5 de Exemplo</title>
  </head>
  <body>
    <p>Teste</p>
  </body>
</html>
```

## Tipos de Lista

### Lista Ordenada

#### Sintaxe

```markdown
1. Primeiro item
2. Segundo item
3. Terceiro item
```

#### Resultado

1. Primeiro item
2. Segundo item
3. Terceiro item

### Lista Não Ordenada

#### Sintaxe

```markdown
- Item da lista
- Outro item
- E mais outro item
```

#### Resultado

- Item da lista
- Outro item
- E mais outro item

### Lista Aninhada

#### Sintaxe

```markdown
- Frutas
  - Maçã
  - Laranja
  - Banana
- Laticínios
  - Leite
  - Queijo
```

#### Resultado

- Frutas
  - Maçã
  - Laranja
  - Banana
- Laticínios
  - Leite
  - Queijo

## Outros Elementos — abbr, sub, sup, kbd, mark

### Sintaxe

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> é um formato de imagem bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Pressione <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> para encerrar a sessão.

A maioria dos <mark>salamandras</mark> são noturnos e caçam insetos, vermes e outras pequenas criaturas.
```

### Resultado

<abbr title="Graphics Interchange Format">GIF</abbr> é um formato de imagem bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Pressione <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> para encerrar a sessão.

A maioria dos <mark>salamandras</mark> são noturnos e caçam insetos, vermes e outras pequenas criaturas.

