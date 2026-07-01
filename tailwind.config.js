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
          bg: 'oklch(0.243 0.030 283.9 / <alpha-value>)',
          crust: 'oklch(0.183 0.020 284.1 / <alpha-value>)',
          surface: 'oklch(0.216 0.025 284.0 / <alpha-value>)',
          overlay: 'oklch(0.324 0.032 281.9 / <alpha-value>)',
          border: 'oklch(0.404 0.032 280.1 / <alpha-value>)',
          borderLight: 'oklch(0.476 0.034 278.5 / <alpha-value>)',
          text: 'oklch(0.879 0.043 272.1 / <alpha-value>)',
          subtext: 'oklch(0.817 0.040 272.7 / <alpha-value>)',
          subtext0: 'oklch(0.751 0.040 273.8 / <alpha-value>)',
          blue: 'oklch(0.766 0.111 259.9 / <alpha-value>)',
          green: 'oklch(0.858 0.109 142.8 / <alpha-value>)',
          yellow: 'oklch(0.919 0.070 86.6 / <alpha-value>)',
          red: 'oklch(0.756 0.130 2.7 / <alpha-value>)',
          mauve: 'oklch(0.787 0.119 304.7 / <alpha-value>)',
          teal: 'oklch(0.858 0.079 182.8 / <alpha-value>)',
          sky: 'oklch(0.847 0.083 210.3 / <alpha-value>)',
          lavender: 'oklch(0.817 0.091 277.3 / <alpha-value>)',
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
