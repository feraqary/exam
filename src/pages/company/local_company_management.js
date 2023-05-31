// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import LocalCompanyList from 'components/widget/Data/company/local_comp_datatable';

// ===========================|| Company Managment list||=========================== //

const LocalData = () => (
  <Page title="Local Company List">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <LocalCompanyList />
      </Grid>
    </Grid>
  </Page>
);

LocalData.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default LocalData;
