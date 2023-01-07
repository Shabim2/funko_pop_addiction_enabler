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
import withRouter from "./withRouter";
import mockData from "../data/mockItemData.json";
import PriceGraph from "./PriceGraph";
import theme from "../theme";

class FunkoInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      funko: {},
      variants: [],
      currentVariant: {},
    };
  }

  componentDidMount() {
    const funkoId = this.props.params.funko_id;
    const funko = mockData.filter((m) => m.id === funkoId)[0];

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
      <Button
        key={variant.name}
        onClick={(e) => this.handleVariantClick(e, i)}
        variant={"outline"}
        colorScheme={"teal"}
      >
        {variant.name}
      </Button>
    ));
  };

  randomColor = () => {
    const keys = Object.keys(theme.colors.customColors);
    const color = theme.colors.customColors[keys[(keys.length * Math.random()) << 0]];
    console.log(color);
    return color;
  };

  renderLinks = () => {
    const { currentVariant } = this.state;
    const listings = currentVariant.marketplaceListings;
    return (
      <VStack className="variant-listings" spacing={5} m="auto">
        {listings.map((listing, i) => (
          <LinkBox key={i} as={Card} m="auto 2vw" borderWidth="1px">
            <Box className="listing-card" p="5%" minW="xs">
              <LinkOverlay href={listing.url} m="auto">
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
    this.randomColor();
    return (
      <Box className="funko-info-container" p={4}>
        {funko && (
          <VStack className="funko-details" spacing={4}>
            <Heading>
              #{number} {name} - {series}
            </Heading>
            <Image
              src={`/${image}`}
              alt="funko-image"
              boxSize="30vw"
              minW="350px"
              minH="350px"
            />
            <HStack className="variants-container">
              {variants.length && this.renderVariants()}
            </HStack>
            <Wrap className="funko-info" justify="center" m="auto">
              <WrapItem className="graph-container" w="auto" marginRight={"8vw"}>
                {variants.length && <PriceGraph currentVariant={currentVariant} />}
              </WrapItem>
              <WrapItem className="links-container" w="auto">
                {variants.length && this.renderLinks()}
              </WrapItem>
            </Wrap>
          </VStack>
        )}
      </Box>
    );
  }
}
export default withRouter(FunkoInfo);
