// add_promotions.js

import React from 'react';
import { Grid, ListItemText } from '@mui/material';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';

function ViewInformation({ promotionDetail }) {
  return (
    <Page title="Promotions">
      <Grid item xs={12}>
        <MainCard title="Promotion Details">
          <Grid container spacing={2} alignItems="center">
            <Item primary="Refernce No:" secondary={promotionDetail.ref_no} />
            <Item primary="Project Name :" secondary={promotionDetail?.label} />
            <Item primary="Expiry Date :" secondary={promotionDetail?.expiry_date} />
            <Grid item xs={12} lg={12}>
              <Item primary={`Promotion Types: ${promotionDetail.promotion_type ? promotionDetail.promotion_type.length : ""}`} />
              {promotionDetail.promotion_type?.map((type) => {
                return <Item secondary={type.label} key={type.id} />;
              })}
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Page>
  );
}

const Item = ({ primary, secondary }) => {
  return (
    <>
      <Grid item xs={6} lg={4}>
        <ListItemText primary={primary} secondary={secondary} />
      </Grid>
    </>
  );
};

export default ViewInformation;
