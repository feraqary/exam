// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';

// assets
import { AqaryButton } from 'components/Elements/AqaryButton';
import Table from 'components/Table/Table';
// ==============================|| FIELDS ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'si_num',
    header: 'SI Number'
  },
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'percent',
    header: 'Percentage'
  },

  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <AqaryButton variant="contained">Edit </AqaryButton>
        <Button variant="contained" color="primary">
          Delete
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    si_num: 1,
    name: 'Featured',
    section: 'Property Hub',
    method: 'Buy',
    link: 'https://aqarycrm.com/marketing_dashboard/static/src/web_portal_xmlfiles/Aqary.xml',
    content: 'The main landing page of the website that provides an overview and introduction to the website and its content,.',
    country: 'USA',
    percent: '20%'
  },
  {
    si_num: 1,
    name: 'Premium',
    section: 'Property Hub',
    method: 'Buy',
    link: 'https://aqarycrm.com/marketing_dashboard/static/src/web_portal_xmlfiles/Aqary.xml',
    content: 'A page that provides information about the website, its purpose, mission, and the team or organization behind it,.',
    country: 'USA',
    percent: '30%'
  },
  {
    si_num: 1,
    name: 'Standard',
    section: 'Property Hub',
    method: 'Buy',
    link: 'https://aqarycrm.com/marketing_dashboard/static/src/web_portal_xmlfiles/Aqary.xml',
    content:
      'A page showcasing the products or services offered by the website or business, along with their descriptions, features, and pricing.',
    country: 'USA',
    percent: '15%'
  },
  {
    si_num: 1,
    name: 'Deal Of The Week',
    section: 'Property Hub',
    method: 'Buy',
    link: 'https://aqarycrm.com/marketing_dashboard/static/src/web_portal_xmlfiles/Aqary.xml',
    content:
      'A section containing articles, news, or blog posts related to the website topic or industry, providing informative or entertaining content.',
    country: 'USA',
    percent: '25%'
  }
];

function ManageSubscription() {
  return (
    <Page title="Subscriptions">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageSubscription.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageSubscription;
