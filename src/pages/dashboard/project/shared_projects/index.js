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
              <Button variant="contained" color="primary">
                Verify
              </Button>
              <Button variant="contained" color="primary">
                Edit
              </Button>
              <Link href={{ pathname: `/dashboard/project/project_management/documents/${row.original.id}` }}>
                <Button color="primary" variant="contained">
                  Manage Documents
                </Button>
              </Link>
              <Button variant="contained" color="primary">
                View Live
              </Button>
              <Button variant="contained" color="primary">
                Listing Properties
              </Button>
              <Button variant="contained" color="primary">
                Add Promotion
              </Button>
              <Button variant="contained" color="warning" onClick={() => handleUpdateStatus(5)}>
                Block
              </Button>
              <Button variant="contained" color="error" onClick={() => handleUpdateStatus(6)}>
                Delete
              </Button>
              <Button variant="contained" color="primary">
                Rating
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
            data={sharedProjectsData?.data || []}
            loading={isLoading}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={isFetching}
            rowCount={sharedProjectsData?.Total}
          />
        </Grid>
      </Grid>
    </Page>
  );
};

SharedProjects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SharedProjects;
