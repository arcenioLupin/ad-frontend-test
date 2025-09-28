import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#FFFFFF",
          secondary: "#EEEEEE",
          footer: "#404040",
        },
        text: {
          primary: "#3B3B3B",
          secondary: "#737373",
        },
        border: {
          secondary: "#8F8F8F",
        },
        cta: {
          bg: "#585660",
          text: "#FFFFFF",
        },
      },
      fontFamily: {
        logo: ["'Area Normal'", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
      },
      fontSize: {
        h1: ["36px", { lineHeight: "40px", fontWeight: "700" }],
        h2: ["24px", { lineHeight: "28px", fontWeight: "700" }],
        bodyLg: ["24px", { lineHeight: "28px", fontWeight: "400" }],
        bodyMd: ["18px", { lineHeight: "24px", fontWeight: "400" }],
        bodySm: ["16px", { lineHeight: "16px", fontWeight: "500" }],
        price: ["18px", { lineHeight: "20px", fontWeight: "700" }],
        button: [
          "16px",
          { lineHeight: "16px", fontWeight: "700", letterSpacing: "0.5px" },
        ],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
