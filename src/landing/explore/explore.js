// material-ui
import { Grid, Button, IconButton, MainCard } from '@mui/material';
import * as React from 'react';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ApartmentIcon from '@mui/icons-material/Apartment';
import {ClearIcon} from '@mui/icons-material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/joy/CardContent';
// project imports
import Avatar from '@mui/material';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import Container from 'components/Elements/Container';
import TextInput from 'components/InputArea/TextInput';
import Carousel from 'react-material-ui-carousel';
import T60card from './helper/T60card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// ==============================|| Posts||============================== //

function Explore() {
  return (
    <Page title="Explore">
      <TextInput
        label={'Search'}
        fullWidth
        style={{ paddingTop: '50px' }}
        startIcon={<SellIcon />}
        InputAdornment={
        <InputAdornment>
            <SearchIcon/>
        </InputAdornment>}
      />
      <Container style={{ xs: 12, lg: 12 }}>
        <Grid container spacing={2} alignItems="center" justifyContent='center'>
          <Grid item>
            <Button size="medium" variant="contained" startIcon={<SellIcon />}>
              Sell
            </Button>
          </Grid>
          <Grid item>
            <Button size="medium" variant="contained" startIcon={<ShoppingCartIcon />}>
              Rent
            </Button>
          </Grid>
          <Grid item>
            <Button size="medium" variant="contained" startIcon={<MapsHomeWorkIcon />}>
              Property Hub
            </Button>
          </Grid>
          <Grid item>
            <Button size="medium" variant="contained" startIcon={<ApartmentIcon />}>
              Project
            </Button>
          </Grid>
          <Grid item>
            <Button size="medium" variant="contained" startIcon={<CompareArrowsIcon />}>
              Exchange
            </Button>
          </Grid>
          <Grid item>
            <Button size="medium" variant="contained" startIcon={<BusinessCenterIcon />}>
              Career
            </Button>
          </Grid>
        </Grid>

        
      </Container>
      <Container style={{ xs: 12, lg: 12 }} title={'360 Videos'}>
        <Grid container spacing={2} alignItems="center" justifyContent='center'>
            {/* <T60card/> */}
        </Grid>
      </Container>
      <Container style={{ xs: 12, lg: 12 }} title={'Images'}>
        <Grid container spacing={2} alignItems="center" justifyContent='center'>
            <ImageList sx={{ width: "90%", height: "100%",borderRadius:2 }} cols={3} rowHeight={350}>
                {itemData.map((item) => (
                    <ImageListItem  key={item.img} >
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        sx={{}}
                        style={{borderRadius:2}}
                    />
                    </ImageListItem>
                ))}
            </ImageList>
        </Grid>
      </Container>
    </Page>
  );
}
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];



// const Carddss = () =>{
//     const Avatar1 = '/assets/images/users/avatar-1.png';
//     const prod1 = '/assets/images/e-commerce/prod-5.png';
//     return(
//         <>
//             <Card sx={{ maxWidth: 720, margin: 'auto', boxShadow: '0px 8px 17px -8px rgba(0,0,0,0.4)' }}>
//                 <CardHeader
//                     avatar={<Avatar alt="User 1" src='/assets/images/users/avatar-1.png' />}
//                     action={
//                     <IconButton aria-label="settings">
//                         <SearchIcon />
//                     </IconButton>
//                     }
//                     subheader="September 14, 2016"
//                 />
//             </Card>
//         </>
//     )
// }


// const T60_carousel = () =>{
//     return(
//         <Carousel>
//             {
//                 items.map( (item, i) => {
//                 return (
//                     <div key={i}>
//                         <p>{item.name}</p>
//                         <p>{item.des}</p>
//                     </div>
//                 )
//             })
//             }
//         </Carousel>
//     )
// }

Explore.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Explore;
