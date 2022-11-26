import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import { CardHeader, ListItem, ListItemButton, ListItemText } from '@mui/material';


export default function FunkoCard(props) {
  const { name, websites, image } = props;
  return (
    <Card raised sx={{ width: '100%' }}>
      <Grid container>
        <Grid xs={3} sx={{ padding: '10px 10px' }}>
          <Card>
            <CardMedia
              component="img"
              // height="200"
              image={image}
              alt={name}
            />
          </Card>
        </Grid>
        <Grid xs={9} sx={{ padding: '10px 10px' }}>
          <Card>
            <CardContent>
              <CardHeader title={name} />
              <List disablePadding dense>
                {websites.map((website, index) => {
                  const { name, price, redirectUrl } = website;
                  return (
                    <ListItem dense>
                      <ListItemButton component="a" href={redirectUrl}>
                        <ListItemText>
                          {name}: ${price}
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  )
                })}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Card>
    
  );
}