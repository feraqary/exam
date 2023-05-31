import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button, Alert } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const data = [
  {
    companyName: 'Aldar',
    orderNo: '1100',
    date: '3-05-2023',
    amount: '7300',
    payment_method: 'Visa Card',
    payment_plan: 'Monthly',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '300',
    date: '3-05-2023',
    amount: '2000',
    payment_method: 'Debit Card',
    payment_plan: 'Monthly',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Naruto',
    orderNo: '1050',
    date: '02-30-2023',
    amount: '56000',
    payment_method: 'Credit Card',
    payment_plan: 'Monthly',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Naruto',
    orderNo: '1400',
    date: '02-30-2023',
    amount: '3120',
    payment_method: 'Cash',
    payment_plan: 'Yearly',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Asgurd',
    orderNo: '1500',
    date: '02-30-2023',
    amount: '96501',
    payment_method: 'Debit Card',
    payment_plan: 'Yearly',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Asgurd',
    orderNo: '1600',
    date: '02-30-2023',
    amount: '3256',
    payment_method: 'Debit Card',
    payment_plan: 'Monthly',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Sasuke',
    orderNo: '1700',
    date: '12-30-2023',
    amount: '2030',
    payment_method: 'Credit Card',
    payment_plan: 'Monthly',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Sasuke',
    orderNo: '1800',
    date: '12-30-2023',
    amount: '500',
    payment_method: 'Visa Card',
    payment_plan: 'Monthly',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Broker Company',
    orderNo: '1900',
    date: '12-30-2023',
    amount: '1200',
    payment_method: 'Credit Card',
    payment_plan: 'Yearly',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Managment Company',
    orderNo: '1101',
    date: '9-30-2023',
    amount: '200',
    payment_method: 'Cash',
    payment_plan: 'Yearly',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '2100',
    date: '9-30-2023',
    amount: '8200',
    payment_method: 'Credit Card',
    payment_plan: 'Yearly',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Naruto',
    orderNo: '1170',
    date: '9-15-2023',
    amount: '450',
    payment_method: 'Cash',
    payment_plan: 'Yearly',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Naruto',
    orderNo: '1190',
    date: '12-15-2023',
    amount: '2800',
    payment_method: 'Visa Card',
    payment_plan: 'Monthly',
    status: 'Paid Subscription'
  },
  {
    companyName: 'Aldar',
    orderNo: '1120',
    date: '12-15-2023',
    amount: '212313',
    payment_method: 'Credit Card',
    payment_plan: 'Monthly',
    status: 'Paid Subscription'
  }
];

const Payment = () => {
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
            <Button variant="contained" color="warning">
              Draft
            </Button>
            <Button variant="contained" color="primary" startIcon={<EditIcon />}>
              Edit
            </Button>
          </Box>
        )
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default Payment;
