// material-ui
import { Grid} from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import CommunityGuideActivitiesTable from 'components/widget/Data/community/community_guide_activities';



// ==============================|| Reviews datatable ||============================== //
function CommunityManageTower() {
  return (
    <Page title="Community Guide">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <CommunityGuideActivitiesTable title="Activities" />
        </Grid>
      </Grid>
    </Page>
  );
}

CommunityManageTower.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CommunityManageTower;