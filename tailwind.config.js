/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  //   container: {
  //     screens: {
  //         'sm': '640px',
  //         'md': '768px',
  //         'lg': '1024px',
  //         'xl': '1280px',
  //         '2xl': '1400px',
  //         '3xl': '1630px',
  //         '4xl': '1980px',
  //     }
  // },
    extend: {

      screens: {
        "-4xl": { max: "1935px" },
        // => @media (max-width: 1935px) { ... }

        "-3xl": { max: "1735px" },
        // => @media (max-width: 1735px) { ... }

        "-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }

        "-sm-table": { max: "578px" },
        // => @media (max-width: 578px) { ... }

        "-sm-mobile": { max: "346px" },
        // => @media (max-width: 346px) { ... }
      },
    },
  },
  plugins: [],
};
