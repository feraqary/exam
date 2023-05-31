// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button, Alert, createMuiTheme } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';

import UsersTable from 'components/widget/Data/auction/users';


// ==============================|| Auction datatable ||============================== //
function AuctionUsers() {
  return (
    <Page title="Auction">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <UsersTable title="Auction User List" />
        </Grid>
      </Grid>
    </Page>
  );
}

AuctionUsers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AuctionUsers;