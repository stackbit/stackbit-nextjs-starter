module.exports = {
  presets: [require('@stackbit/components/themes/tailwind.bold.config')],
  purge: {
    enabled: false,
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
      './node_modules/@stackbit/components/dist/**/*.{js,ts,jsx,tsx}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
