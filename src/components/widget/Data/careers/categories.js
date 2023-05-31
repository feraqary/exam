import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';

const data = [
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: '261 Erdman Ford',
    category: 'US',
    sino: 1,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Broker Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Management Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    category: 'UAE',
    sino: 4,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    category: 'UAE',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    category: 'US',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    category: 'UAE',
    sino: 5,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    category: 'UAE',
    sino: 5,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    category: 'USA',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: '261 Erdman Ford',
    category: 'US',
    sino: 1,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Broker Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Management Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    category: 'UAE',
    sino: 4,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    category: 'UAE',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    category: 'US',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    category: 'UAE',
    sino: 5,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    category: 'UAE',
    sino: 5,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    category: 'USA',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: '261 Erdman Ford',
    category: 'US',
    sino: 1,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Broker Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Management Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    category: 'UAE',
    sino: 4,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    category: 'UAE',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    category: 'US',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    category: 'UAE',
    sino: 5,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    category: 'UAE',
    sino: 5,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    category: 'USA',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: '261 Erdman Ford',
    category: 'US',
    sino: 1,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Broker Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Management Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    category: 'UAE',
    sino: 4,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    category: 'UAE',
    sino: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    category: 'UAE',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Khidmah',
      profile: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    category: 'US',
    sino: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Forum',
      profile: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    category: 'UAE',
    sino: 5,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'Dubai Holding',
      profile: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    category: 'UAE',
    sino: 5,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 4,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  },
  {
    name: {
      username: 'BlueStone',
      profile: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    category: 'USA',
    sino: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    date: '2-12-2023',
    designation: ' uploaded',
    activity: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png'
  }
];

const JobCategoriesTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sino',
        header: 'SI.NO'
      },
      {
        accessorKey: 'category',
        header: 'Category'
      },
      {
        accessorKey: 'image',
        header: 'Image',
        Cell: ({ cell }) => <img src={cell.getValue()} alt="logo" width={50} height={50} style={{'objectFit':'contain'}}/>
      },
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

export default JobCategoriesTable;
