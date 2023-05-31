// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import ActivityExchangeTable from 'components/widget/Data/exchange/activities_exchange';

// ==============================|| Reviews datatable ||============================== //
function ActitiesExchange() {
  return (
    <Page title="Reviews">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ActivityExchangeTable title="Exchange Activities" />
        </Grid>
      </Grid>
    </Page>
  );
}

ActitiesExchange.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ActitiesExchange;