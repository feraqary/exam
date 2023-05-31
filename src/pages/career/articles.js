// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import CareerArticlesTable from 'components/widget/Data/careers/articles';

// ==============================|| Careers datatable ||============================== //
function CareerArticles() {
  return (
    <Page title="Careers">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <CareerArticlesTable title="Job Category List" />
        </Grid>
      </Grid>
    </Page>
  );
}

CareerArticles.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CareerArticles;