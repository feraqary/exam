// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Auction datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: 'SI NO'
  },
  {
    accessorKey: 'reference',
    header: 'Ref NO'
  },
  {
    accessorKey: 'name.projectName',
    header: 'Title'
  },
  {
    accessorKey: 'bid',
    header: 'Bids'
  },
  {
    accessorKey: 'minbid',
    header: 'Minimum Bid Amount'
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
    projectName: 'BlueStone',
    reference: 'PA283102',
    bid: 33200,
    minbid: 33200,
    sino: 'PA283102'
  },
  {
    projectName: 'Khidmah',
    reference: 'PA2831023',
    bid: 33200,
    minbid: 33200,
    sino: 'PA2831023'
  },
  {
    projectName: 'Forum',
    reference: 'PA283102',
    bid: 33200,
    minbid: 33200,
    sino: 'PA283102'
  },
  {
    projectName: 'Dubai Holding',
    reference: 'PA283102',
    bid: 33200,
    minbid: 33200,
    sino: 'PA283102'
  },
  {
    projectName: 'BlueStone',
    reference: 'PA283102',
    bid: 33200,
    minbid: 33200,
    sino: 'PA283102'
  }
];

function DeletedAuctions() {
  return (
    <Page title="Deleted Auctions">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

DeletedAuctions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DeletedAuctions;
