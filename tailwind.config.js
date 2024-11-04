/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "main-white": "#fff",
        "main-blue": "#00a8f3",
        "main-pink": "#ff4081",
        "main-yellow": "#ffeb3b",
        "main-green": "#00e676",
        "main-purple": "#8a0788",
        "dark-blue": "#09091e",
        "purple-dark": "#1a011a",
        "gray-dark": "#1c1c1e",
        "gray-light": "#a9a9a9",
        "gray-medium": "#bebebe",
        "black-light": "#1c1c1e",
        "gray-pale": "#d3d5d9",
      },

      spacing: {
        "2px": "2px",
        "6px": "6px",
        "10px": "10px",
      },
      fontSize: {
        "16px": "16px",
        "20px": "20px",
        "28px": "28px",
      },
      width: {
        "130px": "130px",
        "60%": "60%",
        "75%": "75%",
        "90%": "90%",
        "94%": "94%",
        "250px": "250px",
        "35%": "35%",
        "10/12": "83.333333%",
        "4/6": "66.666667%",
      },
      borderColor: {
        "white-10": "rgba(255, 255, 255, 0.1)",
      },
      height: {
        "275px": "275px",
        "screen-dynamic": "calc(var(--vh) * 100)",
      },
      minWidth: {
        "100px": "100px",
      },
      maxWidth: {
        "400px": "400px",
        "800px": "800px",
      },
      flexBasis: {
        "10%": "10%",
        "60%": "60%",
        "80%": "80%",
        "90%": "90%",
      },
      translate: {
        "-50%": "-50%",
      },
      inset: {
        "50%": "50%",
        "10px": "10px",
      },
      flexBasis: {
        "5/12": "41.666667%",
      },
    },

    screens: {
      sm: "640px", // make sure this is set correctly
      // other breakpoints
    },
  },

  plugins: [],
};
