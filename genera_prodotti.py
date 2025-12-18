import os

# 1. LISTINO PREZZI (Database Completo)
# La chiave deve assomigliare al nome del file
listino_prezzi = {
    # Robot
    "Automower 305": "1.299,00 €",
    "Automower 310 Mark II": "1.699,00 €",
    "Automower 310": "1.699,00 €", # Caso alternativo
    "Automower 405X": "1.999,00 €",
    "Automower 415X": "2.499,00 €",
    
    # Prati
    "Prato Sintetico Luxury 40mm": "24,90 € / mq",
    "Prato Sintetico Luxury": "24,90 € / mq",
    "Prato Sintetico Comfort 35mm": "19,50 € / mq",
    "Prato Sintetico Comfort": "19,50 € / mq",
    "Prato Sintetico Basic 20mm": "12,00 € / mq",
    "Prato Sintetico Basic": "12,00 € / mq",
    "Prato Sintetico Pet Friendly": "22,00 € / mq",
    
    # Concimi
    "Concime Primavera Verde": "32,00 €",
    "Concime Autunnale Slow": "38,00 €",
    "Concime Antimuschio Plus": "29,00 €",
    "Concime Antimuschio": "29,00 €",
    "Ferro Liquido Professionale": "15,00 €",
    "Ferro Liquido": "15,00 €",

    # Semi
    "Mix Prato Inglese": "18,00 €",
    "Semi Rigenera Rapido": "22,00 €",
    "Mix Ombra e Sole": "20,00 €",
    "Sementi Rustico Forte": "17,50 €",

    # Irrigazione
    "Kit Ala Gocciolante": "45,00 €",
    "Centralina Bluetooth": "65,00 €",
    "Tubo Polietilene": "28,00 €",
    "Irrigatore Pop up": "9,00 €"
}

IMG_FOLDER = 'public/prodotti'
OUT_FOLDER = 'src/content/prodotti'

def trova_prezzo(titolo_prodotto):
    # 1. Cerca corrispondenza esatta
    if titolo_prodotto in listino_prezzi:
        return listino_prezzi[titolo_prodotto]
    
    # 2. Cerca corrispondenza "morbida" (ignora maiuscole)
    titolo_lower = titolo_prodotto.lower()
    for key, val in listino_prezzi.items():
        if key.lower() == titolo_lower:
            return val
            
    # 3. Cerca se una parte del nome è contenuta
    for key, val in listino_prezzi.items():
        if key.lower() in titolo_lower or titolo_lower in key.lower():
            return val
            
    return "Su richiesta" # Se proprio non lo trova

def assegna_categoria(nome_file):
    n = nome_file.lower()
    if 'automower' in n or 'robot' in n: return "Robot Tagliaerba"
    if 'sintetico' in n or 'prato' in n: return "Prati Sintetici"
    if 'concime' in n or 'ferro' in n: return "Concimi Professionale"
    if 'semi' in n or 'mix' in n or 'sementi' in n: return "Sementi Selezionate"
    if 'tubo' in n or 'irrigatore' in n or 'ala' in n or 'centralina' in n: return "Tubazioni & Irrigazione"
    return "Altro"

if not os.path.exists(OUT_FOLDER):
    os.makedirs(OUT_FOLDER)

files = [f for f in os.listdir(IMG_FOLDER) if f.lower().endswith(('.webp', '.jpg', '.jpeg', '.png'))]

print(f"--- Inizio Generazione Prodotti ---")

for f in files:
    nome_senza_ext = os.path.splitext(f)[0]
    # Sostituisce underscore con spazi
    titolo = nome_senza_ext.replace('_', ' ')
    
    # Trova il prezzo con la nuova funzione intelligente
    prezzo = trova_prezzo(titolo)
    
    slug = titolo.lower().replace(' ', '-')
    categoria = assegna_categoria(nome_senza_ext)
    
    # Debug nel terminale per vedere cosa sta assegnando
    print(f"File: {f} -> Titolo: '{titolo}' -> Prezzo: {prezzo}")

    content = f"""---
title: "{titolo}"
category: "{categoria}"
image: "/prodotti/{f}"
price: "{prezzo}"
description: "Scopri la qualità professionale di {titolo}. Prodotto selezionato da ProGreen Solution per garantire la massima efficienza nella cura del tuo verde."
---

Il prodotto **{titolo}** appartiene alla nostra selezione di **{categoria}**. 
Contattaci per una consulenza tecnica o per verificare la disponibilità in showroom a Malnate.
"""
    
    with open(f"{OUT_FOLDER}/{slug}.md", "w", encoding="utf-8") as out:
        out.write(content)

print(f"--- Fatto! Controlla i prezzi sopra ---")