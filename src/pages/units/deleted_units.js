// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import DeletedUnitsTable from 'components/widget/Data/units/deleted_units';

// ==============================|| Add Services ||============================== //
function DeletedUnits() {
  return (
    <Page title="Units">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
            <DeletedUnitsTable title="Deleted Units List" />
        </Grid>
      </Grid>
    </Page>
  );
}

DeletedUnits.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DeletedUnits;