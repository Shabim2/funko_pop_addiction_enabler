import {
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Image,
  VStack,
  Text,
  LinkBox,
  LinkOverlay,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { Component } from "react";
import mockData from "../data/mockItemData.json";
import PriceGraph from "./PriceGraph";


export default class FunkoInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      funko: {},
      variants: [],
      currentVariant: {},
    };
  }

  componentDidMount() {
    const funko = mockData[0];
    const variants = funko.variants;
    const currentVariant = variants[0];
    this.setState({ funko: funko, variants: variants, currentVariant: currentVariant });
  }

  handleVariantClick = (event, i) => {
    const { variants } = this.state;
    this.setState({ currentVariant: variants[i] });
  };

  renderVariants = () => {
    const { variants } = this.state;
    return variants.map((variant, i) => (
      <Button key={variant.name} onClick={(e) => this.handleVariantClick(e, i)}>
        {variant.name}
      </Button>
    ));
  };

  renderLinks = () => {
    const { currentVariant } = this.state;
    const listings = currentVariant.marketplaceListings;
    return (
      <VStack className="variant-listings" spacing={5}>
        {listings.map((listing, i) => (
          <LinkBox key={i} as={Card} margin={"auto 2vw"} borderWidth="1px">
            <Box className="listing-card" p={"10%"} minWidth={"xs"}>
              <LinkOverlay href={listing.url} margin="auto">
                <Text className="listing-link">
                  {listing.url} - {listing.price}
                </Text>
              </LinkOverlay>
            </Box>
          </LinkBox>
        ))}
      </VStack>
    );
  };

  render() {
    const { funko, variants, currentVariant } = this.state;
    const { number, name, image, series } = funko;
    return (
      <Box className="funko-info-container" p={4}>
        {funko && (
          <VStack className="funko-details" spacing={4}>
            <Heading>
              #{number} {name} - {series}
            </Heading>
            <Image src={image} alt={"funko-image"} border="1px" boxSize={"30vw"} />
            <HStack className="variants-container">
              {variants.length && this.renderVariants()}
            </HStack>
            <Wrap className="funko-info" justify={"center"} margin="auto">
              <WrapItem className="graph-container">
                {variants.length && <PriceGraph currentVariant={currentVariant}/>}
              </WrapItem>
              <WrapItem className="links-container" width={"auto"}>
                {variants.length && this.renderLinks()}
              </WrapItem>
            </Wrap>
          </VStack>
        )}
      </Box>
    );
  }
}
