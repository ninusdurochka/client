/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{jsx,html,js}",
        "node_modules/flowbite-react/lib/esm/**/*.js"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

