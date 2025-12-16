import { defineCollection, z } from 'astro:content';

const prodottiCollection = defineCollection({
  type: 'content',
  schema: () => z.object({ // NOTA: ho tolto { image } dalle parentesi qui
    title: z.string(),
    // TRATTAMI COME STRINGA, NON COME IMMAGINE SMART
    image: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
  }),
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: () => z.object({ // Anche qui
    title: z.string(),
    date: z.date(),
    image: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'prodotti': prodottiCollection,
  'portfolio': portfolioCollection,
};