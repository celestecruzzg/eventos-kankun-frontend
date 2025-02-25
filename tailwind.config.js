/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          darkBlue: "#222B60",
          mediumBlue: "#5C72B4",
          lightBlue: "#9BB7EB",
        },
      },
    },
    plugins: [],
  };
  