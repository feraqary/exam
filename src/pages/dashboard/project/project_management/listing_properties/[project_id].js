// material-ui
import { Box, Button, Grid, Typography } from '@mui/material';

// project imports
import Tooltip from '@mui/material/Tooltip';
import Container from 'components/Elements/Container';
import ViewInformation, { Item } from 'components/InputArea/information/view_information';
import Table from 'components/Table/Table';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import Layout from 'layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { gridSpacing } from 'store/constant';
import { useGetProjectByIdQuery, useGetPropertyByProjectIdQuery } from 'store/services/project/projectApi';
// ==============================|| Manage International Projects ||============================== //

const ListingProperties = () => {
  const router = useRouter();
  const { project_id } = router.query;
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const { data: projectPropertiesData, isError, error, isLoading, isFetching } = useGetPropertyByProjectIdQuery({ pagination, project_id });
  const { data: projectData, isError: ProjectError, isLoading: projectLoading } = useGetProjectByIdQuery(project_id);

  const [viewOpen, setViewOpen] = useState(false);

  const completionStatus = ['Upcoming', 'Under Construction', 'Completed', 'Off Plan', 'Ready'];
  const lifestylelist = ['Affordable', 'Standard', 'Luxury', 'Ultra Luxury'];
  const furnished = ['Non Furnished', 'Semi Furnished', 'Fully Furnished'];

  const ColumnHeaders = [
    {
      accessorKey: 'id',
      header: 'Property ID ',
      title: (
        <Tooltip title={'Project ID'}>
          <span>Project ID</span>
        </Tooltip>
      )
    },
    {
      accessorKey: 'project_id',
      header: 'Project ID',
      Cell: ({ row }) => {
        return row.original.project_id ? (
          row.original.project_id
        ) : (
          <Typography variant="caption" gutterBottom>
            -none-
          </Typography>
        );
      }
    },
    {
      accessorKey: 'phase_id',
      header: 'Phase ID',
      Cell: ({ row }) => {
        return row.original.phase_id ? (
          row.original.phase_id
        ) : (
          <Typography variant="caption" gutterBottom>
            -none-
          </Typography>
        );
      }
    },
    {
      accessorKey: 'ref_no',
      header: 'Reference No'
    },
    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ row }) => {
        return (
          <>
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
                  console.log(row.original);
                  setViewOpen(true);
                }}
              >
                View Information
              </Button>

              <Link href={{ pathname: `/dashboard/project/project_management/listing_properties/gallery/${project_id}` }}>
                <Button variant="contained" color="primary">
                  Gallery
                </Button>
              </Link>

              <Link
                href={{
                  pathname: `/dashboard/project/project_management/documents/${row.original.id}`
                }}
              >
                <Button variant="contained" color="primary">
                  Document
                </Button>
              </Link>

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
                  Manage Plans
                </Button>
              </Link>
              <Link
                href={{
                  pathname: `/dashboard/project/project_management/listing_properties/financial_providers`,
                  query: { project_id }
                }}
              >
                <Button variant="contained" color="primary">
                  Financial Providers
                </Button>
              </Link>

              {/* Plans  */}

              {/* <Link
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
                  Plans
                </Button>
              </Link> */}

              <Link href={{ pathname: `/dashboard/project/project_management/listing_properties/manage_units`, query: { project_id } }}>
                <Button variant="contained" color="primary">
                  Manage Unit Types
                </Button>
              </Link>
              <Link href={{ pathname: `/dashboard/project/project_management/listing_properties/units`, query: { project_id } }}>
                <Button variant="contained" color="primary">
                  Manage Units
                </Button>
              </Link>
              <Link href={{ pathname: `/dashboard/project/project_management/listing_properties/payment_plans/${row.original.id}` }}>
                <Button variant="contained" color="primary">
                  Manage payment plan
                </Button>
              </Link>
            </Box>
          </>
        );
      }
    }
  ];

  if (isLoading) return;
  return (
    <Page title="Manage listing Propeties">
      <ToastContainer />
      <Container title="Manage listing Properties" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table
              columnHeaders={ColumnHeaders}
              data={projectPropertiesData?.data || []}
              loading={isLoading}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={isFetching}
              rowCount={projectPropertiesData?.Total}
              renderTopToolbarCustomActions={({ table }) => {
                // projectData.data.phases.length == 0;
                return (
                  <>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {projectData?.data?.phases.length !== 0 && (
                        <Link
                          href={{
                            pathname: `/dashboard/project/project_management/listing_properties/add_property/${project_id}`
                          }}
                        >
                          <Button variant="outlined" color="primary">
                            Add Property
                          </Button>
                        </Link>
                      )}
                    </div>
                  </>
                );
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

ListingProperties.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ListingProperties;
