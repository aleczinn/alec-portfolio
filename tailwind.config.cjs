const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                "transparent": "transparent",
                "edel": {
                    dark: "#111111",
                    gray: "#2F2F2F",
                    bright: "#F6F6F6",
                    primary: "#FFCB74"
                },
                "new": {
                    lightest: "#95a3b9",
                    light: "#7f91ab",
                    DEFAULT: "#3F4C60",
                    dark: "#3f4c60",
                },
                "blackwhite": {
                    black: "#161616",
                    gray: "#D3D3D3",
                    "gray-light": "#D3D3D3",
                    white: "#FEFEFE",
                    primary: "#FFCB74"
                },
                "black": "#000000",
                "white": "#ffffff"
            },
            screens: {
                '3xl': '112rem', // 1792px
                '4xl': '128rem'  // 2048px
            },
            maxWidth: {
                "portfolio": "110rem"
            },
            fontSize: {
                "4xs": "0.375rem",
                "3xs": "0.5rem",
                "2xs": "0.625rem"
            },
            fontFamily: {
                "inter": ["Inter", ...defaultTheme.fontFamily.sans],
                "manrope": ["Manrope", ...defaultTheme.fontFamily.sans],
            },
            borderWidth: {
                1: "1px",
            },
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/typography"),
    ],
}
