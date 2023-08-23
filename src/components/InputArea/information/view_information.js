// add_promotions.js

import { Grid, ListItemText } from '@mui/material';
import Page from 'components/ui-component/Page';
import PopUp from '../PopUp';


function ViewInformation({ title, setOpen, opened, children, size, fullScreen, actions, ...rest }) {
  return (
    <PopUp opened={opened} setOpen={setOpen} size={size}>
      <Page title="Information">{children}</Page>
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

export default ViewInformation;
