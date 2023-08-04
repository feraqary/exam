// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useGetInternationalProjectsQuery } from 'store/services/project/projectApi';
import Rating from '@mui/material/Rating';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import { Query } from '@tanstack/react-query';
// ==============================|| Manage International Project ||============================== //

function ManageProject() {
  const formData = new FormData();
  formData.append('page_no', 1);
  formData.append('page_size', 20);
  formData.append('country', 'pakistan');
  const { data: projectData, isLoading, isError } = useGetInternationalProjectsQuery();
  // let x = 'Dwsfdwsfd';
  console.log('data: ', projectData?.data);
  const ColumnHeaders = [
    {
      accessorKey: 'id',
      header: 'Project ID '
    },
    {
      accessorKey: 'featured',
      header: `Featured`
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
      accessorKey: 'developer_company',
      header: 'Developer Company'
    },
    {
      accessorKey: 'endis',
      header: 'Enable / Disable',
      Cell: ({ renderedCellValue, row }) => {
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
      Cell: ({ renderedCellValue, row }) => {
        // console.log('row: ', projectData.data[row.index].Rating);

        return (
          <>
            <Rating readonly={true} name="read-only" value={projectData.data[row.index].Rating} />
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
      accessorKey: 'phases',
      header: 'Phases'
    },
    {
      accessorKey: 'quality_score',
      header: 'Quality Score'
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
          <Link
            href={{
              pathname: `/dashboard/project/project_management/edit/${row.original.id}`,
              query: {
                project_id: row.original.id
              }
            }}
          >
            <Button variant="contained" onClick={() => console.log(row.original.id)} color="primary">
              Edit
            </Button>
          </Link>
          <Button color="primary" variant="contained">
            Manage Documents
          </Button>
          <Button variant="contained" color="primary">
            View
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
          {row.original.phase_type == 'Single' && (
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
        </Box>
      )
    }
  ];

  if (isLoading) return;
  return (
    <Page title="Manage Project">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          {/* <Table columnHeaders={ColumnHeaders} data={projectData?.data || []} /> */}
        </Grid>
      </Grid>
    </Page>
  );
}

ManageProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageProject;
