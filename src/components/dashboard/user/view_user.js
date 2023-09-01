// add_promotions.js

import { Grid, ListItemText } from '@mui/material';
import PopUp from 'components/InputArea/PopUp';

function ViewUser({ title, setOpen, opened, size }) {
  return (
    <PopUp opened={opened} setOpen={setOpen} size={size} title={title}>
      <Grid item xs={12}>
        <Grid container spacing={2} alignItems="center">
          <Item primary="ID" secondary="78AS55" />
          <Item primary="Name" secondary="Bruce Wayne" />
          <Grid item xs={12} lg={12}></Grid>
          <Item primary="Email" secondary="Wayne@gamil.com" />
          <Item primary="Phone" secondary="+971 587895" />
        </Grid>
      </Grid>
    </PopUp>
  );
}

export const Item = ({ primary, secondary }) => {
  return (
    <>
      <Grid item xs={6} lg={4}>
        <ListItemText primary={primary} secondary={secondary} />
      </Grid>
    </>
  );
};

export default ViewUser;
