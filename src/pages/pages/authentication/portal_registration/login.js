import Link from 'Link';
// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Divider, Grid, Hidden, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import LAYOUT from 'constant';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import AuthWrapper1 from 'components/authentication/AuthWrapper1';
import AuthCardWrapper from 'components/authentication/AuthCardWrapper';
import Logo from 'components/ui-component/Logo';
import AuthLogin from 'components/authentication/auth-forms/AuthLogin';
import BackgroundPattern1 from 'components/ui-component/cards/BackgroundPattern1';
import AuthSlider from 'components/ui-component/cards/AuthSlider';

// assets
const AuthBlueCard = '/assets/images/auth/auth-blue-card.svg';
const AuthPurpleCard = '/assets/images/auth/auth-purple-card.svg';

// styles
const PurpleWrapper = styled('span')({
  '&:after': {
    content: '""',
    position: 'absolute',
    top: '32%',
    left: '40%',
    width: 313,
    backgroundSize: 380,
    height: 280,
    backgroundImage: `url(${AuthPurpleCard})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    animation: '15s wings ease-in-out infinite'
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    top: '23%',
    left: '37%',
    width: 313,
    backgroundSize:380, 
    height: 280,
    backgroundImage: `url(${AuthPurpleCard})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    animation: '15s wings ease-in-out infinite',
    width: 243,
    height: 210,
    backgroundSize: 380,
    backgroundImage: `url(${AuthBlueCard})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    animation: '15s wings ease-in-out infinite',
    animationDelay: '1s'
  }
});

// carousel items
const items = [
  {
    title: 'Aqary International ',
    description: 'The Purpose of Aqary International is to make home moving easier in the entire world. '
  },
  {
    title: 'AQARY Group is Reimagining Real Estate to make it easier to unlock life’s next chapter.',
    description:
      'As the most-visited real estate website in the world, AQARY and its affiliates offer customers an on-demand experience for selling, buying, renting, and financing with transparency and nearly seamless end-to-end service. AQARY Offers buys and sells homes directly in dozens of markets across the world, allowing sellers control over their timeline. AQARY Home Loans, our affiliate lender, provides our customers with an easy option to get pre-approved and secure financing for their next home purchase.'
  },
  {
    title: 'Our Aim is to Create a more Efficient Housing Marketplace and make Home Moving Easier.    ',
    description:
      'Our ambition is to be the place, and the encyclopedia that consumers and customers turn to as their property portal of choice, and to deliver that objective, Aqary needs to be a business in which people want to work, invest, and with which people want to partner.'
  }
];

// ================================|| AUTH1 - LOGIN ||================================ //

const Login = ({ page, closePopUp }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Page title="Login">
      <AuthWrapper1>
        <Grid container alignItems="center" justifyContent={'center'} sx={{ minHeight: '100vh', overflow: 'hidden' }}>
          <Grid item container justifyContent="center" md={12} lg={12} sx={{ my: 3 }}>
            <AuthCardWrapper>
              <Grid container spacing={2}  justifyContent="center">
                <Grid item xs={12}>
                  <Grid container alignItems={matchDownSM ? 'center' : 'center'}  justifyContent={'center'}>
                    <Grid item>
                      <Stack justifyContent={'center'} textAlign={matchDownSM ? 'center' : 'inherit'}>
                        <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                          Hi, Welcome Back
                        </Typography>
                        <Typography color="textPrimary" gutterBottom variant="h4">
                          Login in to your account
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item sx={{ mb: { xs: 3, sm: 0 } }}>
                      <Link href="#" aria-label="theme-logo">
                        <Logo />
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <AuthLogin closePopUp={closePopUp} loginProp={1} page={page} />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Grid item container direction="column" alignItems="center" xs={12}>
                    <Typography
                      component={Link}
                      href="/pages/authentication/portal_registration/register"
                      variant="subtitle1"
                      sx={{ textDecoration: 'none' }}
                    >
                      Don&apos;t have an account?
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </AuthCardWrapper>
          </Grid>
        </Grid>
      </AuthWrapper1>
    </Page>
  );
};

Login.getLayout = function getLayout(page) {
  return <Layout variant={LAYOUT.minimal}>{page}</Layout>;
};

export default Login;
