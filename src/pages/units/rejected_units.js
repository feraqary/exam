// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import RejectedUnitsTable from 'components/widget/Data/units/rejected_units';

// ==============================|| Add Services ||============================== //
function RejectedUnits() {
  return (
    <Page title="Units">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
            <RejectedUnitsTable title="Rejected Units List" />
        </Grid>
      </Grid>
    </Page>
  );
}

RejectedUnits.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default RejectedUnits;