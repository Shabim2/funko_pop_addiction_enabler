import React, { Component } from 'react';
import axios from 'axios';
import FunkoCard from './FunkoCard';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import SearchBar from './SearchBar';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

    this.originalProducts = []
  }

  async componentDidMount() {
    const { data: { products } } = await axios.get('https://3vf6b90hzj.execute-api.us-east-1.amazonaws.com/dev/challice/products')
    this.originalProducts = [...products];
    this.setState({ products: products })
  }

  handleSearchInputChange = ({ target: { value } }) => {
    if (!value) return;

    this.setState({ products: this.originalProducts.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase())) })
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <Typography variant="h2" gutterBottom>
          FunkoPop Dashboard
        </Typography>
        <SearchBar handleSearchInputChange={this.handleSearchInputChange} />
        <Stack spacing={4}>
          {products.map((product, index) => {
            const { name, websites, image } = product;
            return (
              <FunkoCard
                key={index}
                name={name}
                websites={websites}
                image={image}
              />
            )
          })}
        </Stack>
      </Container>
    )
  }
}
