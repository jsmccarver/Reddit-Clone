import { theme as chakraTheme } from "@chakra-ui/react";

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const breakpoints = ["40em", "52em", "64em"];

const theme = {
  ...chakraTheme,
  styles: {
    global: () => ({
      body: {
        bg: "#dae0e6",
      },
    }),
  },
  colors: {
    ...chakraTheme.colors,
    black: "#16161D",
    lime: {
      50: "#f2ffde",
      100: "#defcb2",
      200: "#caf884",
      300: "#b5f554",
      400: "#a1f226",
      500: "#88d90d",
      600: "#69a905",
      700: "#4a7801",
      800: "#2b4800",
      900: "#0b1900",
    },
    grey: {
      100: "#f8f9fa",
      200: "#E3E3E3"
    },
  },
  fonts,
  breakpoints,
  icons: {
    ...chakraTheme.icons,
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: "0 0 3000 3163",
    },
  },
};

export default theme;
