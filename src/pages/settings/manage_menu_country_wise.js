// material-ui
import { Grid, Stack, InputLabel } from '@mui/material';

import AutocompleteForms from 'components/forms/forms-validation/AutocompleteForms';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import React from 'react';
// assets
import CheckedList from 'components/checkedList/checkedList';

// ==============================|| FIELDS ||============================== //

const countriesData = ['UAE', 'AUS', 'CAN', 'DEU', 'ESP', 'FRA', 'GBR', 'HKG', 'IND', 'ITA', 'JPN'];

// ==============================|| Add Company form ||============================== //
function ManageMenusByCountry() {
  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(event);
  };

  return (
    <Page title="Manage Menus">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Manage Menus">
            <InputLabel required>Select Country</InputLabel>
            <AutocompleteForms setCompanyFun={handleChange} data={countriesData} />
            {country && (
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
            )}
          </MainCard>
        </Grid>
      </Grid>
    </Page>
  );
}

ManageMenusByCountry.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageMenusByCountry;
