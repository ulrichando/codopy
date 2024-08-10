// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       width: {
//         128: "38rem",
//       },
//       height: {
//         128: "38rem",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        128: "38rem",
      },
      height: {
        128: "38rem",
      },
      backgroundImage: {
        "custom-image": "url('/path/to/your/image.jpg')",
      },
    },
  },
  plugins: [],
};
