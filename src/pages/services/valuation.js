// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

// ==============================|| Activities Project ||============================== //
function Valuation() {
  return(
    <Page title=" Valuation">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Page>
  );
}
Valuation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Valuation;