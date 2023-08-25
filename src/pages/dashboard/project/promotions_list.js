// material-ui
import { Grid, Box, Button, CircularProgress, Typography } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import Tooltip from '@mui/material/Tooltip';
import {
  useUpdateProjectsVerifyStatusMutation,
  useGetAllProjectPromotionsQuery,
  useDeleteSingleProjectPromotionMutation,
} from 'store/services/project/projectApi';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/Elements/Container';
import AddPromotions from './project_management/promotions/add_promotions';
import PopUp from 'components/InputArea/PopUp';
import { ToastSuccess } from 'utils/toast';
// ==============================|| Manage International Projects ||============================== //

const ProjectPromotions = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const { data: promotionList, isError, error, isLoading, isFetching } = useGetAllProjectPromotionsQuery(pagination);
  const [deleteSingleProjectPromotion, deleteResponse] = useDeleteSingleProjectPromotionMutation();
 
   useEffect(()=>{
    if(deleteResponse.isSuccess){
      ToastSuccess('Deleted Succesfully')
    }
   },[deleteResponse.isSuccess])
  const ColumnHeaders = [
    {
      accessorKey: 'ref_no',
      header: 'Ref NO ',
      title: (
        <Tooltip title={'Project ID'}>
          <span>Project ID</span>
        </Tooltip>
      )
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
      accessorKey: 'promotion_typel',
      header: 'Promotion Type'
    },
    {
      accessorKey: 'promotion_description',
      header: 'Description'
    },

    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ renderedCellValue, row }) => {
        const [open, setOpen] = useState(false);

        const [updateVerifyStatus, Verifyresult] = useUpdateProjectsVerifyStatusMutation();
        const [verify, setVerify] = useState(false);
        const [promotionOpen, setPromotionOpen] = useState(false);

        const handlePromotionOpen = () => {
          setPromotionOpen(true);
        };

        const handleDeletePromotion = async () => {
          await deleteSingleProjectPromotion(row.original.id);
        };

        return (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexDirection: 'column'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              ></Box>
              {/* //================================= */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                {row.original.phase_type == 'Multiple' && <></>}
                <Button onClick={handlePromotionOpen} variant="contained" color="primary">
                  Edit Promotions
                </Button>
                <PopUp opened={promotionOpen} setOpen={setPromotionOpen} title="Edit Promotion" size={'md'}>
                  <AddPromotions title="EditPromotion" projectId={row.original.id} setPromotionOpen={setPromotionOpen}/>
                </PopUp>
                <Button onClick={handleDeletePromotion} variant="contained" color="error">
                  Remove
                </Button>
              </Box>
            </Box>
          </>
        );
      }
    }
  ];

  if (isLoading) return;
  return (
    <Page title="Manage Project Promotioin">
      <ToastContainer />
      <Container title="Manage Local Promotion" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table
              columnHeaders={ColumnHeaders}
              data={promotionList?.data || []}
              loading={false}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={isFetching}
              rowCount={promotionList?.Total}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

ProjectPromotions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ProjectPromotions;
