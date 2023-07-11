// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';

// ===========================|| International Company Managment list||=========================== //

const ColumnHeaders = [
  {
    accessorKey: 'proId',
    header: 'Project ID '
  },
  {
    accessorKey: 'featured',
    header: 'Featured'
  },
  {
    accessorKey: 'projectName',
    header: 'Project Name'
  },
  {
    accessorKey: 'location',
    header: 'Location'
  },
  {
    accessorKey: 'developerCompany',
    header: 'Developer Company'
  },
  {
    accessorKey: 'rating',
    header: 'Rating'
  },
  {
    accessorKey: 'numberOfPhases',
    header: 'Number of Phases'
  },

  {
    accessorKey: 'phaseType',
    header: 'Phase Type'
  },
  {
    accessorKey: 'phases',
    header: 'Phases'
  },
  {
    accessorKey: 'endis',
    header: 'Enable / Disable'
  },
  { accessorKey: 'qualityScore', header: 'Quality Score' },

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
          Edit
        </Button>
        <Button color="primary" variant="contained">
          View Documents
        </Button>
        <Button variant="contained" color="primary">
          View Live
        </Button>
        <Button variant="contained" color="primary">
          Multiple
        </Button>
        <Button variant="contained" color="primary">
          Report
        </Button>
        <Button variant="contained" color="error">
          Block
        </Button>
        <Button variant="contained" color="warning">
          Reset
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    projectName: 'Dubai Holding',
    developerCompany: 'Marketing Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA283102',
    rating: 'Arya Stark',
    endis: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Winterfell',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded'
  },
  {
    projectName: 'BlueStone',
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'USA',
    proId: 'PA283102',
    rating: 'Joffery',
    endis: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded'
  }
];

const IntCompData = () => (
  <Page title="Local Project List">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Table columnHeaders={ColumnHeaders} data={data} />
      </Grid>
    </Grid>
  </Page>
);

IntCompData.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default IntCompData;
