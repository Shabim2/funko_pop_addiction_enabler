import { Flex, Heading } from "@chakra-ui/react";
import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <Flex
        className="header-container"
        width={"-webkit-fill-available"}
        minHeight={"7vh"}
        border={"1px"}
        p={2}
      >
        <Heading size="md" textAlign={"center"}>
          {" "}
          FunkoPop Dashboard
        </Heading>
      </Flex>
    );
  }
}
