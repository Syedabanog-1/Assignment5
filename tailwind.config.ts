import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*component*/*.{js,ts,jsx,tsx,mdx}",
    "./app/CVUploader.tsx",
    "./app/GeneratePDF.tsx",
    "./app/SaveButton.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
