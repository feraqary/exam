// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import { useState } from 'react';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import Container from 'components/Elements/Container';
import { useGetAllProjectPromotionsQuery, useGetAllPromoTypeQuery } from 'store/services/project/projectApi';
import PopUp from 'components/InputArea/PopUp';
import ViewInformation from './view_information';
import Link from 'next/link';
import AddPromotionType from './add_promotionType';

// ==============================|| Manage Project Promotions ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'id',
    header: 'ID '
  },

  {
    accessorKey: 'label',
    header: 'Name'
  },
  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ renderedCellValue, row }) => {
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          {/* <Button variant="contained" color="primary" onClick={handlePromotionDetails}>
            Details
          </Button>
          <PopUp opened={promotionDetailsOpen} setOpen={setPromotionDetailsOpen} size={'lg'}>
                  <ViewInformation promotionDetail={row.original} />
          </PopUp>

        <Button variant="contained" color="primary">
          Edit
        </Button> */}
          <Button variant="contained" color="error">
            Remove
          </Button>
        </Box>
      );
    }
  }
];

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
  const [addPromotionModal, setAddPromotionModal] = useState(false);
  const { data: allPromoTypes, isError, error, isLoading, isFetching } = useGetAllPromoTypeQuery();

  return (
    <Page title="Manage Project">
      <Container title="Manage Promotions" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table
              data={allPromoTypes?.data || []}
              columnHeaders={ColumnHeaders}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={isFetching}
              loading={isLoading}
              rowCount={allPromoTypes?.data.length}
              renderTopToolbarCustomActions={({ table }) => {
                return (
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button variant="outlined" onClick={() => setAddPromotionModal(true)}>
                      Add Promotion Type
                    </Button>
                  </div>
                );
              }}
            />
          </Grid>
          <AddPromotionType
            opened={addPromotionModal}
            setOpen={setAddPromotionModal}
            title="Add Promotion Type"
            size={'sm'}
            pageTitle="Promotion Type"
          />
        </Grid>
      </Container>
    </Page>
  );
}

ManagePromotions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManagePromotions;
