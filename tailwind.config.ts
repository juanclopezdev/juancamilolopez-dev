import { details } from "framer-motion/client";
import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        details: "var(--details)",
        text: "var(--text)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        darkbackground: "var(--dark-background)",
        darkdetails: "var(--dark-details)",
        darktext: "var(--dark-text)",
        darksecondary: "var(--dark-secondary)",
        darktertiary: "var(--dark-tertiary)",
        "pink-lace": {
          "50": "#fff0f9",
          "100": "#ffdbf2",
          "200": "#ffc9ed",
          "300": "#ff9cdc",
          "400": "#ff5fc2",
          "500": "#ff31a7",
          "600": "#f50d84",
          "700": "#d60067",
          "800": "#b00455",
          "900": "#920949",
          "950": "#5a0028",
        },
        "french-pass": {
          "50": "#f0faff",
          "100": "#dff3ff",
          "200": "#bfecff",
          "300": "#79daff",
          "400": "#32c8fe",
          "500": "#07b2f0",
          "600": "#0090cd",
          "700": "#0072a6",
          "800": "#036089",
          "900": "#095071",
          "950": "#06324b",
        },
        melrose: {
          "50": "#f5f3ff",
          "100": "#ede8ff",
          "200": "#dbd5ff",
          "300": "#cdc1ff",
          "400": "#a388fd",
          "500": "#8758fa",
          "600": "#7835f2",
          "700": "#6923de",
          "800": "#581dba",
          "900": "#491a98",
          "950": "#2c0e67",
        },
        "woody-brown": {
          "50": "#f5f3f1",
          "100": "#e7e0da",
          "200": "#d1c2b7",
          "300": "#b69c8e",
          "400": "#a07f6f",
          "500": "#916f61",
          "600": "#7c5b52",
          "700": "#654743",
          "800": "#563e3d",
          "900": "#463333",
          "950": "#2a1e1f",
        },
        "cocoa-brown": {
          "50": "#f5f3f1",
          "100": "#e7e0da",
          "200": "#d1c2b7",
          "300": "#b69c8e",
          "400": "#a07f6f",
          "500": "#916f61",
          "600": "#7c5b52",
          "700": "#654743",
          "800": "#563e3d",
          "900": "#3b2b2b",
          "950": "#2a1e1f",
        },
        "blue-bayoux": {
          "50": "#f3f7f8",
          "100": "#e0ebed",
          "200": "#c5d7dc",
          "300": "#9dbac3",
          "400": "#6e96a2",
          "500": "#527b88",
          "600": "#476673",
          "700": "#3e5660",
          "800": "#394951",
          "900": "#333f46",
          "950": "#1e272e",
        },
        "lavender-purple": {
          "50": "#f8f7fb",
          "100": "#f0f0f7",
          "200": "#e3e3f1",
          "300": "#cfcce6",
          "400": "#b5afd6",
          "500": "#8c80bd",
          "600": "#8474b3",
          "700": "#7361a0",
          "800": "#605186",
          "900": "#4f446e",
          "950": "#332b4a",
        },
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
export default config;
