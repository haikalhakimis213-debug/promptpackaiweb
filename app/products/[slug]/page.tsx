import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  FileText,
  Landmark,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  WalletCards,
} from "lucide-react";
import {
  ALL_PRODUCTS,
  PAYMENT_METHODS,
  getProduct,
} from "@/app/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found | AI Prompt Pack Store",
    };
  }

  return {
    title: `${product.title} | AI Prompt Pack Store`,
    description: product.description,
  };
}

function WhatsAppButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-sticker transition hover:-translate-y-0.5 hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
    >
      {children}
    </a>
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden">
      <section className="relative px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="soft-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <nav className="mb-10 flex items-center justify-between gap-4">
            <Link
              href="/#catalog"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink ring-1 ring-sky-100 transition hover:bg-sky-50"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Packages
            </Link>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/ai-prompt-pack-logo.png"
                alt="AI Prompt Pack Store logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-white"
                priority
              />
              <span className="hidden text-sm font-black text-ink sm:block">
                AI Prompt Pack Store
              </span>
            </Link>
          </nav>

          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border border-sky-100 bg-white p-3 shadow-soft">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-sky-50">
                <Image
                  src={product.image}
                  alt={`${product.title} poster`}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-bold text-sky-800 shadow-sm">
                <FileText className="h-4 w-4" aria-hidden="true" />
                {product.eyebrow}
              </div>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-ink sm:text-6xl">
                {product.title}
              </h1>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full bg-butter px-4 py-2 text-base font-black text-ink">
                  {product.price}
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-base font-black text-sky-800 ring-1 ring-sky-100">
                  {product.promptCount}
                </span>
              </div>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                {product.longDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton href={product.href}>
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {product.button}
                </WhatsAppButton>
                <Link
                  href="/#catalog"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink ring-1 ring-sky-100 transition hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  Compare Packages
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-sky-100 bg-white p-6 shadow-soft sm:p-8">
            <h2 className="text-3xl font-black tracking-tight text-ink">
              What is included
            </h2>
            <div className="mt-6 grid gap-3">
              {product.includes.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg bg-sky-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" aria-hidden="true" />
                  <p className="font-semibold leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-lg border border-sky-100 bg-white p-6 shadow-soft sm:p-8">
            <h2 className="text-3xl font-black tracking-tight text-ink">
              Best for
            </h2>
            <div className="mt-6 grid gap-3">
              {product.bestFor.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg bg-blush p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-pink-700" aria-hidden="true" />
                  <p className="font-semibold leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
              Payment method
            </p>
            <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Pay by bank transfer or TNG eWallet
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This store uses manual payment. Click order, chat on WhatsApp,
              choose your payment method, then send payment proof before the PDF
              file is delivered.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {PAYMENT_METHODS.map((method, index) => {
              const Icon = index === 0 ? Landmark : WalletCards;

              return (
                <article
                  key={method.title}
                  className="rounded-lg border border-sky-100 bg-white p-6 shadow-soft sm:p-8"
                >
                  <Icon className="mb-5 h-7 w-7 text-sky-700" aria-hidden="true" />
                  <h3 className="text-2xl font-black text-ink">{method.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {method.description}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { title: "Choose package", icon: ShoppingBag },
              { title: "Order on WhatsApp", icon: MessageCircle },
              { title: "Pay manually", icon: CreditCard },
              { title: "Receive PDF", icon: FileText },
            ].map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="rounded-lg bg-white p-4 ring-1 ring-sky-100">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <Icon className="h-5 w-5 text-sky-700" aria-hidden="true" />
                  </div>
                  <p className="font-black text-ink">{step.title}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton href={product.href}>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Order After Reading
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  );
}
