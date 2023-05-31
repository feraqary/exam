// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button, Box, Alert, createMuiTheme } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';

import SubscribersListTable from 'components/widget/Data/subscribers';

// ==============================|| Subscribers datatable ||============================== //
function SubsribersList() {
  return (
    <Page title="Subscribers">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
            mb={2}
          >
            <Button variant="contained" color="primary">
              Excel
            </Button>
            <Button color="primary" variant="contained">
              Copy
            </Button>
            <Button variant="contained" color="primary">
              CSV
            </Button>
            <Button variant="contained" color="primary">
              PDF
            </Button>
          </Box>
          <SubscribersListTable title="Subscribers List" />
        </Grid>
      </Grid>
    </Page>
  );
}

SubsribersList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SubsribersList;
