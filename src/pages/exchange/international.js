// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import InternationalExhangeTable from 'components/widget/Data/exchange/international_exchange_units';

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