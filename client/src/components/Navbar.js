import { Box, IconButton, Flex, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box className="navbar-container" border={"1px"} p={1}>
      <Flex h={"4vh"} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Heading size={"lg"}>Funko Pop Addiction Enabler</Heading>
        </Box>
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          aria-label="color-toggle-button"
        />
      </Flex>
    </Box>
  );
}
