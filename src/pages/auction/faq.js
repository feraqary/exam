// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Auction datatable ||============================== //

const data = [
  {
    answer: 'PB192323',
    question: 'US',
    sino: 'PB192323'
  },
  {
    answer: 'PA2831023',
    question: 'US',
    sino: 'PA2831023'
  },
  {
    answer: 'PA283102',
    question: 'US',
    sino: 'PA283102'
  },
  {
    question: 'US',
    answer: 'PA2831023',
    sino: 'PA2831023'
  },
  {
    answer: 'PA283102',
    question: 'US',
    sino: 'PA283102'
  },
  {
    answer: 'PA283102',
    question: 'US',
    sino: 'PA283102'
  },
  {
    answer: 'PA283102',
    question: 'US',
    sino: 'PA283102'
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: '   SI NO'
  },
  {
    accessorKey: 'question',
    header: 'Question'
  },
  {
    accessorKey: 'answer',
    header: 'Answer'
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
          View
        </Button>
        <Button variant="contained" color="primary">
          Edit
        </Button>
        <Button variant="contained" color="primary">
          Delete
        </Button>
      </Box>
    )
  }
];

function FAQ() {
  return (
    <Page title="Auction FAQ">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

FAQ.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default FAQ;
