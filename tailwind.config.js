/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            boxShadow: {
                desynkro: '0px 1px 25px 5px #000000AD',
            },
            colors: {
                nav: '#00202B',
            },
            backgroundImage: {
                digisonica: 'url("./assets/images/digisonica_bg.png")',
                'digisonica-02': 'url("./assets/images/digisonica_bg_02.png")',
            },
        },
    },
    plugins: [],
};
