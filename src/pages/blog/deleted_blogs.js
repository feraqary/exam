// material-ui
import { Grid, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';
import { AqaryButton } from 'components/Elements/AqaryButton';
import Table from 'components/Table/Table';

// assets

// ==============================|| FIELDS ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'si_num',
    header: 'SI Number'
  },
  {
    accessorKey: 'title',
    header: 'Title'
  },
  {
    accessorKey: 'company_name',
    header: 'Company Name'
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
        <AqaryButton variant="contained">Restore </AqaryButton>
      </Box>
    )
  }
];

const data = [
  {
    si_num: 1,
    title: 'Contact',
    company_name: 'Company Name',
    description:
      'A page that provides contact information, such as an email address, phone number, or contact form, allowing visitors to reach out to the website owners or support team.'
  },
  {
    si_num: 1,
    title: 'Gallery',
    company_name: 'Company Name',
    description:
      'A collection of images or videos showcasing various aspects related to the website topic, such as products, events, or visual content.'
  },
  {
    si_num: 1,
    title: 'FAQ',
    company_name: 'Company Name',
    description:
      'A frequently asked questions page that addresses common queries or concerns visitors may have regarding the website, its products, or services.'
  },
  {
    si_num: 1,
    title: 'Testimonials',
    company_name: 'Company Name',
    description:
      'A page featuring testimonials or reviews from satisfied customers or users, highlighting their positive experiences with the website or its offerings.'
  },
  {
    si_num: 1,
    title: 'Services',
    company_name: 'Company Name',
    description:
      'A page providing detailed information about the specific services offered by the website or business, including their benefits and how to access them.'
  },
  {
    si_num: 1,
    title: 'Privacy Policy',
    company_name: 'Company Name',
    description:
      'A page outlining the website privacy policy, explaining how user data is collected, stored, and used, and addressing any data protection concerns.'
  }
];

function ManageDeletedBlogs() {
  return (
    <Page title="Deleted Blogs">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageDeletedBlogs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageDeletedBlogs;
