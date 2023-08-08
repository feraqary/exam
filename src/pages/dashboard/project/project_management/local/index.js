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
  useUpdateProjectsIsEnabledMutation
} from 'store/services/project/projectApi';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import ProjectRankSelector from '../../project_rank';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';

// ==============================|| Manage Local Projects ||============================== //
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
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const localProjects = () => {
  const [docsOpen, setDocsOpen] = useState(false);
  const [updateDocs, setUpdateDocs] = useState({ project: null, id: null });
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const { data: localProjectsData, isError, error, isLoading, isFetching } = useGetLocalProjectsQuery(pagination);

  const [blockProject, result] = useUpdateProjectStatusMutation();

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
            <Rating name="read-only" value={localProjectsData?.data[row.index].Rating + 1} readOnly />
          </>
        );
      }
    },

    {
      accessorKey: 'quality_score',
      header: 'Quality Score',
      Cell: ({ renderedCellValue, row }) => {
        return <CircularProgressWithLabel value={row.original.quality_score} />;
      }
    },

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
        const [updateIsEnabled, IsEnabledresult] = useUpdateProjectsIsEnabledMutation();
        const [enabled, setEnabled] = useState(null);

        useEffect(() => {
          console.log('project_id', row.original.id, enabled);
          const formData = new FormData();
          formData.append('project_id', row.original.id);
          formData.append('is_enabled', enabled);
          updateIsEnabled(formData);
        }, [enabled]);

        return (
          <>
            <Switch checked={enabled} onChange={() => setEnabled((prev) => !prev)} />
          </>
        );
      }
    },
    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ renderedCellValue, row }) => {
        const [open, setOpen] = useState(false);
        const [updateVerifyStatus, Verifyresult] = useUpdateProjectsVerifyStatusMutation();
        const [verify, setVerify] = useState(false);
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
        const handleVerifyStatus = () => {
          setVerify((prev) => !prev);
          const formData = new FormData();
          formData.append('project_id', row.original.id);
          formData.append('is_verified', verify);
          updateVerifyStatus(formData);
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
              >
                <Button variant="contained" color="primary">
                  View Live
                </Button>
                <Button variant="contained" color="primary" onClick={handleVerifyStatus}>
                  Verify
                </Button>
                <Link
                  href={{
                    pathname: `/dashboard/project/project_management/edit/${row.original.id}`,
                    query: {
                      project_id: row.original.id
                    }
                  }}
                >
                  <Button variant="contained">Edit </Button>
                </Link>

                <Button variant="contained" color="primary">
                  Listing Properties
                </Button>

                <Button variant="contained" color="error">
                  Block
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                {row.original.phase_type == 'Multiple' && (
                  <>
                    <Link
                      href={{
                        pathname: `/dashboard/project/project_management/add_property/${row.original.id}`
                      }}
                    >
                      <Button variant="contained" color="primary">
                        Add Property
                      </Button>
                    </Link>
                  </>
                )}

                {row.original.phase_type === 'Single' && (
                  <Link
                    href={{
                      pathname: `/dashboard/project/project_management/plans/${row.original.id}`
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        console.log(row.original.phase_type);
                      }}
                    >
                      Plans
                    </Button>
                  </Link>
                )}
                <Link
                  href={{
                    pathname: `/dashboard/project/project_management/rating/${row.original.id}`,
                    query: {
                      id: row.original.id
                    }
                  }}
                >
                  <Button color="primary" variant="contained">
                    Rating
                  </Button>
                </Link>
                <Button color="primary" variant="contained">
                  Manage Documents
                </Button>
                <Button variant="contained" color="primary">
                  Add Promotion
                </Button>
              </Box>
              <Dialog maxWidth={'xl'} open={open} onClose={handleClose} TransitionComponent={Transition}>
                <DialogActions sx={{ justifyContent: 'flex-start' }} onClick={handleClose}>
                  <IconButton>{/* <CloseIcon /> */}</IconButton>
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
