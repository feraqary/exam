import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';

const data = [
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    published_units: '35',
    remaining: '180',
    subsDate: ' 20/12/2022 - 20/12/2023'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    published_units: '35',
    remaining: '180',
    subsDate: ' 20/12/2022 - 20/12/2023'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    published_units: '35',
    remaining: '180',
    subsDate: ' 20/12/2022 - 20/12/2023'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    published_units: '35',
    remaining: '180',
    subsDate: ' 20/12/2022 - 20/12/2023'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    published_units: '35',
    remaining: '180',
    subsDate: ' 20/12/2022 - 20/12/2023'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    published_units: '35',
    remaining: '180',
    subsDate: ' 20/12/2022 - 20/12/2023'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    published_units: '35',
    remaining: '180',
    subsDate: ' 20/12/2022 - 20/12/2023'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    published_units: '35',
    remaining: '180',
    subsDate: ' 20/12/2022 - 20/12/2023'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    published_units: '35',
    remaining: '180',
    subsDate: ' 20/12/2022 - 20/12/2023'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    published_units: '35',
    remaining: '180',
    subsDate: ' 20/12/2022 - 20/12/2023'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    published_units: '35',
    remaining: '180',
    subsDate: ' 20/12/2022 - 20/12/2023'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    published_units: '35',
    remaining: '180',
    subsDate: ' 20/12/2022 - 20/12/2023'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    published_units: '35',
    remaining: '180',
    subsDate: ' 20/12/2022 - 20/12/2023'
  }
];

const ActiveSubs = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'comp_name',
        header: 'Company Name'
      },

      {
        accessorKey: 'standard',
        header: 'Standard'
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
        accessorKey: 'deal_of_week',
        header: 'Deal of the Week'
      },
      {
        accessorKey: 'total',
        header: 'Total'
      },
      {
        accessorKey: 'remaining',
        header: 'Remaining Units'
      },
      {
        accessorKey: 'subsDate',
        header: 'Subscription Date'
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
            <Button variant="contained" color="primary">
              View Contract
            </Button>
            <Button variant="contained" color="primary">
              View Profile
            </Button>
          </Box>
        )
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default ActiveSubs;
