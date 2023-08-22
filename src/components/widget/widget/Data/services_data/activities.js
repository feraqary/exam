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
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 75,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PB192323',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 100,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 55,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'USA',
    webID: 'PA283102',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PB192323',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'USA',
    webID: 'PA283102',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PB192323',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'USA',
    webID: 'PA283102',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PB192323',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    title: 'USA',
    webID: 'PA283102',

    date: '2-12-2023 13:10:05',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    offer: 25,
    sqft: 2430,
    slno: 4
  }
];

const ActivityRequestTable = () => {
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
        accessorKey: 'title',
        header: 'Title'
      },

      { accessorKey: 'activity', header: 'Activity' }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default ActivityRequestTable;
