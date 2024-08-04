/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'form-srif': ['Foundry Form Srif', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
