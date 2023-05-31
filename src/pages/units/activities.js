// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import ActivitiesUnitsTable from 'components/widget/Data/units/activities';

// ==============================|| Add Services ||============================== //
function UnitActivities() {
  return (
    <Page title="Units">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
            <ActivitiesUnitsTable title="Activities" />
        </Grid>
      </Grid>
    </Page>
  );
}

UnitActivities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default UnitActivities;