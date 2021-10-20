const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
// require style

module.exports = {
    presets: [require('@stackbit/components/styles/default/tailwind.default.config.js')],
    mode: 'jit',
    purge: {
        enabled: true,
        content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@stackbit/components/src/{base,layouts,components}/**/*.{js,ts,jsx,tsx}', './content/**'],
        safelist: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i']
    },
    darkMode: false,
    theme: {
        extend: {
            // ...style
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
