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

import SharedPropertyHubTable from 'components/widget/Data/shared_properties_hub';

// ==============================|| Reviews datatable ||============================== //
function SharedPropertiesHub() {
  return (
    <Page title="Property Hub">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <SharedPropertyHubTable title="List Shared Property" />
        </Grid>
      </Grid>
    </Page>
  );
}

SharedPropertiesHub.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SharedPropertiesHub;