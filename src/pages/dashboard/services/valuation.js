// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Activities Project ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: '   SI NO'
  },
  {
    accessorKey: 'service',
    header: 'Name'
  },
  {
    accessorKey: 'requestDate',
    header: 'Request Date'
  },
  {
    accessorKey: 'time',
    header: 'Time'
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
    accessorKey: 'company',
    header: 'Company'
  },
  {
    accessorKey: 'date',
    header: 'Date'
  }
];

const data = [
  {
    company: 'Developer Company',
    sino: 'PA283102',
    name: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    requestDate: '2-12-2023',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    name: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    requestDate: '2-12-2023',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    name: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    requestDate: '2-12-2023',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    name: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    requestDate: '2-12-2023',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    name: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    requestDate: '2-12-2023',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    name: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    requestDate: '2-12-2023',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    name: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    requestDate: '2-12-2023',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    name: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    requestDate: '2-12-2023',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    name: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    requestDate: '2-12-2023',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    name: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    requestDate: '2-12-2023',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    name: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    requestDate: '2-12-2023',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    name: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    requestDate: '2-12-2023',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    name: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    requestDate: '2-12-2023',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    name: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    requestDate: '2-12-2023',
    date: '2-12-2023',
    time: '2-12-2023'
  },
  {
    company: 'Developer Company',
    sino: 'PA283102',
    name: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    requestDate: '2-12-2023',
    date: '2-12-2023',
    time: '2-12-2023'
  }
];

function Valuation() {
  return (
    <Page title=" Valuation Requests">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}
Valuation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Valuation;
