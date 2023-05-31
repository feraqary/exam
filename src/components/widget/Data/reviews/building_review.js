import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarRateIcon from '@mui/icons-material/StarRate';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PreviewIcon from '@mui/icons-material/Preview';
import Rating from '@mui/material/Rating';
import { divide } from 'lodash';
import { styled } from '@mui/material/styles';

const data = [
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 2,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    customername: '261 Erdman Ford',
    towername: 'standard',
    country: 'US',
    maintenance: 1,
    staff: 3,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    customername: 'Broker Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 2,
    email: 'new@gmail.com',
    noise: 3,
    gym: 4,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    customername: 'Management Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 5,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 4,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    customername: 'Broker Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 4,
    staff: 3,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    customername: 'Marketing Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 2,
    email: 'new@gmail.com',
    noise: 3,
    gym: 4,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 5,
    staff: 5,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'US',
    maintenance: 1,
    staff: 4,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    customername: 'Broker Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 5,
    staff: 3,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    customername: 'Marketing Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 5,
    staff: 2,
    email: 'new@gmail.com',
    noise: 3,
    gym: 4,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'USA',
    maintenance: 5,
    staff: 5,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 4,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    customername: '261 Erdman Ford',
    towername: 'standard',
    country: 'US',
    maintenance: 1,
    staff: 3,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    customername: 'Broker Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 2,
    email: 'new@gmail.com',
    noise: 3,
    gym: 4,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    customername: 'Management Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 5,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 4,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    customername: 'Broker Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 4,
    staff: 3,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    customername: 'Marketing Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 2,
    email: 'new@gmail.com',
    noise: 3,
    gym: 4,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 5,
    staff: 5,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'US',
    maintenance: 1,
    staff: 4,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    customername: 'Broker Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 5,
    staff: 3,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    customername: 'Marketing Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 5,
    staff: 2,
    email: 'new@gmail.com',
    noise: 3,
    gym: 4,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'USA',
    maintenance: 5,
    staff: 5,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 4,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    customername: '261 Erdman Ford',
    towername: 'standard',
    country: 'US',
    maintenance: 1,
    staff: 3,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    customername: 'Broker Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 2,
    email: 'new@gmail.com',
    noise: 3,
    gym: 4,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    customername: 'Management Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 5,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 4,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    customername: 'Broker Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 4,
    staff: 3,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    customername: 'Marketing Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 2,
    email: 'new@gmail.com',
    noise: 3,
    gym: 4,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 5,
    staff: 5,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'US',
    maintenance: 1,
    staff: 4,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    customername: 'Broker Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 5,
    staff: 3,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    customername: 'Marketing Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 5,
    staff: 2,
    email: 'new@gmail.com',
    noise: 3,
    gym: 4,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'USA',
    maintenance: 5,
    staff: 5,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 4,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    customername: '261 Erdman Ford',
    towername: 'standard',
    country: 'US',
    maintenance: 1,
    staff: 3,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    customername: 'Broker Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 2,
    email: 'new@gmail.com',
    noise: 3,
    gym: 4,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    customername: 'Management Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 5,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 4,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    customername: 'Broker Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 4,
    staff: 3,
    email: 'new@gmail.com',
    noise: 3,
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    customername: 'Marketing Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 1,
    staff: 2,
    email: 'new@gmail.com',
    noise: 3,
    gym: 4,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 5,
    staff: 5,
    email: 'new@gmail.com',
    noise: '3',
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'US',
    maintenance: 1,
    staff: 4,
    email: 'new@gmail.com',
    noise: '3',
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    customername: 'Broker Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 5,
    staff: 3,
    email: 'new@gmail.com',
    noise: '3',
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    customername: 'Marketing Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 5,
    staff: 2,
    email: 'new@gmail.com',
    noise: '3',
    gym: 4,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    customername: 'Developer Company',
    towername: 'standard',
    country: 'USA',
    maintenance: 5,
    staff: 5,
    email: 'new@gmail.com',
    noise: '3',
    gym: 2,
    date: '2-12-2023',
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino:2
  }
];

const rating = (nbr) => {
const stars = []
for (let i =0; i < nbr; i++){
     stars.push( <StarRateIcon color='orange' />)
}
return stars
}
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
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#436496',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#436496',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(67 100 150)',
    },
  });
const BuldingReviewTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sino',
        header: 'SI NO'
      },
      {
        accessorKey: 'towername',
        header: 'Tower Name'
      },
      {
        accessorKey: 'customername',
        header: 'Customer Name'
      },
      {
        accessorKey: 'email',
        header: 'Email'
      },
      {
        accessorKey: 'country',
        header: 'Country '
      },
      {
        accessorKey: 'service',
        header: 'Review Title'
      },
      {
        accessorKey: 'maintenance',
        header: 'Maintenance',
      },
      {
        accessorKey: 'staff',
        header: 'Staff',
      },
      {
        accessorKey: 'gym',
        header: 'Gym',
      },
      {
        accessorKey: 'maintenance',
        header: 'Noise',
      },
      {
        accessorKey: 'children',
        header: 'Children'
      },
      {
        accessorKey: 'traffic',
        header: 'Traffic'
      },
      {
        accessorKey: 'guestparking',
        header: 'Guest Parking'
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default BuldingReviewTable;
