/** @type {import('tailwindcss').Config} */
export default {
  //purge content from files
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // Add other file paths or globs if needed
  ],
  theme: {
    extend: {
      colors: {
        nebulaBlack: '#100217',
        black2: 'rgba(35,2,51,.85)',
        offWhite: '#e6e6e6',
        electricPurple: '#5000bf',
        neonMagenta: '#cc0aac',
        customBlue: '#1D4ED8', // Your custom color
        blue: {
          100: '#dbeafe',
          200: '#bfdbfe',
          // Add or override more shades as needed
          500: '#3B82F6', // Overriding the default blue-500
          900: '#1e40af',
        },

      },
    },
  },
  plugins: [],
}

