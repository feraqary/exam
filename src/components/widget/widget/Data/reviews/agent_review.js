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
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1.5,
    localknowledge: 2.5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    agentname: '261 Erdman Ford',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    agentname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    agentname: 'Management Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    agentname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 4,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    agentname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    agentname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    agentname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'USA',
    negotationskills: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    agentname: '261 Erdman Ford',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    agentname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    agentname: 'Management Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    agentname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 4,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    agentname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    agentname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    agentname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'USA',
    negotationskills: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    agentname: '261 Erdman Ford',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    agentname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    agentname: 'Management Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    agentname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 4,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    agentname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    agentname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    agentname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'USA',
    negotationskills: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    agentname: '261 Erdman Ford',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    agentname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    agentname: 'Management Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    agentname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 4,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    agentname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 1,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: 3,
    responsiveness: 4,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'US',
    negotationskills: 1,
    localknowledge: 4,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    agentname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    localknowledge: 3,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    agentname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    negotationskills: 5,
    localknowledge: 2,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 4,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    agentname: 'Developer Company',
    username: 'standard',
    comments: 'USA',
    negotationskills: 5,
    localknowledge: 5,
    email: 'new@gmail.com',
    processexpertise: '3',
    responsiveness: 2,
    date: '2-12-2023',
    service: ' uploaded',
    action: ' edit, multiple'
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
const AgentReview = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'agentname',
        header: 'Agent Name '
      },
      {
        accessorKey: 'username',
        header: 'Username '
      },
      {
        accessorKey: 'email',
        header: 'Email'
      },
      {
        accessorKey: 'localknowledge',
        header: 'Local Knowledge',
        Cell: ({ cell }) => (
            <Rating value={cell.getValue()} readOnly/>          )
      },
      {
        accessorKey: 'processexpertise',
        header: 'Process Expertise',
        Cell: ({ cell }) => (
            <Rating value={cell.getValue()} readOnly/>
          )
      },
      {
        accessorKey: 'responsiveness',
        header: 'Responsiveness',
        Cell: ({ cell }) => (
            <Rating value={cell.getValue()} readOnly/>
          )
      },
      {
        accessorKey: 'negotationskills',
        header: 'Negotation Skills',
        Cell: ({ cell }) => (
            <Rating value={cell.getValue()} precision={0.5} readOnly/>
          )
      },
      {
        accessorKey: 'service',
        header: 'Service Provided'
      },
      {
        accessorKey: 'comments',
        header: 'Comments'
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
              <Button variant="contained" color="primary" startIcon={<VerifiedIcon/>}>
                Verify
              </Button>
              <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
                Delete
              </Button>
            </Box>
          )
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default AgentReview;
