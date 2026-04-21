/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./themes/frosted-terminal/layouts/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'hacker-green': '#00ff41',
        'terminal-black': '#0d0d0d',
      },
      backdropBlur: {
        xs: '2px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            a: {
              color: '#00ff41',
              '&:hover': {
                color: '#00cc33',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
