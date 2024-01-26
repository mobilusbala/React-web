import { Box, Container, List, ListItem, Typography } from '@mui/material';
import apiController from '../services/api.service';
import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import { green } from '@mui/material/colors';
import { ProductsService } from '../services/products.service';
import { Products } from '../types/Products.types';

type Props = {}



const Services = (props: Props) => {

  const [products, setProducts] = useState<Products[]>([]);

  const fetchData = async () => {
    try {
      const resp1: Array<Products> = await ProductsService.getProducts();
      console.log(resp1);
      setProducts(resp1);
      //const resp2 = await axios(randomUserUrl);
      //console.log(resp2);
    } catch (error: AxiosError | any) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (

      <Box component="main" sx={{ flexGrow: 1, p: 3 }} >

      <List style={{backgroundColor : 'green'}} >

        {products.map((item, index) => (
          <>
            <ListItem  key={item.id}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={item.image} />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.company}
                    </Typography>
                    {` Price : - ${item.price}`}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>


    </Box> 
  )
}

export default Services