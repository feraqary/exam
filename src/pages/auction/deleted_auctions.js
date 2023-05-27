// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button, Alert, createMuiTheme } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';

import DeletedAuctionsTable from 'components/widget/Data/auction/deleted_auctions';


// ==============================|| Auction datatable ||============================== //
function DeletedAuctions() {
  return (
    <Page title="Auction">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <DeletedAuctionsTable title="Deleted Auctions List" />
        </Grid>
      </Grid>
    </Page>
  );
}

DeletedAuctions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DeletedAuctions;