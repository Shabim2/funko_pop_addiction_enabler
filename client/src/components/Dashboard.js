import React, { Component } from 'react';
import axios from 'axios';
import FunkoCard from './FunkoCard';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import shikamaru from '../examplePictures/shikamaru.jpg'
import leorio from '../examplePictures/leorio.jpg'

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
    // this.setState({ products: res.data.products })
    this.setState({
      products: [
        {
          name: 'shabi funko',
          image: leorio,
          websites: [
            {
              website: 'dingleberry.com',
              price: '5000'
            },
            {
              website: 'animefunkos.com',
              price: '4500'
            }
          ]
        },
        {
          name: 'haroun funko',
          image: shikamaru,
          websites: [
            {
              website: 'dingleberry.com',
              price: '4000'
            },
            {
              website: 'animefunkos.com',
              price: '3900'
            }
          ]
        },
      ]
    })
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
