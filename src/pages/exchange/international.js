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

import InternationalExhangeTable from 'components/widget/Data/international_exchange_units';

// ==============================|| Reviews datatable ||============================== //
function InternationalExchangeUnit() {
  return (
    <Page title="Reviews">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <InternationalExhangeTable title="International Exchange Units" />
        </Grid>
      </Grid>
    </Page>
  );
}

InternationalExchangeUnit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default InternationalExchangeUnit;