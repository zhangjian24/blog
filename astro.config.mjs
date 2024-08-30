import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code"; 
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
  devToolbar: {
    enabled: false
  },
  integrations: [
    expressiveCode({
    themes:["catppuccin-latte","monokai"], 
    plugins: [pluginLineNumbers()]
  }),tailwind(), mdx()],
  markdown: {
		rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'prepend' }],
		],
	},
});