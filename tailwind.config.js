/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "grey": "#555555",
        "primary": "#F16126",
        "secondary": "#fff9f1",
        "black": "#101115",
        "blur": "#fdfdfd73"
      },
      padding:{
        "6.25": "25px",
        "3.75": "15px",
        "5.5": "22px"
      },
      borderColor:{
        "primary": "rgba(16,17,21,0.1)",
        "mobile": "rgba(255,255,255,0.1)",
      },
      screens:{
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'plg': '992px',
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'pxl': '1200px',
        // => @media (min-width: 1200px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        
      },
      boxShadow:{
        "custom": "0 0 10px hsla(0,0%,53%,.1)",
        "orange": "0 5px 10px rgba(241,97,38,.5)"
      }
    },
  },
  plugins: [],
}