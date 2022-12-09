import { Card, CardBody, Image, LinkBox, LinkOverlay, Stack, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class FunkoCard extends Component {
  handleCardClick = () => {
    return <Navigate to={`/funko/${this.props.funko.id}`} replace={true} />;
  };

  render() {
    const { name, image, series, priceMin, priceMax } = this.props.funko;

    return (
      <LinkBox>
        <LinkOverlay href={`/funko/${this.props.funko.id}`}>
          <Card
            className="funko-card"
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            p={1}
          >
            <Image
              src={image}
              alt={"funko-image"}
              boxSize={"15vw"}
              minH={"150px"}
              minW={"150px"}
              objectFit={"scale-down"}
              border="1px #E2E8F0 solid"
            />
            <CardBody className="funko-card-body" m={"auto"}>
              <Stack>
                <Text as="b" fontSize="2xl">
                  {name}
                </Text>
                <Text as="b" fontSize="2xl">
                  {series}
                </Text>
                <Text fontSize="2xl">
                  Price Range: {priceMin} - {priceMax}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </LinkOverlay>
      </LinkBox>
    );
  }
}
