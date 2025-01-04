/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        darkseagreen: '#8FBC8F'
      },
      keyframes: {
        'download-bar': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },
      animation: {
        'download-bar': 'download-bar 2s linear forwards'
      }
    }
  },
  plugins: []
}
