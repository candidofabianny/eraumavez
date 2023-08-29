import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        crushed: ["var(--font-crushed)", "cursive"],
        aclonica: ["var(--font-aclonica)", "sans-serif"],
      },
      colors: {
        darkpurple: "#40347C",
        purple: "#6354AD",
        blue: "#0BC4D6",
        yellow: "#FED713",
        grey: "#F5F5F5",  
        red: "#EA2431",     
      },
    },
  },
  plugins: [],
}
export default config
