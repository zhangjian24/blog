import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import rehypeToc from '@jsdevtools/rehype-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), mdx()],
  markdown: {
		rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'prepend' }],
			[rehypeToc, { headings: ['h1','h2', 'h3'] }],
		],
	},
});