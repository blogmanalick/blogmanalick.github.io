---
title: 'Usando MDX'
description: 'Lorem ipsum dolor sit amet'
pubDate: '01 Jun 2024'
heroImage: '../../../assets/blog-placeholder-5.jpg'
langLinks:
  en: 'using-mdx'
  es: 'using-mdx'
---

Este tema vem com a integração [@astrojs/mdx](https://docs.astro.build/pt-br/guides/mdx/) instalada e configurada no seu arquivo `astro.config.mjs`. Se você preferir não usar MDX, pode desabilitar o suporte removendo a integração do seu arquivo de configuração.

## Por que MDX?

MDX é uma variante especial de Markdown que suporta sintaxe JavaScript e JSX embutida. Isso desbloqueia a capacidade de [misturar JavaScript e componentes de UI no conteúdo Markdown](https://docs.astro.build/pt-br/guides/markdown-content/#mdx-features) para coisas como gráficos interativos ou alertas.

Se você tem conteúdo existente escrito em MDX, esta integração deve tornar a migração para Astro muito fácil.

## Exemplo

Aqui está como você importa e usa um componente de UI dentro de MDX.  
Quando você abrir esta página no navegador, você deve ver o botão clicável abaixo.

```astro
---
import Botao from '../../../components/Botao.astro';
---

<Botao href="#">
	Botão exemplo
</Botao>
```

## Mais Links

- [Documentação de Sintaxe MDX](https://mdxjs.com/docs/what-is-mdx)
- [Documentação de Uso Astro](https://docs.astro.build/pt-br/guides/markdown-content/#mdx-features)
- **Nota:** [Diretivas de Cliente](https://docs.astro.build/pt-br/reference/directives-reference/#client-directives) ainda são necessárias para criar componentes interativos. Caso contrário, todos os componentes no seu MDX serão renderizados como HTML estático (sem JavaScript) por padrão.
