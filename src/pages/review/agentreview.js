// material-ui
import { Grid, Box, Button } from '@mui/material';

import Rating from '@mui/material/Rating';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Reviews datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'agentname',
    header: 'Agent Name '
  },
  {
    accessorKey: 'username',
    header: 'Username '
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'localknowledge',
    header: 'Local Knowledge',
    Cell: ({ cell }) => <Rating value={cell.getValue()} readOnly />
  },
  {
    accessorKey: 'processexpertise',
    header: 'Process Expertise',
    Cell: ({ cell }) => <Rating value={cell.getValue()} readOnly />
  },
  {
    accessorKey: 'responsiveness',
    header: 'Responsiveness',
    Cell: ({ cell }) => <Rating value={cell.getValue()} readOnly />
  },
  {
    accessorKey: 'negotationskills',
    header: 'Negotation Skills',
    Cell: ({ cell }) => <Rating value={cell.getValue()} readOnly />
  },
  {
    accessorKey: 'service',
    header: 'Service Provided'
  },
  {
    accessorKey: 'comments',
    header: 'Comments'
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
          Delete
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    agentname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    agentname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 4,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'USA',
    negotationskills: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  }
];
function Reviews() {
  return (
    <Page title=" Reviews">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

Reviews.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Reviews;
