// material-ui
import { Grid, Box, Button, DialogActions, IconButton, Dialog, DialogContent, CircularProgress, Typography } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import Rating from '@mui/material/Rating';
import Switch from '@mui/material/Switch';
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import {
  useGetLocalProjectsQuery,
  useUpdateProjectStatusMutation,
  useUpdateProjectsVerifyStatusMutation,
  useUpdateProjectsIsEnabledMutation,
  useUpdateProjectRankMutation
} from 'store/services/project/projectApi';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastSuccess, ToastError } from 'utils/toast';
import TableSelectorOption from 'components/InputArea/TableSelectorOption';
import Link from 'next/link';
import Container from 'components/Elements/Container';
import AddPromotions from '../promotions/add_promotions';
import PopUp from 'components/InputArea/PopUp';
import ViewInformation from '../information/view_information';
// ==============================|| Manage International Projects ||============================== //

const localProjects = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const { data: localProjectsData, isError, error, isLoading, isFetching } = useGetLocalProjectsQuery(pagination);
  const [updateStatus, result] = useUpdateProjectStatusMutation();

  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Project status successfully updated');
    }
  }, [result.isSuccess]);

  useEffect(() => {
    if (result.isError) {
      const { data } = result.error;
      ToastError('Error');
    }
  }, [result.isError]);

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
      accessorKey: 'rank_id',
      header: 'Company Rank',
      Cell: ({ row }) => {
        const formData = new FormData();
        const func = useUpdateProjectRankMutation();
        formData.append('project_id', row.original.id);

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TableSelectorOption value={row.original.rank_id} formData={formData} func={func} />
          </Box>
        );
      }
    },
    {
      accessorKey: 'label',
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
        return <Tooltip title="Developer Company Name"> Developer Company</Tooltip>;
      }
    },
    {
      accessorKey: 'rating',
      header: 'Rating',
      Cell: ({ renderedCellValue, row }) => {
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
      accessorKey: 'phase_type',
      header: 'Phase Type'
    },
    {
      accessorKey: 'is_enabled',
      header: 'Enable / Disable',
      Cell: ({ renderedCellValue, row }) => {
        const [updateIsEnabled, IsEnabledresult] = useUpdateProjectsIsEnabledMutation();

        const handleChange = () => {
          const formData = new FormData();
          formData.append('project_id', row.original.id);
          formData.append('is_enabled', !row.original.is_enabled);
          updateIsEnabled(formData);
        };

        useEffect(() => {
          if (IsEnabledresult.isSuccess) {
            ToastSuccess('Project successfully updated');
          }
        }, [IsEnabledresult.isSuccess]);

        useEffect(() => {
          if (IsEnabledresult.isError) {
            const { data } = IsEnabledresult.error;
            ToastError(data);
          }
        }, [IsEnabledresult.isError]);

        return (
          <>
            <Switch checked={row.original.is_enabled} onChange={handleChange} />
          </>
        );
      }
    },
    {
      accessorKey: 'is_verified',
      header: 'Verify Status',      
      Cell: ({ renderedCellValue, row }) => {
        const [verify, setVerify] = useState(false);
        const [updateVerifyStatus, Verifyresult] = useUpdateProjectsVerifyStatusMutation();
        const handleVerifyStatus = () => {
          setVerify((prev) => !prev);
          const formData = new FormData();
          formData.append('project_id', row.original.id);
          formData.append('is_verified', !row.original.is_verified);
          updateVerifyStatus(formData);
        };
        return (
          <>
          {!renderedCellValue ? <Button color="error" variant="outlined" onClick={handleVerifyStatus}> Unverified  </Button> : <Button color="success" sx={{ color: 'white' }} variant="contained" onClick={handleVerifyStatus}> Verified  </Button>}
          </>
          )
  
        
      }
    },
    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ renderedCellValue, row }) => {
        const [open, setOpen] = useState(false);
        const [updateVerifyStatus, Verifyresult] = useUpdateProjectsVerifyStatusMutation();

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
          const formData = new FormData();
          formData.append('project_id', row.original.id);
          formData.append('is_verified', !row.original.is_verified);
          updateVerifyStatus(formData);
        };

        const handleUpdateStatus = (status) => {
          const formData = new FormData();
          formData.append('id', row.original.id);
          formData.append('status_id', status);
          updateStatus(formData);
        };

        return (
          <>
            <Box
              sx={{
                display: 'flex',
                // alignItems: 'center',
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
                <Button variant="contained" color="primary" onClick={() => setViewOpen(true)}>
                  View Information
                </Button>

                <PopUp opened={viewOpen} setOpen={setViewOpen} size={'lg'}>
                  <ViewInformation project_id={row.original.id} />
                </PopUp>

                {/* <Button variant="contained" color="primary" onClick={handleVerifyStatus}>
                  {row.original.is_verified ? 'Unverify' : 'Verify'}
                </Button> */}

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
                  <>
                    <Link href={{ pathname: `/dashboard/project/project_management/listing_properties/${row.original.id}` }}>
                      <Button variant="contained" color="primary">
                        Listing Properties
                      </Button>
                    </Link>
                  </>


                <Button color="error" variant="outlined" onClick={() => handleUpdateStatus(5)}>
                  Block
                </Button>
              </Box>
              {/* //================================= */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                {/* {row.original.phase_type !== 'Multiple' && (
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
                )} */}

                {row.original.phase_type !== 'Multiple' && (
                  <>
                    <Link
                      href={{
                        pathname: `/dashboard/project/project_management/listing_properties/plans/${row.original.id}`
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          console.log(row.original.phase_type);
                        }}
                      >
                        Add Plans
                      </Button>
                    </Link>
                  </>
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

                {row.original.phase_type !== 'Multiple' && (
                  <Link
                    href={{
                      pathname: `/dashboard/project/project_management/documents/${row.original.id}`,
                      query: {
                        id: row.original.id
                      }
                    }}
                  >
                    <Button color="primary" variant="contained">
                      Documents
                    </Button>
                  </Link>
                )}
                <Button onClick={handlePromotionOpen} variant="contained" color="primary">
                  Add to Promotions
                </Button>
                <PopUp opened={promotionOpen} setOpen={setPromotionOpen} title="Add Promotion" size={'md'}>
                  <AddPromotions />
                </PopUp>

                <Button variant="contained" color="error" onClick={() => handleUpdateStatus(6)}>
                  Delete
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
              data={localProjectsData?.data || []}
              loading={isLoading}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={isFetching}
              rowCount={localProjectsData?.Total}
              
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

localProjects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default localProjects;
