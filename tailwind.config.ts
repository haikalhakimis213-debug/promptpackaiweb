import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        cloud: "#f8fbff",
        blush: "#ffe7f1",
        butter: "#fff4bf",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(15, 23, 42, 0.10)",
        sticker: "0 12px 30px rgba(14, 116, 144, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
