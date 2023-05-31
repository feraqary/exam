import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PreviewIcon from '@mui/icons-material/Preview';
import { styled } from '@mui/material/styles';

const data = [
  {
    name: {
      companyName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyType: 'Developer Company',
    state: 'ABU DHABI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Jamie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyType: '261 Erdman Ford',
    state: 'OHIO',
    country: 'US',
    regId: 'PA2831023',
    contactPerson: 'Cercie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyType: 'Broker Company',
    state: 'DUBAI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Arya Stark',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Winterfell',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Management Company',
    state: 'DUBAI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyType: 'Developer Company',
    state: 'ABU DHABI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Jamie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyType: 'Broker Company',
    state: 'Sharjah',
    country: 'UAE',
    regId: 'PB192323',
    contactPerson: 'Cercie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyType: 'Marketing Company',
    state: 'Sharjah',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Arya Stark',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Winterfell',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Developer Company',
    state: 'Ajman',
    country: 'UAE',
    regId: 'PA283102',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyType: 'Developer Company',
    state: 'Texas',
    country: 'US',
    regId: 'PA2831023',
    contactPerson: 'Jamie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyType: 'Broker Company',
    state: 'Ajman',
    country: 'UAE',
    regId: 'PA283102',
    contactPerson: 'Cercie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyType: 'Marketing Company',
    state: 'Dubai',
    country: 'UAE',
    regId: 'PA283102',
    contactPerson: 'Arya Stark',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Winterfell',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Developer Company',
    state: 'Virginia',
    country: 'USA',
    regId: 'PA283102',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyType: 'Developer Company',
    state: 'ABU DHABI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Jamie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyType: '261 Erdman Ford',
    state: 'OHIO',
    country: 'US',
    regId: 'PA2831023',
    contactPerson: 'Cercie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyType: 'Broker Company',
    state: 'DUBAI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Arya Stark',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Winterfell',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Management Company',
    state: 'DUBAI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyType: 'Developer Company',
    state: 'ABU DHABI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Jamie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyType: 'Broker Company',
    state: 'Sharjah',
    country: 'UAE',
    regId: 'PB192323',
    contactPerson: 'Cercie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyType: 'Marketing Company',
    state: 'Sharjah',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Arya Stark',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Winterfell',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Developer Company',
    state: 'Ajman',
    country: 'UAE',
    regId: 'PA283102',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyType: 'Developer Company',
    state: 'Texas',
    country: 'US',
    regId: 'PA2831023',
    contactPerson: 'Jamie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyType: 'Broker Company',
    state: 'Ajman',
    country: 'UAE',
    regId: 'PA283102',
    contactPerson: 'Cercie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyType: 'Marketing Company',
    state: 'Dubai',
    country: 'UAE',
    regId: 'PA283102',
    contactPerson: 'Arya Stark',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Winterfell',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Developer Company',
    state: 'Virginia',
    country: 'USA',
    regId: 'PA283102',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyType: 'Developer Company',
    state: 'ABU DHABI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Jamie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyType: '261 Erdman Ford',
    state: 'OHIO',
    country: 'US',
    regId: 'PA2831023',
    contactPerson: 'Cercie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyType: 'Broker Company',
    state: 'DUBAI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Arya Stark',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Winterfell',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Management Company',
    state: 'DUBAI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyType: 'Developer Company',
    state: 'ABU DHABI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Jamie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyType: 'Broker Company',
    state: 'Sharjah',
    country: 'UAE',
    regId: 'PB192323',
    contactPerson: 'Cercie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyType: 'Marketing Company',
    state: 'Sharjah',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Arya Stark',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Winterfell',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Developer Company',
    state: 'Ajman',
    country: 'UAE',
    regId: 'PA283102',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyType: 'Developer Company',
    state: 'Texas',
    country: 'US',
    regId: 'PA2831023',
    contactPerson: 'Jamie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyType: 'Broker Company',
    state: 'Ajman',
    country: 'UAE',
    regId: 'PA283102',
    contactPerson: 'Cercie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyType: 'Marketing Company',
    state: 'Dubai',
    country: 'UAE',
    regId: 'PA283102',
    contactPerson: 'Arya Stark',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Winterfell',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Developer Company',
    state: 'Virginia',
    country: 'USA',
    regId: 'PA283102',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyType: 'Developer Company',
    state: 'ABU DHABI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Jamie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyType: '261 Erdman Ford',
    state: 'OHIO',
    country: 'US',
    regId: 'PA2831023',
    contactPerson: 'Cercie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyType: 'Broker Company',
    state: 'DUBAI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Arya Stark',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Winterfell',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Management Company',
    state: 'DUBAI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyType: 'Developer Company',
    state: 'ABU DHABI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Jamie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyType: 'Broker Company',
    state: 'Sharjah',
    country: 'UAE',
    regId: 'PB192323',
    contactPerson: 'Cercie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyType: 'Marketing Company',
    state: 'Sharjah',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Arya Stark',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Winterfell',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Developer Company',
    state: 'Ajman',
    country: 'UAE',
    regId: 'PA283102',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyType: 'Developer Company',
    state: 'Texas',
    country: 'US',
    regId: 'PA2831023',
    contactPerson: 'Jamie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyType: 'Broker Company',
    state: 'Ajman',
    country: 'UAE',
    regId: 'PA283102',
    contactPerson: 'Cercie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyType: 'Marketing Company',
    state: 'Dubai',
    country: 'UAE',
    regId: 'PA283102',
    contactPerson: 'Arya Stark',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Winterfell',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Developer Company',
    state: 'Virginia',
    country: 'USA',
    regId: 'PA283102',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
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

const IntComp = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.companyName',
        header: 'Company Name'
      },
      {
        accessorKey: 'name.companyLogo',
        header: 'Company Logo',
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Image src={row.original.name.companyLogo} width={60} height={30} />
          </Box>
        )
      },
      {
        accessorKey: 'regId',
        header: ' Registration ID '
      },
      {
        accessorKey: 'state',
        header: ' State '
      },
      {
        accessorKey: 'companyType',
        header: ' Company Type'
      },
      {
        accessorKey: 'country',
        header: ' Country'
      },
      {
        accessorKey: 'contactPerson',
        header: ' Contact Person'
      },
      {
        accessorKey: 'subsDate',
        header: ' Subscription Date'
      },

      {
        accessorKey: 'addedBy',
        header: 'Added By'
      },
      {
        accessorKey: 'contactPerson',
        header: 'Contact Person'
      },
      {
        accessorKey: 'email',
        header: 'Email'
      },
      { accessorKey: 'phone', header: 'Phone' },

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
            <AqaryButton variant="contained">Edit </AqaryButton>
            <Button variant="contained" color="primary">
              Edit
            </Button>
            <Button color="primary" variant="contained" startIcon={<AssignmentIcon />}>
              View Documents
            </Button>
            <Button variant="contained" color="primary" startIcon={<PreviewIcon />}>
              View Live
            </Button>
            <Button variant="contained" color="primary">
              Multiple
            </Button>
            <Button variant="contained" color="primary">
              Report
            </Button>
            <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
              Block
            </Button>
            <Button variant="contained" startIcon={<KeyIcon />}>
              Reset
            </Button>
          </Box>
        )
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default IntComp;
