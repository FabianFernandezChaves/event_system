/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        event: {
          yellow: "#e9d558",
          orange: "#ffab07",
          green: "#72ad75",
          turq: "#0e8d94",
          grey: "#434d53",
        },
      },

      backgroundImage: {
        "calendar-meet": "url('/img/calendar-meet.webp'); ",
      },
    },
  },
  plugins: [],
  
};
