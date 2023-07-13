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
    accessorKey: 'state',
    header: 'State'
  },
  {
    accessorKey: 'publish',
    header: 'Publish'
  }
];

const data = [
  {
    state: 'Developer Company',
    sino: 'PA2831023',
    publish: 'Lannisters'
  },
  {
    state: 'Broker Company',
    sino: 'PA283102',
    publish: 'Lannisters'
  },
  {
    state: 'Marketing Company',
    sino: 'PA283102',
    publish: 'Winterfell'
  },
  {
    state: 'Developer Company',
    sino: 'PA283102',
    publish: 'Lannisters'
  }
];

function CommunityManageTower() {
  return (
    <Page title="Community Publish Status">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

CommunityManageTower.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CommunityManageTower;
