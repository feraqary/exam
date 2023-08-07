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

// ==============================|| Manage International Projects ||============================== //

const ListingProperties = () => {
  const router = useRouter();
  const { project_id } = router.query;
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const { data: projectDocData, isError, error, isLoading, isFetching } = useGetPropertyByProjectIdQuery({ pagination, project_id });

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
    { accessorKey: 'community', header: 'Community' },
    { accessorKey: 'developer_company', header: 'Developer Company' },
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
              <Button variant="contained" color="primary">
                Document
              </Button>

              <Link href={{ pathname: `/dashboard/project/manage_units/${project_id}` }}>
                <Button variant="contained" color="primary">
                  Manage Units
                </Button>
              </Link>
              <Link href={{ pathname: `/dashboard/project/payment_plans/${row.original.id}` }}>
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
    <Page title="Manage Project">
      <ToastContainer />
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
            // renderTopToolbarCustomActions={({ table }) => {
            //   return (
            //     <div style={{ display: 'flex', gap: '0.5rem' }}>
            //       <Link href={{ pathname: `/dashboard/project/add_doc/${project_id}` }}>
            //         <Button color="primary">Add Document</Button>
            //       </Link>
            //     </div>
            //   );
            // }}
          />
        </Grid>
      </Grid>
    </Page>
  );
};

ListingProperties.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ListingProperties;
