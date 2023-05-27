// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';



// ==============================|| Company Gallery ||============================== //
function CompanyGallery() {
  return (
    <Page title="Company Gallery">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Page>
  );
}

CompanyGallery.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CompanyGallery;
