// material-ui
import { Grid } from '@mui/material';
import MainCard from 'components/ui-component/cards/MainCard';

const Container = ({ title, style, children, ...rest }) => {
  return (
    <Grid item xs={style.xs}>
      <MainCard title={title} {...rest}>
        {children}
      </MainCard>
    </Grid>
  );
};

export default Container;
