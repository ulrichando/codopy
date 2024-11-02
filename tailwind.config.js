/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        60: "15rem", // 240px
        80: "20rem", // 320px
        100: "25rem", // 400px
        120: "30rem", // 480px
        140: "35rem", // 560px
        160: "40rem", // 640px
        180: "45rem", // 720px
        200: "50rem", // 800px
        240: "60rem", // 960px
        280: "70rem", // 1120px
        320: "80rem", // 1280px
      },
      height: {
        60: "15rem", // 240px
        80: "20rem", // 320px
        100: "25rem", // 400px
        120: "30rem", // 480px
        140: "35rem", // 560px
        160: "40rem", // 640px
        180: "45rem", // 720px
        200: "50rem", // 800px
        240: "60rem", // 960px
        280: "70rem", // 1120px
        320: "80rem", // 1280px
      },
    },
  },
  plugins: [],
};
