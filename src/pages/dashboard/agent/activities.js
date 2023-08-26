// material-ui
import { Grid } from '@mui/material';

// project imports
import { useState } from 'react';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Agen Activities datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: 'SI.NO'
  },
  {
    accessorKey: 'date',
    header: 'Date'
  },
  {
    accessorKey: 'name.username',
    header: 'User'
  },
  {
    accessorKey: 'companyname',
    header: 'Company'
  },
  {
    accessorKey: 'activity',
    header: 'Activity'
  }
];

const data = [
  {
    name: {
      username: 'Khidmah'
    },
    companyname: 'Developer Company',
    sino: 1,
    email: 'new@gmail.com',
    date: '2-12-2023',
    activity: ' edit, multiple'
  },
  {
    name: {
      username: 'Forum'
    },
    companyname: 'Broker Company',
    sino: 4,
    email: 'new@gmail.com',
    date: '2-12-2023',
    activity: ' edit, multiple'
  },
  {
    name: {
      username: 'Dubai Holding'
    },
    companyname: 'Marketing Company',
    sino: 1,
    email: 'new@gmail.com',
    date: '2-12-2023',
    activity: ' edit, multiple'
  },
  {
    name: {
      username: 'BlueStone'
    },
    companyname: 'Developer Company',
    sino: 5,
    email: 'new@gmail.com',
    date: '2-12-2023',
    activity: ' edit, multiple'
  },
  {
    name: {
      username: 'Khidmah'
    },
    companyname: 'Developer Company',
    sino: 1,
    email: 'new@gmail.com',
    date: '2-12-2023',
    activity: ' edit, multiple'
  },
  {
    name: {
      username: 'Forum'
    },
    companyname: 'Broker Company',
    sino: 5,
    email: 'new@gmail.com',
    date: '2-12-2023',
    activity: ' edit, multiple'
  },
  {
    name: {
      username: 'Dubai Holding'
    },
    companyname: 'Marketing Company',
    sino: 5,
    email: 'new@gmail.com',
    date: '2-12-2023',
    activity: ' edit, multiple'
  },
  {
    name: {
      username: 'BlueStone'
    },
    companyname: 'Developer Company',
    sino: 5,
    email: 'new@gmail.com',
    date: '2-12-2023',
    activity: ' edit, multiple'
  }
];

function AgentActivities() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  return (
    <Page title="Agent">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table pagination={pagination}
              setPagination={setPagination} columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

AgentActivities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AgentActivities;
