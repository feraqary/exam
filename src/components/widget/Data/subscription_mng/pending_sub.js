import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button, Alert } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const data = [
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Payment Failed'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Payment Failed'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Payment Failed'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Payment Failed'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
  },
  {
    companyName: 'Fine Home Real Estate LLC',
    standard: ' 100',
    featured: '200',
    premium: '300',
    deal_of_week: '100',
    total: '600',
    added_date: '1/1/2021',
    contract_Start_End_Date: '10-March-2015 / 2-March-2016',
    status: 'Pending verification'
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
        accessorKey: 'added_date',
        header: 'Added Date'
      },
      {
        accessorKey: 'contract_Start_End_Date',
        header: 'Contract Start /End Date'
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

export default PendingSubs;
