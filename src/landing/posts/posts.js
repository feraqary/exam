// material-ui
import { Grid } from '@mui/material';
import * as React from 'react';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import PostCard from './components/postCard';

// ==============================|| Posts||============================== //

function Posts() {
  const Avatar1 = '/assets/images/users/avatar-1.png';
  const prod1 = '/assets/images/e-commerce/prod-5.png';
  const disc = 'Are you in search of the perfect place to call home? Somewhere that resonates with your lifestyle, aspirations, and dreams? Look no further, as we delve into the exhilarating journey of finding your dream home.';
  const disc2 =
    'The first step towards finding your dream home is understanding what it truly means to you. Take the time to envision your ideal living space. Consider factors such as location, size, style, amenities, and the overall atmosphere you desire. This will serve as the compass guiding you throughout the process.';
  return (
    <Page title="posts">
      <PostCard likes={10} pfp={Avatar1} postimg={prod1}  discription={disc} discription2={disc2} />
    </Page>
  );
}

Posts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Posts;
