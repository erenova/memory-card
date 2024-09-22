/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        memoryShowBlack: "#110101",
        memoryShowWhite: "#fefefe",
        memoryShowBlue: "#6e9ffc",
        memoryTimeBlue: "#029ac3",
        memoryTimeRed: "#ed0602",
      },
      backgroundImage: {
        memoryShow: "url('./assets/memoryShowBg.png')",
        memoryShowMobile: "url('./assets/memoryShowBgMobile.png')",
        memoryTime: "url('./assets/memoryTimeBg.png')",
        memoryTimeMobile: "url('./assets/memoryTimeBgMobile.png')",
      },
      fontFamily: {
        memoryShowText: "memoryShowText",
        memoryShowStart: "memoryShowStart",
        memoryTimeText: "memoryTimeText",
        memoryTimeLogo: "memoryTimeLogo",
        memoryTimeScore: "memoryTimeScore",
      },
    },
  },
  plugins: [],
};
