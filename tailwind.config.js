module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                night: "#1a1b26",
                "terminal-white": "#c0caf5",
                "terminal-red": "#f7768e",
                "terminal-green": "#73daca",
                "terminal-black": "#414868",
                "terminal-blue": "#7dcfff",
                "terminal-purple": "#bb9af7",
            },
        },
    },
    plugins: [],
};
