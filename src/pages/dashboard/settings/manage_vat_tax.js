// material-ui
import { Grid, Box } from '@mui/material';

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
    accessorKey: 'country',
    header: 'Country'
  },
  {
    accessorKey: 'vat',
    header: 'VAT'
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
      </Box>
    )
  }
];

const data = [
  {
    si_num: 1,
    title: 'Gallery Company',
    section: 'Property Hub',
    method: 'Buy',
    link: 'https://aqarycrm.com/marketing_dashboard/static/src/web_portal_xmlfiles/Aqary.xml',
    content:
      'A collection of images or videos showcasing various aspects related to the website topic, such as products, events, or visual content.',
    country: 'USA',
    vat: '12%'
  },
  {
    si_num: 1,
    title: 'FAQ Company',
    section: 'Property Hub',
    method: 'Buy',
    link: 'https://aqarycrm.com/marketing_dashboard/static/src/web_portal_xmlfiles/Aqary.xml',
    content:
      'A frequently asked questions page that addresses common queries or concerns visitors may have regarding the website, its products, or services.',
    country: 'USA',
    vat: '12%'
  },
  {
    si_num: 1,
    title: 'Testimonials Company',
    section: 'Property Hub',
    method: 'Buy',
    link: 'https://aqarycrm.com/marketing_dashboard/static/src/web_portal_xmlfiles/Aqary.xml',
    content:
      'A page featuring testimonials or reviews from satisfied customers or users, highlighting their positive experiences with the website or its offerings.',
    country: 'USA',
    vat: '12%'
  },
  {
    si_num: 1,
    title: 'Services Company',
    section: 'Property Hub',
    method: 'Buy',
    link: 'https://aqarycrm.com/marketing_dashboard/static/src/web_portal_xmlfiles/Aqary.xml',
    content:
      'A page providing detailed information about the specific services offered by the website or business, including their benefits and how to access them.',
    country: 'USA',
    vat: '12%'
  },
  {
    si_num: 1,
    title: 'Privacy Policy Company',
    section: 'Property Hub',
    method: 'Buy',
    link: 'https://aqarycrm.com/marketing_dashboard/static/src/web_portal_xmlfiles/Aqary.xml',
    content:
      'A page outlining the website privacy policy, explaining how user data is collected, stored, and used, and addressing any data protection concerns.',
    country: 'USA',
    vat: '12%'
  }
];
function ManageVatTax() {
  return (
    <Page title="VAT/TAX">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageVatTax.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageVatTax;
