import React, {useMemo}from 'react'
import { Grid, Button, Box } from '@mui/material';
// project imports
import MaterialReactTable from 'material-react-table';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';




const data = [
    {
        ut:"123",
        matches:5,
        lead_no:"0501234567",
        lead_type:"not my type",
        community:"al reem",
        agent:"Uzumaki Minato",
        status:"active"
    },
    {
        ut:"123",
        matches:5,
        lead_no:"0501234567",
        lead_type:"not my type",
        community:"al reem",
        agent:"Uzumaki Minato",
        status:"active"
    },
    {
        ut:"123",
        matches:5,
        lead_no:"0501234567",
        lead_type:"not my type",
        community:"al reem",
        agent:"Uzumaki Minato",
        status:"active"
    },
    {
        ut:"123",
        matches:5,
        lead_no:"0501234567",
        lead_type:"not my type",
        community:"al reem",
        agent:"Uzumaki Minato",
        status:"active"
    },
    {
        ut:"123",
        matches:5,
        lead_no:"0501234567",
        lead_type:"not my type",
        community:"al reem",
        agent:"Uzumaki Minato",
        status:"active"
    },
]

const ColumnHeaders = [
    {
        accessorKey: 'ut',
        header: 'U/T'
    },
    {
        accessorKey: 'matches',
        header: 'Matches.',
    
    },
    {
        accessorKey: 'lead_no',
        header: 'Lead No'
    },
    {
        accessorKey: 'lead_type',
        header: 'Lead Type'
    },
    {
        accessorKey: 'community',
        header: 'Community'
    },
    {
        accessorKey: 'agent',
        header: 'Agent'
    },

    {
        accessorKey: 'status',
        header: 'Status'
    },
    ];

export default function Leads() {


    return (
        <Page title="Banners">
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Table data={data} columnHeaders={ColumnHeaders} />
            </Grid>
          </Grid>
        </Page>
      );
}
