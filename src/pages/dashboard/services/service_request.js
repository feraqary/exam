// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================||Services Activities ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: '   SI NO'
  },
  {
    accessorKey: 'service',
    header: 'Service Name'
  },
  {
    accessorKey: 'customer',
    header: 'Customer Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'phone',
    header: 'Phone'
  },
  {
    accessorKey: 'date',
    header: 'Date'
  },
  {
    accessorKey: 'time',
    header: 'Time'
  },
  {
    accessorKey: 'company',
    header: 'Company'
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
          View All
        </Button>
        <Button variant="contained" color="primary">
          Closed
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    date: '2-12-2023',
    time: '2-12-2023'
  }
];

function ServiceRequest() {
  return (
    <Page title=" Service Activities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}
ServiceRequest.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ServiceRequest;
