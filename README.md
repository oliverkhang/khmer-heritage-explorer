# Khmer Heritage Explorer

# PRODUCT SPEC & UI/UX MASTER PROMPT: KHMER HERITAGE



## 1. PROJECT OVERVIEW & GOAL

Create a world-class, museum-grade digital encyclopedia and cultural discovery platform called **"Khmer Heritage"** (បេតិកភណ្ឌខ្មែរ). 

The platform will serve as an interactive cultural portal and mobile-first experience exploring the history, architecture, arts, sculpture, traditional music, instruments, rituals, language, attire, and mythology of the Khmer civilization.



The core user experience is:

`DISCOVER → EXPLORE → LEARN → DISCOVER SOMETHING RELATED`



---



## 2. DESIGN PHILOSOPHY & AESTHETIC IDENTITY

- **Atmosphere**: Authentic, scholarly, respectful, and timeless — like a modern digital museum or curated archive (reminiscent of UNESCO archives, Google Arts & Culture, or the British Museum, but with a distinctive Khmer cultural soul).

- **Color Palette**:

  - **Primary Base**: Warm stone/sandstone dark canvas (`#1A1715`, `#231F1C`, `#2E2824`) and antique parchment/linen light accents (`#F7F4EE`, `#EDE7DE`).

  - **Accents**: 

    - Ancient Gold / Temple Bronze (`#D4AF37`, `#C59B27`, `#E5C158`)

    - Terracotta / Laterite Brick (`#B85D38`, `#9E472A`)

    - Sacred Lotus / Silk Crimson (`#8E283B`)

    - Deep Mekong / Tonle Sap Indigo (`#1B2E3D`)

- **Typography Pairing**:

  - Headings & Titles: Refined Serif with noble proportions (e.g. *Cinzel*, *Playfair Display*, or *Cormorant Garamond*).

  - Body & Metadata: Clean, legible sans-serif with high readability (e.g. *Plus Jakarta Sans* or *Inter*).

  - Khmer Text Support: Clean rendering for Khmer script (e.g. *Kantumruy Pro* or *Battambang*).

- **Visual Elements**: Subtle ancient Khmer architectural motifs (*Kbach*, lotus petals, sandstone textures, subtle Angkor bas-relief framing, gold hairline dividers). Avoid generic modern tech gradients or flashy neon colors.



---



## 3. CORE APPLICATION SCREENS & LAYOUT HIERARCHY



Build a mobile-first responsive application layout with a bottom navigation bar on mobile and an elegant sidebar/topbar on desktop.



### SCREEN 1: Discovery Hub (Home)

- **Hero Cultural Showcase**: A featured topic of the day (e.g. *Angkor Wat: The Cosmic Temple Mountain* or *The Celestial Dance of Apsara*) with high-resolution imagery, era tag, and an "Explore Journey" action.

- **Pillars of Heritage (Category Grid)**:

  1. **Khmer History** (សម័យកាលប្រវត្តិសាស្ត្រ — Funan, Chenla, Angkor Empire, Post-Angkor)

  2. **Temples & Architecture** (ប្រាសាទ និងស្ថាបត្យកម្ម — Angkor Wat, Bayon, Banteay Srei, Sambor Prei Kuk)

  3. **Arts & Sculpture** (សិល្បៈ និងចម្លាក់ — Apsara, Bas-reliefs, Kbach motifs, Bronze casting)

  4. **Traditional Music & Instruments** (តន្ត្រីបុរាណ — Pinpeat, Mohori, Chapei Dong Veng, Roneat)

  5. **Rituals & Festivals** (ពិធីបុណ្យ និងទំនៀមទម្លាប់ — Pchum Ben, Khmer New Year, Bon Om Touk)

  6. **Script & Literature** (អក្សរសាស្ត្រ — Ancient Epigraphy, Aksar Mul, Reamker epic)

  7. **Traditional Crafts & Textiles** (សិប្បកម្ម និងសម្លៀកបំពាក់ — Silk Hol, Krama, Silverware)

  8. **Cuisine & Agriculture** (ម្ហូបអាហារ និងកសិកម្ម — Tonle Sap heritage, Traditional culinary techniques)

- **Interactive Chronological Timeline**: Interactive scrollable era ribbon (Pre-Angkorian → Early Angkorian → Golden Age / Classic Angkorian → Post-Angkorian → Modern Renaissance).

- **Curated Exploration Trails**: Thematic story collections (e.g. *"The Sacred Mountains of the Gods"*, *"Musical Legends of Chapei"*, *"Guardians of the Temples"*).



### SCREEN 2: Encyclopedia Entry Reader (Deep Dive Article)

*Example Reference Topic: "Angkor Wat"*

- **Header**: High-res cover image, bilingual title (*Angkor Wat / ប្រាសាទអង្គរវត្ត*), era badge (*12th Century CE / King Suryavarman II*), coordinates badge (*Siem Reap Province*).

- **Key Facts Card**: Construction period, presiding deities, architectural style (*Angkor Wat Style*), UNESCO status (1992).

- **Rich Article Sections**:

  - Architectural Layout & Cosmology (The Mount Meru representation, surrounding moat).

  - Bas-Relief Galleries (The Churning of the Ocean of Milk, Battle of Kurukshetra).

  - Modern Preservation & Significance.

- **Audio & Media Gallery**:

  - Image viewer with zoom, caption, author, and license badge (e.g. *Public Domain*, *CC BY-SA 4.0*).

  - Audio snippet player for traditional instruments / ambient temple soundscapes.

- **Academic Citations & Bibliography**:

  - Verified sources drawer (e.g. *George Cœdès, EFEO Archives, APSARA National Authority*).

- **"Explore Related Heritage" (The Relational Web)**:

  - Horizontal cards linking to related topics: *King Suryavarman II*, *Apsara Bas-Reliefs*, *Pinpeat Music of Royal Court*, *Banteay Samre*.



### SCREEN 3: Interactive Visual Map & Heritage Explorer

- Visual coordinate map view representing the temples and heritage sites across Cambodia (Siem Reap, Phnom Kulen, Preah Vihear, Battambang, Sambor Prei Kuk, Phnom Penh).

- Filter by: Era, Architecture Style, Condition, UNESCO Status.

- Tap a monument pin to pop up an informative summary card linking directly to its Encyclopedia Entry.



### SCREEN 4: Traditional Musical Instruments & Audio Archive

- Dedicated visual showcase of instruments (Chapei Dong Veng, Roneat Ek, Tro Ou, Sampho drum, Khloy flute).

- Interactive soundboard: Tap an instrument card to play a sample audio loop, see how it fits into the Pinpeat or Mohori ensemble, and read its origin history.



### SCREEN 5: Cultural Search & Filter

- Real-time search with instant category filters, era tags, and media filters (With Audio, With 3D/Map, With Gallery).

- Empty state with suggested historical searches (*"Apsara"*, *"Bayon Faces"*, *"Reamker"*, *"Pchum Ben"*).



---



## 4. STRICT TECHNICAL DATA CONTRACT (TypeScript Schemas)

Make sure all mock data and component props follow this exact schema structure:



```typescript

export type LocaleCode = 'km' | 'en';



export interface LocalizedString {

  km: string;

  en: string;

}



export type LicenseTier =

  | 'public_domain'

  | 'cc0'

  | 'cc_by'

  | 'cc_by_sa'

  | 'in_house_original'

  | 'direct_permission';



export interface MediaAsset {

  id: string;

  url: string;

  thumbnailUrl?: string;

  type: 'image' | 'audio' | 'video';

  title: LocalizedString;

  description?: LocalizedString;

  creator: string;

  source: string;

  sourceUrl: string;

  license: LicenseTier;

  licenseUrl: string;

  attribution: string;

}



export interface Citation {

  id: string;

  title: string;

  author: string;

  year?: number;

  publisher?: string;

  url?: string;

}



export interface EntryDetail {

  id: string;

  slug: string;

  categoryId: string;

  title: LocalizedString;

  summary: LocalizedString;

  era: string;

  coverMedia: MediaAsset;

  content: {

    sections: Array<{

      id: string;

      heading: LocalizedString;

      body: LocalizedString;

    }>;

  };

  coordinates?: { latitude: number; longitude: number };

  gallery: MediaAsset[];

  relatedEntryIds: string[];

  citations: Citation[];

}

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://khmer-heritage-explorer.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/089842ec-98bb-461c-8337-62b2e757df05).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
