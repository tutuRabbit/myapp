import { defineConfig } from 'umi';

export default defineConfig({
  extraPostCSSPlugins: [
    require('postcss-import'),
    require('tailwindcss')({
      config: './tailwind.config.js',
    }),
    require('postcss-nested'),
  ],
});
