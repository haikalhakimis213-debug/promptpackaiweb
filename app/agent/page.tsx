import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  FormInput,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { AGENT_CODES, AGENT_FORM_URL, LINKS } from "@/app/storeLinks";

export const metadata: Metadata = {
  title: "Referral Agent | AI Prompt Pack Store",
  description:
    "Join the AI Prompt Pack Store referral agent program and learn how to submit buyer proof with your agent code.",
};

const agentSteps = [
  {
    title: "Fill in the Google Form",
    text: "Submit your name, contact number, and preferred agent code request.",
    icon: FormInput,
  },
  {
    title: "Get your agent code",
    text: "Use a code format like #AP00 or #AP01 when promoting the store.",
    icon: BadgeCheck,
  },
  {
    title: "Share the package",
    text: "Share the store link, poster, or package details with your audience.",
    icon: Send,
  },
  {
    title: "Send proof to claim",
    text: "When a buyer orders, send the proof and your agent code through WhatsApp.",
    icon: FileCheck2,
  },
];

const proofItems = [
  "Buyer name or WhatsApp screenshot",
  "Package ordered by the buyer",
  "Payment or order proof screenshot",
  "Your agent code, for example #AP00 or #AP01",
];

function ActionLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "bg-sky-600 text-white shadow-sticker hover:bg-sky-700 focus-visible:outline-sky-600"
      : "bg-white text-ink ring-1 ring-sky-100 hover:bg-sky-50 focus-visible:outline-sky-600";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
    >
      {children}
    </a>
  );
}

export default function AgentPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="relative px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="soft-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <nav className="mb-10 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink ring-1 ring-sky-100 transition hover:bg-sky-50"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Store
            </Link>
            <div className="flex items-center gap-3">
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
            </div>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-bold text-sky-800 shadow-sm">
                <Users className="h-4 w-4" aria-hidden="true" />
                Referral Agent Program
              </div>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-ink sm:text-6xl">
                Want to earn commission?
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Join as an AI Prompt Pack Store agent/referral partner. Share the
                digital prompt packs, help buyers order, and submit proof with
                your agent code for every successful buyer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ActionLink href={AGENT_FORM_URL}>
                  <FormInput className="h-4 w-4" aria-hidden="true" />
                  Become Agent via Google Form
                </ActionLink>
                <ActionLink href={LINKS.agent} variant="secondary">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </ActionLink>
              </div>
            </div>

            <div className="relative rounded-lg border border-sky-100 bg-white p-6 shadow-soft sm:p-8">
              <div className="absolute right-6 top-6 hidden rounded-full bg-butter px-4 py-2 text-sm font-black text-ink sm:block">
                Agent Code Required
              </div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-blush text-pink-700">
                <Sparkles className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-ink">
                How agents should claim commission
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                When you chat with the store owner, include buyer proof and your
                agent code in the same WhatsApp message.
              </p>
              <div className="mt-6 rounded-lg bg-sky-50 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                  Message example
                </p>
                <p className="mt-3 text-base font-black leading-7 text-ink">
                  Hi saya mahu claim referral. Ini proof buyer dan agent code saya:
                  #AP00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
              Agent guide
            </p>
            <h2 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Simple steps to start promoting
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {agentSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="rounded-lg border border-sky-100 bg-white p-5 shadow-soft"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-600 text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <Icon className="h-6 w-6 text-sky-700" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-black leading-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-sky-100 bg-white p-6 shadow-soft sm:p-8">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-700">
              <ClipboardCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-black tracking-tight text-ink">
              Proof to include
            </h2>
            <div className="mt-6 grid gap-3">
              {proofItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg bg-sky-50 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" aria-hidden="true" />
                  <p className="font-semibold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <ActionLink href={LINKS.agentProof} variant="secondary">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Submit Proof on WhatsApp
            </ActionLink>
          </article>

          <article className="rounded-lg border border-sky-100 bg-ink p-6 text-white shadow-soft sm:p-8">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-sky-200">
              <BadgeCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-black tracking-tight">Agent code examples</h2>
            <p className="mt-3 text-base leading-7 text-slate-200">
              Use a short code so every buyer can be matched to the correct
              agent. Replace or add more codes later as your agent list grows.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {AGENT_CODES.map((code) => (
                <span
                  key={code}
                  className="rounded-full bg-white px-5 py-3 text-lg font-black text-ink"
                >
                  {code}
                </span>
              ))}
            </div>
            <div className="mt-7 rounded-lg bg-white/10 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-100">
                Buyer reminder
              </p>
              <p className="mt-3 text-base font-bold leading-7">
                Ask buyers to include your code in their order message, for
                example: Agent Code #AP00.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
