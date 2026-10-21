/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf8f6',
          100: '#f5ebe0',
          200: '#e3d5ca',
          300: '#d5bdaf',
          400: '#d6ccc2',
          500: '#c5a896',
          600: '#a68a76',
          700: '#8c705f', // Roast
          800: '#6f5643', // Dark Roast
          900: '#4a3b32', // Espresso
          950: '#2b211b',
        },
        primary: '#6b4f3a',
        'soft-coffee': '#8a6b55',
        cream: '#F4F1EA',
        beige: '#E6DCCF',
        terracotta: '#D1603D',
        "light-bd": '#e8af9e'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        hgTtl: "96px",
        lgTtl: "72px",
        bgTtl: "60px",
        mdTtl: "48px",
        Ttl: "36px",
        smTtl: "30px",

        hgTxt: "28px",
        lgTxt: "24px",
        bgTxt: "20px",
        mdTxt: "18px",
        smTxt: "14px",
        sm1Txt: "12px",
        sm2Txt: "11px",
        sm3Txt: "10px",
      },
      spacing: {
        section: "96px",
        "section-sm": "64px",
        "section-lg": "128px",

        "content-sm": "16px",
        content: "24px",
        "content-lg": "32px",

        "card-sm": "16px",
        card: "24px",
        "card-lg": "32px",
      },
      borderRadius: {
        card: '40px',
        "card-lg": "50px",
      },
      borderWidth: {
        1: '1px',
        2: '2px',
        5: '5px',
        8: '8px',
      },
    }
  },
  plugins: [],
}

