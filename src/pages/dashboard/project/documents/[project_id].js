// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { useGetDocByProjectIdQuery } from 'store/services/project/projectApi';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastSuccess, ToastError } from 'utils/toast';
import { useRouter } from 'next/router';
import Link from 'next/link';

// ==============================|| Manage International Projects ||============================== //

const Documents = () => {
  const router = useRouter();
  const { project_id } = router.query;
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const { data: projectDocData, isError, error, isLoading, isFetching } = useGetDocByProjectIdQuery({ pagination, project_id });

  const ColumnHeaders = [
    {
      accessorKey: 'id',
      header: 'Document ID ',
      title: (
        <Tooltip title={'Project ID'}>
          <span>Project ID</span>
        </Tooltip>
      )
    },
    {
      accessorKey: 'document_category',
      header: 'Category',
      Cell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>{row.original.document_category.name}</span>
          </Box>
        );
      }
    },
    {
      accessorKey: 'document_subcategory',
      header: 'Sub Category',
      Cell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>{row.original.document_subcategory.name}</span>
          </Box>
        );
      }
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
              <Button variant="contained" color="primary">
                View
              </Button>
              <Button variant="contained" color="primary">
                Remove
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
            data={projectDocData?.data || []}
            loading={isLoading}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={isFetching}
            rowCount={projectDocData?.Total}
            renderTopToolbarCustomActions={({ table }) => {
              return (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Link href={{ pathname: `/dashboard/project/add_doc/${project_id}` }}>
                    <Button color="primary">Add Document</Button>
                  </Link>
                </div>
              );
            }}
          />
        </Grid>
      </Grid>
    </Page>
  );
};

Documents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Documents;
