// material-ui
import { Grid, RadioGroup, Chip,InputLabel,Box, FormControlLabel, OutlinedInput ,Radio, Icon,TextField, FormGroup, Checkbox, Typography, FormHelperText, Select, MenuItem, Button} from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';
import VerticalTabs from './contact_components/VerticalTabs';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import AutocompleteForms from 'components/forms/forms-validation/AutocompleteForms';
import { useState, useEffect, useMemo } from 'react';
import CustomDateTime from 'components/forms/components/DateTime/CustomDateTime';
import MaterialReactTable from 'material-react-table';




const data = [
    {
      contact_id:"RN123444232",
      updated_date:"2-12-2023",
      name: "ahmed",
      family_name: "ahmed",
      mobile: "+9192831-310",
      email: "envkt@example.com"
    },
    {
      contact_id:"RN123444232",
      updated_date:"2-12-2023",
      name: "ahmed",
      family_name: "ahmed",
      mobile: "+9192831-310",
      email: "envkt@example.com"
    }
]
// ==============================|| Add Contact||============================== //
function Manage_contact() {
    
    const columns = useMemo(
        () => [
          {
            accessorKey: 'contact_id',
            header: 'Contact ID'
          },
          {
            accessorKey: 'updated_date',
            header: ' Updated Date '
          },
          {
            accessorKey: 'name',
            header: ' Name '
          },
          {
            accessorKey: 'family_name',
            header: ' Family Name'
          },
          {
            accessorKey: 'mobile',
            header: ' Mobile'
          },
          {
            accessorKey: 'email',
            header: ' Email'
          },

    
          {
            accessorKey: 'action',
            header: 'Action',
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                {/* <AqaryButton variant="contained">Edit </AqaryButton> */}
                <Button variant="contained" >
                  Edit
                </Button>
                <Button variant="contained" >
                  Report
                </Button>
                <Button variant="outlined">
                  Delete
                </Button>
              </Box>
            )
          }
        ],
        []
      );
    
      return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
}


Manage_contact.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };
  
export default Manage_contact;