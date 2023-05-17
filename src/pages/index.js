// material-ui
import { useTheme, styled } from '@mui/material/styles';

// project imports
import LAYOUT from 'constant';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import HeaderSection from 'components/landingpage/HeaderSection';

import Customization from 'layout/Customization';
import AppBar from 'components/ui-component/extended/AppBar';

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 30,
  overflowX: 'hidden',
  overflowY: 'clip',
  background:
    theme.palette.mode === 'dark'
      ? theme.palette.background.default
      : `linear-gradient(360deg, ${theme.palette.grey[100]} 1.09%, ${theme.palette.background.paper} 100%)`,
  [theme.breakpoints.down('md')]: {}
}));

// =============================|| LANDING MAIN ||============================= //

const Landing = () => {
  const theme = useTheme();

  return (
    <Page title="Welcome to Aqary International">
      {/* 1. header and hero section */}
      <HeaderWrapper id="home">
        <AppBar />
        <HeaderSection />
      </HeaderWrapper>

      <Customization />
    </Page>
  );
};

Landing.getLayout = function getLayout(page) {
  return <Layout variant={LAYOUT.minimal}>{page}</Layout>;
};

export default Landing;
