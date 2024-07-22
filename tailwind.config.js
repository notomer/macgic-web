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
      animation: {
        hamburgerOpen: 'hamburgerOpen 0.3s ease',
        blink: 'blink 1s steps(1, end) infinite',
      },
      keyframes: {
        hamburgerOpen: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-2.5rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        blink: {
          '50%': { opacity: '0' },
        },
      },
      filter: { // Extend the default filter utilities
        invert: 'invert(1)',
        sepia: 'sepia(1)',
        saturate: 'saturate(5)',
        'hue-rotate-180': 'hue-rotate(180deg)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.filter-invert': {
          filter: 'invert(1)',
        },
        '.filter-sepia': {
          filter: 'sepia(1)',
        },
        '.filter-saturate': {
          filter: 'saturate(5)',
        },
        '.filter-hue-rotate-180': {
          filter: 'hue-rotate(180deg)',
        },
      });
    }
  ],
}