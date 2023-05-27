// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import JobCategoriesTable from 'components/widget/Data/careers/categories';


// ==============================|| Careers datatable ||============================== //
function JobCategories() {
  return (
    <Page title="Careers">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <JobCategoriesTable title="Job Category List" />
        </Grid>
      </Grid>
    </Page>
  );
}

JobCategories.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default JobCategories;