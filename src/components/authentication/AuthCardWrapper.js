import PropTypes from 'prop-types';

// material-ui
import { Box } from '@mui/material';

// project import
import MainCard from 'components/ui-component/cards/MainCard';

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

const AuthCardWrapper = ({ children, ...other }) => (
  <MainCard
    sx={{
      maxWidth: { xs: 500, lg: 520 },
      // margin: { xs: 2.5, md: 3 },
      // '& > *': {
      //   flexGrow: 1,
      //   flexBasis: '50%'
      // },
      padding: '10px',
      height: 'fit-content',
      alignSelf: 'center'
    }}
    content={false}
    {...other}
  >
    <Box sx={{ p: { xs: 3, sm: 4, xl: 5 } }}>{children}</Box>
  </MainCard>
);

AuthCardWrapper.propTypes = {
  children: PropTypes.node
};

export default AuthCardWrapper;
