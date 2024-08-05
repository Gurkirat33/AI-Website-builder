/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        tilt: "tilt 10s infinite linear",
        rotate: "rotate 10s linear infinite",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },
      colors: {
        primary: {
          50: "#E4E4E4",
          100: "#C8C8C9",
          200: "#9D9E9F",
          300: "#717273",
          400: "#4C4D4E",
          500: "#242526",
          600: "#1F2021",
          700: "#191A1B",
          800: "#141516",
          900: "#0C0C0D",
        },
        secondary: {
          50: "#FFE5F1",
          100: "#FFCCE4",
          200: "#FF99C9",
          300: "#FF66AE",
          400: "#FF3392",
          500: "#F15BB5", // Base color
          600: "#CC4D99",
          700: "#B23F80",
          800: "#7A2C59",
          900: "#521B3D",
        },
        tertiary: {
          50: "#E6F3FF",
          100: "#CCE6FF",
          200: "#99CCFF",
          300: "#66B3FF",
          400: "#3399FF",
          500: "#3A86FF",
          600: "#0066FF",
          700: "#0052CC",
          800: "#003D99",
          900: "#002966",
        },
      },
    },
  },
  plugins: [],
};
