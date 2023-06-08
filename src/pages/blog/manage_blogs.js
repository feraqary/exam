// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';

// assets
import Table from 'components/Table/Table';
import { AqaryButton } from 'components/Elements/AqaryButton';

// ==============================|| FIELDS ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'title',
    header: 'Title'
  },
  {
    accessorKey: 'description',
    header: 'Description'
  },
  {
    accessorKey: 'company',
    header: 'Company'
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
    title: 'Home',
    description: 'The main landing page of the website that provides an overview and introduction to the website and its content.',
    company: 'company name'
  },
  {
    title: 'About',
    description: 'A page that provides information about the website, its purpose, mission, and the team or organization behind it.',
    company: 'company name'
  },
  {
    title: 'Products',
    description:
      'A page showcasing the products or services offered by the website or business, along with their descriptions, features, and pricing.',
    company: 'company name'
  },
  {
    title: 'Blog',
    description:
      'A section containing articles, news, or blog posts related to the website topic or industry, providing informative or entertaining content.',
    company: 'company name'
  },
  {
    title: 'Contact',
    description:
      'A page that provides contact information, such as an email address, phone number, or contact form, allowing visitors to reach out to the website owners or support team.',
    company: 'company name'
  },
  {
    title: 'Gallery',
    description:
      'A collection of images or videos showcasing various aspects related to the website topic, such as products, events, or visual content.',
    company: 'company name'
  },
  {
    title: 'FAQ',
    description:
      'A frequently asked questions page that addresses common queries or concerns visitors may have regarding the website, its products, or services.',
    company: 'company name'
  }
];

function ManagePostedBlogs() {
  return (
    <Page title="Manage Posted Blogs">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManagePostedBlogs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManagePostedBlogs;
