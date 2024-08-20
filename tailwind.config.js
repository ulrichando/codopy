/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        112: "25rem",
        128: "38rem",
        144: "43rem",
        160: "45rem",
        176: "53rem",
        192: "58rem",
        224: "68rem",
        256: "78rem",
      },
      height: {
        112: "25rem",
        128: "38rem",
        144: "43rem",
        160: "45rem",
        176: "53rem",
        192: "58rem",
        224: "68rem",
        256: "78rem",
      },
      backgroundImage: {
        "custom-image": "url('/path/to/your/image.jpg')",
        "dot-pattern": "radial-gradient(circle, black 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-pattern": "50px 50px",
      },
    },
  },
  plugins: [],
};
