import fs from 'fs';
import path from 'path';

// --- PRODOTTI (Link Fissi e Verificati) ---
const prodotti = [
  {
    title: "Robot Tagliaerba Auto-X",
    category: "Attrezzi",
    // Foto specifica di un robot Husqvarna/simile
    image: "https://images.unsplash.com/photo-1592424036987-17bc26245d8b?auto=format&fit=crop&q=80&w=800",
    desc: "Robot rasaerba di ultima generazione con GPS e controllo app. Mantiene il tuo prato perfetto senza fatica."
  },
  {
    title: "Acero Giapponese Rosso",
    category: "Piante",
    // Foto di foglie rosse acero
    image: "https://images.unsplash.com/photo-1478580007897-3c990264b30c?auto=format&fit=crop&q=80&w=800",
    desc: "Splendido esemplare di Acer Palmatum, ideale per creare punti focali in giardini zen o moderni."
  },
  {
    title: "Set Divani Lounge Esterno",
    category: "Vasi e Arredo",
    // Salotto Rattan
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    desc: "Salotto da giardino in rattan sintetico resistente alle intemperie. Include cuscini idrorepellenti."
  },
  {
    title: "Sacco Terriccio Bio",
    category: "Terricci",
    // Foto di terra/mani
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800",
    desc: "Nutrimento completo a lenta cessione per piante fiorite. 100% biologico."
  },
  {
    title: "Barbecue a Gas Titanium",
    category: "Vasi e Arredo",
    // BBQ
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
    desc: "Stazione di cottura professionale in acciaio inox. 4 bruciatori e piastra laterale."
  },
  {
    title: "Siepe Artificiale Lux",
    category: "Arredo",
    // Muro verde
    image: "https://images.unsplash.com/photo-1530630458144-014709e10016?auto=format&fit=crop&q=80&w=800",
    desc: "Privacy istantanea con questa siepe sintetica ultra-realistica. Resistente ai raggi UV."
  },
  {
    title: "Kit Irrigazione Smart",
    category: "Attrezzi",
    // Irrigatore
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=800",
    desc: "Sistema WiFi per gestire l'acqua del giardino dal telefono. Risparmia fino al 30% di acqua."
  },
  {
    title: "Limone 4 Stagioni",
    category: "Piante",
    // Limoni
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
    desc: "Pianta di limone produttiva tutto l'anno. Già in vaso, ideale per terrazzi."
  },
  {
    title: "Vaso Cemento Moderno",
    category: "Vasi e Arredo",
    // Vaso grigio
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=800",
    desc: "Design minimale in cemento alleggerito, forma cubica. Perfetto per ingressi moderni."
  },
  {
    title: "Forbici Elettriche Pro",
    category: "Attrezzi",
    // Attrezzi
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800",
    desc: "Potatura senza fatica con lame in acciaio giapponese. Batteria a lunga durata inclusa."
  }
];

// --- LAVORI (Link Fissi e Verificati) ---
const lavori = [
  {
    title: "Villa Vista Lago",
    date: "2024-03-15",
    // Villa moderna
    image: "https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?auto=format&fit=crop&q=80&w=800",
    desc: "Riqualificazione completa parco fronte lago con essenze autoctone e muretti a secco."
  },
  {
    title: "Terrazzo Panoramico Milano",
    date: "2024-02-10",
    // Terrazzo Rooftop
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
    desc: "Oasi verde al 15° piano con vasche su misura, irrigazione a scomparsa e illuminazione led."
  },
  {
    title: "Giardino Zen Aziendale",
    date: "2023-11-20",
    // Giardino Zen
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=800",
    desc: "Spazio relax per dipendenti con laghetto, ghiaia rastrellata e aceri giapponesi."
  },
  {
    title: "Resort 5 Stelle Puglia",
    date: "2023-08-05",
    // Resort Piscina
    image: "https://images.unsplash.com/photo-1572085313466-6710de0d7270?auto=format&fit=crop&q=80&w=800",
    desc: "Progettazione paesaggistica dell'area piscina e recupero dell'uliveto secolare esistente."
  },
  {
    title: "Parco Urbano Sostenibile",
    date: "2023-06-12",
    // Parco
    image: "https://images.unsplash.com/photo-1496660662703-99b3874313f8?auto=format&fit=crop&q=80&w=800",
    desc: "Area verde pubblica a bassa manutenzione. Percorsi pedonali drenanti e prato rustico."
  },
  {
    title: "Restauro Giardino Storico",
    date: "2023-05-30",
    // Giardino Formale
    image: "https://images.unsplash.com/photo-1550948537-130a1ce83314?auto=format&fit=crop&q=80&w=800",
    desc: "Recupero filologico di un giardino all'italiana del '700 con siepi di bosso e statue."
  },
  {
    title: "Ingresso Villa Moderna",
    date: "2024-01-15",
    // Ingresso moderno
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
    desc: "Design minimalista con ghiaia bianca, ulivi scultorei e illuminazione scenografica notturna."
  },
  {
    title: "Parete Verde Verticale",
    date: "2023-10-01",
    // Green Wall
    image: "https://images.unsplash.com/photo-1599863261642-429676579c3d?auto=format&fit=crop&q=80&w=800",
    desc: "Installazione di verde verticale stabilizzato per la hall di un prestigioso hotel."
  },
  {
    title: "Bordo Piscina Tropicale",
    date: "2023-07-20",
    // Tropicale
    image: "https://images.unsplash.com/photo-1516248679075-842245cd998d?auto=format&fit=crop&q=80&w=800",
    desc: "Selezione di palme e piante esotiche resistenti al nostro clima per un effetto giungla."
  },
  {
    title: "Orto Rialzato Design",
    date: "2024-04-01",
    // Orto
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9e4e10c?auto=format&fit=crop&q=80&w=800",
    desc: "Vasche in acciaio corten per orto biologico domestico ad alta resa ed estetica curata."
  }
];

// --- FUNZIONI DI SERVIZIO ---
const slugify = text => text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');

function createFiles(dataArray, folderName, isProduct) {
  const targetDir = path.join(process.cwd(), 'src', 'content', folderName);

  if (!fs.existsSync(targetDir)){
      fs.mkdirSync(targetDir, { recursive: true });
  }

  dataArray.forEach(item => {
    const slug = slugify(item.title);
    const fileName = `${slug}.md`;
    const filePath = path.join(targetDir, fileName);

    let fileContent = '';

    if (isProduct) {
      fileContent = `---
title: "${item.title}"
image: "${item.image}"
category: "${item.category}"
description: "${item.desc}"
---
# ${item.title}

Questo è un prodotto di alta qualità selezionato da ProGreen. 
La categoria **${item.category}** offre il meglio sul mercato.

### Caratteristiche principali
* Design ergonomico e moderno
* Materiali di prima scelta
* Garanzia ProGreen inclusa

Ideale per chi cerca l'eccellenza nel proprio giardino.
`;
    } else {
      fileContent = `---
title: "${item.title}"
date: ${item.date}
image: "${item.image}"
description: "${item.desc}"
---
# ${item.title}

Un progetto di cui andiamo molto fieri. Realizzato nel **${new Date(item.date).getFullYear()}**.

### La sfida
Il cliente desiderava trasformare il proprio spazio in qualcosa di unico. "${item.desc}" era l'obiettivo principale.

### La soluzione
Abbiamo utilizzato le migliori tecniche di progettazione per integrare natura e architettura. Il risultato è un ambiente equilibrato e sostenibile.
`;
    }

    fs.writeFileSync(filePath, fileContent);
    console.log(`✅ Creato Correttamente: ${folderName}/${fileName}`);
  });
}

// ESECUZIONE
console.log("🌱 Inizio scrittura dati verificati...");
createFiles(prodotti, 'prodotti', true);
createFiles(lavori, 'portfolio', false);
console.log("🚀 Finito! Riavvia il server per vedere le immagini corrette.");