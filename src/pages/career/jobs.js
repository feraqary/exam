// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';


import CareerListTable from 'components/widget/Data/careers/jobs';


// ==============================|| Careers datatable ||============================== //
function CareerList() {
  return (
    <Page title="Careers">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <CareerListTable title="List of Careers" />
        </Grid>
      </Grid>
    </Page>
  );
}

CareerList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CareerList;