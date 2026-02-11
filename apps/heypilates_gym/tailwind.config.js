/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sage: "#A9B79A",        // primary brand
          sageDark: "#7F8F73",    // darker accent
          sageLight: "#D8E0D0",   // soft backgrounds

          cream: "#F4F6F1",       // background
          charcoal: "#1F1F1F",    // headings
          muted: "#6B6B6B",       // secondary text
        },
      },
    },
  },
  plugins: [],
}

