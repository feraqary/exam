// material-ui
import { Grid, Box, Button } from '@mui/material';

// react imports
import { useState } from 'react';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useGetSharedProjectsQuery } from 'store/services/project/projectApi';
// ===========================|| International Company Managment list||=========================== //

const ColumnHeaders = [
  {
    accessorKey: 'id',
    header: 'Project ID '
  },
  {
    accessorKey: 'rank_id',
    header: 'Featured'
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
    header: 'Developer Company'
  },
  {
    accessorKey: 'endis',
    header: 'Enable / Disable'
  },
  { accessorKey: 'quality_score', header: 'Quality Score' },
  {
    accessorKey: 'rating',
    header: 'Rating'
    // Cell: ({ renderedCellValue, row }) => {
    //   // console.log('row: ', projectData.data[row.index].Rating);

    //   return (
    //     <>
    //       <Rating readonly={true} name="read-only" value={projectData.data[row.index].Rating} />
    //     </>
    //   );
    // }
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
    accessorKey: 'Phases',
    header: 'Phases'
  },

  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ renderedCellValue, row }) => (
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
        <Button color="primary" variant="contained">
          Manage Documents
        </Button>
        <Button variant="contained" color="primary">
          View Live
        </Button>
        <Button variant="contained" color="primary">
          Listing Properties
        </Button>
        <Button variant="contained" color="primary">
          Featured
        </Button>
        <Button variant="contained" color="primary">
          Add Promotion
        </Button>
        <Button variant="contained" color="error">
          Block
        </Button>
        <Button variant="contained" color="primary">
          Rating
        </Button>
      </Box>
    )
  }
];

const SharedProjects = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const { data: SharedProjects, isLoading, isError, isFetching } = useGetSharedProjectsQuery(pagination);
  if (isLoading) return;
  return (
    <Page title="Shared Project List">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table
            columnHeaders={ColumnHeaders}
            data={isError ? [] : SharedProjects?.data || []}
            loading={isLoading}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={isFetching}
            rowCount={SharedProjects?.Total}
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
