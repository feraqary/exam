import React, {useMemo, useState}from 'react'
import { Grid, Button, Box } from '@mui/material';
// project imports
import MaterialReactTable from 'material-react-table';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

import Add_activity from './add_activity';




const data = [

]

const ColumnHeaders = [
    {
        accessorKey: 'assigned_to',
        header: 'Assigned To'
    },
    {
        accessorKey: 'comments',
        header: 'Comments',
    
    },
    {
        accessorKey: 'company',
        header: 'Company'
    },
    {
        accessorKey: 'email',
        header: 'Email'
    },
    {
        accessorKey: 'entered_by',
        header: 'Entered By'
    },
    {
        accessorKey: 'entered_on',
        header: 'Entered On'
    },
    {
        accessorKey: 'phone',
        header: 'Phone'
    },
    {
        accessorKey: 'property_name',
        header: 'Property Name'
    },
    {
        accessorKey: 'unit_no',
        header: 'Unit No.'
    },

];

export default function Activities() {

    const [show,setshow] = useState(false)

    return (
        <Page title="Banners">
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Table data={data} columnHeaders={ColumnHeaders} />
                </Grid>
                    {show && <Add_activity closeAdd={setshow}/>}
            </Grid>
        </Page>
    )

}

