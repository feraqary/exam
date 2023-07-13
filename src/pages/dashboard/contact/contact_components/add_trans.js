import React, {useMemo, useState}from 'react'
// material-ui
import { Grid, RadioGroup,InputLabel, Button,FormControlLabel,Radio, TextField, FormGroup, Checkbox, Typography, Select, MenuItem} from '@mui/material';
import MaterialReactTable from 'material-react-table';


// project imports
import { gridSpacing } from 'store/constant';
import MainCard from 'components/ui-component/cards/MainCard';
import CustomDateTime from 'components/forms/components/DateTime/CustomDateTime';
import MuiPhoneNumber from 'material-ui-phone-number';




export default function Add_transaction({closeAdd}) {    
 


  return (
        <Grid  container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard title="Creat New Activity">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={6}>
                                <InputLabel>Lead#</InputLabel>
                                <Select
                                labelId="type"
                                placeholder='choose...'
                                fullWidth
                                // value="sddsdsdsdsdsd"
                                displayEmpty
                                >
                                    <MenuItem>LE1234532</MenuItem>
                                    <MenuItem>LE9292923</MenuItem>
                                    <MenuItem>LE2323233</MenuItem>
                                    <MenuItem>LE0932323</MenuItem>
                                    <MenuItem>LE1212323</MenuItem>
                                </Select>
                            </Grid>

                            <Grid item xs={6}>
                                <InputLabel>Contact Type</InputLabel>
                                <Select
                                placeholder='choose...'
                                fullWidth
                                displayEmpty
                                >
                                    <MenuItem> </MenuItem>
                                    <MenuItem> </MenuItem>
                                    <MenuItem> </MenuItem>
                                    {/* <MenuItem>Farid</MenuItem>
                                    <MenuItem>Ashraf</MenuItem>
                                    <MenuItem>Ramous</MenuItem> */}

                                </Select>
                            </Grid>

                            <Grid item xs={6}>
                                <InputLabel id="type" >Unit Ref.#</InputLabel>
                                <Select
                                labelId="type"
                                fullWidth
                                displayEmpty
                                >
                                    
                                    <MenuItem>Unit No:01,Reference No:AP32023</MenuItem>
                                    <MenuItem>Unit No:02,Reference No:AP12312</MenuItem>
                                    <MenuItem>Unit No:23,Reference No:AP12345</MenuItem>
                                    <MenuItem>Unit No:11,Reference No:AP32323</MenuItem>
                                    <MenuItem>Unit No:03,Reference No:AP12311</MenuItem>
                                    <MenuItem>Unit No:04,Reference No:AP23221</MenuItem>
                                </Select>
                            </Grid>

                            <Grid item xs={6}>
                                <InputLabel id="type" >Trans. Data and Time</InputLabel>
                                <CustomDateTime/>
                            </Grid>
                            <Grid item xs={6}>
                                <InputLabel id="type" >Lead Type</InputLabel>
                                <Select
                                labelId="type"
                                fullWidth
                                displayEmpty
                                >
                                    <MenuItem>Sales</MenuItem>
                                    <MenuItem>Leasing</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={6}>
                                <InputLabel id="type" >Partner ID</InputLabel>
                                <Select
                                labelId="type"
                                fullWidth
                                displayEmpty
                                >
                                    <MenuItem>Ahmed</MenuItem>
                                    <MenuItem>kHALED</MenuItem>
                                    <MenuItem>hANEYA</MenuItem>
                                    <MenuItem>Farid</MenuItem>
                                    <MenuItem>Ashraf</MenuItem>
                                    <MenuItem>Ramous</MenuItem>
                                </Select>
                            </Grid>

                            
                            <Grid item xs={6}>
                                <InputLabel id="type" >Property</InputLabel>
                                <Select
                                labelId="type"
                                fullWidth
                                displayEmpty
                                >
                                    <MenuItem>Dubai</MenuItem>
                                    <MenuItem>AD</MenuItem>
                                    <MenuItem>Abu dhabi</MenuItem>
                                    <MenuItem>Al reem</MenuItem>
                                    <MenuItem>RAK</MenuItem>
                                    <MenuItem>Loc</MenuItem>
                                </Select>
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

