import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(206, 38%, 21%)",
        green: "hsl(167, 36%, 54%)",
        indigo: "hsl(251, 10%, 22%)",
        gray: "hsl(240, 2%, 37%)",
      },
      fontSize: {
        xs: ".75rem",
        sm: "1rem",
        base: "1.25rem",
        md: "1.75rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
