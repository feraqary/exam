// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import ManageOfferTable from 'components/widget/Data/exchange/manage_offer_units';

// ==============================|| Reviews datatable ||============================== //
function ManageOfferUnits() {
  return (
    <Page title="Manage Offers">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManageOfferTable title="Manage Offer Units" />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageOfferUnits.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageOfferUnits;