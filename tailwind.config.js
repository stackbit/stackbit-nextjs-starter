module.exports = {
  presets: [require('@stackbit/components/themes/tailwind.bold.config')],
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@stackbit/components/themes/*.js', './node_modules/@stackbit/components/src/**/*.{js,ts,jsx,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
