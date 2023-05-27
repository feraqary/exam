// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import RequestVideo from 'components/widget/Data/leads_data/leads_video'

// ==============================|| Request Video||============================== //
function RequestVideos() {
  return (
    <Page title="Request Video">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Request Video" />
          <RequestVideo />
        </Grid>
      </Grid>
    </Page>
  );
}

RequestVideos.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default RequestVideos;
