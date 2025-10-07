
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}","./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { bg:"#0C1A12", cream:"#F1E7D6", gold:"#C8A860" },
      backgroundImage: { "rustic-texture": "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 6px)" }
    },
  }, plugins: [],
}
