import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button, Alert } from '@mui/material';

const data = [
  {
    companyName: 'Fine Home Real Estate LLC',
    subs_mode: 'Paid Subscription',
    standard: ' 12/30',
    amount: '2/200',
    payment_method: '20/50',
    payment_plan: '280',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '1/100',
    date: ' 12/30',
    amount: '2/200',
    payment_method: '20/50',
    payment_plan: '280',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '1/100',
    date: ' 12/30',
    amount: '2/200',
    payment_method: '20/50',
    payment_plan: '280',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '1/100',
    date: ' 12/30',
    amount: '2/200',
    payment_method: '20/50',
    payment_plan: '280',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '1/100',
    date: ' 12/30',
    amount: '2/200',
    payment_method: '20/50',
    payment_plan: '280',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '1/100',
    date: ' 12/30',
    amount: '2/200',
    payment_method: '20/50',
    payment_plan: '280',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '1/100',
    date: ' 12/30',
    amount: '2/200',
    payment_method: '20/50',
    payment_plan: '280',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '1/100',
    date: ' 12/30',
    amount: '2/200',
    payment_method: '20/50',
    payment_plan: '280',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '1/100',
    date: ' 12/30',
    amount: '2/200',
    payment_method: '20/50',
    payment_plan: '280',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '1/100',
    date: ' 12/30',
    amount: '2/200',
    payment_method: '20/50',
    payment_plan: '280',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '1/100',
    date: ' 12/30',
    amount: '2/200',
    payment_method: '20/50',
    payment_plan: '280',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '1/100',
    date: ' 12/30',
    amount: '2/200',
    payment_method: '20/50',
    payment_plan: '280',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '1/100',
    date: ' 12/30',
    amount: '2/200',
    payment_method: '20/50',
    payment_plan: '280',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '1/100',
    date: ' 12/30',
    amount: '2/200',
    payment_method: '20/50',
    payment_plan: '280',
    status: 'Paid Subscription'
  }
];

const PendingSubs = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'companyName',
        header: 'Company Name'
      },

      {
        accessorKey: 'orderNo',
        header: 'Order No'
      },
      {
        accessorKey: 'date',
        header: 'Date of Order'
      },
      {
        accessorKey: 'amount',
        header: 'A'
      },
      {
        accessorKey: 'payment_method',
        header: 'Deal of the Week'
      },
      {
        accessorKey: 'payment_plan',
        header: 'Total'
      },
      {
        accessorKey: 'status',
        header: 'Subscription Mode'
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
            <Button variant="contained" color="error">
              Delete Subscription
            </Button>
          </Box>
        )
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default PendingSubs;
