// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Auction datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: 'SI.NO'
  },
  {
    accessorKey: 'date',
    header: 'Date'
  },
  {
    accessorKey: 'title',
    header: 'Unit Title'
  },
  {
    accessorKey: 'companyname',
    header: 'Company'
  },
  {
    accessorKey: 'activity',
    header: 'Activity'
  }
];

const data = [
  {
    companyname: 'Developer Company',
    title: 'UAE',
    sino: 5,
    date: '2-12-2023',
    activity: ' edit, multiple'
  },
  {
    companyname: 'Developer Company',
    title: 'US',
    sino: 1,
    date: '2-12-2023',
    activity: ' edit, multiple'
  },
  {
    companyname: 'Broker Company',
    title: 'UAE',
    sino: 5,
    date: '2-12-2023',
    activity: ' edit, multiple'
  },
  {
    companyname: 'Marketing Company',
    title: 'UAE',
    sino: 5,
    date: '2-12-2023',
    activity: ' edit, multiple'
  },
  {
    companyname: 'Developer Company',
    title: 'USA',
    sino: 5,
    date: '2-12-2023',
    activity: ' edit, multiple'
  }
];

function AuctionActivities() {
  return (
    <Page title="Auction Activities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

AuctionActivities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AuctionActivities;
