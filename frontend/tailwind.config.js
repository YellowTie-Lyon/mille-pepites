/** @type {import('tailwindcss').Config} */
module.exports = {
  blocklist: ["overline"],
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        espresso: "#2E1B12",
        cookie: "#7A4A2A",
        caramel: "#C08552",
        creme: "#F6EEE3",
        sable: "#E8D7BF",
        offwhite: "#FFFBF5",
        brique: "#B5452F",
        wc: { success: "#3E7C4F", info: "#5C7A99" },
      },
      fontFamily: {
        title: ['"Fraunces"', "Georgia", "serif"],
        body: ['"Manrope"', "system-ui", "sans-serif"],
      },
      screens: {
        desktop: { min: "1025px" },
        tablet: { max: "1024px" },
        mobile: { max: "767px" },
      },
      maxWidth: { site: "1280px" },
      boxShadow: {
        soft: "0 2px 14px rgba(46,27,18,0.06)",
        card: "0 10px 30px -12px rgba(46,27,18,0.14)",
        lift: "0 22px 44px -16px rgba(46,27,18,0.22)",
        stamp: "0 0 0 1px rgba(46,27,18,0.10)",
      },
      borderRadius: {
        card: "24px",
        blob: "32px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        rise: {
          from: { transform: "translateY(115%)" },
          to: { transform: "translateY(0)" },
        },
        popin: {
          from: { opacity: "0", transform: "translateY(10px) scale(0.96)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 42s linear infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        float: "float 6s ease-in-out infinite",
        popin: "popin .4s cubic-bezier(.22,1,.36,1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
