import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      100: "#EDF2F7",
      900: "#171923",
    },
    customColors: {
      purple: "#78569f",
      jonquil: "#ecc30b",
      carmine: "#94101d",
      platinum: "#F3F6F7",
      eagleBlue: "#145266",
      royalDarkBlue: "#002F6C",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
