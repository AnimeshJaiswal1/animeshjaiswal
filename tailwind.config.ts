import type { Config } from 'tailwindcss';
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { bg: '#D6D8D2', accent: '#495865', text: '#1A1A1A', secondary: '#555' },
      fontFamily: { serif: ['Cormorant Garamond', 'serif'], sans: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [],
} satisfies Config;
