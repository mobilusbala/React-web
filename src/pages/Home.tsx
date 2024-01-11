import * as React from 'react';

import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';

import { Typography } from '@mui/material';
import apiController from '../services/api.service';
import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


export const drawerWidth = 240;

type Products = {
  id:string
  name:string
  price: number
  image: string
  company: string
}


const Home = () => {

  const [products , setProducts] = useState<Products[]>([]);

  const fetchData = async () => {
    try {
      const resp1 : Array<Products> = await apiController('https://course-api.com/react-store-products');
      console.log(resp1);
      setProducts(resp1);
      //const resp2 = await axios(randomUserUrl);
      //console.log(resp2);
    } catch (error : AxiosError | any) {
      console.log(error.response);
    }
  };

 useEffect(() => {
    fetchData();
  }, []);


  return (    
    <>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

      {products.map((item, index) => (
             <>
             <ListItem alignItems="flex-start"  key={item.id}>
             <ListItemAvatar>
               <Avatar alt="Remy Sharp" src={item.image} />
             </ListItemAvatar>
             <ListItemText
               primary= {item.name}
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
  </>
  
  );

 
}

export default Home;
