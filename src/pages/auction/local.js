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
    reference: 'PA2831023',
    property: 'PA2831023',
    bid: 33200,
    minbid: 33200,
    sino: 'PA2831023',
    category: 'Arya Stark',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime: '22:00:00',
    endtime: '22:00:00',
    status: ' uploaded'
  },
  {
    reference: 'PA283102',
    property: 'PA283102',
    bid: 33200,
    minbid: 33200,
    sino: 'PA283102',
    category: 'Joffery',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime: '22:00:00',
    endtime: '22:00:00',
    status: ' uploaded'
  },
  {
    reference: 'PA2831023',
    property: 'PA2831023',
    bid: 33200,
    yearOfExperience: 4,
    sino: 'PA2831023',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime: '22:00:00',
    endtime: '22:00:00',
    category: 'Joffery',
    status: 'uploaded'
  },
  {
    reference: 'PA283102',
    property: 'PA283102',
    bid: 33200,
    minbid: 33200,
    sino: 'PA283102',
    category: 'Cercie',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime: '22:00:00',
    endtime: '22:00:00',
    status: ' uploaded'
  },
  {
    reference: 'PA283102',
    property: 'PA283102',
    bid: 33200,
    minbid: 33200,
    sino: 'PA283102',
    category: 'Arya Stark',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime: '22:00:00',
    endtime: '22:00:00',
    status: ' uploaded'
  },
  {
    reference: 'PA283102',
    property: 'PA283102',
    bid: 33200,
    minbid: 33200,
    sino: 'PA283102',
    category: 'Joffery',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime: '22:00:00',
    endtime: '22:00:00',
    status: ' uploaded'
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: '   SI NO'
  },
  {
    accessorKey: 'property',
    header: 'Property ID'
  },
  {
    accessorKey: 'reference',
    header: 'Reference ID'
  },
  {
    accessorKey: 'category',
    header: 'Category'
  },
  {
    accessorKey: 'bid',
    header: 'Bids Amount'
  },
  {
    accessorKey: 'minbid',
    header: 'Minimum Bid Amount'
  },
  {
    accessorKey: 'startdate',
    header: 'Start Date'
  },
  {
    accessorKey: 'starttime',
    header: 'Start Time'
  },
  {
    accessorKey: 'enddate',
    header: 'End Date'
  },
  {
    accessorKey: 'endtime',
    header: 'End Time'
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

function ManageLocalAuction() {
  return (
    <Page title="Local Auctions">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageLocalAuction.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageLocalAuction;
