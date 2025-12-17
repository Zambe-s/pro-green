import { defineCollection, z } from 'astro:content';

// 1. DEFINIZIONE COLLEZIONE PORTFOLIO (LAVORI)
const portfolioCollection = defineCollection({
	type: 'content', 
	schema: z.object({
		title: z.string(),           // Titolo del lavoro (Es: "Giardino Villa Rossi")
		description: z.string(),     // Descrizione breve per le card
		image: z.string(),           // Immagine di copertina (Es: "/lavoro1.jpg")
		date: z.date(),              // Data del lavoro (per ordinarli)
        
        // NUOVI CAMPI FACOLTATIVI
        location: z.string().optional(),         // Es: "Malnate", "Varese"
        gallery: z.array(z.string()).optional(), // Lista di altre foto: ["/foto2.jpg", "/foto3.jpg"]
        video: z.string().optional(),            // Link YouTube embed (facoltativo)
	}),
});

// 2. DEFINIZIONE COLLEZIONE PRODOTTI (CATALOGO)
const prodottiCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),           // Nome prodotto (Es: "Robot Automower 305")
        price: z.string().optional(),// Prezzo (Es: "€ 1.200" o "Contattaci")
        description: z.string(),     // Descrizione del prodotto
        category: z.string(),        // Categoria (Es: "Robot", "Attrezzi", "Concimi")
        image: z.string(),           // Foto prodotto
    }),
});

// 3. ESPORTAZIONE DELLE COLLEZIONI
// Importante: le chiavi 'portfolio' e 'prodotti' devono corrispondere 
// ai nomi delle cartelle dentro src/content/
export const collections = {
	'portfolio': portfolioCollection,
    'prodotti': prodottiCollection,
};