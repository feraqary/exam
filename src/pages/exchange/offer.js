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

import OfferExchangeTable from 'components/widget/Data/offer_exchange_units';

// ==============================|| Reviews datatable ||============================== //
function OfferExhangeUnit() {
  return (
    <Page title="Offer Units">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <OfferExchangeTable title="Exchange Offer Units" />
        </Grid>
      </Grid>
    </Page>
  );
}

OfferExhangeUnit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default OfferExhangeUnit;