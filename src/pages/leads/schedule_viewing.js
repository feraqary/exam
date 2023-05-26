// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| Schedule Viewing||============================== //
function ScheduleViewing() {
  return (
    <Page title="Schedule Viewing">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Schedule Viewing" />
        </Grid>
      </Grid>
    </Page>
  );
}

ScheduleViewing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ScheduleViewing;
