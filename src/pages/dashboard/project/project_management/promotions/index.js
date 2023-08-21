// material-ui
import { Grid, Button, Box } from '@mui/material';

// project imports
import Layout from 'layout';
import { useState, useEffect } from 'react';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import Container from 'components/Elements/Container';
import { useDeleteProjectPromotionTypesMutation, useGetAllPromoTypeQuery } from 'store/services/project/projectApi';
import PopUp from 'components/InputArea/PopUp';
import ViewInformation from './view_information';
import Link from 'next/link';
import AddPromotionType from './add_promotionType';
import { ToastContainer } from 'react-toastify';
import { ToastSuccess, ToastError } from 'utils/toast';
import 'react-toastify/dist/ReactToastify.css';

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
      const [deletePromotionType, result] = useDeleteProjectPromotionTypesMutation();

      useEffect(() => {
        if (result.isSuccess) {
          console.log('Toast', result.isSuccess);
          ToastSuccess('Project status successfully updated');
        }
      }, [result.isSuccess]);

      useEffect(() => {
        if (result.isError) {
          const { data } = result.error;
          ToastError('Error');
        }
      }, [result.isError]);

      const handleDeletePromotionType = (id) => {
        deletePromotionType(id);
      };

      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <Button variant="contained" color="error" onClick={() => handleDeletePromotionType(row.original.id)}>
            Remove
          </Button>
        </Box>
      );
    }
  }
];

function ManagePromotions() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const [addPromotionModal, setAddPromotionModal] = useState(false);
  const { data: allPromoTypes, isError, error, isLoading, isFetching } = useGetAllPromoTypeQuery(pagination);
  console.log(allPromoTypes);

  return (
    <Page title="Manage Project">
      <ToastContainer />
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
