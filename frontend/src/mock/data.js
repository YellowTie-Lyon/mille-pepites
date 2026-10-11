const u = (id, w = 900) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

/* ============ IMAGES (placeholders Unsplash — lumière chaude) ============ */
const IMG = {
  hero: u("photo-1657418830273-40c19cfff4d7", 1400),
  chocoNoir: u("photo-1557310717-d6bea9f36682"),
  chocoLait: u("photo-1639678114484-fc09b70cad42"),
  chocoBlanc: u("photo-1600147566401-c2056eb69479"),
  kinder: u("photo-1629385905980-ae180730d638"),
  mms: u("photo-1644145130642-bbd4670e4c1c"),
  speculoos: u("photo-1675062520996-2fbce17cdf1a"),
  caramel: u("photo-1652284301310-adfa8a8db6d6"),
  edition: u("photo-1717677737586-99affb851595", 1400),
  editionAlt: u("photo-1541782432180-e4371d7e1a47"),
  noisettes: u("photo-1475856033578-76b4a228f5c5"),
  boxSignature: u("photo-1625876981820-be17a6807189"),
  boxDuo: u("photo-1675062521067-7c130e5b5a1c"),
  composeBox: u("photo-1665933062842-661781d31236"),
  metalBox: u("photo-1764764138818-0b22ab4d4023", 1200),
  giftBand: u("photo-1766425221306-4d44f4011d4a", 1200),
  atelierDough: u("photo-1612884610549-ce221d92514a", 1200),
  atelierRoll: u("photo-1517686469429-8bdb88b9f907", 1200),
  atelierHands: u("flagged/photo-1561668038-2742fcef75d7", 1200),
  atelierPrep: u("photo-1608019527897-238a401a7b7c", 1200),
  candys: u("photo-1582790886481-a9bcdc10ffab"),
  mmsJar: u("photo-1534705867302-2a41394d2a3b"),
  starCookies: u("photo-1652283827810-9b8e3b7b756b"),
  cinnamonPlate: u("photo-1475856033578-76b4a228f5c5"),
  pinkPlate: u("photo-1717677752061-6efe3d8ac919"),
};

/* ============ SITE / COMMUN ============ */
export const site = {
  name: "Mille Pépites",
  tagline: "Cookies faits main · France",
  promoBar: "Livraison offerte dès 35 € — et des pépites plein la boîte",
  freeShippingThreshold: 35,
  shippingPrice: 4.9,
  promoCode: { code: "PEPITES10", rate: 0.1, label: "PEPITES10 · -10 %" },
  nav: [
    { label: "Boutique", icon: "Cookie", href: "/boutique/", mega: true },
    { label: "Composer ma box", icon: "Boxes", href: "/composer-ma-box/" },
    {
      label: "Édition du mois",
      icon: "Sparkles",
      href: "/produit/edition-framboise-chocolat-blanc/",
      chip: "Février",
    },
    { label: "Cadeaux", icon: "Gift", href: "/cadeaux-et-entreprises/" },
  ],
  mega: {
    categoriesTitle: "Par catégorie",
    toppingsTitle: "Par topping",
    allCta: { label: "Voir toute la boutique", href: "/boutique/" },
    featured: {
      eyebrow: "À croquer vite",
      title: "L'édition du mois",
      text: "Framboise & chocolat blanc — jusqu'au 28 février seulement.",
      href: "/produit/edition-framboise-chocolat-blanc/",
      image: IMG.edition,
      cta: "Je la goûte",
    },
  },
  search: { placeholder: "Rechercher un cookie…", label: "Rechercher" },
  socialHandle: "@millepepites",
  footer: {
    blurb:
      "Cookies épais et généreux, faits main en France, cuits à la commande en petites fournées.",
    columns: [
      {
        title: "La boutique",
        links: [
          { label: "Tous les cookies", href: "/boutique/" },
          { label: "Box & formules", href: "/boutique/?cat=box" },
          { label: "Éditions limitées", href: "/boutique/?cat=editions-limitees" },
          { label: "Compose ta box", href: "/composer-ma-box/" },
          { label: "Cadeaux & boîtes métal", href: "/cadeaux-et-entreprises/" },
        ],
      },
      {
        title: "La maison",
        links: [
          { label: "Notre histoire", href: "/notre-histoire/" },
          { label: "Livraison & FAQ", href: "/livraison-et-faq/" },
          { label: "Contact", href: "/contact/" },
          { label: "Mentions légales & CGV", href: "/mentions-legales/" },
        ],
      },
    ],
    newsletter: {
      title: "La fournée d'infos",
      text: "Une pépite par mois : éditions en avant-première et petits secrets d'atelier.",
      placeholder: "Ton e-mail",
      button: "Je m'inscris",
      success: "Merci ! Tu es bien inscrit·e à la fournée d'infos.",
    },
    payments: ["Visa", "Mastercard", "PayPal", "Apple Pay"],
    legalLinks: [
      { label: "Mentions légales & CGV", href: "/mentions-legales/" },
      { label: "Livraison & FAQ", href: "/livraison-et-faq/" },
      { label: "Contact", href: "/contact/" },
    ],
    copyright: "© 2026 Mille Pépites — Les cookies qui font mouche.",
    socials: [
      { label: "Instagram", icon: "Instagram", href: "https://instagram.com" },
      { label: "Facebook", icon: "Facebook", href: "https://facebook.com" },
      { label: "YouTube", icon: "Youtube", href: "https://youtube.com" },
    ],
  },
  notices: {
    added: "a été ajouté à ton panier.",
    boxAdded: "Ta box a été ajoutée à ton panier.",
    loginSuccess: "Bonjour, tu es connecté·e. Croque bien ta visite !",
    logoutSuccess: "À bientôt pour une prochaine fournée !",
    saved: "Modifications enregistrées.",
  },
};

/* ============ CATÉGORIES & TOPPINGS (taxonomies WooCommerce) ============ */
export const categories = [
  {
    slug: "cookies",
    name: "Cookies",
    description:
      "Les cookies à l'unité, épais et généreux, cuits à la commande en petites fournées.",
    image: IMG.noisettes,
  },
  {
    slug: "box",
    name: "Box",
    description:
      "Des box prêtes à offrir (ou à dévorer) : 4, 6 ou 12 cookies, à composer ou à recevoir.",
    image: IMG.giftBand,
  },
  {
    slug: "editions-limitees",
    name: "Éditions limitées",
    description:
      "Une recette nouvelle chaque mois, en quantité limitée. Quand c'est parti, c'est parti.",
    image: IMG.edition,
  },
  {
    slug: "cadeaux",
    name: "Cadeaux",
    description:
      "La boîte métal collector et les attentions gourmandes à glisser sous le bras d'un heureux élu.",
    image: IMG.metalBox,
  },
];

export const toppings = [
  {
    slug: "chocolat",
    name: "Chocolat",
    text: "Noir 70 %, lait ou blanc : la base qui rassemble.",
    image: IMG.kinder,
  },
  {
    slug: "kinder-bueno",
    name: "Kinder Bueno",
    text: "Noisette-cacao au cœur fondant, le chouchou des gourmands.",
    image: IMG.caramel,
  },
  {
    slug: "mms",
    name: "M&M's",
    text: "Croquant tout coloré, la pépite qui fait sourire.",
    image: IMG.mms,
  },
  {
    slug: "speculoos",
    name: "Speculoos",
    text: "Cannelle et cassonade, roulé dans le spéculoos émietté.",
    image: IMG.speculoos,
  },
];

/* ============ PRODUITS (structure WooCommerce) ============ */
export const products = [
  {
    id: 101,
    name: "Cookie Chocolat Noir",
    slug: "cookie-chocolat-noir",
    type: "simple",
    regular_price: 3.9,
    sale_price: null,
    stock_status: "instock",
    short_description:
      "Le classique intense : chocolat noir 70 %, cœur fondant, fleur de sel.",
    description: [
      "Notre cookie signature, celui par qui tout a commencé. Une pâte au beurre frais baratté, généreusement travaillée à la main, garnie de gros éclats de chocolat noir 70 % et d'une pointe de fleur de sel de Guérande.",
      "Cuit à la commande en petites fournées : bords croustillants, cœur encore moelleux, chocolat qui coule à la première bouchée. 110 g de bonheur dense et généreux.",
    ],
    image: IMG.chocoNoir,
    gallery: [IMG.chocoNoir, IMG.caramel, IMG.hero, IMG.chocoLait],
    categories: ["cookies"],
    tags: ["chocolat", "best-seller"],
    attributes: {
      allergenes:
        "Gluten, œuf, lait, soja. Peut contenir des traces de fruits à coque.",
      poids: "110 g",
    },
    ingredients:
      "Farine de blé T80, beurre frais baratté, sucre de canne blond, œufs plein air, chocolat noir 70 % (pâte de cacao, beurre de cacao, sucre), fleur de sel de Guérande, levure, vanille de Madagascar.",
    rating: 4.9,
    review_count: 128,
    related: [102, 107, 104, 110],
    reviews: [
      {
        rating: 5,
        author: "Camille R.",
        date: "2 février 2026",
        text: "Le meilleur cookie chocolat que j'ai mangé, et de loin. Le cœur est encore coulant à l'arrivée, c'est irréaliste.",
      },
      {
        rating: 5,
        author: "Julien P.",
        date: "24 janvier 2026",
        text: "Commandé pour un anniversaire, dévoré en dix minutes. La fleur de sel change tout.",
      },
      {
        rating: 4,
        author: "Anaïs T.",
        date: "11 janvier 2026",
        text: "Très généreux, presque trop : on partage difficilement. Je recommande la box de 6.",
      },
    ],
  },
  {
    id: 102,
    name: "Cookie Chocolat au Lait",
    slug: "cookie-chocolat-lait",
    type: "simple",
    regular_price: 3.9,
    sale_price: null,
    stock_status: "instock",
    short_description:
      "Doux et réconfortant : chocolat au lait de couverture, vanille, mie moelleuse.",
    description: [
      "Pour ceux que le noir intimide : notre cookie au chocolat au lait de couverture, plus doux, tout aussi généreux. Vanille de Madagascar et beurre frais font le reste.",
      "Cuit à la commande, il arrive avec son cœur moelleux et ses éclats fondants. Le préféré des enfants — et des grands honnêtes.",
    ],
    image: IMG.chocoLait,
    gallery: [IMG.chocoLait, IMG.chocoNoir, IMG.hero, IMG.caramel],
    categories: ["cookies"],
    tags: ["chocolat", "best-seller"],
    attributes: {
      allergenes:
        "Gluten, œuf, lait, soja. Peut contenir des traces de fruits à coque.",
      poids: "110 g",
    },
    ingredients:
      "Farine de blé T80, beurre frais baratté, sucre de canne blond, œufs plein air, chocolat au lait de couverture (sucre, cacao, lait en poudre), vanille de Madagascar, levure, fleur de sel.",
    rating: 4.8,
    review_count: 96,
    related: [101, 103, 104, 110],
    reviews: [
      {
        rating: 5,
        author: "Marie D.",
        date: "30 janvier 2026",
        text: "Testé sur mes enfants, adopté par toute la famille. La boîte de 12 n'a pas fait la semaine.",
      },
      {
        rating: 5,
        author: "Théo V.",
        date: "19 janvier 2026",
        text: "Doux, fondant, parfait avec un verre de lait. Rien à voir avec les cookies industriels.",
      },
    ],
  },
  {
    id: 103,
    name: "Cookie Chocolat Blanc",
    slug: "cookie-chocolat-blanc",
    type: "simple",
    regular_price: 3.5,
    sale_price: null,
    stock_status: "instock",
    short_description:
      "Vanillé à l'extrême : chocolat blanc de couverture et amandes torréfiées.",
    description: [
      "Le plus doux de la bande : chocolat blanc de couverture, amandes torréfiées à la main et une bonne dose de vanille. Doré à la perfection, jamais écœurant.",
      "Idéal avec un café filtre, un thé, ou à jeun à 23 h — on ne juge pas.",
    ],
    image: IMG.chocoBlanc,
    gallery: [IMG.chocoBlanc, IMG.pinkPlate, IMG.hero, IMG.chocoLait],
    categories: ["cookies"],
    tags: ["chocolat"],
    attributes: {
      allergenes:
        "Gluten, œuf, lait, soja, amandes. Peut contenir d'autres fruits à coque.",
      poids: "110 g",
    },
    ingredients:
      "Farine de blé T80, beurre frais baratté, sucre de canne blond, œufs plein air, chocolat blanc de couverture (sucre, beurre de cacao, lait), amandes torréfiées, vanille de Madagascar, levure.",
    rating: 4.7,
    review_count: 54,
    related: [101, 108, 104, 111],
    reviews: [
      {
        rating: 5,
        author: "Inès B.",
        date: "26 janvier 2026",
        text: "Je suis team chocolat blanc depuis toujours et celui-ci est au-dessus du lot. Les amandes torréfiées, génial.",
      },
    ],
  },
  {
    id: 104,
    name: "Cookie Kinder Bueno",
    slug: "cookie-kinder-bueno",
    type: "simple",
    regular_price: 4.5,
    sale_price: null,
    stock_status: "instock",
    short_description:
      "Le favori des gourmands : gianduja noisette, cœur cacao-fondant, éclats croquants.",
    description: [
      "Notre best-seller absolu. Une pâte à la noisette torréfiée, des morceaux de gianduja croquant et un cœur fondant au cacao-noisette qui rappelle l'irréel plaisir d'un bono.",
      "En fournée limitée chaque semaine, parce que la demande ne redescend jamais.",
    ],
    image: IMG.kinder,
    gallery: [IMG.kinder, IMG.caramel, IMG.hero, IMG.mms],
    categories: ["cookies"],
    tags: ["kinder-bueno", "chocolat", "best-seller"],
    attributes: {
      allergenes:
        "Gluten, œuf, lait, soja, noisettes. Peut contenir d'autres fruits à coque.",
      poids: "120 g",
    },
    ingredients:
      "Farine de blé T80, beurre frais baratté, sucre de canne blond, œufs plein air, chocolat au lait et noisettes, gianduja (noisettes, sucre, cacao), pâte à tartiner noisette-cacao, fleur de sel.",
    rating: 4.9,
    review_count: 87,
    related: [101, 105, 106, 110],
    reviews: [
      {
        rating: 5,
        author: "Léa M.",
        date: "1er février 2026",
        text: "J'ai commandé une box entière juste pour celui-là. Aucun regret. Le cœur fondant est une dinguerie.",
      },
      {
        rating: 5,
        author: "Maxime C.",
        date: "21 janvier 2026",
        text: "Livré en 24 h à Lyon, encore tiède à cœur (je plaisante à peine). Le meilleur des six goûtés.",
      },
    ],
  },
  {
    id: 105,
    name: "Cookie M&M's",
    slug: "cookie-mms",
    type: "simple",
    regular_price: 4.5,
    sale_price: null,
    stock_status: "instock",
    short_description:
      "Croquant coloré : M&M's au lait et au chocolat, pâte vanillée, fun assumé.",
    description: [
      "Le cookie qui fait sourire avant même la première bouchée. Une pâte vanillée doucie, semée de M&M's au lait et au chocolat qui craquent sous la dent.",
      "Le préféré des anniversaires, des régressions et des vendredis.",
    ],
    image: IMG.mms,
    gallery: [IMG.mms, IMG.candys, IMG.mmsJar, IMG.hero],
    categories: ["cookies"],
    tags: ["mms", "chocolat"],
    attributes: {
      allergenes:
        "Gluten, œuf, lait, soja, arachide possible. Peut contenir des fruits à coque.",
      poids: "115 g",
    },
    ingredients:
      "Farine de blé T80, beurre frais baratté, sucre de canne blond, œufs plein air, M&M's (chocolat au lait, sucre, colorants), vanille de Madagascar, levure, fleur de sel.",
    rating: 4.8,
    review_count: 73,
    related: [104, 106, 103, 112],
    reviews: [
      {
        rating: 5,
        author: "Sarah K.",
        date: "28 janvier 2026",
        text: "Offerts à mon frère de 32 ans, il a souri comme à 8 ans. Mission réussie.",
      },
      {
        rating: 4,
        author: "Paul H.",
        date: "14 janvier 2026",
        text: "Gros, généreux, coloré. Le croquant des M&M's tiens bien à la cuisson.",
      },
    ],
  },
  {
    id: 106,
    name: "Cookie Speculoos",
    slug: "cookie-speculoos",
    type: "simple",
    regular_price: 4.5,
    sale_price: null,
    stock_status: "instock",
    short_description:
      "Cannelle et cassonade : pâte épicée, cœur de pâte à tartiner speculoos.",
    description: [
      "Un voyage direct vers les marchés d'hiver : pâte à la cassonade et à la cannelle, cœur coulant de pâte à tartiner speculoos, et une croûte roulée dans le biscuit émietté.",
      "Le compagnon idéal du café filtre et des plaidouilles.",
    ],
    image: IMG.speculoos,
    gallery: [IMG.speculoos, IMG.cinnamonPlate, IMG.starCookies, IMG.hero],
    categories: ["cookies"],
    tags: ["speculoos"],
    attributes: {
      allergenes: "Gluten, œuf, lait, soja. Peut contenir des fruits à coque.",
      poids: "115 g",
    },
    ingredients:
      "Farine de blé T80, beurre frais baratté, cassonade, œufs plein air, spéculoos (farine, cannelle, épices), pâte à tartiner speculoos, cannelle de Ceylan, levure, fleur de sel.",
    rating: 4.7,
    review_count: 61,
    related: [104, 107, 111, 101],
    reviews: [
      {
        rating: 5,
        author: "Océane L.",
        date: "25 janvier 2026",
        text: "Le cœur speculoos coulant, c'est une idée de génie. Parfait avec le café.",
      },
      {
        rating: 4,
        author: "Bastien F.",
        date: "9 janvier 2026",
        text: "Bien épicé sans être écœurant. Ma préférée après le Kinder Bueno.",
      },
    ],
  },
  {
    id: 107,
    name: "Cookie Chocolat Caramel Beurre Salé",
    slug: "cookie-caramel-beurre-sale",
    type: "simple",
    regular_price: 4.9,
    sale_price: 3.9,
    stock_status: "instock",
    short_description:
      "Le duo gagnant : chocolat noir et cœur de caramel au beurre salé coulant.",
    description: [
      "Chocolat noir 70 % sur les bords, cœur de caramel au beurre salé qui coule lentement au centre. La rencontre de deux obsessions françaises, dans un cookie de 120 g.",
      "En promotion ce mois-ci, histoire de goûter à tout.",
    ],
    image: IMG.caramel,
    gallery: [IMG.caramel, IMG.kinder, IMG.chocoNoir, IMG.hero],
    categories: ["cookies"],
    tags: ["chocolat", "nouveau"],
    attributes: {
      allergenes:
        "Gluten, œuf, lait, soja. Peut contenir des traces de fruits à coque.",
      poids: "120 g",
    },
    ingredients:
      "Farine de blé T80, beurre frais baratté, sucre de canne blond, œufs plein air, chocolat noir 70 %, caramel au beurre salé (sucre, crème, beurre demi-sel), fleur de sel de Guérande, vanille.",
    rating: 4.8,
    review_count: 38,
    related: [101, 104, 106, 110],
    reviews: [
      {
        rating: 5,
        author: "Nadia S.",
        date: "3 février 2026",
        text: "Le caramel coule vraiment — prévois une serviette. Excellent.",
      },
      {
        rating: 5,
        author: "Victor G.",
        date: "27 janvier 2026",
        text: "Bien vu le prix promo, j'en ai repris trois. Le mariage chocolat-caramel est parfait.",
      },
    ],
  },
  {
    id: 108,
    name: "Édition du mois — Framboise & Chocolat Blanc",
    slug: "edition-framboise-chocolat-blanc",
    type: "simple",
    regular_price: 4.9,
    sale_price: null,
    stock_status: "instock",
    short_description:
      "L'édition de février : framboises acidulées, chocolat blanc vanillé, poivre de Timut.",
    description: [
      "Chaque mois, l'atelier imagine une recette unique, cuite en très petites quantités. En février : une pâte vanillée, des framboises acidulées, du chocolat blanc de couverture et une pointe de poivre de Timut qui relève tout.",
      "Disponible jusqu'au 28 février — ou jusqu'à épuisement de la fournée. Après, elle disparaît pour toujours.",
    ],
    image: IMG.edition,
    gallery: [IMG.edition, IMG.editionAlt, IMG.pinkPlate, IMG.hero],
    categories: ["editions-limitees", "cookies"],
    tags: ["chocolat", "edition-limitee", "nouveau"],
    attributes: {
      allergenes:
        "Gluten, œuf, lait, soja. Peut contenir des traces de fruits à coque.",
      poids: "120 g",
    },
    ingredients:
      "Farine de blé T80, beurre frais baratté, sucre de canne blond, œufs plein air, chocolat blanc de couverture, framboises (purée et freeze-dried), poivre de Timut, vanille de Madagascar, fleur de sel.",
    rating: 4.9,
    review_count: 26,
    related: [103, 107, 101, 111],
    reviews: [
      {
        rating: 5,
        author: "Chloé M.",
        date: "4 février 2026",
        text: "La framboise + le poivre de Timut, j'aurais jamais osé et pourtant. La meilleure édition depuis septembre !",
      },
      {
        rating: 5,
        author: "Émilie R.",
        date: "2 février 2026",
        text: "Très équilibrée, l'acidité de la framboise coupe le côté sucré du blanc. J'en recommande avant la fin du mois.",
      },
    ],
  },
  {
    id: 109,
    name: "Cookie Chocolat & Noisettes du Piémont",
    slug: "cookie-chocolat-noisettes-piemont",
    type: "simple",
    regular_price: 4.4,
    sale_price: null,
    stock_status: "outofstock",
    short_description:
      "Noisettes du Piémont torréfiées et chocolat noir — de retour très vite.",
    description: [
      "Notre cookie aux noisettes du Piémont, torréfiées à la main et somptueusement croquantes au cœur d'une pâte au chocolat noir. La fournée du mois est épuisée — de retour très vite.",
    ],
    image: IMG.noisettes,
    gallery: [IMG.noisettes, IMG.chocoNoir, IMG.hero, IMG.kinder],
    categories: ["cookies"],
    tags: ["chocolat"],
    attributes: {
      allergenes:
        "Gluten, œuf, lait, soja, noisettes. Peut contenir d'autres fruits à coque.",
      poids: "110 g",
    },
    ingredients:
      "Farine de blé T80, beurre frais baratté, sucre de canne blond, œufs plein air, chocolat noir 70 %, noisettes du Piémont torréfiées, fleur de sel, vanille.",
    rating: 4.6,
    review_count: 19,
    related: [101, 104, 110, 106],
    reviews: [
      {
        rating: 5,
        author: "Rémi D.",
        date: "20 janvier 2026",
        text: "Le croquant des noisettes du Piémont, c'est autre chose. Vite une nouvelle fournée !",
      },
    ],
  },
  {
    id: 110,
    name: "Box Signature Chocolat",
    slug: "box-signature-chocolat",
    type: "variable",
    regular_price: 16,
    sale_price: null,
    stock_status: "instock",
    short_description:
      "Nos trois classiques chocolat — noir, lait, blanc — en box de 4, 6 ou 12.",
    description: [
      "La box qui met tout le monde d'accord : chocolat noir 70 %, chocolat au lait et chocolat blanc amandes, répartis dans notre boîte rigide à calage kraft.",
      "Choisis ton format : 4 cookies pour la pause, 6 pour la semaine, 12 pour la tablée (ou pour toi, on ne juge pas).",
    ],
    image: IMG.boxSignature,
    gallery: [IMG.boxSignature, IMG.chocoNoir, IMG.chocoLait, IMG.hero],
    categories: ["box"],
    tags: ["chocolat", "best-seller"],
    attributes: {
      format: ["4", "6", "12"],
      allergenes:
        "Gluten, œuf, lait, soja, amandes. Peut contenir des fruits à coque.",
      poids: "Variable selon le format",
    },
    ingredients:
      "Farine de blé T80, beurre frais baratté, sucre de canne blond, œufs plein air, chocolats noir 70 % / au lait / blanc de couverture, amandes torréfiées, fleur de sel, vanille.",
    rating: 4.9,
    review_count: 64,
    related: [111, 112, 104, 101],
    variations: [
      { id: "v101-4", format: "4", price: 16, poids: "480 g", stock_status: "instock" },
      { id: "v101-6", format: "6", price: 23, poids: "720 g", stock_status: "instock" },
      { id: "v101-12", format: "12", price: 42, poids: "1,4 kg", stock_status: "instock" },
    ],
    reviews: [
      {
        rating: 5,
        author: "Guillaume T.",
        date: "29 janvier 2026",
        text: "Box de 12 pour un dîner : tout le monde a cru que je les avais faits. Désolé, Mille Pépites.",
      },
      {
        rating: 5,
        author: "Fanny B.",
        date: "17 janvier 2026",
        text: "Les trois chocolats sont parfaits et la boîte tient super bien à la livraison.",
      },
    ],
  },
  {
    id: 111,
    name: "Box Duo Choco-Speculoos",
    slug: "box-duo-choco-speculoos",
    type: "variable",
    regular_price: 16,
    sale_price: null,
    stock_status: "instock",
    short_description:
      "Le duo du moment : chocolat noir fleur de sel et speculoos à cœur coulant.",
    description: [
      "Le meilleur des deux mondes : notre cookie chocolat noir fleur de sel et notre cookie speculoos à cœur coulant, réunis dans une boîte à calage kraft.",
      "Disponible en formats 4, 6 ou 12 — les deux saveurs alternent dans la boîte.",
    ],
    image: IMG.boxDuo,
    gallery: [IMG.boxDuo, IMG.speculoos, IMG.cinnamonPlate, IMG.caramel],
    categories: ["box"],
    tags: ["chocolat", "speculoos"],
    attributes: {
      format: ["4", "6", "12"],
      allergenes:
        "Gluten, œuf, lait, soja. Peut contenir des traces de fruits à coque.",
      poids: "Variable selon le format",
    },
    ingredients:
      "Farine de blé T80, beurre frais baratté, sucre de canne blond, œufs plein air, chocolat noir 70 %, spéculoos, pâte à tartiner speculoos, caramel au beurre salé, fleur de sel, cannelle.",
    rating: 4.8,
    review_count: 31,
    related: [110, 106, 112, 107],
    variations: [
      { id: "v111-4", format: "4", price: 16, poids: "480 g", stock_status: "instock" },
      { id: "v111-6", format: "6", price: 23, poids: "720 g", stock_status: "instock" },
      { id: "v111-12", format: "12", price: 42, poids: "1,4 kg", stock_status: "instock" },
    ],
    reviews: [
      {
        rating: 5,
        author: "Laura P.",
        date: "22 janvier 2026",
        text: "Le speculoos coulant est une pure réussite, et le duo tombe bien pour les indécis.",
      },
    ],
  },
  {
    id: 112,
    name: "Compose ta box",
    slug: "compose-ta-box",
    type: "grouped",
    regular_price: 16,
    sale_price: null,
    stock_status: "instock",
    short_description:
      "Tu choisis le format (4, 6 ou 12), tu pioches tes pépites, on cuit tout ça.",
    description: [
      "La box 100 % à ta main : choisis ton format, sélectionne tes cookies un à un parmi la gamme, et on cuit le tout à la commande dans notre boîte protectrice.",
      "Un seul produit, un compteur, zéro frustration — et l'option boîte métal cadeau au passage.",
    ],
    image: IMG.composeBox,
    gallery: [IMG.composeBox, IMG.chocoNoir, IMG.mms, IMG.speculoos],
    categories: ["box"],
    tags: ["best-seller"],
    attributes: {
      format: ["4", "6", "12"],
      allergenes:
        "Gluten, œuf, lait, soja selon sélection. Peut contenir des fruits à coque.",
      poids: "Variable selon le format",
    },
    ingredients: "Selon les cookies sélectionnés — voir chaque fiche produit.",
    rating: 4.9,
    review_count: 52,
    related: [110, 111, 104, 108],
    reviews: [
      {
        rating: 5,
        author: "Antoine V.",
        date: "31 janvier 2026",
        text: "Composer sa box est dangereusement addictif. 6 cookies, 6 différents, aucun regret.",
      },
      {
        rating: 5,
        author: "Manon J.",
        date: "15 janvier 2026",
        text: "Le compteur en direct, le récap qui suit : l'expérience est ultra fluide.",
      },
    ],
  },
  {
    id: 113,
    name: "Boîte Métal Collector — 9 cookies",
    slug: "boite-metal-collector",
    type: "simple",
    regular_price: 32,
    sale_price: null,
    stock_status: "instock",
    short_description:
      "9 cookies + la boîte métal sérigraphiée à garder. Le cadeau qui fait mouche.",
    description: [
      "Neuf cookies choisis avec soin (signature chocolat, Kinder Bueno, speculoos et l'édition du mois), glissés dans notre boîte métal sérigraphiée, pensée pour être gardée : à biscuits, à souvenirs, à tout.",
      "Option carte manuscrite disponible au moment de la commande — le message est écrit à la main à l'atelier.",
    ],
    image: IMG.metalBox,
    gallery: [IMG.metalBox, IMG.giftBand, IMG.boxSignature, IMG.hero],
    categories: ["cadeaux"],
    tags: ["best-seller", "edition-limitee"],
    attributes: {
      allergenes:
        "Gluten, œuf, lait, soja, noisettes. Peut contenir d'autres fruits à coque.",
      poids: "1,1 kg",
    },
    ingredients:
      "Farine de blé T80, beurre frais baratté, sucre de canne blond, œufs plein air, chocolats noir / lait / blanc, gianduja noisette, spéculoos, framboises, fleur de sel, vanille.",
    rating: 4.9,
    review_count: 42,
    related: [110, 111, 108, 112],
    reviews: [
      {
        rating: 5,
        author: "Hélène N.",
        date: "2 février 2026",
        text: "Offerte à ma mère : la boîte a fait l'effet d'une bombe (dans le bon sens). Elle l'a déjà remplie de couture.",
      },
      {
        rating: 5,
        author: "Karim B.",
        date: "12 janvier 2026",
        text: "Qualité premium, cookies impeccables, la carte manuscrite est un vrai plus.",
      },
    ],
  },
];

/* ============ HELPERS PRODUITS ============ */
export const getProduct = (slug) => products.find((p) => p.slug === slug);

export const priceOf = (p) => (p.sale_price ?? p.regular_price);

export const isPromo = (p) => !!p.sale_price;

export function badgesOf(p) {
  const b = [];
  if (p.sale_price) b.push("promo");
  if (p.stock_status === "outofstock") b.push("rupture");
  if (p.categories?.includes("editions-limitees") || p.tags?.includes("edition-limitee"))
    b.push("edition");
  if (p.tags?.includes("nouveau")) b.push("nouveau");
  if (p.tags?.includes("best-seller")) b.push("best");
  return b;
}

export const badgeLabels = {
  promo: "Promo",
  rupture: "Rupture",
  edition: "Édition limitée",
  nouveau: "Nouveau",
  best: "Best-seller",
};

export function relatedOf(p, n = 4) {
  const rel = (p.related || [])
    .map((id) => products.find((x) => x.id === id))
    .filter(Boolean);
  if (rel.length >= n) return rel.slice(0, n);
  return [...rel, ...products.filter((x) => !rel.includes(x) && x.id !== p.id)].slice(0, n);
}

/* ============ BOUTIQUE (archive) ============ */
export const shop = {
  title: "La Boutique",
  description:
    "Cookies à l'unité, box et éditions limitées — tout est cuit à la commande, en petites fournées, avec du beurre frais et beaucoup d'amour.",
  filters: {
    categoriesTitle: "Catégories",
    allLabel: "Tous",
    toppingsTitle: "Toppings",
    empty: "Aucun produit ne correspond à ta recherche… pour l'instant.",
    emptyCta: "Réinitialiser les filtres",
    count: "produit(s)",
  },
  sortLabel: "Trier par",
  sortOptions: [
    { value: "popularity", label: "Popularité" },
    { value: "rating", label: "Note moyenne" },
    { value: "latest", label: "Nouveautés" },
    { value: "price-asc", label: "Prix croissant" },
    { value: "price-desc", label: "Prix décroissant" },
  ],
  perPage: 9,
  pagination: { prev: "Précédent", next: "Suivant", of: "sur" },
  searchPlaceholder: "Rechercher un cookie…",
};

/* ============ FICHE PRODUIT ============ */
export const productPage = {
  breadcrumb: { home: "Accueil", shop: "Boutique" },
  inStock: "En stock — cuit à la commande",
  outOfStock: "Rupture de stock — fournée épuisée",
  formatLabel: "Choisis ton format",
  quantityLabel: "Quantité",
  addLabel: "Ajouter au panier",
  chooseLabel: "Choisir le format",
  composeLabel: "Composer ma box",
  soldBy: "la pièce",
  reviewsTabAnchor: "Voir les avis",
  tabs: {
    description: "Description",
    ingredients: "Ingrédients & allergènes",
    reviews: "Avis",
  },
  ingredientsTitle: "Ingrédients",
  allergenesTitle: "Allergènes",
  poidsTitle: "Poids",
  reviewsSummary: "avis vérifiés",
  noReviews: "Pas encore d'avis sur ce produit — sois le premier à croquer !",
  relatedTitle: "Tu en voudras aussi",
  relatedSub: "Nos autres pépites, cuites à la commande.",
  reassurance: [
    {
      icon: "ChefHat",
      title: "Cuit à la commande",
      text: "Ta fournée passe au four le jour même. Jamais de stock, jamais de cookie triste.",
    },
    {
      icon: "Truck",
      title: "Livraison 24-48 h",
      text: "France métropolitaine, emballage protecteur. Offerte dès 35 €.",
    },
    {
      icon: "Lock",
      title: "Paiement sécurisé",
      text: "CB et PayPal, transactions chiffrées de bout en bout.",
    },
  ],
  galleryLabel: "Galerie produit",
};

/* ============ COMPOSER MA BOX ============ */
export const composeBoxPage = {
  title: "Compose ta box",
  intro:
    "Choisis ton format, puis pioche tes pépites préférées. On cuit le tout à la commande, dans un emballage protecteur — et l'option boîte métal cadeau reste disponible au panier.",
  step1: "1. Choisis ton format",
  step2: "2. Sélectionne tes cookies",
  pickHint:
    "Clique sur un cookie pour l'ajouter, re-clique pour le retirer. Tu peux compter jusqu'à 12, on vérifie pour toi.",
  formats: [
    { size: 4, price: 16, label: "Box de 4", note: "Pour la pause" },
    { size: 6, price: 23, label: "Box de 6", note: "Le format gourmand" },
    { size: 12, price: 42, label: "Box de 12", note: "La grande tablée" },
  ],
  counter: (n, max) => `${n}/${max} pépites choisies`,
  recapTitle: "Ta box",
  recapEmpty: "Ta box est encore vide : choisis un format, puis pioche tes cookies.",
  totalLabel: "Total",
  addLabel: "Ajouter au panier",
  incomplete: (n) => `Encore ${n} pépite(s) à choisir pour remplir ta box.`,
  complete: "Ta box est complète — elle n'attend que le four !",
  stepperLabel: "Quantité",
};

/* ============ PANIER ============ */
export const cartPage = {
  title: "Panier",
  tableHead: ["Produit", "Prix", "Quantité", "Sous-total"],
  removeLabel: "Retirer",
  promo: {
    title: "Code promo",
    placeholder: "Ton code (ex : PEPITES10)",
    apply: "Appliquer",
    success: "Code PEPITES10 appliqué : -10 % sur ta commande !",
    error: "Ce code promo n'est pas valide.",
    activeLabel: "Code actif",
  },
  progress: {
    before: (x) => `Plus que ${x} pour la livraison offerte !`,
    after: "Bravo, la livraison t'est offerte !",
    title: "Vers la livraison offerte",
  },
  totals: {
    subtotal: "Sous-total",
    discount: "Remise",
    shipping: "Livraison",
    free: "Offerte",
    estimated: "(estimée)",
    total: "Total",
  },
  submit: "Valider ma commande",
  suggestions: "Complète ta gourmandise",
  empty: {
    title: "Ton panier est vide",
    text: "Il ne manque qu'une pépite. La boutique t'attend, encore tiède.",
    cta: "Découvrir la boutique",
  },
  meta: { format: "Format", box: "Box", composed: "Compose ta box" },
};

/* ============ COMMANDE (CHECKOUT) ============ */
export const checkoutPage = {
  title: "Commande",
  sections: {
    contact: "Coordonnées",
    address: "Adresse de livraison",
    method: "Mode de livraison",
    gift: "Message cadeau",
    payment: "Paiement",
  },
  fields: {
    firstName: "Prénom",
    lastName: "Nom",
    email: "Adresse e-mail",
    phone: "Téléphone",
    country: "Pays",
    address: "Adresse",
    address2: "Complément d'adresse (facultatif)",
    zip: "Code postal",
    city: "Ville",
  },
  countries: ["France"],
  methods: [
    {
      id: "delivery",
      label: "Livraison 24-48 h",
      desc: "Emballage protecteur, France métropolitaine.",
      price: 4.9,
      freeNote: "Offerte dès 35 €",
    },
    {
      id: "pickup",
      label: "Retrait à l'atelier",
      desc: "12 rue des Fournils, 75011 Paris — du mardi au samedi, 10 h à 18 h 30.",
      price: 0,
      freeNote: "Gratuit",
    },
  ],
  gift: {
    label: "C'est un cadeau ? Ajoute un mot glissé dans la boîte",
    textareaLabel: "Ton message (écrit à la main par l'équipe)",
    placeholder: "Joyeux anniversaire, grand gourmand…",
  },
  payments: [
    { id: "card", label: "Carte bancaire", icon: "CreditCard", desc: "Paiement sécurisé, chiffré de bout en bout." },
    { id: "paypal", label: "PayPal", icon: "Wallet", desc: "Tu seras redirigé vers PayPal." },
    { id: "transfer", label: "Virement bancaire", icon: "Landmark", desc: "L'IBAN t'est envoyé après validation de la commande." },
  ],
  terms: { before: "J'ai lu et j'accepte les ", linkLabel: "CGV", href: "/mentions-legales/" },
  submit: "Commander",
  summaryTitle: "Ta commande",
  couponLabel: "Code",
  totals: {
    subtotal: "Sous-total",
    discount: "Remise",
    shipping: "Livraison",
    free: "Offerte",
    total: "Total",
  },
  empty: {
    text: "Ton panier est vide — retourne croquer du côté de la boutique.",
    cta: "Retour à la boutique",
  },
};

/* ============ CONFIRMATION ============ */
export const confirmationPage = {
  title: "Merci pour ta commande !",
  subtitle:
    "Ta fournée est confirmée et file vers le four. Un e-mail récapitulatif arrive dans ta boîte dans quelques minutes.",
  orderNumberLabel: "Numéro de commande",
  emailSent: (email) => `Confirmation envoyée à ${email}`,
  tableHead: ["Produit", "Quantité", "Sous-total"],
  totals: { subtotal: "Sous-total", discount: "Remise", shipping: "Livraison", free: "Offerte", total: "Total" },
  methodLabel: "Livraison",
  paymentLabel: "Paiement",
  giftLabel: "Message cadeau",
  ctaShop: "Continuer à croquer",
  ctaAccount: "Voir mes commandes",
  fallback: "Commande introuvable — mais la boutique, elle, t'attend toujours.",
};

/* ============ MON COMPTE ============ */
export const accountPage = {
  title: "Mon compte",
  tabs: {
    dashboard: "Tableau de bord",
    orders: "Commandes",
    addresses: "Adresses",
    details: "Détails du compte",
  },
  logout: "Déconnexion",
  login: {
    title: "Se connecter",
    email: "Adresse e-mail",
    password: "Mot de passe",
    submit: "Se connecter",
    forgot: "Mot de passe oublié ?",
    note: "Maquette : saisis n'importe quel e-mail pour explorer l'espace compte.",
    toRegister: "Pas encore de compte ? Inscris-toi",
  },
  register: {
    title: "S'inscrire",
    email: "Adresse e-mail",
    password: "Mot de passe",
    submit: "Créer mon compte",
    toLogin: "Déjà un compte ? Connecte-toi",
  },
  dashboard: {
    hello: (name) => `Bonjour ${name},`,
    text: "Retrouve ici tes commandes, tes adresses et tes détails de compte. Le tout, sans une pépite de spam.",
    recentTitle: "Dernière commande",
    cta: "Voir mes commandes",
  },
  orders: {
    head: ["Commande", "Date", "Statut", "Total", "Actions"],
    view: "Voir",
    empty: "Aucune commande pour le moment. La boutique, elle, t'attend.",
    cta: "Découvrir la boutique",
  },
  addresses: {
    shipping: "Adresse de livraison",
    billing: "Adresse de facturation",
    edit: "Modifier",
    demo: "12 rue des Fournils\n75011 Paris\nFrance",
  },
  details: {
    firstName: "Prénom",
    lastName: "Nom",
    email: "Adresse e-mail",
    password: "Nouveau mot de passe (facultatif)",
    save: "Enregistrer",
  },
  demoUser: { firstName: "Camille", lastName: "Dupont", email: "camille@exemple.fr" },
  demoOrders: [
    { number: "MP-1039", date: "2 février 2026", status: "Terminée", total: 42, items: "Box de 12 — Signature chocolat" },
    { number: "MP-1031", date: "18 janvier 2026", status: "En cours de traitement", total: 23, items: "Box de 6 — Signature chocolat" },
    { number: "MP-1024", date: "5 janvier 2026", status: "Terminée", total: 32, items: "Boîte métal collector" },
  ],
};

/* ============ HISTOIRE ============ */
export const storyPage = {
  title: "Notre histoire & savoir-faire",
  heroTitle: "Du beurre, du chocolat, et un four bien chaud",
  intro:
    "Mille Pépites est né d'une conviction simple : un cookie réussi demande trois choses — de bons ingrédients, des mains patientes, et un four qu'on écoute.",
  chapters: [
    {
      title: "Une cuisine du 11ᵉ",
      text: "Tout commence en 2021, dans une petite cuisine parisienne, entre deux fournées pour les voisins. La recette du cookie chocolat-fleur de sel y est mise au point, après 47 essais (le 48ᵉ était le bon).",
    },
    {
      title: "L'atelier",
      text: "En 2023, l'atelier du 11ᵉ ouvre ses portes : marbre, poêles en fonte, et un four à la porte toujours un peu capricieuse. C'est là que chaque cookie est encore façonné à la main, en petites fournées.",
    },
    {
      title: "Aujourd'hui",
      text: "Chaque commande est cuite le jour même, emballée dans un calage kraft et expédiée partout en France. Et le cookie n°48 n'a toujours pas pris une ride.",
    },
  ],
  sourcing: {
    title: "Des ingrédients sourcés",
    text: "On ne met dans la pâte que ce qu'on mettrait dans la vôtre.",
    items: [
      "Beurre frais baratté, venu de Normandie",
      "Chocolat de couverture 70 %, torréfié en France",
      "Œufs plein air et farine T80 françaises",
      "Fleur de sel de Guérande, ramassée à la main",
    ],
  },
  stamps: ["Fait main", "Petites fournées", "Cuit à la commande"],
  gallery: [
    { src: IMG.atelierDough, alt: "Pâte à cookies travaillée sur le marbre de l'atelier" },
    { src: IMG.atelierRoll, alt: "Façonnage de la pâte à la main avec un rouleau" },
    { src: IMG.atelierHands, alt: "Mains de l'artisan pétrissant la pâte" },
    { src: IMG.atelierPrep, alt: "Préparation des ingrédients sur le plan de travail" },
  ],
  craftTitle: "Le savoir-faire, en trois gestes",
  craft: [
    { title: "On pèse tout, tout le temps", text: "Chaque ingrédient est pesé à la main, chaque fournée est notée dans le carnet de l'atelier." },
    { title: "On façonne à la main", text: "Pas de presse, pas de moule : chaque cookie est roulé à la paume, un par un. D'où ces irrégularités qu'on adore." },
    { title: "On écoute le four", text: "Cuisson courte, repos long : le secret d'un bord croustillant et d'un cœur qui reste moelleux." },
  ],
  cta: { label: "Croquer la boutique", href: "/boutique/" },
};

/* ============ CADEAUX & ENTREPRISES ============ */
export const giftsPage = {
  title: "Cadeaux & entreprises",
  heroTitle: "Le cadeau qui fait mouche",
  intro:
    "Anniversaire, remerciement, colis d'équipe ou table de fêtes : nos boîtes gourmandes se glissent partout — et la boîte métal collector se garde longtemps après la dernière miette.",
  metalBox: {
    title: "La boîte métal collector",
    text: "Neuf cookies sélectionnés par l'atelier, glissés dans une boîte métal sérigraphiée à garder. Carte manuscrite en option, écrite à la main (vrai encre, vraie main).",
    productSlug: "boite-metal-collector",
    cta: "Voir la boîte métal",
  },
  business: {
    title: "Entreprises & événements",
    text: "Séminaires, cadeaux clients, pots d'équipe ou mariages : on cuisine des séries sur mesure, livrées au bon moment au bon endroit.",
    benefits: [
      "Devis clair sous 24 h ouvrées",
      "Livraison groupée ou à l'unité, partout en France",
      "Cartes personnalisées glissées dans chaque boîte",
      "Tarifs dégressifs dès 30 cookies",
    ],
    form: {
      title: "Demande de devis",
      fields: {
        company: "Société / organisation",
        email: "E-mail pro",
        people: "Nombre de gourmands",
        date: "Date souhaitée",
        message: "Ton projet",
      },
      placeholders: { people: "Ex : 60 personnes", date: "Ex : 14 mars 2026", message: "Un séminaire de deux jours, 80 cookies, mix surprise…" },
      submit: "Envoyer ma demande",
      success: "Merci ! Ta demande est bien reçue — réponse sous 24 h ouvrées.",
    },
  },
};

/* ============ LIVRAISON & FAQ ============ */
export const shippingPage = {
  title: "Livraison & FAQ",
  heroTitle: "Tout ce qu'il faut savoir avant de croquer",
  intro:
    "Chaque commande part de l'atelier le jour de sa cuisson, dans un emballage protecteur pensé pour les grands trajets.",
  cards: [
    { icon: "Truck", title: "Livraison 24-48 h", text: "France métropolitaine, emballage protecteur. 4,90 € — offerte dès 35 € d'achat." },
    { icon: "MapPin", title: "Retrait à l'atelier", text: "12 rue des Fournils, 75011 Paris. Gratuit, du mardi au samedi, 10 h à 18 h 30." },
    { icon: "PackageCheck", title: "Emballage protecteur", text: "Boîte rigide et calage kraft : tes cookies arrivent entiers, juste tièdes d'esprit." },
  ],
  tableTitle: "Délais & tarifs",
  tableHead: ["Zone", "Délai", "Tarif"],
  tableRows: [
    ["Paris & Petite Couronne", "24 h", "4,90 € — offert dès 35 €"],
    ["Grandes villes & Grande Couronne", "24-48 h", "4,90 € — offert dès 35 €"],
    ["Reste de la France métropolitaine", "48 h", "4,90 € — offert dès 35 €"],
    ["Retrait à l'atelier (Paris 11ᵉ)", "Dès aujourd'hui", "Gratuit"],
  ],
  faqTitle: "Questions fréquentes",
  groups: [
    {
      group: "Livraison",
      items: [
        { q: "Quand ma commande part-elle ?", a: "Chaque cookie est cuit à la commande. Les fournées partent du mardi au samedi : commande passée avant 10 h, expédition le jour même." },
        { q: "À partir de quand la livraison est-elle offerte ?", a: "Dès 35 € d'achat, partout en France métropolitaine. En dessous, la livraison est à 4,90 €." },
        { q: "Où puis-je retirer ma commande ?", a: "À l'atelier : 12 rue des Fournils, 75011 Paris, du mardi au samedi de 10 h à 18 h 30. Le retrait est gratuit, et il y a souvent une fournée à goûter." },
      ],
    },
    {
      group: "Conservation",
      items: [
        { q: "Comment conserver mes cookies ?", a: "Dans une boîte hermétique, à température ambiante : ils restent parfaits 4 à 5 jours. Surtout jamais au frigo, ça les rend tristes." },
        { q: "Peut-on les congeler ?", a: "Oui, jusqu'à un mois, bien emballés. Trente secondes au four à 160 °C et ils repartent comme au premier jour." },
      ],
    },
    {
      group: "Commande & paiement",
      items: [
        { q: "Quels moyens de paiement acceptez-vous ?", a: "Carte bancaire, PayPal et virement bancaire. Tout est chiffré, rien n'est stocké chez nous." },
        { q: "Puis-je modifier ma commande ?", a: "Tant qu'elle n'est pas au four (généralement dans les 2 h), écris-nous vite via la page contact." },
      ],
    },
    {
      group: "Cadeaux & entreprises",
      items: [
        { q: "Faites-vous des cartes cadeaux ?", a: "La boîte métal collector avec carte manuscrite est notre spécial cadeau. Pour les montants libres, écris-nous." },
        { q: "Gérez-vous les grosses commandes ?", a: "Oui, dès 30 cookies avec tarifs dégressifs. Formulaire de devis sur la page Cadeaux & entreprises." },
      ],
    },
  ],
  cta: { label: "Une autre question ? Écris-nous", href: "/contact/" },
};

/* ============ CONTACT ============ */
export const contactPage = {
  title: "Contact",
  heroTitle: "Parlons pépites",
  intro: "Une question, une idée, un compliment (on prend aussi) ? Écris-nous, on répond vite.",
  form: {
    title: "Écris-nous",
    fields: {
      name: "Ton nom",
      email: "Ton e-mail",
      subject: "Sujet",
      message: "Ton message",
    },
    subjects: ["Une commande", "Cadeaux & entreprises", "Presse & partenariats", "Juste des compliments"],
    submit: "Envoyer",
    success: "Message bien reçu ! On te répond sous 24 h ouvrées.",
  },
  info: {
    title: "L'atelier",
    address: ["12 rue des Fournils", "75011 Paris"],
    email: "bonjour@millepepites.fr",
    phone: "01 84 80 20 20",
    hoursTitle: "Horaires",
    hours: [
      { day: "Mardi — Vendredi", time: "9 h — 17 h" },
      { day: "Samedi", time: "10 h — 18 h 30" },
      { day: "Dimanche & lundi", time: "L'atelier se repose" },
    ],
  },
};

/* ============ MENTIONS LÉGALES & CGV ============ */
export const legalPage = {
  title: "Mentions légales & CGV",
  heroTitle: "Mentions légales & CGV",
  intro: "Le texte sérieux, mais pas trop long. Promis, il n'y a pas de pépite cachée dedans.",
  sections: [
    {
      id: "editeur",
      title: "Éditeur du site",
      blocks: [
        { type: "p", text: "Mille Pépites — atelier de pâtisserie artisanale. 12 rue des Fournils, 75011 Paris. SIRET : 000 000 000 00000 (à compléter). Contact : bonjour@millepepites.fr — 01 84 80 20 20." },
      ],
    },
    {
      id: "hebergement",
      title: "Hébergement",
      blocks: [{ type: "p", text: "Le site est hébergé par un prestataire professionnel garantissant la disponibilité et la sécurité des données. Les coordonnées complètes de l'hébergeur sont disponibles sur simple demande." }],
    },
    {
      id: "propriete",
      title: "Propriété intellectuelle",
      blocks: [{ type: "p", text: "L'ensemble des contenus du site (textes, recettes, visuels, logo Mille Pépites) est la propriété exclusive de Mille Pépites. Toute reproduction, même partielle, est interdite sans autorisation écrite." }],
    },
    {
      id: "donnees",
      title: "Données personnelles",
      blocks: [{ type: "p", text: "Les informations collectées lors d'une commande (nom, adresse, e-mail) servent uniquement à traiter ta commande et, avec ton accord, à t'envoyer la fournée d'infos. Tu peux demander leur suppression à tout moment à bonjour@millepepites.fr." }],
    },
    {
      id: "cgv-objet",
      title: "CGV — Objet et champ d'application",
      blocks: [{ type: "p", text: "Les présentes conditions générales de vente régissent les commandes passées auprès de Mille Pépites par les consommateurs, pour une livraison en France métropolitaine ou un retrait à l'atelier." }],
    },
    {
      id: "cgv-prix",
      title: "CGV — Prix et commandes",
      blocks: [{ type: "p", text: "Les prix sont indiqués en euros, toutes taxes comprises. Les cookies sont des produits frais cuits à la commande : les commandes sont traitées dans leur ordre d'arrivée, du mardi au samedi." }],
    },
    {
      id: "cgv-livraison",
      title: "CGV — Livraison et retrait",
      blocks: [{ type: "p", text: "Livraison en France métropolitaine sous 24 à 48 h, dans un emballage protecteur : 4,90 €, offerte dès 35 € d'achat. Retrait gratuit à l'atelier (12 rue des Fournils, 75011 Paris) du mardi au samedi, 10 h à 18 h 30." }],
    },
    {
      id: "cgv-retractation",
      title: "CGV — Droit de rétractation",
      blocks: [{ type: "p", text: "Conformément à la réglementation, tu disposes de 14 jours pour te rétracter. Exception : les denrées alimentaires préparées à la commande ne peuvent être retournées si leur livraison est acceptée. En cas de souci (cookie cassé, commande incorrecte), écris-nous : on refait la fournée, sans discussion." }],
    },
    {
      id: "cgv-litiges",
      title: "CGV — Litiges",
      blocks: [{ type: "p", text: "Ces CGV sont soumises au droit français. En cas de litige, une solution amiable sera d'abord recherchée. Notre médiateur de la consommation peut être saisi gratuitement." }],
    },
  ],
};

/* ============ 404 ============ */
export const notFoundPage = {
  title: "Oups, il manque une pépite…",
  text: "Cette page a été croquée. Retourne vite croquer autre chose.",
  cta: "Retour à l'accueil",
  cta2: "Voir la boutique",
};

/* ============ ACCUEIL ============ */
export const home = {
  hero: {
    eyebrow: "Artisan cookie — France",
    titleLines: ["Des cookies généreux,", "cuits à la commande,", "croqués encore *tièdes*."],
    subtitle:
      "Faits main en France, en petites fournées, avec du beurre frais et de grosses pépites de chocolat. Livrés en 24-48 h — ou à retirer tout chaud à l'atelier.",
    primaryCta: { label: "Commander", href: "/boutique/" },
    secondaryCta: { label: "Composer ma box", href: "/composer-ma-box/" },
    rating: { value: 4.9, count: 1248, label: "avis gourmands" },
    reassurance: [
      { icon: "Truck", label: "Livraison 24-48 h en France" },
      { icon: "MapPin", label: "Retrait gratuit à l'atelier" },
      { icon: "ShieldCheck", label: "Paiement sécurisé" },
    ],
    image: IMG.hero,
    imageAlt: "Cookie géant au chocolat encore tiède, cassé en deux",
    stamps: { top: "Cuit à la commande", bottom: "Fait main" },
  },
  marquee: [
    "Fait main en France",
    "Cuit à la commande",
    "Livraison 24-48 h",
    "Petites fournées",
    "Emballage protecteur",
    "Ingrédients sourcés",
  ],
  edition: {
    eyebrow: "L'édition du mois — février",
    title: "Framboise & chocolat blanc",
    text: "Chaque mois, l'atelier imagine une recette unique, cuite en très petite quantité. En février : framboises acidulées, chocolat blanc vanillé et une pointe de poivre de Timut. Quand la fournée est partie, elle ne revient jamais.",
    priceNote: "Disponible jusqu'au 28 février, ou jusqu'à épuisement de la fournée.",
    stamp: "Édition limitée",
    cta: "Je la goûte",
    link: "Voir sa fiche",
    slug: "edition-framboise-chocolat-blanc",
  },
  bestSellers: {
    eyebrow: "Les valeurs sûres",
    title: "Les best-sellers de l'atelier",
    sub: "Quatre pépites qui ne déçoivent jamais — testées et re-testées, cent fois.",
    cta: { label: "Voir toute la boutique", href: "/boutique/" },
    slugs: [
      "cookie-chocolat-noir",
      "cookie-kinder-bueno",
      "box-signature-chocolat",
      "edition-framboise-chocolat-blanc",
    ],
  },
  toppings: {
    eyebrow: "Nos toppings",
    title: "Choisis ton camp",
    sub: "Chaque cookie est généreusement garni. À toi de choisir ta pépite préférée — ou de toutes les aimer.",
    cta: "Voir les cookies",
  },
  boxes: {
    eyebrow: "Formules & box",
    title: "À la pièce, ou par caisse entière",
    sub: "Des formats pensés pour chaque envie : la pause solo comme la grande tablée.",
    items: [
      { name: "À l'unité", price: "dès 3,50 €", text: "Un cookie, deux bouchées, trois émotions.", href: "/boutique/" },
      { name: "Box de 4", price: "16 €", text: "Deux pour toi, deux pour… non.", href: "/produit/box-signature-chocolat/" },
      { name: "Box de 6", price: "23 €", text: "La pause déjeuner qui se souvient d'être un samedi.", href: "/produit/box-signature-chocolat/" },
      { name: "Box de 12", price: "42 €", text: "La grande tablée — ou l'après-midi des courageux.", href: "/produit/box-signature-chocolat/", tag: "La plus partagée" },
    ],
    metal: {
      name: "Boîte métal collector",
      price: "32 €",
      text: "9 cookies + la boîte sérigraphiée à garder. L'option cadeau parfaite, carte manuscrite en option.",
      href: "/produit/boite-metal-collector/",
      image: IMG.metalBox,
      imageAlt: "Boîte cadeau kraft nouée avec de la ficelle",
      stamp: "Option cadeau",
    },
  },
  steps: {
    eyebrow: "Comment ça marche",
    title: "Du clic au croc",
    items: [
      { n: "01", icon: "MousePointerClick", title: "Je choisis", text: "Cookies à la pièce, box ou édition du mois : tu composer ta fournée en quelques clics." },
      { n: "02", icon: "ChefHat", title: "On cuisine à la main", text: "Ta commande passe au four le jour même, en petites fournées, façonnée à la paume." },
      { n: "03", icon: "PackageCheck", title: "Je reçois en 48 h", text: "Emballage protecteur, livraison suivie partout en France — ou retrait gratuit à l'atelier." },
    ],
  },
  craft: {
    eyebrow: "Notre savoir-faire",
    title: "Fait main, vraiment",
    paragraphs: [
      "Chez Mille Pépites, pas de chaîne de production : chaque cookie est pesé, façonné et garni à la main, en petites fournées de l'atelier parisien.",
      "Le beurre vient de Normandie, le chocolat est de couverture, les œufs sont plein air. Et le four, lui, est écouté attentivement — c'est lui le chef.",
    ],
    bullets: ["Petites fournées de 40 cookies maximum", "Façonné à la paume, jamais à la presse", "Cuit le jour même, expédié encore frais"],
    image: IMG.atelierDough,
    imageAlt: "Pâte à cookies travaillée à la main sur le marbre de l'atelier",
    stamp: "Fait main",
    cta: { label: "Découvrir notre histoire", href: "/notre-histoire/" },
  },
  reviews: {
    eyebrow: "Avis clients",
    title: "Ils ont croqué avant toi",
    rating: 4.9,
    count: 1248,
    items: [
      { stars: 5, text: "Le Kinder Bueno est une dinguerie. Livré en 24 h, encore moelleux à cœur — je ne comprends pas la physique, mais j'apprécie.", author: "Léa M.", product: "Cookie Kinder Bueno" },
      { stars: 5, text: "Box de 6 pour l'anniversaire d'une collègue : elle a oublié de partager. La boîte kraft est superbe, le mot glissé très classe.", author: "Thomas B.", product: "Box de 6 — Signature chocolat" },
      { stars: 5, text: "La boîte métal a fait pleurer ma mère (de joie). Les cookies sont énormes, généreux, exactement comme sur les photos.", author: "Sarah K.", product: "Boîte métal collector" },
    ],
  },
  gifts: {
    eyebrow: "Cadeaux & entreprises",
    title: "Envie d'offrir — ou de régaler l'équipe ?",
    text: "Boîte métal collector, carte manuscrite, séries sur mesure pour les entreprises et les événements : on a la boîte qu'il faut.",
    primaryCta: { label: "Cadeaux & boîtes métal", href: "/cadeaux-et-entreprises/" },
    secondaryCta: { label: "Commandes entreprises", href: "/cadeaux-et-entreprises/" },
    image: IMG.giftBand,
    imageAlt: "Boîtes cadeaux kraft nouées à la main avec de la ficelle bicolore",
    stamp: "Option cadeau",
  },
  instagram: {
    eyebrow: "Instagram",
    title: "Le fil gourmand",
    handle: "@millepepites",
    cta: "Nous suivre",
    images: [
      { src: IMG.candys, alt: "Cookies colorés aux pépites multicolores" },
      { src: IMG.kinder, alt: "Gros plan sur un cookie au chocolat et fleur de sel" },
      { src: IMG.atelierRoll, alt: "Façonnage de la pâte à l'atelier" },
      { src: IMG.chocoLait, alt: "Pile de cookies au chocolat au lait" },
      { src: IMG.pinkPlate, alt: "Dessert à la framboise sur une table rose" },
      { src: IMG.starCookies, alt: "Cookies étoilés sur une grille de refroidissement" },
    ],
  },
  faqShort: {
    eyebrow: "FAQ",
    title: "Les questions qui reviennent souvent",
    items: [
      { q: "Vos cookies sont-ils vraiment faits main ?", a: "Oui, chaque cookie est pesé, façonné et garni à la main à l'atelier, en petites fournées. On ne sait même pas faire autrement." },
      { q: "Combien de temps se conservent-ils ?", a: "4 à 5 jours dans une boîte hermétique, à température ambiante. Jamais au frigo : ça les rend tristes." },
      { q: "Quand est-ce que je reçois ma commande ?", a: "Sous 24 à 48 h en France métropolitaine. Les fournées partent du mardi au samedi, cuites le jour même." },
      { q: "Puis-je retirer ma commande à l'atelier ?", a: "Bien sûr : retrait gratuit au 12 rue des Fournils, 75011 Paris, du mardi au samedi de 10 h à 18 h 30." },
      { q: "Faites-vous des cadeaux d'entreprise ?", a: "Oui, dès 30 cookies avec tarifs dégressifs, cartes personnalisées et livraison groupée. Demande de devis sur la page Cadeaux & entreprises." },
    ],
    cta: { label: "Toutes les questions", href: "/livraison-et-faq/" },
  },
  newsletter: {
    eyebrow: "Newsletter",
    title: "Reçois la fournée d'infos",
    text: "Une pépite par mois : l'édition du mois en avant-première, des petits secrets d'atelier, et zéro spam. Que du beurre.",
    placeholder: "Ton e-mail",
    button: "Je m'inscris",
    success: "Merci ! Tu es bien inscrit·e à la fournée d'infos.",
    note: "Désinscription en un clic. Tes données restent entre nous.",
  },
};
