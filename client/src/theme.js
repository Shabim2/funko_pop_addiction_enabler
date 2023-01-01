import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    transparent: "transparent",
    purple: "78569f",
    jonquil: "#ecc30b",
    carmine: "#94101d",
    platinum: "#e8e9eb",
    eagleBlue: "#145266",
    black: "#000",
    white: "#fff",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
