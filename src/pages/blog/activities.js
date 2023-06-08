// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React from 'react';
import Table from 'components/Table/Table';

// assets

// ==============================|| FIELDS ||============================== //

const data = [
  {
    si_num: 1,
    date: '12/12/2022',
    title: 'Gallery',
    activities:
      'A collection of images or videos showcasing various aspects related to the website topic, such as products, events, or visual content.'
  },
  {
    si_num: 1,
    date: '12/12/2022',
    title: 'FAQ',
    activities:
      'A frequently asked questions page that addresses common queries or concerns visitors may have regarding the website, its products, or services.'
  },
  {
    si_num: 1,
    date: '12/12/2022',
    title: 'Testimonials',
    activities:
      'A page featuring testimonials or reviews from satisfied customers or users, highlighting their positive experiences with the website or its offerings.'
  },
  {
    si_num: 1,
    date: '12/12/2022',
    title: 'Services',
    activities:
      'A page providing detailed information about the specific services offered by the website or business, including their benefits and how to access them.'
  },
  {
    si_num: 1,
    date: '12/12/2022',
    title: 'Privacy Policy',
    activities:
      'A page outlining the website privacy policy, explaining how user data is collected, stored, and used, and addressing any data protection concerns.'
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'si_num',
    header: 'SI Number'
  },
  {
    accessorKey: 'date',
    header: 'Date'
  },
  {
    accessorKey: 'title',
    header: 'Title'
  },
  {
    accessorKey: 'activities',
    header: 'Activities'
  }
];

function ManageBlogActivities() {
  return (
    <Page title="Blog Activities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageBlogActivities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageBlogActivities;
