// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';
import Table from 'components/Table/Table';
import { AqaryButton } from 'components/Elements/AqaryButton';
// assets

// ==============================|| FIELDS ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'si_num',
    header: 'SI Number'
  },
  {
    accessorKey: 'categories',
    header: 'Categories'
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
          View Live
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    si_num: 1,
    categories: 'Home',
    description: 'The main landing page of the website that provides an overview and introduction to the website and its content.'
  },
  {
    si_num: 1,
    categories: 'About',
    description: 'A page that provides information about the website, its purpose, mission, and the team or organization behind it.'
  },
  {
    si_num: 1,
    categories: 'Products',
    description:
      'A page showcasing the products or services offered by the website or business, along with their descriptions, features, and pricing.'
  },
  {
    si_num: 1,
    categories: 'Blog',
    description:
      'A section containing articles, news, or blog posts related to the website topic or industry, providing informative or entertaining content.'
  },
  {
    si_num: 1,
    categories: 'Contact',
    description:
      'A page that provides contact information, such as an email address, phone number, or contact form, allowing visitors to reach out to the website owners or support team.'
  },
  {
    si_num: 1,
    categories: 'Gallery',
    description:
      'A collection of images or videos showcasing various aspects related to the website topic, such as products, events, or visual content.'
  },
  {
    si_num: 1,
    categories: 'FAQ',
    description:
      'A frequently asked questions page that addresses common queries or concerns visitors may have regarding the website, its products, or services.'
  }
];
function ManageCategories() {
  return (
    <Page title="Manage Categories">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageCategories.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageCategories;
