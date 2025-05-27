/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-page': "url('/assets/LoginBackground.svg')",
        'game-home': "url('/assets/Background.svg')",
        'game-end': "url('/assets/LoginBackground.svg')",
      },
    },
  },
  plugins: [],
}
