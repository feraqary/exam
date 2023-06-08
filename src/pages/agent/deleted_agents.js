// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Reviews datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: 'SI.NO'
  },
  {
    accessorKey: 'companyname',
    header: 'Company Name'
  },
  {
    accessorKey: 'name.agentname',
    header: 'Agent Name'
  },
  {
    accessorKey: 'phone',
    header: 'Phone'
  },
  {
    accessorKey: 'email',
    header: 'Email'
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
          Restore
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    agentname: 'Forum',
    companyname: 'Broker Company',
    sino: 4,
    email: 'new@gmail.com',
    phone: '2-12-2023'
  },
  {
    agentname: 'Dubai Holding',
    companyname: 'Marketing Company',
    sino: 1,
    email: 'new@gmail.com',
    phone: '2-12-2023'
  },
  {
    agentname: 'BlueStone',
    companyname: 'Developer Company',
    sino: 5,
    email: 'new@gmail.com',
    phone: '2-12-2023'
  },
  {
    agentname: 'Khidmah',
    companyname: 'Developer Company',
    sino: 1,
    email: 'new@gmail.com',
    phone: '2-12-2023'
  },
  {
    agentname: 'Forum',
    companyname: 'Broker Company',
    sino: 5,
    email: 'new@gmail.com',
    phone: '2-12-2023'
  },
  {
    agentname: 'Dubai Holding',
    companyname: 'Marketing Company',
    sino: 5,
    email: 'new@gmail.com',
    phone: '2-12-2023'
  },
  {
    agentname: 'BlueStone',
    companyname: 'Developer Company',
    sino: 5,
    email: 'new@gmail.com',
    phone: '2-12-2023'
  }
];

function DeletedAgents() {
  return (
    <Page title="Deleted Agents">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

DeletedAgents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DeletedAgents;
