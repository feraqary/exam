// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| Activities Project ||============================== //
function Activities() {
  return (
    <Page title="Activities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Activities" />
        </Grid>
      </Grid>
    </Page>
  );
}

Activities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Activities;
