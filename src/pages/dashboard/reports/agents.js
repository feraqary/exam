// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState, useMemo } from 'react';

// material-ui
import { Grid } from '@mui/material';
import Table from 'components/Table/Table';
import Container from 'components/Elements/Container';

export default function Agents() {
  return (
    <Page title="Agents">
      <Container title="Agents List" style={{ xs: 12 }} sx={{ mt: 2 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <AgentsTable />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

Agents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// *************************************************************************
const data = [
  {
    sl_no: '#040404',
    location: 'Abu dhabi',
    name: 'Mikasa',
    leads: '212',
    closed: '3',
    phone: '971561234567',
    email: 'eren@aot.com'
  },
  {
    sl_no: '#040404',
    location: 'duabi',
    name: 'ahmed',
    leads: '212',
    closed: '3',
    phone: '971561234567',
    email: 'eren@aot.com'
  },
  {
    sl_no: '#040404',
    location: 'Abu dhabi',
    name: 'mo',
    leads: '212',
    closed: '3',
    phone: '971561234567',
    email: 'eren@aot.com'
  },
  {
    sl_no: '#040404',
    location: 'Abu dhabi',
    name: 'raed',
    leads: '212',
    closed: '3',
    phone: '971561234567',
    email: 'eren@aot.com'
  }
];

const AgentsTable = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sl_no',
        header: 'SL.No'
      },

      {
        accessorKey: 'location',
        header: 'LOCATION'
      },
      {
        accessorKey: 'name',
        header: 'NAME'
      },
      {
        accessorKey: 'leads',
        header: 'LEADS'
      },
      {
        accessorKey: 'closed',
        header: 'CLOSED'
      },
      {
        accessorKey: 'phone',
        header: 'PHONE'
      },
      {
        accessorKey: 'email',
        header: 'EMAIL'
      }
    ],
    []
  );

  return (
    <Table
      columnHeaders={columns}
      data={data}
      //   loading={isLoading}
      pagination={pagination}
      //   setPagination={setPagination}
      //   isFetching={isFetching}
      //   rowCount={localProjectsData?.Total}
    />
  );
};
