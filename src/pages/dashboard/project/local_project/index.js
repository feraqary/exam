// material-ui
import { Grid, Box, Button, DialogActions, IconButton } from '@mui/material';

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
import { useGetLocalProjectQuery, useUpdateLocalProjectMutation, useDeleteLocalProjectMutation } from 'store/services/project/projectApi';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { createContext } from 'react';

// ==============================|| Manage Local Projects ||============================== //

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const localProjects = () => {
  const [docsOpen, setDocsOpen] = useState(false);
  const [updateDocs, setUpdateDocs] = useState({ project: null, id: null });
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });
  const { data: localProjectsData, isError, error, isLoading, isFetching } = useGetLocalProjectQuery(pagination);

  const [blockProject, result] = useUpdateLocalProjectMutation();
  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Project has been Sucessfully Blocked!');
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
      header: 'Project ID ',
      title: (
        <Tooltip title={'Project ID'}>
          <span>Project ID</span>
        </Tooltip>
      )
    },
    {
      accessorKey: 'Status',
      header: 'Company Status',
      Cell: ({ renderedCellValue, row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TableSelectorOption value={row.original.ProjectStatus} ProjectType={row.original.ProjectType} id={row.original.id} />
        </Box>
      )
    },
    {
      accessorKey: 'Featured',
      header: `Featured ${(<Tooltip>Featured</Tooltip>)}`
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
      accessorKey: 'developer_company',
      header: 'Developer Company',
      render: (rowData) => {
        return <Tooltip title="Developer Company Name">Developer Company</Tooltip>;
      }
    },
    {
      accessorKey: 'rating',
      header: 'Rating',
      render: (rowData) => {
        return <Rating name="read-only" value={value} readOnly />;
      }
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

    { accessorKey: 'QualityScore', header: 'Quality Score' },
    {
      accessorKey: 'rating',
      header: 'Rating',
      Cell: ({ renderedCellValue, row }) => {
        // console.log('row: ', projectData.data[row.index].Rating);

        return (
          <>
            <Rating readonly={true} name="read-only" value={projectData.data[row.index].Rating} />
          </>
        );
      }
    },
    {
      accessorKey: 'no_of_phases',
      header: 'Number of Phases'
    },
    {
      accessorKey: 'phase_type',
      header: 'Phase Type'
    },
    {
      accessorKey: 'phases',
      header: 'Phases'
    },
    {
      accessorKey: 'quality_score',
      header: 'Quality Score'
    },

    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ renderedCellValue, row }) => {
        const [open, setOpen] = useState(false);
        const handleClickOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        };

        const handleBlock = () => {
          const formData = new FormData();
          formData.append('project_id', row.original.id);
          formData.append('status', '4');
          formData.append('company_type', row.original.ProjectType);
        };
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
              <Button variant="contained" color="primary">
                Featured
              </Button>
              <Button variant="contained" color="primary">
                Add Promotion
              </Button>
              <Button variant="contained" color="error">
                Block
              </Button>
              <Button variant="contained" color="primary">
                Rating
              </Button>
              <Dialog maxWidth={'xl'} open={open} onClose={handleClose} TransitionComponent={Transition}>
                <DialogActions sx={{ justifyContent: 'flex-start' }} onClick={handleClose}>
                  <IconButton>
                    <CloseIcon />
                  </IconButton>
                </DialogActions>
                <DialogContent></DialogContent>
              </Dialog>
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
            data={projectData?.data || []}
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
        <DialogContent>
          <Documents comp={docs} />
        </DialogContent>
      </Dialog>
    </Page>
  );
};

localProjects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default localProjects;
