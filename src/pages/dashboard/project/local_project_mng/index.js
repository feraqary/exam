// localProjects.js

import React, { useState, useEffect } from 'react';
import { Box, Button, Dialog, DialogActions, Grid, IconButton, Modal, Slide, Tooltip } from '@mui/material';
import { FormControlLabel, Switch } from '@mui/material';
import { Rating } from '@mui/material';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useGetInternationalProjectsQuery, useUpdateProjectStatusMutation } from 'store/services/project/projectApi';
import { ToastContainer } from 'react-toastify';
import { ToastSuccess, ToastError } from 'utils/toast';
import ProjectRankSelector from '../project_rank';
import AddPromotions from '../add_promotions';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '10px solid #000',
  boxShadow: 24,
  p: 4,
};

const LocalProjects = () => {
  const [docsOpen, setDocsOpen] = useState(false);
  const [updateDocs, setUpdateDocs] = useState({ project: null, id: null });
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data: localProjectsData, isError, error, isLoading, isFetching } = useGetInternationalProjectsQuery(
    pagination
  );

  const [isOpen, setIsOpen] = useState(false);

  const [deleteProject, result] = useUpdateProjectStatusMutation();
  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Project has been Successfully Deleted!');
    }
  }, [result.isSuccess]);
  useEffect(() => {
    if (result.isError) {
      const { data } = result.error;
      console.log(data);
      ToastError('Error');
    }
  }, [result.isError]);

  const handleDocsOpen = () => {
    setDocsOpen(true);
  };
  const handleDocsClose = () => {
    setDocsOpen(false);
  };

  const handleOpenPromotions = (projectId) => {
    setUpdateDocs({ project: projectId, id: null });
    setIsOpen(true);
  };

  const handleClosePromotions = () => {
    setIsOpen(false);
  };

  const ColumnHeaders = [
    {
      accessorKey: 'id',
      header: 'Reference Number',
      title: (
        <Tooltip title={'Ref.No'}>
          <span>Reference Number</span>
        </Tooltip>
      ),
    },
    // ... other column headers ...

    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ renderedCellValue, row }) => {
        return (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
             
              <Button onClick={() => handleOpenPromotions(row.original.id)} color="primary" variant="contained">
                Add Promotions
              </Button>
            </Box>
          </>
        );
      },
    },
  ];

  if (isLoading) return null; 
  return (
    <Page title="Manage Project">
      <ToastContainer />
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table
            columnHeaders={ColumnHeaders}
            data={localProjectsData?.data || []}
            loading={isLoading}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={isFetching}
            rowCount={localProjectsData?.Total}
          />
        </Grid>
      </Grid>
      <Dialog maxWidth={'xl'} open={docsOpen} onClose={handleDocsClose} TransitionComponent={Transition}/>
        <DialogActions sx={{ justifyContent: 'flex-start' }} onClick={handleDocsClose}>
          <IconButton></IconButton>
        </DialogActions>
      

      <Modal open={isOpen} onClose={handleClosePromotions} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <AddPromotions projectId={updateDocs.project} onClose={handleClosePromotions} />
        </Box>
      </Modal>
    </Page>
  );
};

LocalProjects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default LocalProjects;
