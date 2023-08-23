// material-ui
import { Grid, Box, Button, DialogActions, IconButton, Dialog, DialogContent, CircularProgress, Typography } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import Rating from '@mui/material/Rating';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import {
  useGetLocalProjectsQuery,
  useUpdateProjectStatusMutation,
  useUpdateProjectsVerifyStatusMutation,
  useGetAllProjectPromotionsQuery,
  useDeleteSingleProjectPromotionMutation,
  useEditPromotionListMutation,
} from 'store/services/project/projectApi';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastSuccess, ToastError } from 'utils/toast';
import TableSelectorOption from 'components/InputArea/TableSelectorOption';
import Link from 'next/link';
import Container from 'components/Elements/Container';
// import AddPromotions from '../promotions/add_promotions';
// import AddPromotions from '../promotions/add_promotions_test';
// import AddPromotions from './project_management/promotions/add_promotions';  
import AddPromotions from './project_management/promotions/add_promotions_test';
// import ViewInformation from '../information/view_information';
import PopUp from 'components/InputArea/PopUp';
import { use } from 'i18next';
// import ViewInformation from '../information/view_information';
// ==============================|| Manage International Projects ||============================== //

const ProjectPromotions = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  // const { data: promotionList, isError, isFetching, error, isLoading,isSuccess } = useGetAllProjectPromotionsQuery(pagination);
  // console.log(promotionList, 'promotion Listfdfdf');

    const { data: promotionList, isError, error, isLoading, isFetching } = useGetAllProjectPromotionsQuery(pagination);
   console.log(promotionList,'data..');
  const [updateStatus, result] = useUpdateProjectStatusMutation();
  const [deleteSingleProjectPromotion,deleteResponse] = useDeleteSingleProjectPromotionMutation();
 
 

  useEffect(() => {
    if (result?.isSuccess) {
      ToastSuccess('Project status successfully updated');
    }
  }, [result?.isSuccess]);

  useEffect(() => {
    if (result.isError) {
      const { data } = result.error;
     
      ToastError('Error');
    }
  }, [result.isError]);

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
        const [viewOpen, setViewOpen] = useState(false);

        const handlePromotionOpen = () => {
          setPromotionOpen(true);
        };
        const handlePromotionClose = () => {
          setPromotionOpen(false);
        };

        const handleClickOpen = () => {
          setOpen(true);
        };

        const handleClose = () => {
          setOpen(false);
        };

        const handleVerifyStatus = () => {
          setVerify((prev) => !prev);
          const formData = new FormData();
          formData.append('project_id', row.original.id);
          formData.append('is_verified', verify);
          updateVerifyStatus(formData);
         
        };
        
        const handleUpdateStatus = (status) => {
          const formData = new FormData();
          formData.append('id', row.original.id);
          formData.append('status_id', status);
          updateStatus(formData);
        };
        const handleDeletePromotion =async() => {
         
         console.log(row.original.id,'status');
          
         await deleteSingleProjectPromotion(row.original.id);
        
        
        };
      const handleUpdate =(status)=>{
        const formData = new FormData();
        formData.append('id', row.original.id);
        formData.append('status_id', status);
        editPromotionList(formData);
      }
        
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
                <PopUp opened={promotionOpen} setOpen={setPromotionOpen} title="Add Promotion" size={'md'}>
                  <AddPromotions projectId={row.original.id} />
                </PopUp>
               
              
                <Button onClick={ handleDeletePromotion} variant="contained" color="error">
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
    <Page title="Manage Project">
      <ToastContainer />
      <Container title="Manage Local Projects" style={{ xs: 12 }}>
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

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

ProjectPromotions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ProjectPromotions;
