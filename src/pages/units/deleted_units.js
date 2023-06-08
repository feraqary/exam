// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Add Services ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: 'SI Number'
  },
  {
    accessorKey: 'ref',
    header: 'Ref.No'
  },
  {
    accessorKey: 'title',
    header: 'Unit Title'
  },
  {
    accessorKey: 'company',
    header: 'Company'
  },
  {
    accessorKey: 'loc',
    header: 'Location'
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
          Restore
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    company: 'Developer Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Joffery',
    loc: 'Lannisters'
  },
  {
    company: 'Developer Company',
    loc: 'US',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Jamie'
  },
  {
    company: 'Broker Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Cercie',
    loc: 'Lannisters'
  },
  {
    company: 'Marketing Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Arya Stark',
    loc: 'Winterfell'
  },
  {
    company: 'Developer Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Joffery',
    loc: 'Lannisters'
  }
];

function DeletedUnits() {
  return (
    <Page title="Deleted Units">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

DeletedUnits.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DeletedUnits;
