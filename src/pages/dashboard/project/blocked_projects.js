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
import {
  useUpdateProjectStatusMutation,
  useUpdateProjectRankMutation,
  useGetSharedProjectsQuery,
  useGetProjectsByStatusQuery
} from 'store/services/project/projectApi';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import TableSelectorOption from 'components/InputArea/TableSelectorOption';
import 'react-toastify/dist/ReactToastify.css';
import { ToastSuccess, ToastError } from 'utils/toast';

// ==============================|| Manage international_ Projects ||============================== //

const BlockedProjects = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const { data: blockedProjects, isError, error, isLoading, isFetching } = useGetProjectsByStatusQuery({ pagination, status: 5 });
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
      accessorKey: 'project_name',
      header: 'Project Name'
    },
    {
      accessorKey: 'location',
      header: 'Location'
    },
    {
      accessorKey: 'project_name',
      header: 'Project Name',
      render: (rowData) => {
        return <Tooltip title="Project Name">Project</Tooltip>;
      }
    },

    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ renderedCellValue, row }) => {
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
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <Button variant="contained" color="primary" onClick={() => handleUpdateStatus(4)}>
                Restore
              </Button>
            </Box>
          </>
        );
      }
    }
  ];

  if (isLoading) return;
  return (
    <Page title="Shared Projects List">
      <ToastContainer />
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table
            columnHeaders={ColumnHeaders}
            data={error ? [] : blockedProjects?.data || []}
            loading={isLoading}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={isFetching}
            rowCount={blockedProjects?.Total}
          />
        </Grid>
      </Grid>
    </Page>
  );
};

BlockedProjects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default BlockedProjects;
