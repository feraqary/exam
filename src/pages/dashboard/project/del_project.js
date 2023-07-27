// material-ui
import { Grid, Box, Button } from '@mui/material';

//react imports
import { useState } from 'react';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useGetProjectsByStatusQuery, useUpdateProjectStatusMutation } from 'store/services/project/projectApi';

// Toaster imports
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ToastSuccess, ToastError } from 'utils/toast';
import { useEffect } from 'react';

// ==============================|| Manage International Project ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'id',
    header: 'Project ID '
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
    accessorKey: 'developer_company',
    header: 'Developer Company'
  },
  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ renderedCellValue, row }) => {
      const [restoreProject, result] = useUpdateProjectStatusMutation();
      useEffect(() => {
        if (result.isSuccess) {
          ToastSuccess('Company has been restored Successfully');
        }
      }, [result.isSuccess]);

      return (
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
              const formData = new FormData();
              formData.append('id', row.original.id);
              formData.append('status_id', 4);

              restoreProject(formData);
            }}
          >
            Restore
          </Button>
        </Box>
      );
    }
  }
];

function DeletedProjects() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const { data: deletedProjects, isError, error, isLoading, isFetching } = useGetProjectsByStatusQuery({ pagination, status: 6 });

  return (
    <Page title="Manage Project">
      <ToastContainer />
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table
            columnHeaders={ColumnHeaders}
            data={error ? [] : deletedProjects?.data || []}
            loading={isLoading}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={isFetching}
            rowCount={deletedProjects?.Total}
          />
        </Grid>
      </Grid>
    </Page>
  );
}

DeletedProjects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DeletedProjects;
