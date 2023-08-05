// material-ui
import { Grid, Button, IconButton, MainCard } from '@mui/material';
import React, { useState } from 'react';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ApartmentIcon from '@mui/icons-material/Apartment';
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
import T60card from './helper/T60card';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import PostCard from './helper/postCard';
import Carousel from './helper/carousel';
// import pic from "./images/1.jpg"
// ==============================|| Posts||============================== //

function Explore() {
  const [open, setOpen] = useState(false);
  const [postimg, setPostImg] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postDisc, setDisc] = useState('');
  const [postId, setPostId] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Page title="Explore">
      {/* <TextInput
        label={'Search'}
        fullWidth
        style={{ paddingTop: '50px' }}
        startIcon={<SellIcon />}
        InputAdornment={
          <InputAdornment>
            <SearchIcon />
          </InputAdornment>
        }
      /> */}
      <Container style={{ xs: 12, lg: 12 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item>
            <Button
              size="medium"
              onClick={() => {
                postId == 'sell' ? setPostId('') : setPostId('sell');
              }}
              active
              variant={postId == 'sell' ? 'outlined' : 'contained'}
              startIcon={<SellIcon />}
            >
              Sell
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="medium"
              onClick={() => {
                postId == 'rent' ? setPostId('') : setPostId('rent');
              }}
              variant={postId == 'rent' ? 'outlined' : 'contained'}
              startIcon={<ShoppingCartIcon />}
            >
              Rent
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="medium"
              onClick={() => {
                postId == 'property-hub' ? setPostId('') : setPostId('property-hub');
              }}
              variant={postId == 'property-hub' ? 'outlined' : 'contained'}
              startIcon={<MapsHomeWorkIcon />}
            >
              Property Hub
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="medium"
              onClick={() => {
                postId == 'project' ? setPostId('') : setPostId('project');
              }}
              variant={postId == 'project' ? 'outlined' : 'contained'}
              startIcon={<ApartmentIcon />}
            >
              Project
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="medium"
              onClick={() => {
                postId == 'exchange' ? setPostId('') : setPostId('exchange');
              }}
              variant={postId == 'exchange' ? 'outlined' : 'contained'}
              startIcon={<CompareArrowsIcon />}
            >
              Exchange
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="medium"
              onClick={() => {
                postId == 'career' ? setPostId('') : setPostId('career');
              }}
              variant={postId == 'career' ? 'outlined' : 'contained'}
              startIcon={<BusinessCenterIcon />}
            >
              Career
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container style={{ xs: 12, lg: 12 }} title={'360 Videos'}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Carousel list={itemData} />
        </Grid>
      </Container>
      <Container style={{ xs: 12, lg: 12 }} title={'Images'}>
        <Grid container spacing={2} xs={12} lg={6} alignItems="center" sx={{ margin: 'auto' }} justifyContent="center">
          <ImageList sx={{ width: '100%', height: 'fit-content', borderRadius: 2 }} variant="quilted" cols={3} gap={6} rowHeight={300}>
            {itemData.flatMap((item) => {
              if (postId === '') {
                return (
                  <ImageListItem
                    key={item.img}
                    sx={{ boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.4)' }}
                    onClick={(e) => {
                      setPostImg(e.target.srcset), setPostTitle(item.title), setDisc(item.disc), setPostId(item.id), setOpen(true);
                    }}
                  >
                    <img
                      src={item.img}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                      style={{ borderRadius: 2 }}
                    />
                  </ImageListItem>
                );
              } else if (postId === item.id) {
                return (
                  <ImageListItem
                    key={item.img}
                    sx={{ boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.4)' }}
                    onClick={(e) => {
                      setPostImg(e.target.srcset), setPostTitle(item.title), setDisc(item.disc), setPostId(item.id), setOpen(true);
                    }}
                  >
                    <img
                      src={item.img}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                      style={{ borderRadius: 2 }}
                    />
                  </ImageListItem>
                );
              }
            })}
          </ImageList>
        </Grid>
        <Dialog maxWidth={'md'} open={open} onClose={handleClose}>
          <PostCard postimg={postimg} title={postTitle} discription={postDisc} setclose={setOpen} />
        </Dialog>
      </Container>
    </Page>
  );
}
const itemData = [
  {
    img: '/images/1.jpg',
    title: 'unit1',
    id: 'sell',
    disc: 'Discover your dream home with breathtaking views and luxurious amenities, where every day feels like a vacation.'
  },
  {
    img: '/images/2.jpg',
    title: 'unit2',
    id: 'project',
    disc: 'Invest in a property that guarantees both comfort and profitability, offering a prime location and high rental demand.'
  },
  {
    img: '/images/3.jpg',
    title: 'unit3',
    id: 'rent',
    disc: 'Experience the epitome of urban living in our stylish and modern condominiums, strategically located near shopping, dining, and entertainment hubs.'
  },
  {
    img: '/images/4.jpg',
    title: 'unit4',
    id: 'exchange',
    disc: 'Escape the hustle and bustle of the city and indulge in serene suburban living, surrounded by nature and family-friendly amenities.'
  },
  {
    img: '/images/5.jpg',
    title: 'unit5',
    id: 'sell',
    disc: 'Unlock the doors to an exclusive gated community, offering privacy, security, and a close-knit neighborhood for you and your loved ones.'
  },
  {
    img: '/images/6.jpg',
    title: 'unit6',
    id: 'sell',
    disc: 'Own a piece of history in our meticulously restored heritage homes, blending classic charm with modern conveniences.'
  },
  {
    img: '/images/7.jpg',
    title: 'unit7',
    id: 'property-hub',
    disc: 'Embrace the waterfront lifestyle with our stunning beachfront properties, where you can relax, rejuvenate, and create unforgettable memories.'
  },
  {
    img: '/images/8.jpg',
    title: 'unit8',
    id: 'property-hub',
    disc: 'Invest in the future with our eco-friendly and sustainable homes, designed to minimize your carbon footprint while maximizing your comfort.'
  },
  {
    img: '/images/9.jpg',
    title: 'unit9',
    id: 'exchange',
    disc: 'Upgrade your lifestyle with our state-of-the-art smart homes, where cutting-edge technology seamlessly integrates into every aspect of your daily routine.'
  },
  {
    img: '/images/10.jpg',
    title: 'unit10',
    id: 'exchange',
    disc: 'Experience the pinnacle of luxury living in our exclusive penthouses, boasting unparalleled opulence, panoramic city views, and personalized concierge services.'
  },
  {
    img: '/images/11.jpg',
    title: 'unit11',
    id: 'rent',
    disc: "Invest in your family's future with our spacious and family-centric homes, featuring ample green spaces, top-rated schools, and a vibrant community."
  },
  {
    img: '/images/12.jpg',
    title: 'unit12',
    id: 'rent',
    disc: 'Seize the opportunity to own a prime commercial space in a thriving business district, ensuring maximum visibility and growth for your enterprise.'
  }
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
