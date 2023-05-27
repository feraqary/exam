// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import OfferExchangeTable from 'components/widget/Data/exchange/offer_exchange_units';

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