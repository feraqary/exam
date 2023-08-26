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
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'US',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 75,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PB192323',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 100,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 55,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'US',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'USA',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'US',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PB192323',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'US',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'USA',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'US',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PB192323',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'US',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'USA',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'US',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PB192323',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'US',
    webID: 'PA2831023',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  },
  {
    unittitle: 'USA',
    webID: 'PA283102',
    
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4,

  }
];


const ActivityExhibitionTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'slno',
        header: 'SL.No'
      },
      {
        accessorKey: 'date',
        header: 'Date'
      },
      {
        accessorKey: 'unittitle',
        header: 'Unit Title'
      },
      {
        accessorKey: 'companyname',
        header: 'Company Name'
      },

      { accessorKey: 'activity',
       header: 'Activity'
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default ActivityExhibitionTable;
