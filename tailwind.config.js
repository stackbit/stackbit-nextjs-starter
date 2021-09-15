const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    presets: [require('@stackbit/components/themes/default/tailwind.default.config')],
    mode: 'jit',
    purge: {
        enabled: true,
        content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@stackbit/components/src/{base,layouts,components}/**/*.{js,ts,jsx,tsx}'],
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
