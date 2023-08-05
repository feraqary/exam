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
    accessorKey: 'communityname',
    header: 'Community Name'
  }
];
const data = [
  {
    communityname: 'Broker Company',
    sino: 'PA283102'
  },
  {
    communityname: 'Marketing Company',
    sino: 'PA283102'
  },
  {
    communityname: 'Developer Company',
    sino: 'PA283102'
  }
];

function CommunityManageTowerStatus() {
  return (
    <Page title="Manage Tower Status">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

CommunityManageTowerStatus.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CommunityManageTowerStatus;
