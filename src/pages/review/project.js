// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import ProjectReviewTable from 'components/widget/Data/add_project/project_review';

// ==============================|| Reviews datatable ||============================== //
function ProjectReviews() {
  return (
    <Page title="Reviews">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ProjectReviewTable title="Project Reviews" />
        </Grid>
      </Grid>
    </Page>
  );
}

ProjectReviews.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ProjectReviews;