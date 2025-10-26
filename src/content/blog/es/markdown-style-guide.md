---
title: 'Guía de Estilo Markdown'
description: 'Aquí hay una muestra de algunas sintaxis básicas de Markdown que se pueden usar al escribir contenido Markdown en Astro.'
pubDate: '19 Jun 2024'
heroImage: '../../../assets/blog-placeholder-1.jpg'
langLinks:
  pt: 'markdown-style-guide'
  en: 'markdown-style-guide'
---

Aquí hay una muestra de algunas sintaxis básicas de Markdown que se pueden usar al escribir contenido Markdown en Astro.

## Encabezados

Los siguientes elementos HTML `<h1>`—`<h6>` representan seis niveles de encabezados de sección. `<h1>` es el nivel más alto mientras que `<h6>` es el más bajo.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Párrafo

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Imágenes

### Sintaxis

```markdown
![Alt text](./full/or/relative/path/of/image)
```

### Resultado

![blog placeholder](../../../assets/blog-placeholder-about.jpg)

## Citas

El elemento blockquote representa contenido citado de otra fuente, opcionalmente con una cita que debe estar dentro de un elemento `footer` o `cite`, y opcionalmente con cambios en línea como anotaciones y abreviaciones.

### Cita sin atribución

#### Sintaxis

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Nota** que puedes usar _sintaxis Markdown_ dentro de una cita.
```

#### Resultado

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Nota** que puedes usar _sintaxis Markdown_ dentro de una cita.

### Cita con atribución

#### Sintaxis

```markdown
> No te comuniques compartiendo memoria, comparte memoria comunicándote.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Resultado

> No te comuniques compartiendo memoria, comparte memoria comunicándote.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: La cita anterior fue extraída de la [charla](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike durante Gopherfest, 18 de noviembre de 2015.

## Tablas

### Sintaxis

```markdown
| Cursiva | Negrita   | Código  |
| ------- | --------- | ------- |
| _cursiva_ | **negrita** | `código` |
```

### Resultado

| Cursiva | Negrita   | Código  |
| ------- | --------- | ------- |
| _cursiva_ | **negrita** | `código` |

## Bloques de Código

### Sintaxis

Podemos usar 3 backticks ``` en una nueva línea y escribir el snippet y cerrar con 3 backticks en una nueva línea. Para resaltar sintaxis específica de lenguaje, escribe una palabra del nombre del lenguaje después de los primeros 3 backticks, por ejemplo: html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Documento HTML5 de Ejemplo</title>
  </head>
  <body>
    <p>Prueba</p>
  </body>
</html>
```
````

### Resultado

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Documento HTML5 de Ejemplo</title>
  </head>
  <body>
    <p>Prueba</p>
  </body>
</html>
```

## Tipos de Lista

### Lista Ordenada

#### Sintaxis

```markdown
1. Primer elemento
2. Segundo elemento
3. Tercer elemento
```

#### Resultado

1. Primer elemento
2. Segundo elemento
3. Tercer elemento

### Lista No Ordenada

#### Sintaxis

```markdown
- Elemento de lista
- Otro elemento
- Y otro elemento
```

#### Resultado

- Elemento de lista
- Otro elemento
- Y otro elemento

### Lista Anidada

#### Sintaxis

```markdown
- Frutas
  - Manzana
  - Naranja
  - Plátano
- Lácteos
  - Leche
  - Queso
```

#### Resultado

- Frutas
  - Manzana
  - Naranja
  - Plátano
- Lácteos
  - Leche
  - Queso

## Otros Elementos — abbr, sub, sup, kbd, mark

### Sintaxis

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> es un formato de imagen bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Presiona <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> para terminar la sesión.

La mayoría de las <mark>salamandras</mark> son nocturnas y cazan insectos, gusanos y otras pequeñas criaturas.
```

### Resultado

<abbr title="Graphics Interchange Format">GIF</abbr> es un formato de imagen bitmap.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Presiona <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> para terminar la sesión.

La mayoría de las <mark>salamandras</mark> son nocturnas y cazan insectos, gusanos y otras pequeñas criaturas.

