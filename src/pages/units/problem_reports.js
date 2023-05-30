// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import ReportProblemListingTable from 'components/widget/Data/units/reports';

// ==============================|| Add Services ||============================== //
function ReportProblemListing() {
  return (
    <Page title="Units">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
            <ReportProblemListingTable title="Report Problem" />
        </Grid>
      </Grid>
    </Page>
  );
}

ReportProblemListing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ReportProblemListing;