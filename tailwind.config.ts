import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    fontFamily: {
      inter: ['var(--font-inter)'],
      dm_serif: ['var(--font-dm-serif-text)']
    },
    extend: {
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: "scale(3)",
            opacity: '0'
          }
        },
        'move-left': {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-50%)'
          }
        }
      },
      animation: {
        'ping-large': 'ping-large 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'move-left': "move-left 1s linear infinite"
      }
    },
  },
  variants: {
    extend: {
      outline: ['after'],
      outlineOffset: ['after'],
    },
  },
  plugins: [],
};
export default config;
