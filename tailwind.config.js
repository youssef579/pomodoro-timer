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
            },
            boxShadow: {
                timer: "-5rem -5rem 10rem 0 #272c5a, 5rem 5rem 10rem 0 #121530",
            },
            backgroundImage: {
                timer: "linear-gradient(to bottom right,#0e112a,#2e325a)",
            },
        },
    },
    plugins: [],
};
