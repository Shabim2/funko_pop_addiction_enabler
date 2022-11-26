import React, { Component } from 'react';
import axios from 'axios';
import FunkoCard from './FunkoCard';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      products : []
    };
  }

  async componentDidMount() {
    let res = await axios.get('https://3vf6b90hzj.execute-api.us-east-1.amazonaws.com/dev/challice/products')
    console.log('res.data', res.data);
    this.setState({ products: res.data.products })
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <Typography variant="h2" gutterBottom>
          FunkoPop Dashboard
        </Typography>        
        <Stack spacing={4}>
          {products.map((product, index) => {
            const { name, websites, image } = product;
            return (
              <FunkoCard 
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
