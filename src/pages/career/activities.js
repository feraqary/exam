// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button, Alert, createMuiTheme } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';

import CareerActivitiesTable from 'components/widget/Data/careers/activities';


// ==============================|| Careers datatable ||============================== //
function CareerActivities() {
  return (
    <Page title="Careers">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <CareerActivitiesTable title="Activities" />
        </Grid>
      </Grid>
    </Page>
  );
}

CareerActivities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CareerActivities;