// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import AgentReview from 'components/widget/Data/reviews/agent_review';

// ==============================|| Reviews datatable ||============================== //
function Reviews() {
  return (
    <Page title=" Reviews">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <AgentReview title="Reviews" />
        </Grid>
      </Grid>
    </Page>
  );
}

Reviews.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Reviews;
