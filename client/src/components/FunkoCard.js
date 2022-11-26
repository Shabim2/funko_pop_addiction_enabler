import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function FunkoCard(props) {
  const { name, websites, image } = props;
  return (
    <Card sx={{ width: '100%', padding: '20px' }}>
      <Grid container spacing={4}>
        <Grid xs={3}>
          <CardMedia
            component="img"
            // height="400"
            image={image}
            alt={name}
          />
        </Grid>
        <Grid xs={9}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {name}
            </Typography>
            {websites.map((websiteItem, index) => {
              const { website, price } = websiteItem;
              return (
                <Container>
                  {website}: ${price}
                </Container>
              )
            })}
            <Typography variant="body2" color="text.secondary">
              
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
    
  );
}