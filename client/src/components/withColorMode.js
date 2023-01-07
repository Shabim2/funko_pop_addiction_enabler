// @ts-nocheck
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const withColorMode = (WrappedComponent) => (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const fontColorMode = useColorModeValue("#1A202C", "#FFF");
  const gridColorMode = useColorModeValue("#F7FAFC", "#1A202C");
  const chartLineColorMode = useColorModeValue('#145266', '#F7EF81')
  const chartStrokeColorMode = useColorModeValue('#A0AEC0',"#4A5568");

  return (
    <WrappedComponent
      {...props}
      colorMode={colorMode}
      toggleColorMode={toggleColorMode}
      fontColor={fontColorMode}
      gridColorMode={gridColorMode}
      chartLineColorMode={chartLineColorMode}
      chartStrokeColorMode={chartStrokeColorMode}
    />
  );
};

export default withColorMode;
