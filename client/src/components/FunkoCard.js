import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { Component } from "react";

export default class FunkoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [],
    };
  }

  render() {
    const { name, image, series, priceMin, priceMax } = this.props.funko;
    console.log(image);
    return (
      <Flex
        className="funko-card"
        borderWidth="1px"
        borderRadius="lg"
        p={3}
        display="flex"
        minW={"35vw"}
      >
        <Box className="funko-card-image" borderWidth="1px">
          <Image
            src={image}
            alt={"funko-image"}
            boxSize={"15vw"}
            minH={"130px"}
            minW={"130px"}
            objectFit={"scale-down"}
          />
        </Box>
        <Box className="funko-info" alignSelf={"center"} margin={"auto"}>
          <Stack>
            <Text as="b" fontSize="lg">
              {name}
            </Text>
            <Text as="b" fontSize="lg">
              {series}
            </Text>
            <Text fontSize="lg">
              Price Range: {priceMin} - {priceMax}
            </Text>
          </Stack>
        </Box>
      </Flex>
    );
  }
}
