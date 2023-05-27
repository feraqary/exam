// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import AgentActivitiesTable from 'components/widget/Data/agent/agent_activities';

// ==============================|| Agen Activities datatable ||============================== //
function AgentActivities() {
  return (
    <Page title="Agent">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <AgentActivitiesTable title="Agent Activities" />
        </Grid>
      </Grid>
    </Page>
  );
}

AgentActivities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AgentActivities;
