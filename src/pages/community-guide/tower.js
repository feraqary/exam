// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import ManageTowerTable from 'components/widget/Data/pages/manage_tower';

// ==============================|| Reviews datatable ||============================== //
function CommunityManageTower() {
  return (
    <Page title="Community Guide">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManageTowerTable title="Tower Image List" />
        </Grid>
      </Grid>
    </Page>
  );
}

CommunityManageTower.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CommunityManageTower;