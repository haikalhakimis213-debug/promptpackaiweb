import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Copy,
  CreditCard,
  FileText,
  Gift,
  GraduationCap,
  ImageIcon,
  Landmark,
  MessageCircle,
  PlaySquare,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Users,
  WandSparkles,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import HeroScene from "@/components/HeroScene";
import { LINKS } from "@/app/storeLinks";
import {
  CATALOG_PRODUCTS,
  FULL_BUNDLE,
  PAYMENT_METHODS,
  type Product,
  type ProductIcon,
} from "@/app/products";

const heroBadges = [
  "Education Prompts",
  "Image Edit Prompts",
  "Video Edit Prompts",
  "Creator Tools",
  "Copy-Paste Ready",
];

const iconMap: Record<ProductIcon, LucideIcon> = {
  book: BookOpen,
  graduation: GraduationCap,
  science: Sparkles,
  magic: WandSparkles,
  image: ImageIcon,
  video: PlaySquare,
};

const benefits = [
  {
    title: "Save time",
    text: "Skip blank-page thinking with organized prompts for common study and creator tasks.",
    icon: Clock3,
  },
  {
    title: "Copy-paste friendly",
    text: "Each prompt is made to copy, paste, then lightly edit for your topic or project.",
    icon: Copy,
  },
  {
    title: "Beginner friendly",
    text: "Simple wording helps new AI users get useful outputs without complicated setup.",
    icon: BadgeCheck,
  },
  {
    title: "Useful for study, content, and editing",
    text: "Built for SPM learning, image edits, video ideas, captions, and small business work.",
    icon: ShieldCheck,
  },
];

const orderSteps = [
  { title: "Choose your package", icon: ShoppingBag },
  { title: "Click the WhatsApp order button", icon: MessageCircle },
  { title: "Make payment by bank or TNG", icon: CreditCard },
  { title: "Receive PDF file", icon: FileText },
];

const faqs = [
  {
    question: "Is this a physical product?",
    answer: "No, this is a digital PDF product.",
  },
  {
    question: "Can I share the PDF with friends?",
    answer: "No, it is for personal use only.",
  },
  {
    question: "What apps can I use these prompts with?",
    answer:
      "ChatGPT, AI assistants, Canva AI, CapCut AI, Runway, Pika, and other editing or writing tools.",
  },
  {
    question: "Is this suitable for beginners?",
    answer: "Yes, the prompts are ready to copy, paste, and edit.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Manual bank transfer and Touch 'n Go eWallet are accepted. Payment details will be sent through WhatsApp after order confirmation.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{text}</p>
      ) : null}
    </div>
  );
}

function WhatsAppButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-sky-600 text-white shadow-sticker hover:bg-sky-700 focus-visible:outline-sky-600",
    secondary:
      "bg-white text-ink ring-1 ring-sky-100 hover:bg-sky-50 focus-visible:outline-sky-600",
    dark: "bg-ink text-white shadow-soft hover:bg-slate-800 focus-visible:outline-ink",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function ProductCard({ product }: { product: Product }) {
  const Icon = iconMap[product.icon];

  return (
    <article className="flex h-full flex-col rounded-lg border border-sky-100 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-sky-200">
      <Link
        href={`/products/${product.slug}`}
        className={`relative mb-5 block aspect-[4/5] overflow-hidden rounded-lg bg-gradient-to-br ${product.imageTone}`}
      >
        <div className="absolute inset-0 soft-grid opacity-60" aria-hidden="true" />
        <Image
          src={product.image}
          alt={`${product.title} product poster`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 hover:scale-[1.03]"
        />
        <div className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-ink shadow-sm">
          Click to view details
        </div>
      </Link>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${product.accent}`}>
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="rounded-full bg-butter px-3 py-1 text-sm font-black text-slate-900">
          {product.price}
        </div>
      </div>
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-sky-700">
        {product.eyebrow}
      </p>
      <h3 className="text-xl font-black leading-tight text-ink">{product.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
        {product.description}
      </p>
      <Link
        href={`/products/${product.slug}`}
        className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-ink ring-1 ring-sky-100 transition hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        Read Details
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
      <WhatsAppButton href={product.href} className="mt-3 w-full">
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        {product.button}
      </WhatsAppButton>
    </article>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <Image
            src="/ai-prompt-pack-logo.png"
            alt="AI Prompt Pack Store logo"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-white"
            priority
          />
          <span className="truncate text-sm font-black text-ink sm:text-base">
            AI Prompt Pack Store
          </span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          <a className="hover:text-sky-700" href="#catalog">
            Packages
          </a>
          <a className="hover:text-sky-700" href="#how-to-order">
            How to Order
          </a>
          <a className="hover:text-sky-700" href="#faq">
            FAQ
          </a>
          <a className="hover:text-sky-700" href="/agent">
            Agent
          </a>
        </div>
        <WhatsAppButton href={LINKS.fullBundle} className="hidden sm:inline-flex">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </WhatsAppButton>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="soft-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-bold text-sky-800 shadow-sm">
            <Star className="h-4 w-4 fill-yellow-300 text-yellow-500" aria-hidden="true" />
            Digital PDF prompt packs
          </div>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">
            AI Prompt Pack Store
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Ready-to-copy PDF prompt packs for study, content creation, image
            editing, video editing, and small business productivity.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#catalog"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink ring-1 ring-sky-100 transition hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              View Packages
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <WhatsAppButton href={LINKS.fullBundle}>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Order on WhatsApp
            </WhatsAppButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-sky-100 bg-white/90 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-perspective relative min-h-[390px] overflow-visible sm:min-h-[510px]">
          <HeroScene />
          <div className="hero-float pointer-events-none absolute bottom-6 left-4 hidden rounded-lg border border-white bg-white/90 p-4 shadow-soft backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-pink-100 text-pink-700">
                <Gift className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-black text-ink">RM15 promo bundle</p>
                <p className="text-xs font-semibold text-slate-500">A+B+C SPM pack</p>
              </div>
            </div>
          </div>
          <div className="hero-float pointer-events-none absolute right-3 top-10 hidden rounded-lg border border-white bg-white/90 p-4 shadow-soft backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-black text-ink">Copy-paste ready</p>
                <p className="text-xs font-semibold text-slate-500">PDF prompts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedBundle() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 rounded-lg border border-sky-100 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Link
            href={`/products/${FULL_BUNDLE.slug}`}
            className="relative block aspect-[4/5] overflow-hidden rounded-lg bg-sky-950 shadow-sticker"
          >
            <Image
              src={FULL_BUNDLE.image}
              alt={`${FULL_BUNDLE.title} poster`}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover transition duration-500 hover:scale-[1.03]"
              priority
            />
          </Link>
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
              Best value for SPM
            </p>
            <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
              One bundle for language, history, math, and science subjects.
            </h2>
            <div className="mt-6 grid gap-3">
              {[
                ...FULL_BUNDLE.includes.slice(0, 3),
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg bg-sky-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" aria-hidden="true" />
                  <p className="font-semibold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/products/${FULL_BUNDLE.slug}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink ring-1 ring-sky-100 transition hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Read Bundle Details
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <WhatsAppButton href={LINKS.fullBundle}>
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Order Full Bundle
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Catalog() {
  return (
    <section id="catalog" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Product catalog"
          title="Choose the prompt pack that fits your task"
          text="Simple PDF packs for students, content creators, editors, and small business owners who want faster AI results."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATALOG_PRODUCTS.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why use this" title="Made for quick, useful AI outputs" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article key={benefit.title} className="rounded-lg border border-sky-100 bg-white p-5 shadow-soft">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blush text-pink-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-black text-ink">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowToOrder() {
  return (
    <section id="how-to-order" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How to order"
          title="A simple WhatsApp ordering flow"
        />
        <div className="grid gap-5 md:grid-cols-4">
          {orderSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.title} className="rounded-lg border border-sky-100 bg-white p-5 shadow-soft">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-600 text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <Icon className="h-6 w-6 text-sky-700" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-black leading-tight text-ink">{step.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PaymentMethods() {
  const paymentIcons = [Landmark, WalletCards];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Payment method"
          title="Pay manually after WhatsApp confirmation"
          text="No checkout system is needed. Customers order on WhatsApp, receive the correct payment details, then send proof before the PDF file is delivered."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {PAYMENT_METHODS.map((method, index) => {
            const Icon = paymentIcons[index];

            return (
              <article
                key={method.title}
                className="rounded-lg border border-sky-100 bg-white p-6 shadow-soft sm:p-8"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-black tracking-tight text-ink">
                  {method.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {method.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SampleAndAgent() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
        <article className="rounded-lg border border-sky-100 bg-white p-6 shadow-soft sm:p-8">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-700">
            <Gift className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-ink">Want to try first?</h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Get a free sample prompt before buying.
          </p>
          <WhatsAppButton href={LINKS.freeSample} variant="secondary" className="mt-7">
            <Send className="h-4 w-4" aria-hidden="true" />
            Get Free Sample
          </WhatsAppButton>
        </article>
        <article className="rounded-lg border border-sky-100 bg-ink p-6 text-white shadow-soft sm:p-8">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-sky-200">
            <Users className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-black tracking-tight">Want to earn commission?</h2>
          <p className="mt-3 text-base leading-7 text-slate-200">
            Join as agent/referral and earn commission for every successful buyer.
          </p>
          <a
            href="/agent"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink ring-1 ring-sky-100 transition hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
            Join Agent
          </a>
        </article>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Quick answers before you order"
        />
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-sky-100 bg-white p-5 shadow-sm open:shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-black text-ink">
                {faq.question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-50 text-sky-700 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <div className="mb-3 flex items-center gap-3">
            <Image
              src="/ai-prompt-pack-logo.png"
              alt="AI Prompt Pack Store logo"
              width={42}
              height={42}
              className="h-10 w-10 rounded-full object-cover"
            />
            <p className="text-base font-black text-ink">AI Prompt Pack Store</p>
          </div>
          <p className="text-sm leading-6 text-slate-600">
            Digital prompt packs for students, creators, and small businesses.
            Personal use only. Do not resell, reupload, or redistribute.
          </p>
        </div>
        <WhatsAppButton href={LINKS.fullBundle} variant="dark">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Order on WhatsApp
        </WhatsAppButton>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedBundle />
      <Catalog />
      <Benefits />
      <HowToOrder />
      <PaymentMethods />
      <SampleAndAgent />
      <FAQ />
      <Footer />
    </main>
  );
}
