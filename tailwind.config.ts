import type { Config } from "tailwindcss";
// const { fontFamily } = require("tailwindcss/defaultTheme");
import { fontFamily } from "tailwindcss/defaultTheme";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1216px",
      },
    },
    extend: {
      backgroundImage: {
        g1: "linear-gradient(145deg, #B4E5FF 1.09%, #BBDEF1 99.06%)",
        g2: "radial-gradient(558.04% 113.57% at 93% 5.13%, #4AABE0 0%, #007DC1 81.8%)",
        g3: "radial-gradient(62.13% 119.61% at 52.44% -14.71%, #1E5C7E 0%, #003C5D 81.8%)",
        g4: "linear-gradient(135deg, rgba(141, 198, 63, 0.85) 25.14%, rgba(156, 194, 103, 0.85) 98.73%)",
        MysteryShoppers: "url('/images/Mystery Shoppers.png')",
        headingText: "linear-gradient(92deg, #FFF 38.6%, #919191 132.59%)",
        section3Bg: "linear-gradient(111deg, #007DC1 0.54%, #003B5B 93.47%)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        skin: {
          primary: "#007DC1",
          "base-white": "#FAFAFA",
          "primary-1000": "#003C5D",
          secondary: "#8DC63F",
          "prymary-200": "#B0E3FF",
          "secondary-500": "#A0D05F",
          "primary-900": "#00527E",
          "secondary-400": "#B3D97F",
          "primary-100": "#D7F1FF",
          "brand-primary": "#2563EB",
          "gray-20": "#DDE1E6",
          "gray-100": "#F9F9F9",
          "gray-200": "#F2F2F2",
          "gray-400": "#7A7A7A",
          "gray-900": "#061C3D",
          "neutral-100": "#F3F4F6",
          "neutral-400": "#9CA3AF",
          "neutral-500": "#6B7280",
          "neutral-600": "#6B7280",
          "neutral-800": "#353E4C",
          "primary-50": "#F0F5FF",
          "secondary-100": "#E8E8EA",
          "play-sky-blue": "#B7E3FB",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", ...fontFamily.sans],
        lato: ["var(--font-lato)", ...fontFamily.sans],
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },

      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
