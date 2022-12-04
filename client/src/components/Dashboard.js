import { Center, Container, Flex, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { Component } from "react";
import FunkoCard from "./FunkoCard";
import Header from "./Header";
import mockListData from "../data/mockListData.json";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };

    this.originalProducts = [];
  }

  async componentDidMount() {
    const products = mockListData
    this.originalProducts = [...products];
    this.setState({ products: products });
  }
  render() {
    const { products } = this.state;
    return (
      <Flex className="dashboard-container" justifyContent={"center"}>
        <Stack spacing={4} className="funko-stack">
          {products.map((product, index) => {
            return <FunkoCard key={index} funko={product} />;
          })}
        </Stack>
      </Flex>
    );
  }
}
