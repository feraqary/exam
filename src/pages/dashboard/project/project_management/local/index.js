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
import { useGetLocalProjectsQuery, useUpdateProjectRankMutation, useUpdateProjectStatusMutation } from 'store/services/project/projectApi';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastSuccess, ToastError } from 'utils/toast';
import TableSelectorOption from 'components/InputArea/TableSelectorOption';
import Link from 'next/link';
import Container from 'components/Elements/Container';

// ==============================|| Manage International Projects ||============================== //

const localProjects = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const { data: localProjectsData, isError, error, isLoading, isFetching } = useGetLocalProjectsQuery(pagination);
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
      Cell: ({ renderedCellValue }) => {
        return <Tooltip title="Developer Company Name"> Developer Company</Tooltip>;
      }
    },
    {
      accessorKey: 'endis',
      header: 'Enable / Disable',
      Cell: ({ row }) => {
        return (
          <>
            <FormControlLabel control={<Switch defaultChecked />} />
          </>
        );
      }
    },

    { accessorKey: 'quality_score', header: 'Quality Score' },
    {
      accessorKey: 'rating',
      header: 'Rating',
      Cell: ({ row }) => {
        return (
          <>
            <Rating readonly={true} name="read-only" value={localProjectsData?.data[row.index].Rating} readOnly />
          </>
        );
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
      accessorKey: 'phasesw',
      header: 'Phases',
      cell: ({ row }) => {
        return row.original.phases.map((phase) => {
          console.log(phase);
          return <span> {phase.name} </span>;
        });
      }
    },
    {
      accessorKey: 'quality_score',
      header: 'Quality Score'
    },

    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ row }) => {
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
              <Link href={{ pathname: `/dashboard/project/project_management/listing_properties/${row.original.id}` }}>
                <Button variant="contained" color="primary">
                  Listing Properties
                </Button>
              </Link>
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
    <Page title="Manage Project">
      <ToastContainer />
      <Container title="Manage Local Projects" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table
              columnHeaders={ColumnHeaders}
              data={localProjectsData?.data || []}
              loading={isLoading}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={isFetching}
              rowCount={localProjectsData?.Total}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

localProjects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default localProjects;
