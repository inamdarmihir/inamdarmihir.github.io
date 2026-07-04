/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'sans-serif'],
        mono: ['SF Mono', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        macos: {
          bg: 'oklch(0.21 0.03 275)',
          crust: 'oklch(0.18 0.02 275)',
          surface: 'oklch(0.19 0.02 275)',
          overlay: 'oklch(0.3 0.03 275)',
          border: 'oklch(0.4 0.03 275)',
          borderLight: 'oklch(0.47 0.03 275)',
          text: 'oklch(0.87 0.03 275)',
          subtext: 'oklch(0.81 0.03 275)',
          subtext0: 'oklch(0.74 0.03 275)',
          blue: 'oklch(0.75 0.13 265)',
          green: 'oklch(0.85 0.12 140)',
          yellow: 'oklch(0.9 0.1 90)',
          red: 'oklch(0.7 0.16 10)',
          mauve: 'oklch(0.75 0.13 310)',
          teal: 'oklch(0.85 0.1 180)',
          sky: 'oklch(0.85 0.1 220)',
          lavender: 'oklch(0.8 0.1 280)',
          'blue-30': 'oklch(0.75 0.13 265 / 0.3)',
          'blue-50': 'oklch(0.75 0.13 265 / 0.5)',
          'borderLight-20': 'oklch(0.47 0.03 275 / 0.2)',
          'borderLight-30': 'oklch(0.47 0.03 275 / 0.3)',
          'borderLight-40': 'oklch(0.47 0.03 275 / 0.4)',
          'borderLight-50': 'oklch(0.47 0.03 275 / 0.5)',
          'borderLight-60': 'oklch(0.47 0.03 275 / 0.6)',
          'borderLight-80': 'oklch(0.47 0.03 275 / 0.8)',
          'crust-50': 'oklch(0.18 0.02 275 / 0.5)',
          'crust-80': 'oklch(0.18 0.02 275 / 0.8)',
          'overlay-30': 'oklch(0.3 0.03 275 / 0.3)',
          'overlay-50': 'oklch(0.3 0.03 275 / 0.5)',
          'overlay-70': 'oklch(0.3 0.03 275 / 0.7)',
          'subtext-50': 'oklch(0.81 0.03 275 / 0.5)',
          'subtext0-50': 'oklch(0.74 0.03 275 / 0.5)',
          'surface-40': 'oklch(0.19 0.02 275 / 0.4)',
          'surface-50': 'oklch(0.19 0.02 275 / 0.5)',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
