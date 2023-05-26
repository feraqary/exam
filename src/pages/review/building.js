// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import BuldingReviewTable from 'components/widget/Data/reviews/building_review';

// ==============================|| Reviews datatable ||============================== //
function BuildingReviews() {
  return (
    <Page title="Reviews">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <BuldingReviewTable title="Building Reviews" />
        </Grid>
      </Grid>
    </Page>
  );
}

BuildingReviews.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default BuildingReviews;
