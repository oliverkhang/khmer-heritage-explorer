import angkorWat from "@/assets/angkor-wat.jpg";
import apsara from "@/assets/apsara.jpg";
import bayon from "@/assets/bayon.jpg";
import banteaySrei from "@/assets/banteay-srei.jpg";
import instrumentsImg from "@/assets/instruments.jpg";
import silk from "@/assets/silk.jpg";
import type {
  Category,
  EntryDetail,
  EraBand,
  HeritageSite,
  Instrument,
  MediaAsset,
  Trail,
} from "./types";

export const IMAGES = {
  angkorWat,
  apsara,
  bayon,
  banteaySrei,
  instruments: instrumentsImg,
  silk,
};

const media = (
  id: string,
  url: string,
  en: string,
  km: string,
  creator: string,
): MediaAsset => ({
  id,
  url,
  thumbnailUrl: url,
  type: "image",
  title: { en, km },
  creator,
  source: "Khmer Heritage Archive",
  sourceUrl: "https://khmerheritage.example/archive",
  license: "cc_by_sa",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  attribution: `${creator} — Khmer Heritage Archive, CC BY-SA 4.0`,
});

export const categories: Category[] = [
  {
    id: "history",
    slug: "history",
    title: { en: "Khmer History", km: "សម័យកាលប្រវត្តិសាស្ត្រ" },
    blurb: { en: "Funan · Chenla · Angkor · Post-Angkor", km: "ហ្វូណន ចេនឡា អង្គរ" },
    count: 42,
  },
  {
    id: "temples",
    slug: "temples",
    title: { en: "Temples & Architecture", km: "ប្រាសាទ និងស្ថាបត្យកម្ម" },
    blurb: { en: "Angkor Wat · Bayon · Banteay Srei", km: "អង្គរវត្ត បាយ័ន បន្ទាយស្រី" },
    count: 128,
  },
  {
    id: "arts",
    slug: "arts",
    title: { en: "Arts & Sculpture", km: "សិល្បៈ និងចម្លាក់" },
    blurb: { en: "Apsara · Bas-reliefs · Kbach · Bronze", km: "អប្សរា ចម្លាក់ ក្បាច់" },
    count: 87,
  },
  {
    id: "music",
    slug: "music",
    title: { en: "Music & Instruments", km: "តន្ត្រីបុរាណ" },
    blurb: { en: "Pinpeat · Mohori · Chapei · Roneat", km: "ពិណពាទ្យ មហោរី ចាប៉ី" },
    count: 34,
  },
  {
    id: "rituals",
    slug: "rituals",
    title: { en: "Rituals & Festivals", km: "ពិធីបុណ្យ និងទំនៀមទម្លាប់" },
    blurb: { en: "Pchum Ben · Khmer New Year · Bon Om Touk", km: "ភ្ជុំបិណ្ឌ ចូលឆ្នាំ" },
    count: 29,
  },
  {
    id: "script",
    slug: "script",
    title: { en: "Script & Literature", km: "អក្សរសាស្ត្រ" },
    blurb: { en: "Epigraphy · Aksar Mul · Reamker", km: "សិលាចារឹក អក្សរមូល រាមកេរ្តិ៍" },
    count: 45,
  },
  {
    id: "crafts",
    slug: "crafts",
    title: { en: "Crafts & Textiles", km: "សិប្បកម្ម និងសម្លៀកបំពាក់" },
    blurb: { en: "Silk Hol · Krama · Silverware", km: "សូត្រហូល ក្រមា ប្រាក់" },
    count: 51,
  },
  {
    id: "cuisine",
    slug: "cuisine",
    title: { en: "Cuisine & Agriculture", km: "ម្ហូបអាហារ និងកសិកម្ម" },
    blurb: { en: "Tonle Sap heritage · Culinary technique", km: "ទន្លេសាប ម្ហូបបុរាណ" },
    count: 38,
  },
];

export const eras: EraBand[] = [
  {
    id: "pre",
    label: { en: "Pre-Angkorian", km: "មុនសម័យអង្គរ" },
    range: "1st – 8th c. CE",
    note: { en: "Funan and Chenla polities, Sambor Prei Kuk brick towers.", km: "ហ្វូណន និងចេនឡា" },
  },
  {
    id: "early",
    label: { en: "Early Angkorian", km: "អង្គរដើម" },
    range: "802 – 1000 CE",
    note: { en: "Jayavarman II founds the devaraja cult on Phnom Kulen.", km: "ជ័យវរ្ម័នទី២ ភ្នំគូលេន" },
  },
  {
    id: "golden",
    label: { en: "Classical Golden Age", km: "យុគមាស" },
    range: "1000 – 1220 CE",
    note: { en: "Angkor Wat, Bayon and the empire at its widest reach.", km: "អង្គរវត្ត និងបាយ័ន" },
  },
  {
    id: "post",
    label: { en: "Post-Angkorian", km: "ក្រោយសម័យអង្គរ" },
    range: "1431 – 1863",
    note: { en: "Capitals move to Longvek and Oudong; Theravada ascendancy.", km: "លង្វែក និងឧដុង្គ" },
  },
  {
    id: "modern",
    label: { en: "Modern Renaissance", km: "ការរស់ឡើងវិញ" },
    range: "1953 – today",
    note: { en: "Revival of classical dance, epigraphy and conservation.", km: "ការស្តារវប្បធម៌" },
  },
];

export const trails: Trail[] = [
  {
    id: "t1",
    title: { en: "The Sacred Mountains of the Gods", km: "ភ្នំពិសិដ្ឋនៃទេពនិករ" },
    stops: 6,
    blurb: { en: "Temple-mountains from Phnom Kulen to Phnom Bakheng.", km: "ពីភ្នំគូលេនដល់ភ្នំបាខែង" },
    coverUrl: angkorWat,
  },
  {
    id: "t2",
    title: { en: "Musical Legends of Chapei", km: "រឿងព្រេងចាប៉ីដងវែង" },
    stops: 4,
    blurb: { en: "The oral poets who carried memory through catastrophe.", km: "អ្នកចម្រៀងបុរាណ" },
    coverUrl: instrumentsImg,
  },
  {
    id: "t3",
    title: { en: "Guardians of the Temples", km: "អ្នកយាមប្រាសាទ" },
    stops: 5,
    blurb: { en: "Naga, Garuda, Dvarapala and the lions of the causeway.", km: "នាគ គ្រុឌ ទ្វារបាល" },
    coverUrl: bayon,
  },
];

export const entries: EntryDetail[] = [
  {
    id: "e-angkor-wat",
    slug: "angkor-wat",
    categoryId: "temples",
    title: { en: "Angkor Wat", km: "ប្រាសាទអង្គរវត្ត" },
    summary: {
      en: "The largest religious monument on earth, raised by Suryavarman II as a terrestrial model of Mount Meru and the funerary temple of a god-king.",
      km: "សំណង់សាសនាធំបំផុតលើពិភពលោក សាងឡើងដោយព្រះបាទសូរ្យវរ្ម័នទី២។",
    },
    era: "12th Century CE · King Suryavarman II",
    coverMedia: media("m-aw", angkorWat, "Angkor Wat at dawn", "អង្គរវត្តពេលព្រឹក", "Khmer Heritage Archive"),
    coordinates: { latitude: 13.4125, longitude: 103.867 },
    content: {
      sections: [
        {
          id: "s1",
          heading: { en: "Architectural Layout & Cosmology", km: "ប្លង់ស្ថាបត្យកម្ម និងចក្រវាឡ" },
          body: {
            en: "The temple is a cosmogram in sandstone. Five quincunx towers stand for the peaks of Mount Meru, the enclosing galleries for the mountain ranges at the edge of the world, and the 190-metre moat for the cosmic ocean. Unusually, the complex opens to the west — the direction of Vishnu and of death — supporting the reading of Angkor Wat as Suryavarman II's mortuary temple. The processional causeway compresses distance so that the towers appear to rise as the pilgrim advances, an optical liturgy rehearsed over some 350 metres.",
            km: "ប្រាសាទនេះជាគំរូនៃភ្នំព្រះសុមេរុ ដែលមានប្រាសាទប្រាំ និងកសិណទឹកជុំវិញ តំណាងឲ្យសមុទ្រចក្រវាឡ។",
          },
        },
        {
          id: "s2",
          heading: { en: "The Bas-Relief Galleries", km: "វិចិត្រសាលចម្លាក់" },
          body: {
            en: "Nearly 600 metres of continuous narrative relief wrap the third enclosure. The southern gallery shows Suryavarman II holding court, the only near-contemporary portrait of the founder. The eastern gallery carries the Churning of the Ocean of Milk: 88 asuras and 92 devas hauling the naga Vasuki around Mount Mandara for a thousand years to win amrita, while apsaras spin into being from the froth. The western gallery renders the Battle of Kurukshetra from the Mahabharata in colliding registers of chariots and infantry.",
            km: "ចម្លាក់ប្រវែងជិត ៦០០ ម៉ែត្រ រួមមានការកូរសមុទ្រទឹកដោះ និងសមរភូមិកុរុក្សេត្រ។",
          },
        },
        {
          id: "s3",
          heading: { en: "Preservation & Significance", km: "ការអភិរក្ស និងសារៈសំខាន់" },
          body: {
            en: "Angkor Wat was never abandoned: Theravada monks maintained it continuously after the Angkorian court moved south. Inscribed by UNESCO in 1992 and removed from the List of World Heritage in Danger in 2004, the site is now managed by the APSARA National Authority with anastylosis programmes on the western causeway and micro-drainage work against monsoon undercutting. The silhouette has appeared on every Cambodian flag since 1863 — the only building on any national flag in the world.",
            km: "ត្រូវបានចុះបញ្ជីជាបេតិកភណ្ឌពិភពលោកក្នុងឆ្នាំ ១៩៩២ និងគ្រប់គ្រងដោយអាជ្ញាធរជាតិអប្សរា។",
          },
        },
      ],
    },
    gallery: [
      media("g1", angkorWat, "Western causeway", "ផ្លូវលំខាងលិច", "Khmer Heritage Archive"),
      media("g2", apsara, "Apsara relief detail", "ចម្លាក់អប្សរា", "EFEO Archives"),
      media("g3", banteaySrei, "Comparative lintel carving", "ចម្លាក់ធរណី", "APSARA Authority"),
    ],
    relatedEntryIds: ["e-apsara", "e-bayon", "e-pinpeat", "e-banteay-srei"],
    citations: [
      { id: "c1", title: "Angkor and the Khmer Civilization", author: "Michael D. Coe", year: 2003, publisher: "Thames & Hudson" },
      { id: "c2", title: "Inscriptions du Cambodge, Vol. I–VIII", author: "George Cœdès", year: 1937, publisher: "EFEO" },
      { id: "c3", title: "Angkor Site Conservation Reports", author: "APSARA National Authority", year: 2019 },
    ],
  },
  {
    id: "e-apsara",
    slug: "apsara",
    categoryId: "arts",
    title: { en: "Apsara Bas-Reliefs", km: "ចម្លាក់អប្សរា" },
    summary: {
      en: "More than 1,800 celestial dancers carved into Angkor Wat alone, each with distinct coiffure, jewellery and gesture — a sculptural census of Angkorian courtly style.",
      km: "នាងអប្សរាជាង ១,៨០០ រូប ឆ្លាក់នៅអង្គរវត្ត ដែលនីមួយៗមានម៉ូតសក់ខុសៗគ្នា។",
    },
    era: "10th – 13th Century CE",
    coverMedia: media("m-ap", apsara, "Apsara relief", "ចម្លាក់អប្សរា", "EFEO Archives"),
    content: {
      sections: [
        {
          id: "s1",
          heading: { en: "Born from the Ocean of Milk", km: "កំណើតពីសមុទ្រទឹកដោះ" },
          body: {
            en: "In the churning myth the apsaras rise from the agitated sea as the embodiment of grace itself. On temple walls they occupy the liminal zone between the terrestrial narrative registers and the divine towers above, functioning as a threshold population.",
            km: "អប្សរាកើតចេញពីការកូរសមុទ្រទឹកដោះ ជានិមិត្តរូបនៃភាពទន់ភ្លន់។",
          },
        },
        {
          id: "s2",
          heading: { en: "Gesture and Revival", km: "កាយវិការ និងការស្តារឡើងវិញ" },
          body: {
            en: "Queen Sisowath Kossamak reconstructed the Royal Ballet's Apsara dance in the 1960s directly from these reliefs, reading hand positions (kbach) off sandstone. The 4,500 hand-and-body positions of classical Khmer dance remain anchored to this stone corpus.",
            km: "របាំអប្សរាត្រូវបានស្តារឡើងវិញដោយព្រះមហាក្សត្រិយានី ស៊ីសុវត្ថិ កុសុមៈ ដោយផ្អែកលើចម្លាក់ទាំងនេះ។",
          },
        },
      ],
    },
    gallery: [media("g4", apsara, "Coiffure typology", "ម៉ូតសក់", "EFEO Archives")],
    relatedEntryIds: ["e-angkor-wat", "e-pinpeat", "e-silk-hol"],
    citations: [
      { id: "c4", title: "Khmer Costumes and Ornaments after the Devata of Angkor Wat", author: "Sappho Marchal", year: 1927 },
    ],
  },
  {
    id: "e-bayon",
    slug: "bayon",
    categoryId: "temples",
    title: { en: "The Bayon", km: "ប្រាសាទបាយ័ន" },
    summary: {
      en: "Jayavarman VII's state temple at the exact centre of Angkor Thom, crowned by 216 serene faces gazing along the cardinal directions.",
      km: "ប្រាសាទរដ្ឋរបស់ព្រះបាទជ័យវរ្ម័នទី៧ មានព្រះភ័ក្រ្ត ២១៦ ។",
    },
    era: "Late 12th – Early 13th Century CE",
    coverMedia: media("m-by", bayon, "Face towers of the Bayon", "ព្រះភ័ក្រ្តបាយ័ន", "Khmer Heritage Archive"),
    coordinates: { latitude: 13.4413, longitude: 103.8586 },
    content: {
      sections: [
        {
          id: "s1",
          heading: { en: "The Face Towers", km: "ប្រាង្គព្រះភ័ក្រ្ត" },
          body: {
            en: "Scholars remain divided on whether the faces depict Avalokiteshvara, Brahma, or an idealised Jayavarman VII. The likeliest reading is deliberate ambiguity: a Mahayana Buddhist sovereign presenting compassion and kingship as one continuous surface.",
            km: "អ្នកស្រាវជ្រាវនៅតែពិភាក្សាថា ព្រះភ័ក្រ្តទាំងនោះជាព្រះអវលោកិតេស្វរៈ ឬព្រះមហាក្សត្រ។",
          },
        },
        {
          id: "s2",
          heading: { en: "Reliefs of Everyday Life", km: "ចម្លាក់ជីវភាពប្រចាំថ្ងៃ" },
          body: {
            en: "Unlike Angkor Wat's mythic programme, the Bayon's outer gallery documents markets, cockfights, childbirth, fishing on the Tonle Sap and the naval battle against the Cham — the richest visual record of Angkorian daily life that survives.",
            km: "ចម្លាក់ខាងក្រៅបង្ហាញពីជីវភាពប្រជាជន ផ្សារ ការនេសាទ និងសង្គ្រាមជាមួយចាម។",
          },
        },
      ],
    },
    gallery: [media("g5", bayon, "South-east face tower", "ប្រាង្គទិសអាគ្នេយ៍", "Khmer Heritage Archive")],
    relatedEntryIds: ["e-angkor-wat", "e-apsara"],
    citations: [{ id: "c5", title: "The Bayon: New Perspectives", author: "Joyce Clark (ed.)", year: 2007, publisher: "River Books" }],
  },
  {
    id: "e-banteay-srei",
    slug: "banteay-srei",
    categoryId: "temples",
    title: { en: "Banteay Srei", km: "ប្រាសាទបន្ទាយស្រី" },
    summary: {
      en: "A miniature 10th-century sanctuary of rose sandstone, carved with a density and crispness unmatched anywhere in Khmer art.",
      km: "ប្រាសាទតូចធ្វើពីថ្មភក់ពណ៌ផ្កាឈូក ដែលមានចម្លាក់ល្អិតល្អន់បំផុត។",
    },
    era: "967 CE · Consecrated under Rajendravarman II",
    coverMedia: media("m-bs", banteaySrei, "Banteay Srei sanctuary", "ប្រាសាទបន្ទាយស្រី", "APSARA Authority"),
    coordinates: { latitude: 13.5987, longitude: 103.9633 },
    content: {
      sections: [
        {
          id: "s1",
          heading: { en: "A Temple Not Built by a King", km: "ប្រាសាទដែលមិនសាងដោយស្តេច" },
          body: {
            en: "Banteay Srei was founded by Yajnavaraha, a brahmin counsellor and royal tutor. Its scale is domestic — doorways barely 1.3 metres high — yet the carving quality suggests specialist ateliers working with quartz-hard sandstone and metal tools.",
            km: "សាងឡើងដោយយជ្ញវរាហៈ ជាបុរោហិត មិនមែនដោយស្តេចទេ។",
          },
        },
      ],
    },
    gallery: [media("g6", banteaySrei, "Pediment carving", "ចម្លាក់ហោជាង", "APSARA Authority")],
    relatedEntryIds: ["e-angkor-wat", "e-bayon"],
    citations: [{ id: "c6", title: "Le temple d'Içvarapura", author: "Louis Finot & Henri Parmentier", year: 1926, publisher: "EFEO" }],
  },
  {
    id: "e-pinpeat",
    slug: "pinpeat",
    categoryId: "music",
    title: { en: "Pinpeat Ensemble", km: "វង់ភ្លេងពិណពាទ្យ" },
    summary: {
      en: "The ceremonial orchestra of the royal court and the pagoda, whose instrument line-up is legible on Angkorian reliefs a thousand years old.",
      km: "វង់ភ្លេងសម្រាប់ព្រះរាជពិធី និងវត្តអារាម ដែលមានតាំងពីសម័យអង្គរ។",
    },
    era: "Angkorian – Present",
    coverMedia: media("m-pp", instrumentsImg, "Pinpeat instruments", "ឧបករណ៍ពិណពាទ្យ", "Khmer Heritage Archive"),
    content: {
      sections: [
        {
          id: "s1",
          heading: { en: "Instrumentation", km: "ឧបករណ៍" },
          body: {
            en: "Roneat ek and roneat thung (xylophones), kong vong toch and thom (gong circles), sralai (quadruple-reed oboe), sampho and skor thom (drums), and chhing (finger cymbals) which hold the colotomic cycle. Nothing in the ensemble plays a chord; each line paraphrases a single skeletal melody at its own density — a heterophony rather than harmony.",
            km: "រនាតឯក រនាតធុង គងវង់ ស្រឡៃ សំភោរ ស្គរធំ និងឈិង។",
          },
        },
        {
          id: "s2",
          heading: { en: "Survival", km: "ការរស់រានមានជីវិត" },
          body: {
            en: "An estimated 80–90% of Cambodia's professional musicians died between 1975 and 1979. The Pinpeat repertoire survives because a handful of masters reconstructed it from memory in the 1980s, teaching orally in refugee camps and reopened conservatories.",
            km: "តន្ត្រីករជាច្រើនបានស្លាប់ក្នុងរបបខ្មែរក្រហម ប៉ុន្តែគ្រូបុរាណបានស្តារឡើងវិញពីការចងចាំ។",
          },
        },
      ],
    },
    gallery: [media("g7", instrumentsImg, "Chapei and roneat", "ចាប៉ី និងរនាត", "Khmer Heritage Archive")],
    relatedEntryIds: ["e-angkor-wat", "e-apsara"],
    citations: [{ id: "c7", title: "Khmer Music in Cambodia and Abroad", author: "Sam-Ang Sam", year: 2008 }],
  },
  {
    id: "e-silk-hol",
    slug: "silk-hol",
    categoryId: "crafts",
    title: { en: "Sampot Hol Silk", km: "សំពត់ហូល" },
    summary: {
      en: "Cambodian weft ikat, in which the thread is dyed before weaving so the pattern emerges only as the cloth is made.",
      km: "សូត្រហូល ដែលជ្រលក់អំបោះមុនត្បាញ ធ្វើឲ្យលំនាំលេចឡើងពេលត្បាញ។",
    },
    era: "Pre-Angkorian – Present",
    coverMedia: media("m-sh", silk, "Golden silk weave", "សូត្រមាស", "Khmer Heritage Archive"),
    content: {
      sections: [
        {
          id: "s1",
          heading: { en: "Golden Silk and Natural Dye", km: "សូត្រមាស និងថ្នាំជ្រលក់ធម្មជាតិ" },
          body: {
            en: "Cambodian golden silk comes from the indigenous Bombyx mori strain fed on local mulberry, giving a warm yellow filament. Dyes come from prohut bark (yellow), lac insect (red), indigo, and ebony fruit (black), often layered across five or more tie-and-dye passes.",
            km: "សូត្រពណ៌មាសមកពីមេអំបៅក្នុងស្រុក ហើយថ្នាំជ្រលក់មកពីសំបកឈើ និងត្រយោង។",
          },
        },
      ],
    },
    gallery: [media("g8", silk, "Hol weave detail", "លម្អិតសូត្រហូល", "Khmer Heritage Archive")],
    relatedEntryIds: ["e-apsara", "e-pinpeat"],
    citations: [{ id: "c8", title: "Textiles of Cambodia", author: "Gillian Green", year: 2003 }],
  },
];

export const entryBySlug = (slug: string) => entries.find((e) => e.slug === slug);
export const entryById = (id: string) => entries.find((e) => e.id === id);

export const instruments: Instrument[] = [
  {
    id: "i1",
    name: { en: "Chapei Dong Veng", km: "ចាប៉ីដងវែង" },
    ensemble: "Ayai",
    family: "Long-necked lute",
    origin: { en: "A two-string fretted lute accompanying improvised sung poetry; UNESCO urgent-safeguarding list, 2016.", km: "ពិណខ្សែពីរ សម្រាប់ចម្រៀងកាព្យ។" },
    toneHz: [146.83, 196, 220, 293.66],
  },
  {
    id: "i2",
    name: { en: "Roneat Ek", km: "រនាតឯក" },
    ensemble: "Pinpeat",
    family: "Bamboo xylophone",
    origin: { en: "Leading xylophone of the Pinpeat, 21 bars in a boat-shaped resonator, played in octaves.", km: "រនាតនាំមុខក្នុងវង់ពិណពាទ្យ មាន ២១ ដុំ។" },
    toneHz: [523.25, 587.33, 659.25, 783.99],
  },
  {
    id: "i3",
    name: { en: "Tro Ou", km: "ទ្រអ៊ូ" },
    ensemble: "Mohori",
    family: "Bowed spike fiddle",
    origin: { en: "Coconut-shell fiddle with snakeskin face, the alto voice of the Mohori ensemble.", km: "ទ្រធ្វើពីអំបែងដូង មានស្បែកពស់។" },
    toneHz: [196, 261.63, 293.66],
  },
  {
    id: "i4",
    name: { en: "Sampho", km: "សំភោរ" },
    ensemble: "Pinpeat",
    family: "Barrel drum",
    origin: { en: "Two-headed drum that leads the ensemble and signals tempo changes; treated with ritual respect.", km: "ស្គរពីរមុខ ដែលដឹកនាំវង់ភ្លេង។" },
    toneHz: [98, 130.81],
  },
  {
    id: "i5",
    name: { en: "Khloy", km: "ខ្លុយ" },
    ensemble: "Mohori",
    family: "Bamboo duct flute",
    origin: { en: "Six-hole vertical bamboo flute with a mirliton membrane giving its reedy shimmer.", km: "ខ្លុយឫស្សី មានរន្ធប្រាំមួយ។" },
    toneHz: [440, 493.88, 587.33, 659.25],
  },
  {
    id: "i6",
    name: { en: "Kong Vong Toch", km: "គងវង់តូច" },
    ensemble: "Pinpeat",
    family: "Circular gong chime",
    origin: { en: "Sixteen bossed gongs in a rattan circle; the player sits inside the ring.", km: "គង ១៦ ដុំ រៀបជារង្វង់។" },
    toneHz: [329.63, 392, 440, 523.25],
  },
];

export const sites: HeritageSite[] = [
  { id: "s1", entrySlug: "angkor-wat", name: { en: "Angkor Wat", km: "អង្គរវត្ត" }, province: "Siem Reap", era: "golden", style: "Angkor Wat", condition: "excellent", unesco: true, coordinates: { latitude: 13.4125, longitude: 103.867 } },
  { id: "s2", entrySlug: "bayon", name: { en: "The Bayon", km: "បាយ័ន" }, province: "Siem Reap", era: "golden", style: "Bayon", condition: "stable", unesco: true, coordinates: { latitude: 13.4413, longitude: 103.8586 } },
  { id: "s3", entrySlug: "banteay-srei", name: { en: "Banteay Srei", km: "បន្ទាយស្រី" }, province: "Siem Reap", era: "early", style: "Banteay Srei", condition: "excellent", unesco: true, coordinates: { latitude: 13.5987, longitude: 103.9633 } },
  { id: "s4", entrySlug: "angkor-wat", name: { en: "Phnom Kulen", km: "ភ្នំគូលេន" }, province: "Siem Reap", era: "early", style: "Kulen", condition: "at_risk", unesco: false, coordinates: { latitude: 13.5786, longitude: 104.1103 } },
  { id: "s5", entrySlug: "banteay-srei", name: { en: "Preah Vihear", km: "ព្រះវិហារ" }, province: "Preah Vihear", era: "golden", style: "Khleang", condition: "stable", unesco: true, coordinates: { latitude: 14.3907, longitude: 104.6809 } },
  { id: "s6", entrySlug: "bayon", name: { en: "Sambor Prei Kuk", km: "សំបូរព្រៃគុក" }, province: "Kampong Thom", era: "pre", style: "Pre-Angkorian", condition: "at_risk", unesco: true, coordinates: { latitude: 12.8716, longitude: 105.0407 } },
  { id: "s7", entrySlug: "silk-hol", name: { en: "Banteay Chhmar", km: "បន្ទាយឆ្មារ" }, province: "Banteay Meanchey", era: "golden", style: "Bayon", condition: "at_risk", unesco: false, coordinates: { latitude: 14.0742, longitude: 103.0932 } },
  { id: "s8", entrySlug: "pinpeat", name: { en: "Royal Palace", km: "ព្រះបរមរាជវាំង" }, province: "Phnom Penh", era: "post", style: "Post-Angkorian", condition: "excellent", unesco: false, coordinates: { latitude: 11.5637, longitude: 104.9315 } },
  { id: "s9", entrySlug: "silk-hol", name: { en: "Phnom Sampov", km: "ភ្នំសំពៅ" }, province: "Battambang", era: "post", style: "Post-Angkorian", condition: "stable", unesco: false, coordinates: { latitude: 13.0203, longitude: 103.0928 } },
];
