import React, {useMemo, useState}from 'react'
// material-ui
import { Grid, RadioGroup,InputLabel, Button,FormControlLabel,Radio, TextField, FormGroup, Checkbox, Typography, Select, MenuItem} from '@mui/material';
import MaterialReactTable from 'material-react-table';


// project imports
import { gridSpacing } from 'store/constant';
import MainCard from 'components/ui-component/cards/MainCard';
import CustomDateTime from 'components/forms/components/DateTime/CustomDateTime';
import MuiPhoneNumber from 'material-ui-phone-number';
import Add_activity from './add_activity';
import Add_transaction from './add_trans';





const data = [
    
]

export default function T_history() {

    const columns = useMemo(
        () => [
        {
            accessorKey: 'lead',
            header: 'Lead#'
        },
        {
            accessorKey: 'lead _type',
            header: 'Lead Type',
        
        },
        {
            accessorKey: 'contact_type',
            header: 'Contact Type'
        },
        {
            accessorKey: 'unit_ref',
            header: 'Unit Ref.#'
        },
        {
            accessorKey: 'property',
            header: 'Property'
        },
        {
            accessorKey: 'trans_Date_time',
            header: 'Trans. Date and Time'
        },
        ],
        []
    );

    const [show,setshow] = useState(false)
    

  return (
    <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
            <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />
        </Grid>
        <Grid item>
            <Button variant='contained' onClick={()=>{setshow(true)}}>Add new</Button>
        </Grid>
        
        {show && <Add_transaction closeAdd={setshow}/>}
            
        
    </Grid>
  )
}
