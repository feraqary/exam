// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Reviews datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: '   SI NO'
  },
  {
    accessorKey: 'date',
    header: 'Date'
  },
  {
    accessorKey: 'title',
    header: 'Title'
  },
  {
    accessorKey: 'activity',
    header: 'Activity'
  }
];

const data = [
  {
    title: 'Developer Company',
    webID: 'PA2831023',
    activity: ' uploaded',
    date: '2-12-2023'
  },
  {
    title: 'Broker Company',
    sino: 'PA283102',
    date: '2-12-2023',
    activity: ' uploaded'
  },
  {
    title: 'Marketing Company',
    sino: 'PA283102',
    date: '2-12-2023',
    activity: ' uploaded'
  },
  {
    title: 'Developer Company',
    sino: 'PA283102',
    date: '2-12-2023',
    activity: ' uploaded'
  }
];
function CommunityActivities() {
  return (
    <Page title="Community Activities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

CommunityActivities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CommunityActivities;
