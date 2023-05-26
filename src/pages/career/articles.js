// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button, Alert, createMuiTheme } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
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