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
 
  
};

export default theme;
