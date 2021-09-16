const config = require('./config.json');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const stackbitThemes = require('@stackbit/components/themes');
const stackbitTheme = stackbitThemes[config.theme] || stackbitThemes.default;

module.exports = {
    presets: [stackbitTheme],
    mode: 'jit',
    purge: {
        enabled: true,
        content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@stackbit/components/{base,layouts,components}/**/*.{js,ts,jsx,tsx}'],
        safelist: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f']
    },
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: '#CCFF00'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
