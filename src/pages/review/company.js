// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import CompanyReviewTable from 'components/widget/Data/company/company_review';

// ==============================|| Reviews datatable ||============================== //
function CompanyReviews() {
  return (
    <Page title=" Reviews">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <CompanyReviewTable title="Company Reviews" />
        </Grid>
      </Grid>
    </Page>
  );
}

CompanyReviews.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CompanyReviews;
