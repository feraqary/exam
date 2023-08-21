// material-ui
import { Grid, Box, Button, Chip, CircularProgress, Typography } from '@mui/material';

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
  useGetInternationalProjectsQuery,
  useUpdateProjectStatusMutation,
  useUpdateProjectRankMutation,
  useUpdateProjectsVerifyStatusMutation,
  useUpdateProjectsIsEnabledMutation
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

// ==============================|| Manage international_ Projects ||============================== //

const international_Projects = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const [isAddPromotionsOpen, setIsAddPromotionsOpen] = useState(false);
  const [projects_id, setProjectId] = useState(null);
  const handleOpenAddPromotions = (projects_id) => {
    setProjectId(projects_id);
    setIsAddPromotionsOpen(true);
  };

  const { data: international_ProjectsData, isError, error, isLoading, isFetching } = useGetInternationalProjectsQuery(pagination);
  const [updateStatus, result] = useUpdateProjectStatusMutation();

  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Project status successfully updated');
    }
  }, [result.isSuccess]);

  useEffect(() => {
    if (result.isError) {
      const { data } = result.error;
      console.log(data);
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
        // console.log('row: ', projectData.data[row.index].Rating);

        return (
          <>
            <Rating name="read-only" value={international_ProjectsData?.data[row.index].Rating + 1} readOnly />
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
        const [promotionOpen, setPromotionOpen] = useState(false);
        const [viewOpen, setViewOpen] = useState(false);

        const handleClickOpen = () => {
          setOpen(true);
        };
<<<<<<< HEAD
=======

>>>>>>> e387534bb5061078e1d8fd21234a1debbfa69014
        const handleBlock = () => {
          const formData = new FormData();
          formData.append('id', row.original.id);
          formData.append('status_id', status);
          updateStatus(formData);
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

                <Button variant="contained" color="primary" onClick={handleVerifyStatus}>
                  Verify
                </Button>
                <Link href={{ pathname: `/dashboard/project/project_management/documents/${row.original.id}` }}>
                  <Button color="primary" variant="contained">
                    Documents
                  </Button>
                </Link>
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

                <Link href={{ pathname: `/dashboard/project/project_management/listing_properties/${row.original.id}` }}>
                  <Button variant="contained" color="primary">
                  {row.original.phase_type === "Single" ? "Listing Property" : "Listing Properties"}
                  </Button>
                </Link>

                <Button variant="contained" color="error">
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
                <Link
                  href={{
                    pathname: `/dashboard/project/project_management/documents/${row.original.id}`,
                    query: {
                      id: row.original.id
                    }
                  }}
                >
                  <Button color="primary" variant="contained">
                    Manage Documents
                  </Button>
                </Link>
<<<<<<< HEAD
=======

>>>>>>> e387534bb5061078e1d8fd21234a1debbfa69014
                <Button
                  onClick={() => {
                    setPromotionOpen(true);
                    console.log('Add to Promotions opened');
                    handleOpenAddPromotions(projects_id)
                  }}
                  variant="contained"
                  color="primary"
                >
                  Add to Promotions
                </Button>
                <PopUp title="Add Promotion" opened={promotionOpen} setOpen={setPromotionOpen} size={'md'} full width>
                  <AddPromotions projects_id= {projects_id} onClose={() => setIsAddPromotionsOpen(false)} />
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
    <Page title="Manage International Project">
      <ToastContainer />
      <Container title="Manage International Project" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table
              columnHeaders={ColumnHeaders}
              data={international_ProjectsData?.data || []}
              loading={isLoading}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={isFetching}
              rowCount={international_ProjectsData?.Total}
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

international_Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default international_Projects;
