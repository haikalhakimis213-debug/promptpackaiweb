import { LINKS } from "@/app/storeLinks";

export type ProductIcon =
  | "book"
  | "graduation"
  | "science"
  | "magic"
  | "image"
  | "video";

export type Product = {
  slug: string;
  eyebrow: string;
  title: string;
  price: string;
  promptCount: string;
  description: string;
  longDescription: string;
  button: string;
  href: string;
  icon: ProductIcon;
  accent: string;
  image: string;
  imageTone: string;
  includes: string[];
  bestFor: string[];
};

export const PAYMENT_METHODS = [
  {
    title: "Bank Transfer",
    description:
      "Manual bank transfer is accepted. Bank/account details will be sent through WhatsApp after order confirmation.",
  },
  {
    title: "TNG eWallet",
    description:
      "Touch 'n Go eWallet is accepted. Send your payment proof or receipt in WhatsApp before the PDF is delivered.",
  },
] as const;

export const FULL_BUNDLE: Product = {
  slug: "full-bundle",
  eyebrow: "Full SPM Bundle",
  title: "Full SPM Bundle A+B+C",
  price: "RM15 promo",
  promptCount: "370 prompts total",
  description:
    "All SPM study packages in one student-friendly bundle: language, history, math, chemistry, physics, and biology prompts.",
  longDescription:
    "A complete SPM prompt bundle for students who want ready-to-copy prompts for notes, revision, essay writing, KBAT practice, formulas, calculations, experiments, and answer checking across 7 subjects.",
  button: "Order Full Bundle",
  href: LINKS.fullBundle,
  icon: "graduation",
  accent: "bg-yellow-100 text-yellow-700",
  image: "/products/full-bundle.png",
  imageTone: "from-yellow-50 via-white to-pink-50",
  includes: [
    "Package A: Bahasa Melayu + English SPM",
    "Package B: Sejarah + Math",
    "Package C: Kimia + Physics + Biologi",
    "370 total ready-to-copy prompts across 7 subjects",
    "Revision, exam drills, KBAT, writing, formulas, and answer checking prompts",
  ],
  bestFor: [
    "SPM students who want the best value",
    "Fast study planning and revision",
    "Students who use ChatGPT or AI assistants for practice",
  ],
};

export const CATALOG_PRODUCTS: Product[] = [
  {
    slug: "package-a",
    eyebrow: "Package A",
    title: "Bahasa Melayu + English SPM",
    price: "RM5",
    promptCount: "100 prompts",
    description:
      "Prompts for karangan, rumusan, tatabahasa, KOMSAS, novel, essay, email, grammar, comprehension, and summary writing.",
    longDescription:
      "Package A helps students prepare language tasks faster with prompts for Bahasa Melayu and English SPM. It is made for writing practice, grammar improvement, structured answers, and exam-style revision.",
    button: "Order Package A",
    href: LINKS.packageA,
    icon: "book",
    accent: "bg-sky-100 text-sky-700",
    image: "/products/package-a.png",
    imageTone: "from-sky-50 via-white to-yellow-50",
    includes: [
      "Karangan, rumusan, tatabahasa, and KOMSAS prompts",
      "Novel, format jawapan, and exam practice prompts",
      "Essay, email, grammar, comprehension, and summary writing prompts",
      "Ready-to-copy prompts for ChatGPT and AI assistants",
    ],
    bestFor: [
      "SPM Bahasa Melayu and English revision",
      "Students who need writing structure",
      "Quick practice before exam drills",
    ],
  },
  {
    slug: "package-b",
    eyebrow: "Package B",
    title: "Sejarah + Math",
    price: "RM6",
    promptCount: "120 prompts",
    description:
      "Prompts for History notes, KBAT, chronology, formulas, step-by-step Math, exam drills, and answer checking.",
    longDescription:
      "Package B combines Sejarah study prompts with Math step-by-step prompts. It helps with KBAT answers, chronology, formulas, workings, topical drills, and checking whether an answer is complete.",
    button: "Order Package B",
    href: LINKS.packageB,
    icon: "graduation",
    accent: "bg-yellow-100 text-yellow-700",
    image: "/products/package-b.png",
    imageTone: "from-pink-50 via-white to-yellow-50",
    includes: [
      "KBAT, chronology, and important facts prompts",
      "Sejarah notes, isi, huraian, and contoh answer prompts",
      "Math formula, working steps, and checking prompts",
      "Topical practice and exam drill prompts",
    ],
    bestFor: [
      "SPM Sejarah revision",
      "Math step-by-step learning",
      "Students who want AI to check their working",
    ],
  },
  {
    slug: "package-c",
    eyebrow: "Package C",
    title: "Kimia + Physics + Biologi",
    price: "RM7",
    promptCount: "150 prompts",
    description:
      "Prompts for science elective notes, formulas, experiments, diagrams, calculations, KBAT, and answer checking.",
    longDescription:
      "Package C is made for science elective students who want structured notes and clearer explanations. It supports concepts, definitions, experiments, formulas, calculations, graphs, data analysis, revision drills, and answer checking.",
    button: "Order Package C",
    href: LINKS.packageC,
    icon: "science",
    accent: "bg-pink-100 text-pink-700",
    image: "/products/package-c.png",
    imageTone: "from-sky-50 via-white to-pink-50",
    includes: [
      "Kimia, Physics, and Biologi concept prompts",
      "Formula, calculation, and step-by-step explanation prompts",
      "Experiment, diagram, graph, jadual, and data analysis prompts",
      "KBAT, revision drill, and answer checking prompts",
    ],
    bestFor: [
      "SPM science elective students",
      "Formula and calculation practice",
      "Experiment and concept revision",
    ],
  },
  {
    slug: "special-package",
    eyebrow: "Special Package",
    title: "Image + Video Edit Prompt Pack",
    price: "RM13 promo",
    promptCount: "200 prompts",
    description:
      "200 prompts for cinematic photo edits, video reels, product promos, profile photos, color grading, captions, and creator workflow.",
    longDescription:
      "The Special Package combines image editing and video editing prompts for creators, editors, and small businesses. It helps with cinematic visuals, product promos, reels, captions, color grading, and workflow ideas.",
    button: "Order Special Package",
    href: LINKS.specialPackage,
    icon: "magic",
    accent: "bg-violet-100 text-violet-700",
    image: "/products/special-package.png",
    imageTone: "from-sky-50 via-white to-blue-50",
    includes: [
      "Cinematic photo edit and video reel prompts",
      "Product promo, profile photo, and social media visual prompts",
      "Color grading, captions, and creator workflow prompts",
      "Commercial-use style prompt ideas for small businesses",
    ],
    bestFor: [
      "Creators who want both image and video prompts",
      "Small business product promotion",
      "Editors building faster AI workflows",
    ],
  },
  {
    slug: "image-pack",
    eyebrow: "Image Edit Pack",
    title: "Image Edit Prompt Pack",
    price: "RM8 promo",
    promptCount: "100 prompts",
    description:
      "Cinematic photo edit prompts for portraits, product photos, social posts, profile pictures, background clean-up, and aesthetic visuals.",
    longDescription:
      "The Image Edit Pack focuses on photo and visual prompts for portraits, product photos, profile pictures, background clean-up, social posts, and aesthetic image transformations.",
    button: "Order Image Pack",
    href: LINKS.imagePack,
    icon: "image",
    accent: "bg-rose-100 text-rose-700",
    image: "/products/image-pack.png",
    imageTone: "from-sky-50 via-white to-cyan-50",
    includes: [
      "Portrait, profile picture, and product photo prompts",
      "Aesthetic color grading and cinematic photo edit prompts",
      "Background clean-up and social media visual prompts",
      "Prompts designed to keep face and identity consistent",
    ],
    bestFor: [
      "Portrait and product image edits",
      "Social media visuals",
      "Creators who mainly work with images",
    ],
  },
  {
    slug: "video-pack",
    eyebrow: "Video Edit Pack",
    title: "Video Edit Prompt Pack",
    price: "RM8 promo",
    promptCount: "Video prompts",
    description:
      "Video editing prompts for reels, vlogs, CapCut-style edits, cinematic color grades, captions, audio clean-up, and promo videos.",
    longDescription:
      "The Video Edit Pack is for reels, vlogs, short-form promos, captions, color grading, audio clean-up ideas, and editing workflows for AI video tools or editing assistants.",
    button: "Order Video Pack",
    href: LINKS.videoPack,
    icon: "video",
    accent: "bg-cyan-100 text-cyan-700",
    image: "/products/video-pack.png",
    imageTone: "from-cyan-50 via-white to-blue-50",
    includes: [
      "Cinematic reels, vlogs, and promo video prompts",
      "CapCut-style caption, hook, and workflow prompts",
      "Color grading and audio clean-up prompt ideas",
      "Prompts that help keep face and identity unchanged",
    ],
    bestFor: [
      "Reels, vlogs, and promo videos",
      "Content creators and video editors",
      "Fast editing ideas before production",
    ],
  },
];

export const ALL_PRODUCTS = [FULL_BUNDLE, ...CATALOG_PRODUCTS];

export function getProduct(slug: string) {
  return ALL_PRODUCTS.find((product) => product.slug === slug);
}
