import type { CampsiteConfig } from "../types";

/**
 * hideaway Attersee — versteckte Pachtgrundstücke am Südostufer des Attersees.
 * Inhalte 100 % aus der eigenen Quelle (raw/digest). Die Website nennt KEINE Preise
 * (sie wurde mit Casino-Spam unterwandert) → Richtpreise + offene Disclosure.
 */
const IMG = "/campsites/hideaway-attersee";

const hideawayAttersee: CampsiteConfig = {
  name: "hideaway Attersee",
  shortName: "hideaway",
  slug: "hideaway-attersee",
  ort: "Weißenbach am Attersee",
  region: "Oberösterreich",
  brandKind: "Pachtgrundstücke am See",
  see: "Attersee",
  regionLong: "Attersee · Salzkammergut · Oberösterreich",

  heroVariant: "center",

  claim: "Deine versteckte Bucht am Attersee",
  claimEmphasis: "versteckte Bucht",
  intro:
    "An der Südostspitze des Attersees liegt eine kleine, versteckte Bucht mit direktem Seezugang — Pachtgrundstücke für dein Mobilheim, deinen Wohnwagen oder dein Wohnmobil, fernab vom Trubel.",

  logo: { src: `${IMG}/logo-57ddced58f.png`, alt: "hideaway Attersee Logo" },

  statement: {
    text: "Vom Pachtplatz bis ins türkisblaue Wasser — ohne eine einzige Straße zu queren.",
    emphasis: "ohne eine einzige Straße",
  },

  pillars: [
    {
      title: "Versteckte Bucht am See",
      text: "An der Südostspitze des Attersees gelegen, abseits vom Trubel — eine kleine Bucht, die viele gar nicht kennen.",
      image: { src: `${IMG}/hero-562f51a0fe.webp`, alt: "Blick über den türkisblauen Attersee auf die Berge" },
    },
    {
      title: "Direkt ans Wasser",
      text: "Der See ist direkt vom Platz erreichbar, ganz ohne Querung der Atterseestraße — und dann hinein ins türkisblaue Trinkwasser.",
      image: { src: `${IMG}/gallery-eebdea7da5.webp`, alt: "Badeeinstieg mit Leiter ins klare Wasser des Attersees" },
    },
    {
      title: "Dein Zuhause am See",
      text: "Pachtgrundstücke von 80 bis 100 m² werden zu deinem Sommerzuhause — leben, arbeiten und ankommen direkt am Attersee.",
      image: { src: `${IMG}/gallery-011126063b.webp`, alt: "Tisch mit Seeblick auf einem Pachtplatz am Attersee" },
    },
  ],

  usps: [
    "Direkter Seezugang",
    "Eigene Schrankenanlage",
    "Strom & Wasser am Platz",
    "Sanitär mit Wäscheraum",
    "Plätze 80–100 m²",
    "1. Mai bis 31. Oktober",
  ],

  trust: {
    heading: "Was diese Bucht so selten macht",
    headingEmphasis: "selten",
    intro:
      "Eine private Bucht mit eigener Schranke, Sanitärgebäude und Strom- und Wasseranschluss an jedem Platz — und ein See, in dem du im Trinkwasser schwimmst. Geöffnet von Mai bis Oktober.",
  },

  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-d61a25f44a.webp`, alt: "Sonnenuntergang über der versteckten Bucht am Attersee" },
  },

  camping: {
    heading: "Dein Sommer in der Bucht",
    intro:
      "Saubere Sanitäranlagen mit eigenem Wäscheraum, Strom und Wasser an jedem Platz und der direkte Zugang zum See — ringsum nichts als Wasser, Berge und Ruhe.",
    features: [
      {
        title: "Schwimmen im Trinkwasser",
        text: "Das türkisblaue Wasser des Attersees hat Trinkwasserqualität — vom Platz aus tauchst du ein, wann immer dir danach ist.",
        image: { src: `${IMG}/gallery-24d1cb20b8.webp`, alt: "Sonne über dem türkisblauen Wasser des Attersees" },
      },
      {
        title: "Raus aufs Wasser",
        text: "Die ruhige Bucht ist dein Startpunkt aufs Wasser — mit dem Kanu, dem SUP oder dem eigenen Boot direkt vor dem Platz.",
        image: { src: `${IMG}/gallery-12c1a88038.webp`, alt: "Paddeln im Abendlicht auf dem Attersee" },
      },
      {
        title: "Mitten in der Natur",
        text: "Im Einklang mit der Natur die Seele baumeln lassen — und ringsum Ausgangspunkte für Wanderungen und Radtouren.",
        image: { src: `${IMG}/gallery-0d170d827c.webp`, alt: "Blühender Garten am Ufer des Attersees" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Attersee",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A1 (Abfahrt Seewalchen oder Sankt Georgen) und die Atterseestraße ans Südostufer nach Unterburgau bei Weißenbach. Besichtigung nur mit Termin.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Attnang-Puchheim, weiter mit der Atterseebahn an den See — die letzten Kilometer ans Südufer am besten mit dem Auto.",
      },
    ],
  },

  galerie: {
    heading: "Abende am Attersee",
    headingEmphasis: "Attersee",
    intro:
      "Wenn die Sonne hinter den Bergen versinkt und sich der Himmel über der Bucht färbt — Eindrücke von langen Sommerabenden am See.",
    tag: "Mai bis Oktober",
    images: [
      { src: `${IMG}/gallery-60793d2864.webp`, alt: "Glühender Sonnenuntergang über dem Attersee" },
      { src: `${IMG}/gallery-9c63718bc5.webp`, alt: "Sommerblumen am Ufer des Attersees im Abendrot" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz in der Bucht",
    headingEmphasis: "deinen Platz",
    intro:
      "Schreib Jessika, welcher Zeitraum dich interessiert — sie zeigt dir die freien Pachtgrundstücke gerne persönlich.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise zur Orientierung — auf der Website sind keine Preise angegeben. hideaway Attersee vergibt Pachtgrundstücke; bitte Konditionen direkt anfragen.",
    highlight: {
      title: "Direkt am Wasser",
      text: "Vom Pachtplatz bis zum Seezugang ohne eine einzige Straße.",
    },
    categories: [
      { id: "stellplatz", label: "Pachtplatz am See", perNight: 42, perExtraGuest: 8 },
    ],
  },

  kontakt: {
    tel: "+43 664 2440003",
    telHref: "tel:+436642440003",
    mail: "jessika@hideaway-attersee.at",
    facebook: "https://www.facebook.com/hideaway.attersee.camping",
    adresse: "Unterburgau 4a · 4854 Weißenbach am Attersee · Oberösterreich",
  },

  languages: ["DE"],

  nav: [
    { label: "Die Bucht", href: "#camping", children: [
      { label: "Am Wasser", href: "#camping" },
      { label: "Ausstattung", href: "#camping" },
    ]},
    { label: "Eindrücke", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Pachtplätze", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default hideawayAttersee;
