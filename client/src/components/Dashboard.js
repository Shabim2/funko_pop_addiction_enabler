import { Container, Stack } from "@chakra-ui/react";
import React, { Component } from "react";
import FunkoCard from "./FunkoCard";
// import Header from "./Header";
import mockListData from "../data/mockListData.json";
import SearchBar from "./SearchBar";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };

    this.originalProducts = [];
  }

  async componentDidMount() {
    const products = mockListData;
    this.originalProducts = [...products];
    this.setState({ products: products });
  }
  render() {
    const { products } = this.state;
    return (
      <Container className="dashboard-container" minW="60vw">
        <SearchBar />
        <Stack className="funko-stack" spacing={4}>
          {products.map((product, index) => {
            return <FunkoCard key={index} funko={product} />;
          })}
        </Stack>
      </Container>
    );
  }
}
