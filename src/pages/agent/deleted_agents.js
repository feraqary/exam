// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import DeletedAgentsListTable from 'components/widget/Data/agent/deleted_agents_list';

// ==============================|| Reviews datatable ||============================== //
function DeletedAgents() {
  return (
    <Page title="Agent">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <DeletedAgentsListTable title="Deleted Agents List" />
        </Grid>
      </Grid>
    </Page>
  );
}

DeletedAgents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DeletedAgents;
