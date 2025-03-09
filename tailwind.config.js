/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "360px", max: "819px" },
      md: { min: "820px", max: "1023px" },
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    
    extend: {},
  },
  plugins: [],
};
