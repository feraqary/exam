// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';

import { useState, useEffect } from 'react';
=======
import { useState } from 'react';

import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import Container from 'components/Elements/Container';

import { useGetPromotionsQuery } from 'store/services/project/projectApi';

import { useGetAllProjectPromotionsQuery } from 'store/services/project/projectApi';
import PopUp from 'components/InputArea/PopUp';
import ViewInformation from './view_information';

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

const ColumnHeaders = [
  {
    accessorKey: 'ref_no',
    header: 'Reference No '
  },

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

  // {
  //   accessorKey: 'promotion_description',
  //   header: 'Promotion Type'
  // }
  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ renderedCellValue, row }) => {
      const [promotionDetailsOpen, setPromotionDetailsOpen] = useState(false);
      const handlePromotionDetails = () => {
        setPromotionDetailsOpen(true);
      };
      return(

        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
          <Button variant="contained" color="primary" onClick={handlePromotionDetails}>
            Details
          </Button>
          <PopUp opened={promotionDetailsOpen} setOpen={setPromotionDetailsOpen} size={'lg'}>
                  <ViewInformation promotionDetail={row.original} />
          </PopUp>

        <Button variant="contained" color="primary">
          Edit
        </Button>
        <Button variant="contained" color="error">
          Remove
        </Button>
      </Box>
        )
  }
  }
];
if (isLoading) return;
return (
    <Page title="Manage Promotions">

const data = [
  {
    projectName: 'Khidmah',
    promoType: 'Developer Company',
    expDay: 'US',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    projectName: 'Forum',
    promoType: 'Broker Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    projectName: 'Dubai Holding',
    promoType: 'Marketing Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    projectName: 'BlueStone',
    promoType: 'Developer Company',
    expDay: 'USA',
    proId: 'PA283102',
    action: ' edit, multiple'
  }
];
function ManagePromotions() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const { data: allProjectPromotions, isError, error, isLoading, isFetching } = useGetAllProjectPromotionsQuery(pagination);
console.log("promotions", allProjectPromotions)

  return (
    <Page title="Manage Project">


      <Container title="Manage Promotions" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table

              data={promotionData?.data || []}
              columnHeaders={ProjectPromotionsData}
              data={allProjectPromotions?.data || []}
              columnHeaders={ColumnHeaders}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={isFetching}
              loading={isLoading}
              rowCount={promotionData?.Total}
              data={allProjectPromotions?.data || []}
              columnHeaders={ColumnHeaders}
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


ProjectPromotions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ProjectPromotions;

ManagePromotions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManagePromotions;

