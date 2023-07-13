import React, {useMemo, useState}from 'react'
// material-ui
import { Grid, RadioGroup,InputLabel, Button,FormControlLabel,Radio, TextField, FormGroup, Checkbox, Typography, Select, MenuItem} from '@mui/material';
import MaterialReactTable from 'material-react-table';


// project imports
import { gridSpacing } from 'store/constant';
import MainCard from 'components/ui-component/cards/MainCard';
import CustomDateTime from 'components/forms/components/DateTime/CustomDateTime';
import MuiPhoneNumber from 'material-ui-phone-number';




export default function Add_activity({closeAdd}) {
    console.log('adding activity')
  return (
        <Grid  container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard title="Creat New Activity">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={6}>
                                <InputLabel>Name</InputLabel>
                                <TextField fullWidth/>
                            </Grid>

                            <Grid item xs={6}>
                            </Grid>


                            <Grid item xs={6}>
                                <InputLabel>Entered By</InputLabel>
                            </Grid>

                            <Grid item xs={6}>
                                <InputLabel id="type" required>Type</InputLabel>
                                <Select
                                labelId="type"
                                fullWidth
                                displayEmpty
                                >
                                    <MenuItem>Incoming Call</MenuItem>
                                    <MenuItem>Outgoing Call</MenuItem>
                                    <MenuItem>Data Entry</MenuItem>
                                    <MenuItem>Checked</MenuItem>
                                    <MenuItem>Enter Unit</MenuItem>
                                    <MenuItem>Location</MenuItem>
                                </Select>
                            </Grid>

                            <Grid item xs={6}>
                                <InputLabel>Assigned To</InputLabel>
                            </Grid>

                            <Grid item xs={6}>
                                <InputLabel  >Reference No</InputLabel>
                                <TextField fullWidth/>
                            </Grid>

                            <Grid item xs={6}>
                                <InputLabel  >Date & Time</InputLabel> 
                                {/* //!add time to this date field */}
                                <CustomDateTime/>
                            </Grid>

                            <Grid item xs={6}>
                            </Grid>

                            
                            <Grid item xs={6}>
                                <InputLabel  >Phone</InputLabel>
                                <MuiPhoneNumber fullWidth variant='outlined'  defaultCountry={'ae'} />
                            </Grid>

                            <Grid item xs={6}>
                            </Grid>

                            <Grid item xs={6}>
                                <InputLabel  >Email</InputLabel>
                                <TextField fullWidth/>
                            </Grid>

                            <Grid item xs={6}>
                            </Grid>

                            <Grid item xs={12}>
                                <InputLabel> Subject </InputLabel>
                                <TextField fullWidth/>
                            </Grid>

                            <Grid item xs={6}>
                            </Grid>

                            <Grid item xs={12}>
                                <InputLabel> Comments </InputLabel>
                                <TextField multiline rows={3} fullWidth/>
                            </Grid>



                            <Grid item xs={12}>
                                <Reminders/>
                            </Grid>

                            <Grid item xs={6} >
                                    </Grid>
                                    <Grid item xs={8} >
                                    </Grid>
                                    <Grid item xs={6} >
                                    </Grid>
                                    <Grid item xs={8} >
                                    </Grid>
                                    <Grid item xs={6} >
                                    </Grid>
                                    <Grid item xs={8} >
                                    </Grid>

                                    <Grid item xs={1.5} style={{display:"flex", alignItems:"center"}} justifyContent="center">
                                        <Button variant='contained' fullWidth>Add & New</Button>
                                    </Grid>
                                    <Grid item xs={1.5} onClick={()=>{closeAdd(false)}} style={{display:"flex", alignItems:"center"}} justifyContent="center">
                                        <Button variant='contained' fullWidth>Add & Close</Button>
                                    </Grid>
                                    <Grid item xs={1} onClick={()=>{closeAdd(false)}} style={{display:"flex", alignItems:"center"}} justifyContent="center">
                                        <Button variant='outlined' fullWidth>Discard</Button>
                                    </Grid>




                        </Grid>
                </MainCard>
            </Grid>
        </Grid>
  )
}



const Reminders = () =>{
    const columns = useMemo(
        () => [
            {
                accessorKey: 'type',
                header: 'Type'
            },
            {
                accessorKey: 'interval',
                header: 'Interval',
            
            },
            {
                accessorKey: 'interval_type',
                header: 'Interval Type'
            },

        ],
        []
    );

    const [data,setData] = useState([{
        type:'sdfsd',
        interval:'sdfsf',
        interval_type:'sdffsdfsdfs'
    }]);

    const [interval,setint] = useState("")
    const [type,settype] = useState("")
    const [inttype,setinttype] = useState("")


    const handleType = (e) =>{settype(e.target.value)}
    const handleInt = (e) =>{setint(e.target.value)}
    const handleIntType = (e) =>{setinttype(e.target.value)}


    const handleData = () =>{
        // console.log([type,interval,inttype])
        setData([...data,{type:type,interval:interval,interval_type:inttype}])
        console.log(data)

    }
    

    return (
        <>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />
                </Grid>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <MainCard title="Add Reminder">
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={4}>
                                        <InputLabel>Type</InputLabel>
                                        <TextField  onChange={handleType} fullWidth/>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <InputLabel>Interval</InputLabel>
                                        <TextField onChange={handleInt} fullWidth/>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <InputLabel>Interval Type</InputLabel>
                                        <TextField onChange={handleIntType} fullWidth/>
                                    </Grid>
                                    
                                    <Grid item xs={2} style={{display:"flex", alignItems:"center"}} justifyContent="center">
                                        <Button onClick={handleData} variant='contained' fullWidth>Add Reminer</Button>
                                    </Grid>

                                    
            
                                    
                                </Grid>
                        </MainCard>
                    </Grid>
                </Grid>
            </Grid>
        </>        
    )
}