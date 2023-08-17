// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { useGetDocByProjectIdQuery, useGetPropertyByProjectIdQuery } from 'store/services/project/projectApi';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastSuccess, ToastError } from 'utils/toast';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from 'components/Elements/Container';

// ==============================|| Manage International Projects ||============================== //

const ListingProperties = () => {
  const router = useRouter();
  const { project_id } = router.query;
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const { data: projectDocData, isError, error, isLoading, isFetching } = useGetPropertyByProjectIdQuery({ pagination, project_id });
  console.log(projectDocData);
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
      header: 'Project ID'
    },
    {
      accessorKey: 'phase_id',
      header: 'Phase ID'
    },
    {
      accessorKey: 'ref_no',
      header: 'Reference No'
    },
    { accessorKey: 'property_title', header: 'Property Title' },
    { accessorKey: 'community.community', header: 'Community' },
    { accessorKey: 'developer_company.label', header: 'Developer Company' },
    { accessorKey: 'no_of_floors', header: 'Number of Floors' },
    { accessorKey: 'no_of_units', header: 'Number of Units' },
    { accessoryKey: 'plot_area', header: 'Plot Area' },
    { accessorKey: 'buildup_area', header: 'Build Up Area' },
    { accessorKey: 'services_charges', header: 'Services Charge' },
    { accessorKey: 'start_date', header: 'Start Date' },
    { accessoryKey: 'completion_date', header: 'Completion Date' },
    { accessoryKey: 'hand_over_date', header: 'Hand Over Date' },

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
              <Button variant="contained" color="primary">
                Edit
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
                  Add Plans
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
                  Plans
                </Button>
              </Link>

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
      <Container title="Manage listing Propeties" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table
              columnHeaders={ColumnHeaders}
              data={projectDocData?.data || []}
              loading={isLoading}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={isFetching}
              rowCount={projectDocData?.Total}
              renderTopToolbarCustomActions={({ table }) => {
                return (
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Link
                      href={{
                        pathname: `/dashboard/project/project_management/listing_properties/add_property/${project_id}`
                      }}
                    >
                      <Button variant="outlined" color="primary">
                        Add Property
                      </Button>
                    </Link>
                  </div>
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
