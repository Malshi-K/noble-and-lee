/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          green: '#58932f',  // dark green
          light: '#77b15b',    // medium green
          lighter: '#abc599',  // light green
        },
        custom: {
          black: '#000000',
          white: '#ffffff',
        }
      },
    },
  },
  plugins: [],
};
