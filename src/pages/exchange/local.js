// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import LocalExchangeTable from 'components/widget/Data/exchange/local_exchange_units';

// ==============================|| Reviews datatable ||============================== //
function LocalExchangeUnit() {
  return (
    <Page title="Reviews">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <LocalExchangeTable title="Local Exchange Units" />
        </Grid>
      </Grid>
    </Page>
  );
}

LocalExchangeUnit.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default LocalExchangeUnit;