const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  plugins: [flowbite.plugin(), require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors:{
        primary: {
          50: "#edf9ff",
          100: "#d7efff",
          200: "#b9e4ff",
          300: "#88d6ff",
          400: "#50bdff",
          500: "#289dff",
          600: "#0f7eff",
          700: "#0a67eb",
          800: "#0f52be",
          900: "#134895",
          950: "#112d5a",
        }
      },
    }
  },
};
