// material-ui
import { Grid, Box, Button, DialogActions, IconButton, Dialog, DialogContent } from '@mui/material';

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
import { useGetInternationalProjectsQuery, useUpdateProjectStatusMutation } from 'store/services/project/projectApi';
import React, { useState } from 'react';
import { ToastSuccess, ToastError } from 'utils/toast';
import { ToastContainer } from 'react-toastify';
import ProjectRankSelector from '../project_rank';
import 'react-toastify/dist/ReactToastify.css';
import AddPromotions from '../add_promotions';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
// ==============================|| Manage Local Projects ||============================== //

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
const localProjects = () => {
  const [docsOpen, setDocsOpen] = useState(false);
  const [updateDocs, setUpdateDocs] = useState({ project: null, id: null });
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const { data: localProjectsData, isError, error, isLoading, isFetching } = useGetInternationalProjectsQuery(pagination);


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

  const ColumnHeaders = [
    {
      accessorKey: 'id',
      header: 'Reference Number ',
      title: (
        <Tooltip title={'Ref.No'}>
          <span>Reference Number</span>
        </Tooltip>
      )
    },
    {
      accessorKey: 'projectStatus',
      header: 'Project Rank',
      Cell: ({ renderedCellValue, row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ProjectRankSelector value={row.original.rank_id} ProjectType={row.original.phase_type} id={row.original.id} />
        </Box>
      )
    },
    {
      accessorKey: 'project_name',
      header: 'Project Name'
    },
    {
      accessorKey: 'country',
      header: 'Location'
    },
    {
      accessorKey: 'parent_developer_company',
      header: 'Developer Company',
      Cell: ({ renderedCellValue }) => {
        return <Tooltip title="Developer Company Name"> {renderedCellValue}</Tooltip>;
      }
    },
    {
      accessorKey: 'rating',
      header: 'Rating',
      Cell: ({ renderedCellValue, row }) => {
        // console.log('row: ', projectData.data[row.index].Rating);

        return (
          <>
            <Rating name="read-only" value={localProjectsData?.data[row.index].Rating + 1} />
          </>
        );
      }
    },
    { accessorKey: 'quality_score', header: 'Quality Score' },

    {
      accessorKey: 'no_of_phases',
      header: 'Number of Phases'
    },
    {
      accessorKey: 'phasestest',
      header: 'Phases'
    },
    {
      accessorKey: 'phase_type',
      header: 'Phase Type'
    },
    {
      accessorKey: 'endis',
      header: 'Enable / Disable',
      Cell: ({ renderedCellValue, row }) => {
        return (
          <>
            <FormControlLabel control={<Switch defaultChecked />} />
          </>
        );
      }
    },
    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ renderedCellValue, row }) => {
        const [open, setOpen] = useState(false);
        const handleClickOpen = () => {
          setOpen(true);
        };
        const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
        const [deleteProject, result] = useUpdateProjectStatusMutation();
        useEffect(() => {
          if (result.isSuccess) {
            ToastSuccess('Project has been Deleted Successfully');
          }
        }, [result.isSuccess]);

        return (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <Button variant="contained" color="primary">
                Verify
              </Button>
              <Button variant="contained" color="primary">
                Edit
              </Button>
              <Button color="primary" variant="contained">
                Manage Documents
              </Button>
              <Button variant="contained" color="primary">
                View Live
              </Button>
              <Button variant="contained" color="primary">
                Listing Properties
              </Button>
              <Button onClick={handleOpen} color="primary" variant="contained"> Add Promotions</Button>
              <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                 <AddPromotions></AddPromotions>
                </Box>
              </Modal>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  const formData = new FormData();
                  formData.append('status_id', 6);
                  formData.append('id', row.original.id);
                  deleteProject(formData);
                }}
              >
                Delete
              </Button>
          
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
      <Dialog maxWidth={'xl'} open={docsOpen} onClose={handleDocsClose} TransitionComponent={Transition}>
        <DialogActions sx={{ justifyContent: 'flex-start' }} onClick={handleDocsClose}>
          <IconButton></IconButton>
        </DialogActions>
        <DialogContent>{/* <Documents comp={docs} /> */}</DialogContent>
      </Dialog>
    </Page>
  );
};

localProjects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default localProjects;
