// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import ManageCommunityTable from 'components/widget/Data/community/manage_community';

// ==============================|| Reviews datatable ||============================== //
function ManageCommunityGuide() {
  return (
    <Page title="Community Guide">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManageCommunityTable title="Community Guide List" />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageCommunityGuide.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageCommunityGuide;