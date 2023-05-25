// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button, Alert, createMuiTheme } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import LocalCompanyActivities from 'components/widget/Data/company_activities';

import BuldingReviewTable from 'components/widget/building_review';

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