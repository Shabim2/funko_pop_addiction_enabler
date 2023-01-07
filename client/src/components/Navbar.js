import {
  Box,
  IconButton,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
  theme,
} from "@chakra-ui/react";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      className="navbar-container"
      p={"0.5vw"}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex h={"6vh"} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Text fontSize={"2xl"} as="b">
            Funko Pop Addiction Enabler
          </Text>
        </Box>
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          aria-label="color-toggle-button"
          bg={colorMode === "light" ? theme.colors.gray[300] : theme.colors.whiteAlpha[200]}
        />
      </Flex>
    </Box>
  );
}
