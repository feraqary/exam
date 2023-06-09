import React, {useMemo, useState}from 'react'
// material-ui
import { Grid, RadioGroup,InputLabel, FormControlLabel,Radio, TextField, FormGroup, Checkbox, Typography, Select, MenuItem, Button,Box} from '@mui/material';


// project imports
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import MaterialReactTable from 'material-react-table';

import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PreviewIcon from '@mui/icons-material/Preview';
import Rating from '@mui/material/Rating';





const data = [
    {
        contact_id:"123",
        updated_date:"1/2/3",
        name:"Minato",
        family_name:"Uzumaki",
        mobile:"+9711234567",
        email:"uzumaki@konoha.com",

    },
]

export default function Contacts() {

    const columns = useMemo(
        () => [
            {
                accessorKey: 'contact_id',
                header: 'Contact ID'
            },
            {
                accessorKey: 'updated_date',
                header: 'Updated Date',
            
            },
            {
                accessorKey: 'name',
                header: 'Name'
            },
            {
                accessorKey: 'family_name',
                header: 'Family Name'
            },
            {
                accessorKey: 'mobile',
                header: 'Mobile'
            },
            {
                accessorKey: 'email',
                header: 'Email'
            },

        ],
        []
    );
    

    const [contact, setContact] = useState([])
    const [data, setData] = useState({})



    const related_contacts = {
        ahmed:{
            contact_id:"CN12345",
            updated_date: '01/12/2023 03:49 PM',
            name: "ahmed hanad al hamdy",
            family_name:"Uzumaki",
            mobile:"9712345678",
            email:"ahmed@gmail.com"
        },
        hamad:{
            contact_id:"CN12345",
            updated_date: '01/12/2023 03:49 PM',
            name: "madara uchiha",
            family_name:"Uzumaki",
            mobile:"9712345678",
            email:"ahmed@gmail.com"
        },
        mike:{
            contact_id:"CN12345",
            updated_date: '01/12/2023 03:49 PM',
            name: "naruto usumaki",
            family_name:"Uzumaki",
            mobile:"9712345678",
            email:"ahmed@gmail.com"
        },
        mike:{
            contact_id:"CN12345",
            updated_date: '01/12/2023 03:49 PM',
            name: "naruto usumaki",
            family_name:"Uzumaki",
            mobile:"9712345678",
            email:"ahmed@gmail.com"
        },
    }

    const handleContact = (e) =>{
        const selected = Object.keys(related_contacts).filter(key => key === e.target.value)

        setData(related_contacts[selected[0]])
        console.log(data)

        
        setContact([...contact, data])
        console.log(related_contacts[selected[0]])
        // console.log(selected[0])
    }

    const handleSubmit=()=>{
    }

    console.log(contact)


    

    return (
        <>
            <Grid container spacing={2} alignItems="center" >

                    <Grid item xs={12} lg={6}>
                        <InputLabel>Partner Search Text</InputLabel>
                        <TextField fullWidth/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <InputLabel>Related Contacts</InputLabel>
                        <Select
                        onChange={handleContact}
                            labelId="demo-simple-select-label" 
                            id="demo-simple-select"
                            fullWidth
                            displayEmpty
                            >
                                <MenuItem value={"ahmed"}>ahmed</MenuItem>
                                <MenuItem value={"hamad"}>hamad</MenuItem>
                                <MenuItem value={"mike"}>mike</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Button  variant="contained" >Add Contact</Button>
                    </Grid>

            </Grid>
            <MainCard title="Contacts">
                <MaterialReactTable columns={columns} data={contact} enableDensityToggle={false} initialState={{ density: 'compact' }} />
            </MainCard>
        </>
    );
}
