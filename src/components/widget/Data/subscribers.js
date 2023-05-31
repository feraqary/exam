import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import VerifiedIcon from '@mui/icons-material/Verified';
import BlockIcon from '@mui/icons-material/Block';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const data = [
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 4,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 4,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 4,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 4,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  }
];

const SubscribersListTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sino',
        header: 'SI.NO'
      },
      {
        accessorKey: 'email',
        header: 'Email'
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default SubscribersListTable;
