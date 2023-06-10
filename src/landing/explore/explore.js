// material-ui
import { Grid, Button,Icon  } from '@mui/material';
import * as React from 'react';
import SellIcon from '@mui/icons-material/Sell';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import Container from 'components/Elements/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

// ==============================|| Posts||============================== //

function Explore() {
  return (
    <Page title="Explore">
      <Container style={{xs:12, lg:12}}>
        <Grid container spacing={2} alignItems="center">
            <Grid item >
                <Button variant='contained'>Sell</Button>
            </Grid>
            <Grid item >
                <Button variant='contained'>Rent</Button>
            </Grid>
            <Grid item >
                <Button variant='contained'>Property Hub</Button>
            </Grid>
            <Grid item >
                <Button variant='contained'>Project</Button>
            </Grid>
            <Grid item >
                <Button variant='contained'>Exchange</Button>
            </Grid>
            <Grid item >
                <Button variant='contained'>Career</Button>
            </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

Explore.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Explore;