// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState, useMemo } from 'react';

// material-ui
import { Grid } from '@mui/material';
import MaterialReactTable from 'material-react-table';

export default function Agents() {
  return (
    <Page title="Agents">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <AgentsTable />
        </Grid>
      </Grid>
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

  return <MaterialReactTable columns={columns} data={data} />;
};
