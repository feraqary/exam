// material-ui
import { Grid } from '@mui/material';
import MainCard from 'components/ui-component/cards/MainCard';

const Container = ({ title, style, children }) => {
  return (
    <Grid item xs={style.xs}>
      <MainCard title={title}>{children}</MainCard>
    </Grid>
  );
};

export default Container;
