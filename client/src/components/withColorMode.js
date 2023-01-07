// @ts-nocheck
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const withColorMode = (WrappedComponent) => (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const fontColorMode = useColorModeValue('gray.800', 'white')
 

  return (
    <WrappedComponent
      {...props}
      colorMode={colorMode}
      toggleColorMode={toggleColorMode}
      fontColor={fontColorMode}
    />
  );
};

export default withColorMode;
