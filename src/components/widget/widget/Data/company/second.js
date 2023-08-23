import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button, Checkbox } from '@mui/material';
import Image from 'next/image';
import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PreviewIcon from '@mui/icons-material/Preview';
import RestoreIcon from '@mui/icons-material/Restore';
import { styled } from '@mui/material/styles';

const data = [
  {
    name: {
      companyName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyType: 'Developer Company',
    type: 'ABU DHABI',
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
    type: 'OHIO',
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
    type: 'DUBAI',
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
    type: 'DUBAI',
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
    type: 'ABU DHABI',
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
    type: 'Sharjah',
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
    type: 'Sharjah',
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
    type: 'Ajman',
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
    type: 'Texas',
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
    type: 'Ajman',
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
    type: 'Dubai',
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
    type: 'Virginia',
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
    type: 'ABU DHABI',
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
    type: 'OHIO',
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
    type: 'DUBAI',
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
    type: 'DUBAI',
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
    type: 'ABU DHABI',
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
    type: 'Sharjah',
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
    type: 'Sharjah',
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
    type: 'Ajman',
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
    type: 'Texas',
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
    type: 'Ajman',
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
    type: 'Dubai',
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
    type: 'Virginia',
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
    type: 'ABU DHABI',
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
    type: 'OHIO',
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
    type: 'DUBAI',
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
    type: 'DUBAI',
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
    type: 'ABU DHABI',
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
    type: 'Sharjah',
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
    type: 'Sharjah',
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
    type: 'Ajman',
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
    type: 'Texas',
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
    type: 'Ajman',
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
    type: 'Dubai',
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
    type: 'Virginia',
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
    type: 'ABU DHABI',
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
    type: 'OHIO',
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
    type: 'DUBAI',
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
    type: 'DUBAI',
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
    type: 'ABU DHABI',
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
    type: 'Sharjah',
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
    type: 'Sharjah',
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
    type: 'Ajman',
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
    type: 'Texas',
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
    type: 'Ajman',
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
    type: 'Dubai',
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
    type: 'Virginia',
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

const SecondPhaseUploadTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.companyName',
        header: 'Company/Agent Name'
      },
      {
        accessorKey: 'email',
        header: 'Email'
      },
      {
        accessorKey: 'regId',
        header: 'Register Id'
      },
      {
        accessorKey: 'type',
        header: 'Type'
      },

      {
        accessorKey: 'action',
        header: 'Action',
        Cell: ({}) => (
          <AqaryButton variant="contained" >
            Registration - Second Phase
          </AqaryButton>
        )
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialtype={{ density: 'compact' }} />;
};

export default SecondPhaseUploadTable;
