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
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: '261 Erdman Ford',
    comments: 'US',
    sino: 1,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Broker Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Management Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    comments: 'UAE',
    sino: 4,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    comments: 'UAE',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    comments: 'US',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    comments: 'UAE',
    sino: 5,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    comments: 'UAE',
    sino: 5,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    comments: 'USA',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: '261 Erdman Ford',
    comments: 'US',
    sino: 1,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Broker Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Management Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    comments: 'UAE',
    sino: 4,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    comments: 'UAE',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    comments: 'US',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    comments: 'UAE',
    sino: 5,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    comments: 'UAE',
    sino: 5,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    comments: 'USA',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: '261 Erdman Ford',
    comments: 'US',
    sino: 1,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Broker Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Management Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    comments: 'UAE',
    sino: 4,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    comments: 'UAE',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    comments: 'US',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    comments: 'UAE',
    sino: 5,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    comments: 'UAE',
    sino: 5,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    comments: 'USA',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: '261 Erdman Ford',
    comments: 'US',
    sino: 1,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Broker Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Management Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    comments: 'UAE',
    sino: 4,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    comments: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    comments: 'UAE',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    comments: 'US',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    comments: 'UAE',
    sino: 5,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    comments: 'UAE',
    sino: 5,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 4,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    comments: 'USA',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    phone: '2-12-2023',
    designation: ' uploaded',
    action: ' edit, multiple'
  }
];


const InternationalAgentListTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sino',
        header: 'SI.NO'
      },
      {
        accessorKey: 'name.profile',
        header: 'Profile Photo ',
        Cell: ({ cell }) => (
            <img src={cell.getValue()} alt="profile" width={50} height={50} style={{'objectFit':'center'}}/>
        )
      },
      {
        accessorKey: 'companyname',
        header: 'Company Name'
      },
      {
        accessorKey: 'name.username',
        header: 'User Name'
      },
      {
        accessorKey: 'verify',
        header: 'Verify',
        Cell: ({cell}) =>(
            <Button variant="outlined">Upload</Button>
        )
      },
      {
        accessorKey: 'designation',
        header: 'Designation'
      },
      {
        accessorKey: 'phone',
        header: 'Phone'
      },
      {
        accessorKey: 'email',
        header: 'Email'
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
              <Button variant="contained" color="primary" startIcon={<RemoveRedEyeIcon/>}>
                Live View
              </Button>
              <Button variant="contained" color="primary" startIcon={<EditIcon />}>
                Edit
              </Button>
              <Button variant="contained" color="primary" startIcon={<BlockIcon />}>
                Block
              </Button>
              <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
                Delete
              </Button>
              <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
                Reset
              </Button>
            </Box>
          )
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default InternationalAgentListTable;
