// material-ui
import { Grid, Stack } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';
// assets
import CheckedList from 'components/checkedList/checkedList';
import Container from 'components/Elements/Container';
import AutoCompleteSelector from 'components/widgets/AutoCompleteSelector';

// ==============================|| FIELDS ||============================== //

const countriesData = ['UAE', 'AUS', 'CAN', 'DEU', 'ESP', 'FRA', 'GBR', 'HKG', 'IND', 'ITA', 'JPN'];

// ==============================|| Add Company form ||============================== //
function ManageMenusByCountry() {
  const [country, setCountry] = React.useState('');

  return (
    <Page title="Manage Menus">
      <Grid container spacing={gridSpacing}>
        <Container title="Manage Menus by Country" style={{ xs: 12 }}>
          <AutoCompleteSelector
            label="Countries"
            options={countriesData}
            value={country}
            setValue={setCountry}
            helperText="Please select a country"
            id="manage-menus-by-country"
            placeholder="Select Country"
            style={{ xs: 12, lg: 6 }}
          />

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
        </Container>
      </Grid>
    </Page>
  );
}

ManageMenusByCountry.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageMenusByCountry;
