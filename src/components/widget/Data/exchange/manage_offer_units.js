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
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 75,
  },
  {
    refID: 'PB192323',
    title: 100,
  },
  {
    refID: 'PA2831023',
    title: 55,
  },
  {
    refID: 'PA283102',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA283102',
    title: 25,
  },
  {
    refID: 'PA283102',
    title: 25,
  },
  {
    refID: 'PA283102',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PB192323',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA283102',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA283102',
    title: 25,
  },
  {
    refID: 'PA283102',
    title: 25,
  },
  {
    refID: 'PA283102',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PB192323',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA283102',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA283102',
    title: 25,
  },
  {
    refID: 'PA283102',
    title: 25,
  },
  {
    refID: 'PA283102',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PB192323',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA283102',
    title: 25,
  },
  {
    refID: 'PA2831023',
    title: 25,
  },
  {
    refID: 'PA283102',
    title: 25,
  },
  {
    refID: 'PA283102',
    title: 25,
  },
  {
    refID: 'PA283102',
    title: 25,
  }
];



const ManageOfferTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'refID',
        header: 'RefId'
      },
      {
        accessorKey: 'title',
        header: 'Title',
        Cell: ({cell}) => {
            return <div>{cell.getValue()}% offer</div>
        }

      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default ManageOfferTable;
