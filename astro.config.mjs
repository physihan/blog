import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";
import vercel from '@astrojs/vercel/serverless';
// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: 'server',
  integrations: [mdx(), sitemap(), tailwind(), solidJs()],
  adapter: vercel({
    analytics: true
  })
});

