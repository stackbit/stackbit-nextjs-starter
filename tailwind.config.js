const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const themeStyle = require('./content/data/theme-style.json');

module.exports = {
    presets: [require('@stackbit/components/styles/default/tailwind.default.config.js')],
    mode: 'jit',
    purge: {
        enabled: true,
        content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@stackbit/components/{base,layouts,components}/**/*.{js,ts,jsx,tsx}', './content/**' /* for ThemeStyle object */],
        safelist: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i']
    },
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: themeStyle.primary,
                secondary: themeStyle.secondary,
                base: themeStyle.base,
                'complementary-1': themeStyle['complementary-1'],
                'complementary-2': themeStyle['complementary-2'],
                info: themeStyle.info
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                'h1': { fontSize: themeStyle.h1.size + 'px', lineHeight: themeStyle.h1.lineHeight + 'px', textDecoration: themeStyle.h1.decoration, fontWeight: themeStyle.h1.style },
                'h2': { fontSize: themeStyle.h2.size + 'px', lineHeight: themeStyle.h2.lineHeight + 'px', textDecoration: themeStyle.h2.decoration, fontWeight: themeStyle.h2.style },
            })
        })
    ]
};
