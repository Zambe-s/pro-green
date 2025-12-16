import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // AGGIUNGI QUESTA RIGA: Metti il link del tuo sito online (quello di Netlify)
  // Esempio: 'https://progreen-solution-malnate.netlify.app'
  site: 'https://pro-green.netlify.app', 

  integrations: [tailwind(), sitemap()],
});