// material-ui
import { Grid, Box, Button } from '@mui/material';
import { useState } from 'react';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';

// ==============================|| View Deleted Users ||============================== //

const data = [
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931'
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'username',
    header: 'Name'
  },
  {
    accessorKey: 'role',
    header: 'Role '
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'phone',
    header: 'Phone'
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
        <Button variant="contained">Reset</Button>
      </Box>
    )
  }
];
function DeletedUsers() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  return (
    <Page title="View Deleted Users">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table
            data={data}
            columnHeaders={ColumnHeaders}
            loading={false}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={false}
            rowCount={data.length}
          />
        </Grid>
      </Grid>
    </Page>
  );
}

DeletedUsers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DeletedUsers;
