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
    accessorKey: 'si_num',
    header: 'SI Number'
  },
  {
    accessorKey: 'section',
    header: 'Section'
  },
  {
    accessorKey: 'content',
    header: 'Content'
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
          Remove
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    si_num: 1,
    title: 'Contact Company',
    section: 'Property Hub',
    method: 'Buy',
    link: 'https://aqarycrm.com/marketing_dashboard/static/src/web_portal_xmlfiles/Aqary.xml',
    content:
      'A page that provides contact information, such as an email address, phone number, or contact form, allowing visitors to reach out to the website owners or support team.'
  },
  {
    si_num: 1,
    title: 'Gallery Company',
    section: 'Property Hub',
    method: 'Buy',
    link: 'https://aqarycrm.com/marketing_dashboard/static/src/web_portal_xmlfiles/Aqary.xml',
    content:
      'A collection of images or videos showcasing various aspects related to the website topic, such as products, events, or visual content.'
  },
  {
    si_num: 1,
    title: 'FAQ Company',
    section: 'Property Hub',
    method: 'Buy',
    link: 'https://aqarycrm.com/marketing_dashboard/static/src/web_portal_xmlfiles/Aqary.xml',
    content:
      'A frequently asked questions page that addresses common queries or concerns visitors may have regarding the website, its products, or services.'
  },
  {
    si_num: 1,
    title: 'Testimonials Company',
    section: 'Property Hub',
    method: 'Buy',
    link: 'https://aqarycrm.com/marketing_dashboard/static/src/web_portal_xmlfiles/Aqary.xml',
    content:
      'A page featuring testimonials or reviews from satisfied customers or users, highlighting their positive experiences with the website or its offerings.'
  },
  {
    si_num: 1,
    title: 'Services Company',
    section: 'Property Hub',
    method: 'Buy',
    link: 'https://aqarycrm.com/marketing_dashboard/static/src/web_portal_xmlfiles/Aqary.xml',
    content:
      'A page providing detailed information about the specific services offered by the website or business, including their benefits and how to access them.'
  },
  {
    si_num: 1,
    title: 'Privacy Policy Company',
    section: 'Property Hub',
    method: 'Buy',
    link: 'https://aqarycrm.com/marketing_dashboard/static/src/web_portal_xmlfiles/Aqary.xml',
    content:
      'A page outlining the website privacy policy, explaining how user data is collected, stored, and used, and addressing any data protection concerns.'
  }
];

function ManageInternationalContents() {
  return (
    <Page title="International Contentes">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageInternationalContents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageInternationalContents;
