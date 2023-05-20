import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button, Alert } from '@mui/material';

const data = [
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
  },
  {
    companyName: 'Aldar',
    orderNo: '1/100',
    date: ' 12/30/2023',
    amount: '212313',
    payment_method: 'Card',
    payment_plan: 'Monthly',
    status: 'Paid Subscription'
  }
];

const PendingPayments = () => {
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
        header: 'Amount'
      },
      {
        accessorKey: 'payment_method',
        header: 'Payment Method'
      },
      {
        accessorKey: 'payment_plan',
        header: 'Payment Plan'
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

export default PendingPayments;