// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useGetSharedProjectsQuery } from 'store/services/project/projectApi';
// ===========================|| International Company Managment list||=========================== //

const ColumnHeaders = [
  {
    accessorKey: 'ID',
    header: 'Project ID '
  },
  {
    accessorKey: 'Featured',
    header: 'Featured'
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



const IntCompData = () => {
  const { data: Shared, isLoading, isError } = useGetSharedProjectsQuery();
  if (isLoading) return;
  return(
  <Page title="Local Project List">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Table columnHeaders={ColumnHeaders} data={[]} />
      </Grid>
    </Grid>
  </Page>
)};

IntCompData.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default IntCompData;
