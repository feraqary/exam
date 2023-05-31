// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button, Alert, createMuiTheme } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';

import ManageContractTable from 'components/widget/Data/contract/manage_contract';

// ==============================|| contract datatable ||============================== //
function ManageContract() {
  return (
    <Page title="Contract">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManageContractTable title="Manage Contract" />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageContract.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageContract;