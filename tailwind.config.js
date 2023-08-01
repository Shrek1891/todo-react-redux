module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    {pattern: /bg-./},
    {pattern: /text-./},
    {pattern: /border-./},
  ],
  theme: {
    extend: {
      fontFamily: {
        'lugrasimo': ['Lugrasimo', 'cursive'],
      },
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
}

