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
            keyframes: {
                "fade-in": {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
            },
            animation: {
                "fade-in": "fade-in 300ms",
            },
            screens: {
                sm: "550px",
            }
        },
    },
    plugins: [],
};
