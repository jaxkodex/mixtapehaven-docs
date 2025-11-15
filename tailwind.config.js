/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.md',
    './*.html',
    './*.md'
  ],
  theme: {
    extend: {
      colors: {
        'mixtape-cyan': '#00E5FF',
        'mixtape-magenta': '#FF00E5',
        'mixtape-purple': '#6B21A8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
