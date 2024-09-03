import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      colors: {
        'rosaC': '#D7BEB6',
        'rosinha': '#F8EEEC',
        'rosaNav': '#DFB2A9',
        'marrom': '#9F7466',
        'acinzentado': '#353534',
        'rosaB': '#E8D5CE',
        'rosaMarrom': '#B78E80',
        'rosa': '#E89B93',
        
      },
      fontFamily: {
        'libre': ['Libre', 'sans-serif'],
        'jackes': ['Jackes', 'sans-serif'],
      }
    }
  },
  plugins: [],
};
export default config;
