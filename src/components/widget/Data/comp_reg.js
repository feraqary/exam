import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button, Alert } from '@mui/material';

const data = [
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Paid Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Free Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Paid Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Free Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending contract verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Paid Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Free Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending contract verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Paid Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Free Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Free Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Paid Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Free Subscriptions',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Free Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Paid Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Paid Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Free Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Free Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Free Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Paid Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Paid Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Free Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  },
  {
    comp_name: 'Aldar',
    standard: '1/100',
    featured: ' 12/30',
    premium: '2/200',
    deal_of_week: '20/50',
    total: '280',
    subs_mode: 'Paid Subscription',
    added_date: '14-08/2021',
    subsDate: ' 20/12/2022 - 20/12/2023',
    status: 'pending verification'
  }
];

const CompanyContract = () => {
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
        accessorKey: 'subs_mode',
        header: 'Subscription Mode'
      },
      {
        accessorKey: 'subsDate',
        header: 'Subscription Date'
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

export default CompanyContract;
