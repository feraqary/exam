// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import InternationalAgentListTable from 'components/widget/Data/agent/international_agent_list';

// ==============================|| Reviews datatable ||============================== //
function InternationalAgents() {
  return (
    <Page title="Agent">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <InternationalAgentListTable title="International Agents List" />
        </Grid>
      </Grid>
    </Page>
  );
}

InternationalAgents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default InternationalAgents;