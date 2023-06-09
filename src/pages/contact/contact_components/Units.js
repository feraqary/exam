import React, {useMemo}from 'react'
import { Grid, Button, Box } from '@mui/material';
// project imports
import MaterialReactTable from 'material-react-table';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

const data = [

]

const ColumnHeaders = [
    {
        accessorKey: 'ref_no',
        header: 'Ref.No'
    },
    {
        accessorKey: 'property',
        header: 'Property',
    
    },
    {
        accessorKey: 'unit_no',
        header: 'Unit No.'
    },
    {
        accessorKey: 'unit_type',
        header: 'Unit Type'
    },
    {
        accessorKey: 'bedroom_details',
        header: 'Bedroom Details'
    },
    {
        accessorKey: 'model',
        header: 'Model'
    },

];

export default function Units() {


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
