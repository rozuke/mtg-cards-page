/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor: {
        "dark-yellow": "#CEAC52",
      },
      textColor: {
        "soft-green": "#CEFFDC",
      },
      backgroundImage: {
        "gradient-card":
          "radial-gradient(47.16% 47.16% at 50% 50%, rgba(76, 62, 51, 0.79) 0%, rgba(182, 152, 76, 0.94) 100%)",
      },
    },
  },
  plugins: [],
};
