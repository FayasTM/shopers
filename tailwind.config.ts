import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightOrange: "#FE6E44",
        darkOrange: "rgb(255, 77, 17)",
        lightText: "#888888",
        accent: "#000000",
        accentWhite: "#FFFFFF",
        lightRed: "#EFG3636",
        lightGreen: "#41CE09",
        bgLight: "#F5F5F5",
      },
    },
  },
  plugins: [],
} satisfies Config;
