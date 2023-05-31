// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import LocalAgentListTable from 'components/widget/Data/agent/agent_list_data';

// ==============================|| Reviews datatable ||============================== //
function LocalAgents() {
  return (
    <Page title="Agent">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <LocalAgentListTable title="Agents List" />
        </Grid>
      </Grid>
    </Page>
  );
}

LocalAgents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default LocalAgents;