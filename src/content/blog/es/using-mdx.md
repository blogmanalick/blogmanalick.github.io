---
title: 'Usando MDX'
description: 'Lorem ipsum dolor sit amet'
pubDate: '01 Jun 2024'
heroImage: '../../../assets/blog-placeholder-5.jpg'
langLinks:
  pt: 'using-mdx'
  en: 'using-mdx'
---

Este tema viene con la integración [@astrojs/mdx](https://docs.astro.build/es/guides/mdx/) instalada y configurada en tu archivo `astro.config.mjs`. Si prefieres no usar MDX, puedes deshabilitar el soporte eliminando la integración de tu archivo de configuración.

## ¿Por qué MDX?

MDX es una variante especial de Markdown que soporta sintaxis JavaScript y JSX embebida. Esto desbloquea la capacidad de [mezclar JavaScript y componentes de UI en el contenido Markdown](https://docs.astro.build/es/guides/markdown-content/#mdx-features) para cosas como gráficos interactivos o alertas.

Si tienes contenido existente escrito en MDX, esta integración debería hacer que la migración a Astro sea muy fácil.

## Ejemplo

Aquí está cómo importar y usar un componente de UI dentro de MDX.  
Cuando abras esta página en el navegador, deberías ver el botón clicable abajo.

```astro
---
import Boton from '../../../components/Boton.astro';
---

<Boton href="#">
	Botón ejemplo
</Boton>
```

## Más Enlaces

- [Documentación de Sintaxis MDX](https://mdxjs.com/docs/what-is-mdx)
- [Documentación de Uso Astro](https://docs.astro.build/es/guides/markdown-content/#mdx-features)
- **Nota:** [Directivas de Cliente](https://docs.astro.build/es/reference/directives-reference/#client-directives) aún son necesarias para crear componentes interactivos. De lo contrario, todos los componentes en tu MDX se renderizarán como HTML estático (sin JavaScript) por defecto.
