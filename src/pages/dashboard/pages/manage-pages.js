// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';

// assets
import { AqaryButton } from 'components/Elements/AqaryButton';
import Table from 'components/Table/Table';
// ==============================|| FIELDS ||============================== //

// ==============================|| Add Company form ||============================== //
const ColumnHeaders = [
  {
    accessorKey: 'page',
    header: 'Title'
  },
  {
    accessorKey: 'description',
    header: 'Description'
  },
  {
    accessorKey: 'status',
    header: 'Status'
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
    page: 'Contact',
    description:
      'A page that provides contact information, such as an email address, phone number, or contact form, allowing visitors to reach out to the website owners or support team.',
    status: 'active'
  },
  {
    page: 'Gallery',
    description:
      'A collection of images or videos showcasing various aspects related to the website topic, such as products, events, or visual content.',
    status: 'active'
  },
  {
    page: 'FAQ',
    description:
      'A frequently asked questions page that addresses common queries or concerns visitors may have regarding the website, its products, or services.',
    status: 'active'
  },
  {
    page: 'Testimonials',
    description:
      'A page featuring testimonials or reviews from satisfied customers or users, highlighting their positive experiences with the website or its offerings.',
    status: 'active'
  },
  {
    page: 'Services',
    description:
      'A page providing detailed information about the specific services offered by the website or business, including their benefits and how to access them.',
    status: 'active'
  }
];
function ManagePages() {
  return (
    <Page title="Add Page">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManagePages.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManagePages;
