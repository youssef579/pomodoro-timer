/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                "light-blue": "#d7e0ff",
                "dark-blue": "#1e213f",
                "dark-blue-2": "#161932",
                "light-grey": "#eff1fa",
            },
            transitionDuration: {
                DEFAULT: "300ms",
            },
        },
    },
    plugins: [],
};
