/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        ContactFormShadow:
          "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        CustomBoxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",
      },
      colors: {
        primary: "var(--color-primary)",
        primary1: "var(--color-primary1)",
        secondary: "var(--color-secondary)",
        secondary1: "var(--color-secondary1)",
        secondary2: "var(--color-secondary2)",
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        text1: "var(--color-text1)",
        text2: "var(--color-text2)",
        button: "var(--color-button)",
        button1: "var(--color-button1)",
        button2: "var(--color-button2)",
        button3: "var(--color-button3)",
        hoverbutton1: "var(--color-hoverbutton1)",
        hoverbutton2: "var(--color-hoverbutton2)",
      },
    },
  },
  plugins: [],
};
