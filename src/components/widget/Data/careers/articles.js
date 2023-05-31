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
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 75,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PB192323',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 100,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 55,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'USA',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PB192323',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'USA',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PB192323',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'USA',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PB192323',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'US',
    webID: 'PA2831023',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'UAE',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  },
  {
    unittitle: 'USA',
    webID: 'PA283102',

    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    offer: 25,
    sqft: 2430,
    slno: 4
  }
];

const CareerArticlesTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'slno',
        header: 'SL.No'
      },
      {
        accessorKey: 'article',
        header: 'Article Title'
      },
      {
        accessorKey: 'description',
        header: 'Description'
      },
      {
        accessorKey: 'image',
        header: 'Image',
        Cell: ({ cell }) => <img src={cell.getValue()} alt="logo" width={50} height={50} style={{'objectFit':'contain'}}/>
      },

      { accessorKey: 'date', header: 'Date' },
      {
        accessorKey: 'action',
        header: 'Action',
        Cell: ({ cell }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Button variant="contained" color="primary">
              Edit
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </Box>
        )
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default CareerArticlesTable;
