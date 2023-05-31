import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const data = [
  {
    si_num: 1,
    featured: '20%',
    premium: '23%',
    standard: '15%',

    country: 'USA',
    deal_of_week: '20%'
  },
  {
    si_num: 1,
    featured: '20%',
    premium: '25%',
    standard: '15%',
    country: 'UAE',
    deal_of_week: '30%'
  },
  {
    si_num: 1,
    featured: '15%',
    premium: '20%',
    standard: '10%',
    country: 'Egypt',
    deal_of_week: '20%'
  },
  {
    si_num: 1,
    featured: '25%',
    premium: '28%',
    standard: '15%',
    country: 'India',
    deal_of_week: '25%'
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

const ManSubscriptionCosts = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'si_num',
        header: 'SI Number'
      },
      {
        accessorKey: 'country',
        header: 'Country'
      },
      {
        accessorKey: 'featured',
        header: 'Featured'
      },
      {
        accessorKey: 'premium',
        header: 'Premium'
      },
      {
        accessorKey: 'standard',
        header: 'Standard'
      },
      {
        accessorKey: 'deal_of_week',
        header: 'Deal of Week'
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

export default ManSubscriptionCosts;
