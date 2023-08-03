module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}'
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

