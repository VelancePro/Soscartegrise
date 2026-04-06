import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rouge: '#C1001F',
        bleu: '#003189',
        'bleu-nuit': '#002060',
      },
      fontFamily: {
        titre: ['var(--font-montserrat)', 'sans-serif'],
        corps: ['var(--font-open-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
