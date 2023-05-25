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

import ManageCommunityTable from 'components/widget/Data/manage_community';

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