// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import { useState, useEffect } from 'react';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import Container from 'components/Elements/Container';
import { useGetPromotionsQuery } from 'store/services/project/projectApi';

// ==============================|| Manage Project Promotions ||============================== //


const ProjectPromotions = () => { 
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });
  const { data: promotionData , isError, error, isLoading, isFetching } = useGetPromotionsQuery(pagination);

const ProjectPromotionsData = [
  {
    accessorKey: 'id',
    header: 'Project ID '
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
    header: ' Promotion Description'
  },
  {
    accessorKey: 'promotion_type[]' , 
    header: 'Promotion Type'
  },
  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Button variant="contained" color="primary">
          Edit
        </Button>
        <Button variant="contained" color="error">
          Remove
        </Button>
      </Box>
    )
  }
];

if (isLoading) return;
return (
    <Page title="Manage Promotions">
      <Container title="Manage Promotions" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table
              data={promotionData?.data || []}
              columnHeaders={ProjectPromotionsData}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={isFetching}
              loading={isLoading}
              rowCount={promotionData?.Total}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

ProjectPromotions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ProjectPromotions;
