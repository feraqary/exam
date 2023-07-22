// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useGetAllIntProjectsQuery } from 'store/services/project/projectApi';
import Rating from '@mui/material/Rating';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
// ==============================|| Manage International Project ||============================== //

function ManageProject() {
  const formData = new FormData();
  formData.append('page_no', 1);
  formData.append('page_size', 20);
  formData.append('country', 'pakistan');
  const { data: projectData, isLoading, isError } = useGetAllIntProjectsQuery(formData);
  let x = "Dwsfdwsfd"
  console.log('data: ', projectData?.data);
  const ColumnHeaders = [
    {
      accessorKey: 'ID',
      header: 'Project ID ',
      title: (
        <Tooltip title={'dewfedfe'}>
          <span>edewfdedfwe</span>
        </Tooltip>
      )
    },
    {
      accessorKey: 'Featured',
      header: `Featured ${<Tooltip>fsafd</Tooltip>}`
    },
    {
      accessorKey: 'ProjectName',
      header: 'Project Name'
    },
    {
      accessorKey: 'Country',
      header: 'Location'
    },
    {
      accessorKey: 'DeveloperCompany',
      header: 'Developer Company',
      render: (rowData) => {
        return <Tooltip title="xswdfw">werfwerf</Tooltip>;
      }
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
    { accessorKey: 'QualityScore', header: 'Quality Score' },
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
      accessorKey: 'NoOfPhases',
      header: 'Number of Phases'
    },
    {
      accessorKey: 'PhaseType',
      header: 'Phase Type'
    },
    {
      accessorKey: 'Phases',
      header: 'Phases'
    },
    {
      accessorKey: 'QualityScore',
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

  if (isLoading) return;
  return (
    <Page title="Manage Project">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={projectData?.data} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageProject;
