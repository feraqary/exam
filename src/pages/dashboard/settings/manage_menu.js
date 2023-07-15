// material-ui
import { Grid, Stack } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import React from 'react';
// assets
import CheckedList from 'components/checkedList/checkedList';

// ==============================|| FIELDS ||============================== //

// ==============================|| Add Company form ||============================== //
function ManageMenus() {
  return (
    <Page title="Manage Menus">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Manage Menus">
            <Stack item flexDirection="row" justifyContent="space-around">
              <CheckedList
                data={[
                  'Search By Map',
                  'Property Hub',
                  'Sale',
                  'Rent',
                  'Exchange',
                  'Projects',
                  'Find Services',
                  'Exhibitions',
                  'House Prices'
                ]}
                title=""
              />
              <CheckedList
                data={[
                  'Auction',
                  'Property Valuation',
                  'Mortgage',
                  'Market Trends',
                  'Building Reviews',
                  'Blog',
                  'Careers',
                  'Daily Booking',
                  'Community Guide'
                ]}
                title=""
              />
            </Stack>
          </MainCard>
        </Grid>
      </Grid>
    </Page>
  );
}

ManageMenus.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageMenus;
