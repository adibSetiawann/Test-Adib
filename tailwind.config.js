/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      // padding: "16px",
    },
    extend: {
      backgroundImage: {
        "mobile-session": "url('/src/images/bg-pattern-mobile.svg')",
        "desktop-session": "url('/src/images/bg-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};
