// material-ui
import { Grid, Box, Button } from '@mui/material';

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
import { useUpdateProjectStatusMutation, useUpdateProjectRankMutation, useGetSharedProjectsQuery } from 'store/services/project/projectApi';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import TableSelectorOption from 'components/InputArea/TableSelectorOption';
import 'react-toastify/dist/ReactToastify.css';
import { ToastSuccess, ToastError } from 'utils/toast';
import Link from 'next/link';
import Container from 'components/Elements/Container';
import PopUp from 'components/InputArea/PopUp';
import ViewInformation from '../project_management/information/view_information';
import AddPromotions from '../project_management/promotions/add_promotions';
// ==============================|| Manage international_ Projects ||============================== //

const SharedProjects = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const { data: sharedProjectsData, isError, error, isLoading, isFetching } = useGetSharedProjectsQuery(pagination);
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
      header: 'Reference Number ',
      title: (
        <Tooltip title={'Ref.No'}>
          <span>Reference Number</span>
        </Tooltip>
      )
    },
    {
      accessorKey: 'rank_id',
      header: 'Company Rank',
      Cell: ({ renderedCellValue, row }) => {
        const formData = new FormData();
        const func = useUpdateProjectRankMutation();
        formData.append('project_id', row.original.id);

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TableSelectorOption value={row.original.rank_id} func={func} formData={formData} />
          </Box>
        );
      }
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
      render: (rowData) => {
        return <Tooltip title="Developer Company Name">Developer Company</Tooltip>;
      }
    },
    {
      accessorKey: 'rating',
      header: 'Rating',
      Cell: ({ renderedCellValue, row }) => {
        return <Rating name="read-only" value={sharedProjectsData?.data[row.index].Rating} readOnly />;
      }
    },

    { accessorKey: 'quality_score', header: 'Quality Score' },

    {
      accessorKey: 'no_of_phases',
      header: 'Number of Phases'
    },
    {
      accessorKey: 'phasessss',
      header: 'Phases',
      cell: ({ renderedCellValue, row }) => {
        return row.original.phases.map((phase) => {
          console.log(phase);
          return <Chip>{phase.name}</Chip>;
        });
      }
    },
    {
      accessorKey: 'phase_type',
      header: 'Phase Type'
    },

    {
      accessorKey: 'endis',
      header: 'Enable / Disable',
      Cell: ({ renderedCellValue, row }) => {
        return <FormControlLabel control={<Switch defaultChecked />} />;
      }
    },

    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ renderedCellValue, row }) => {

        const [viewOpen, setViewOpen] = useState(false);
        const [promotionOpen, setPromotionOpen] = useState(false);

        const handlePromotionOpen = () => {
          setPromotionOpen(true);
        };

        const handleUpdateStatus = (status) => {
          const formData = new FormData();
          formData.append('id', row.original.id);
          formData.append('status_id', status);
          updateStatus(formData);
        };

        return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 2df650bfce5c8291dace6a91d5d404bfd53422c8
          <> 
            <Box

          <>
          <Box
<<<<<<< HEAD
>>>>>>> e387534bb5061078e1d8fd21234a1debbfa69014
=======
          <>
          <Box
>>>>>>> e387534bb5061078e1d8fd21234a1debbfa69014
=======


          <>
          <Box

>>>>>>> 2df650bfce5c8291dace6a91d5d404bfd53422c8
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

                <Button variant="contained" color="primary">
                  {row.original.is_verified ? 'Unverify' : 'Verify'}
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

                <Link href={{ pathname: `/dashboard/project/project_management/listing_properties/${row.original.id}` }}>
                  <Button variant="contained" color="primary">
                    {row.original.phase_type === "Single" ? "Listing Property" : "Listing Properties"}
                  </Button>
                </Link>

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
                <Link href={{ pathname: `/dashboard/project/project_management/documents/${row.original.id}` }}>

                  <Button color="primary" variant="contained">
                    Documents
                  </Button>
                </Link>
                </Link>
                <Button variant="contained" color="primary" onClick={handlePromotionOpen}>
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
    <Page title="Manage Shared Projects">
      <ToastContainer />
      <Container title="Manage Shared Projects" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table
              columnHeaders={ColumnHeaders}
              data={sharedProjectsData?.data || []}
              loading={isLoading}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={isFetching}
              rowCount={sharedProjectsData?.Total}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

SharedProjects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SharedProjects;
