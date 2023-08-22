import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import KeyIcon from '@mui/icons-material/Key';
import RestoreIcon from '@mui/icons-material/Restore'
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PreviewIcon from '@mui/icons-material/Preview';
import { styled } from '@mui/material/styles';

const data = [
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    username: 'Legal User',
    role: 'Legal Admin',
    email: 'legal@example.com',
    phone: '+01298301931',
    department: 'Legal',
    subcommunity: 'Reem Island',
    community: ' Reem Island',
    city: ' ',
    state: 'Abu Dhabi',
    country: 'UAE'
  }
];
const AqaryButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#436496',
  borderColor: '#436496',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  '&:hover': {
    backgroundColor: '#436496',
    borderColor: '#0062cc',
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#436496',
    borderColor: '#005cbf'
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(67 100 150)'
  }
});

const UserList = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'username',
        header: 'Name'
      },
      {
        accessorKey: 'role',
        header: 'Role '
      },
      {
        accessorKey: 'email',
        header: 'Email'
      },
      {
        accessorKey: 'phone',
        header: 'Phone'
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
            <Button variant="contained" startIcon={<RestoreIcon />}>
              Restore
            </Button>
          </Box>
        )
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default UserList;
