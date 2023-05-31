import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PreviewIcon from '@mui/icons-material/Preview';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';


const data = [
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'US',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 75,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PB192323',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 100,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 55,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'US',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'USA',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'US',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PB192323',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'US',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'USA',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'US',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PB192323',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'US',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'USA',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'US',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PB192323',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'US',
    webID: 'PA2831023',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'UAE',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  },
  {
    unitname: 'USA',
    webID: 'PA283102',
    
    expirydate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    agent: 4,

  }
];



const OfferExchangeTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'webID',
        header: 'Web Id'
      },
      {
        accessorKey: 'unitname',
        header: 'Unit Name'
      },
      {
        accessorKey: 'agent',
        header: 'Company/Agent'
      },
      {
        accessorKey: 'offer',
        header: 'Offer Category',
        Cell: ({cell}) => {
            return <div>{cell.getValue()}% offer</div>
        }

      },
      { accessorKey: 'expirydate',
       header: 'Expiry Date'
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
            <Button variant="contained" color="primary" startIcon={<PreviewIcon />}>
              Edit Promotions
            </Button>
            <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
              Remove
            </Button>
          </Box>
        )
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default OfferExchangeTable;
