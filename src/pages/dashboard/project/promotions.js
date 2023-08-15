// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import { useState, useEffect } from 'react';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import Container from 'components/Elements/Container'; 
import { useCreatePromotionsMutation, useGetPromotionsQuery } from 'store/services/project/projectApi';
import { ToastSuccess } from 'utils/toast';

// ==============================|| Manage Project Promotions ||============================== //

const manageProjectPromotions = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0, 
    pageSize: 10,
  });
  const { data: projectPromotionsData, isError , error, isLoading, isFetching} = useGetPromotionsQuery(pagination);

  

const promotionData = [
  {
  accessorKey: 'id',
  header: 'Project ID' 
  },
  {
    accessorKey: 'ref_no',
    header: 'Reference Number'
    },
    {
      accessorKey: 'label',
      header: 'Project Name'
    },
    {
      accessorKey: 'expiry_date',
      header: 'Expiry Date'
    },
    {
      accessorKey: 'promotion_description',
      header: 'Description'

    }
]
function manageProjectPromotions() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });
  return (
    <Page title="Manage Project">
      <Container title="Manage Promotions" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table
              data={data}
              columnHeaders={promotionData}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={false}
              loading={false}
              rowCount={data.length}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
}

manageProjectPromotions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default manageProjectPromotions;
