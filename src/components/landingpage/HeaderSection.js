import { useMemo } from 'react';
// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Link, Stack, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';
import useConfig from 'hooks/useConfig';

// project imports
import AnimateButton from 'components/ui-component/extended/AnimateButton';

// assets
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MainTabs from '../../pages/dashboard/pages/frontend_pages/Tabs';
const dashboard = '/assets/images/landing/hero-dashboard.png';
const widget1 = '/assets/images/landing/hero-widget-1.png';
const widget2 = '/assets/images/landing/hero-widget-2.png';
const BgDark = '/assets/images/landing/bg-hero-block-dark.png';
const BgLight = '/assets/images/landing/bg-hero-block-light.png';

// styles
const HeaderImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  borderRadius: 20,
  transform: 'scale(1.7)',
  transformOrigin: theme.direction === 'rtl' ? '100% 50%' : '0 50%',
  [theme.breakpoints.down('xl')]: {
    transform: 'scale(1.5)'
  },
  [theme.breakpoints.down('lg')]: {
    transform: 'scale(1.2)'
  }
}));

const HeaderAnimationImage = styled('img')({
  maxWidth: '100%',
  filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))'
});

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderSection = () => {
  const theme = useTheme();
  const { rtlLayout } = useConfig();
  const headerSX = { fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem', lg: '3.5rem' } };

  const HeaderAnimationImagememo = useMemo(
    () => (
      <HeaderAnimationImage
        src={theme.palette.mode === 'dark' ? BgDark : BgLight}
        alt="aqary_international"
        sx={{
          display: { xs: 'none', md: 'flex' },
          position: 'absolute',
          filter: 'none',
          bottom: { md: 0 },
          right: 0,
          width: '50%',
          transformOrigin: '50% 50%',
          transform: rtlLayout ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      />
    ),
    [rtlLayout, theme]
  );

  return (
    <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}>
        <Grid item xs={12} md={5}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30 }}
              >
                <Stack spacing={1}>
                  <Typography textAlign={{ xs: 'center', md: 'left' }} variant="h1" sx={headerSX}>
                    Aqary International
                  </Typography>
                  <Typography textAlign={{ xs: 'center', md: 'left' }} variant="h1" color="primary" sx={headerSX}>
                    Aqary Dashboard
                  </Typography>
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} sx={{ mt: -2.5, textAlign: { xs: 'center', md: 'left' } }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
              >
                <Typography
                  textAlign={{ xs: 'center', md: 'left' }}
                  color="text.primary"
                  variant="body1"
                  sx={{ fontSize: { xs: '1rem', md: '1.125rem' } }}
                >
                  Aqary’s purpose is to make home moving easier in the entire world. We do this by creating a simpler and more efficient
                  property marketplace. AQARY Group is reimagining real estate to make it easier to unlock life’s next chapter. As the
                  most-visited real estate website in the world, AQARY and its affiliates offer customers an on-demand experience for
                  selling, buying, renting, and financing with transparency and nearly seamless end-to-end service. AQARY Offers buys and
                  sells homes directly in dozens of markets across the world, allowing sellers control over their timeline. AQARY Home
                  Loans, our affiliate lender, provides our customers with an easy option to get pre-approved and secure financing for their
                  next home purchase.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
              >
                <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Grid item>
                    <AnimateButton>
                      <Button
                        component={Link}
                        href="/dashboard/default"
                        target="_blank"
                        size="large"
                        variant="contained"
                        color="secondary"
                        startIcon={<PlayArrowIcon />}
                      >
                        View Dashboard
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Box sx={{ position: 'relative', mt: 8.75, zIndex: 9 }}>
            <HeaderImage src={dashboard} alt="aqary" />
            <Box
              sx={{
                position: 'absolute',
                top: { md: -35, lg: -110 },
                right: theme.direction === 'rtl' ? 170 : { md: -50, lg: -140, xl: -220 },
                width: { md: 220, lg: 290 },
                animation: '10s slideY linear infinite'
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
              >
                <HeaderAnimationImage src={widget1} alt="aqary" />
              </motion.div>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: { md: -20, lg: -90 },
                left: { md: 100, lg: 300 },
                width: { md: 220, lg: 280 },
                animation: '10s slideY linear infinite',
                animationDelay: '2s'
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
              >
                <HeaderAnimationImage src={widget2} alt="aqary" />
              </motion.div>
            </Box>
          </Box>
          {HeaderAnimationImagememo}
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeaderSection;
