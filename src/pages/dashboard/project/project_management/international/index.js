// material-ui
import { Grid, Box, Button, Chip, CircularProgress, Typography } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
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
  useUpdateProjectsIsEnabledMutation,
  useGetProjectByIdQuery
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
import Modal from '@mui/material/Modal';
import ViewInformation, { Item } from 'components/InputArea/information/view_information';


// ==============================|| Manage international_ Projects ||============================== //
const ProjectInformation = ({ id }) => {
  const { data, isError, isLoading } = useGetProjectByIdQuery(id);
  const completionStatus = ['Upcoming', 'Under Construction', 'Completed', 'Off Plan', 'Ready'];
  const lifestylelist = ['Affordable', 'Standard', 'Luxury', 'Ultra Luxury'];
  const furnished = ['Non Furnished', 'Semi Furnished', 'Fully Furnished'];
  return (
    <>
      <Grid item xs={12}>
        <MainCard title="Project Details">
          <Grid container spacing={2} alignItems="center">
            <Item primary="Project Name:" secondary={data?.data?.label} />
            <Grid item xs={12} lg={12}></Grid>
            <Item primary="Is The Project Shared?:" secondary={data?.data?.is_shared ? 'Yes' : 'No'} />
            {data?.data?.is_shared && <Item primary="Broker Companies:" secondary={''} />}
            <Item primary="Developer Company:" secondary={data?.data?.parent_developer_company?.label} />
            <Item primary="Sub Developer Company:" secondary={''} />
            {data?.data?.phases.length !== 0 && <Item primary="Phases:" secondary={data?.data?.phases.map((phases) => phases.label)} />}
          </Grid>
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <MainCard title="Location Details">
          <Grid container spacing={2} alignItems="center">
            <Item primary="Country:" secondary={data?.data?.country?.country} />
            <Item primary="State:" secondary={data?.data?.state?.state} />
            <Item primary="City:" secondary={data?.data?.city?.city} />
            <Item primary="Community:" secondary={data?.data?.community?.community} />
            <Item primary="Sub Community:" secondary={data?.data?.sub_community?.sub_community} />
          </Grid>
        </MainCard>
      </Grid>

      <Grid item xs={12}>
        {data?.data?.phases?.length === 0 && (
          <MainCard title="Property Details">
            <Grid container spacing={2}>
              <>
                <Item primary="Property Title:" secondary={data?.data?.property_title} />
                <Item primary="Arabic Property Title:" secondary={data?.data?.property_title_arabic} />
                <Item primary="Property Description:" secondary={data?.data?.description} />
                <Item primary="Arabic Property Description:" secondary={data?.data?.description_arabic} />
                <Item primary="Completion Status:" secondary={completionStatus[data?.data?.completion_status]} />
                <Item primary="Property Status:" secondary={data?.data?.property_type?.map((type) => `${type.label}, `)} />
                <Item primary="View:" secondary={data?.data?.view?.map((v) => `${v.name}, `)} />
                <Item primary="Facilities:" secondary={data?.data?.facilities?.map((f) => `${f.label}, `)} />
                <Item primary="Amenities:" secondary={data?.data?.amenities?.map((a) => `${a.label}, `)} />
                <Item primary="Plot Area:" secondary={data?.data?.plot_area || 0} />
                <Item primary="Elevators:" secondary={data?.data?.elevator || 0} />
                <Item primary="Lifestyle:" secondary={lifestylelist[data?.data?.life_style]} />
                <Item primary="Built Up Area:" secondary={data?.data?.built_up_area || 0} />
                <Item primary="Ownership:" secondary={data?.data?.ownership || ''} />
                <Item primary="Furnished:" secondary={furnished[data?.data?.furnished]} />
                <Item primary="Area Range -max-:" secondary={data?.data?.max_area || 0} />
                <Item primary="Area Range -min-:" secondary={data?.data?.min_area || 0} />
                <Item primary="Parking:" secondary={data?.data?.parking || 0} />
                <Item primary="Start Date:" secondary={data?.data?.start_date} />
                <Item primary="Completion Date:" secondary={data?.data?.completion_date} />
                <Item primary="Handover Date:" secondary={data?.data?.handover_date} />
                <Item primary="No. Of Floors:" secondary={data?.data?.no_of_floor || 0} />
                <Item primary="No. Of Units:" secondary={'' || 0} />
                <Item primary="Available Units:" secondary={'' || 0} />
                <Item primary="No. Of Pools:" secondary={data?.data?.no_of_pool || 0} />
                <Item primary="No. Of Retail Center:" secondary={data?.data?.no_of_retail || 0} />
                <Item primary="Service Charge:" secondary={data?.data?.service_charge || 0} />
                <Item primary="Starting Price:" secondary={data?.data?.starting_price || 0} />
              </>
            </Grid>
          </MainCard>
        )}
      </Grid>
    </>
  );
};
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

        const handleBlock = () => {
          const formData = new FormData();
          formData.append('id', row.original.id);
          formData.append('status_id', status);
          updateStatus(formData);
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setViewOpen(true);
                  }}
                >
                  View Information
                </Button>

                <ViewInformation opened={viewOpen} setOpen={setViewOpen} size={'lg'}>
                  <ProjectInformation id={row.original.id} />
                </ViewInformation>

                <Button variant="contained" color="primary" onClick={handleVerifyStatus}>
                  {row.original.is_verified ? 'Unverify' : 'Verify'}
                </Button>

                <Link
                  href={{
                    pathname: `/dashboard/project/project_management/edit/${row.original.id}`
                  }}
                >
                  <Button variant="contained">Edit </Button>
                </Link>
                {/* {row.original.phase_type === 'Multiple' && ( */}
                <>
                  <Link href={{ pathname: `/dashboard/project/project_management/listing_properties/${row.original.id}` }}>
                    <Button variant="contained" color="primary">
                      Listing Properties
                    </Button>
                  </Link>
                </>
                {/* )} */}

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
