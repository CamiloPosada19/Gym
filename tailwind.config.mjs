/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#050505',
          surface: '#0B0B0E',
          card: '#111114',
          cardHover: '#18181D',
          border: 'rgba(255, 255, 255, 0.1)',
          red: '#DC2626',
          redLight: '#EF4444',
          redDark: '#991B1B',
          muted: '#A1A1AA',
          text: '#FAFAFA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Montserrat', 'Impact', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 35px -5px rgba(220, 38, 38, 0.45)',
        'glow-white': '0 0 35px -5px rgba(255, 255, 255, 0.25)',
        'glow-subtle': '0 0 25px 0 rgba(255, 255, 255, 0.08)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.85)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
