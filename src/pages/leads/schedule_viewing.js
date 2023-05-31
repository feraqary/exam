// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import ScheduleViewing from 'components/widget/Data/leads_data/view_schedule';

// ==============================|| Schedule Viewing||============================== //
function ScheduleViewingList() {
  return (
    <Page title="Schedule Viewing">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Schedule Viewing" />
          <ScheduleViewing/>
        </Grid>
      </Grid>
    </Page>
  );
}

ScheduleViewingList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ScheduleViewingList;
