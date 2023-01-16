import { Container, Stack } from "@chakra-ui/react";
import React, { Component } from "react";
import FunkoCard from "./FunkoCard";
import mockListData from "../data/mockListData.json";
import SearchBar from "./SearchBar";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      originalProducts: [],
      currentCategory: "",
    };
  }

  async componentDidMount() {
    this.setState({ products: mockListData, originalProducts: mockListData });
  }

  onCategorySelect = (e) => {
    const { originalProducts } = this.state;
    const category = e.target.value;

    if (category === "") {
      console.log(category);
      this.setState({ products: [...originalProducts], currentCategory: "" });
    } else {
      let filteredProducts = [...originalProducts].filter(
        (product) => product.category === category
      );
      this.setState({ products: filteredProducts, currentCategory: category });
    }
  };

  render() {
    const { products } = this.state;
    return (
      <Container className="dashboard-container" minW="60vw">
        <SearchBar onCategorySelect={this.onCategorySelect} />
        <Stack className="funko-stack" spacing={4}>
          {products.map((product, index) => {
            return <FunkoCard key={index} funko={product} />;
          })}
        </Stack>
      </Container>
    );
  }
}
