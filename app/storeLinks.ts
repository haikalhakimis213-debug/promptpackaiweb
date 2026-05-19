export const WHATSAPP = {
  phone: "60104397245",
  messages: {
    packageA: "Hi saya mahu Package A - Bahasa Melayu + English SPM RM5",
    packageB: "Hi saya mahu Package B - Sejarah + Math RM6",
    packageC: "Hi saya mahu Package C - Kimia + Physics + Biologi RM7",
    fullBundle: "Hi saya mahu Full Bundle A+B+C RM15",
    specialPackage:
      "Hi saya mahu Special Package - Image + Video Edit Prompt Pack RM13",
    imagePack: "Hi saya mahu Image Edit Prompt Pack RM8",
    videoPack: "Hi saya mahu Video Edit Prompt Pack RM8",
    freeSample: "Hi saya mahu sample free prompt",
    agent: "Hi saya mahu jadi agent/referral AI Prompt Pack Store",
    agentProof:
      "Hi saya mahu claim referral. Ini proof buyer dan agent code saya:",
  },
} as const;

export const AGENT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdqPMOMssnD7h9pLtXOgtBqMgVlvnPcaNz3bikGTV7h_1-VWw/viewform?usp=dialog";

export const AGENT_CODES = ["#AP00", "#AP01"] as const;

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP.phone}?text=${encodeURIComponent(message)}`;

export const LINKS = {
  packageA: whatsappLink(WHATSAPP.messages.packageA),
  packageB: whatsappLink(WHATSAPP.messages.packageB),
  packageC: whatsappLink(WHATSAPP.messages.packageC),
  fullBundle: whatsappLink(WHATSAPP.messages.fullBundle),
  specialPackage: whatsappLink(WHATSAPP.messages.specialPackage),
  imagePack: whatsappLink(WHATSAPP.messages.imagePack),
  videoPack: whatsappLink(WHATSAPP.messages.videoPack),
  freeSample: whatsappLink(WHATSAPP.messages.freeSample),
  agent: whatsappLink(WHATSAPP.messages.agent),
  agentProof: whatsappLink(WHATSAPP.messages.agentProof),
} as const;
