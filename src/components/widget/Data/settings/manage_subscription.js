import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

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
const AqaryButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#436496',
  borderColor: '#436496',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  '&:hover': {
    backgroundColor: '#436496',
    borderColor: '#0062cc',
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#436496',
    borderColor: '#005cbf'
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(67 100 150)'
  }
});

const ManSubscription = () => {
  const columns = useMemo(
    () => [
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
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default ManSubscription;
