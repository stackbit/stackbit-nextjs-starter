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
                body: themeStyle.body,
                headline: themeStyle.headline,
                primary: themeStyle.primary,
                secondary: themeStyle.secondary,
                neutral: themeStyle.neutral,
                complementary: themeStyle.complementary,
                'complementary-alt': themeStyle['complementary-alt'],
                info: themeStyle.info,
                success: themeStyle.success,
                warning: themeStyle.warning
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
