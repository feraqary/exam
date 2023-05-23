// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import SharedPro from 'components/widget/Data/shared_pro_datatable';

// ===========================|| International Company Managment list||=========================== //

const IntCompData = () => (
  <Page title="Local Project List">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <SharedPro />
      </Grid>
    </Grid>
  </Page>
);

IntCompData.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default IntCompData;
