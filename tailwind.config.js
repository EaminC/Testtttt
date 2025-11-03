module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(0, 0%, 88%)",
        input: "hsl(0, 0%, 88%)",
        ring: "hsl(37, 51%, 77%)",
        background: "hsl(0, 0%, 98%)",
        foreground: "hsl(0, 0%, 15%)",
        primary: {
          DEFAULT: "hsl(0, 62%, 35%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(37, 51%, 77%)",
          foreground: "hsl(0, 62%, 20%)",
        },
        tertiary: {
          DEFAULT: "hsl(33, 40%, 92%)",
          foreground: "hsl(0, 62%, 20%)",
        },
        neutral: {
          DEFAULT: "hsl(0, 0%, 98%)",
          foreground: "hsl(0, 0%, 15%)",
        },
        success: "hsl(148, 45%, 42%)",
        warning: "hsl(33, 100%, 45%)",
        muted: {
          DEFAULT: "hsl(0, 0%, 94%)",
          foreground: "hsl(0, 0%, 45%)",
        },
        accent: {
          DEFAULT: "hsl(0, 0%, 94%)",
          foreground: "hsl(0, 0%, 15%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(0, 0%, 15%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(0, 0%, 15%)",
        },
        gray: {
          50: "hsl(0, 0%, 98%)",
          100: "hsl(0, 0%, 94%)",
          200: "hsl(0, 0%, 88%)",
          300: "hsl(0, 0%, 75%)",
          400: "hsl(0, 0%, 60%)",
          500: "hsl(0, 0%, 45%)",
          600: "hsl(0, 0%, 35%)",
          700: "hsl(0, 0%, 25%)",
          800: "hsl(0, 0%, 15%)",
          900: "hsl(0, 0%, 7%)",
        },
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["Playfair", "serif"],
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      spacing: {
        4: "1rem",
        8: "2rem",
        12: "3rem",
        16: "4rem",
        24: "6rem",
        32: "8rem",
        48: "12rem",
        64: "16rem",
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(135deg, hsl(0, 62%, 35%) 0%, hsl(13, 50%, 25%) 100%)",
        "gradient-2":
          "linear-gradient(135deg, hsl(37, 51%, 77%) 0%, hsl(33, 40%, 92%) 100%)",
        "button-border-gradient":
          "linear-gradient(90deg, hsl(0, 62%, 35%) 0%, hsl(10, 65%, 40%) 100%)",
      },
    },
  },
  plugins: [],
};
