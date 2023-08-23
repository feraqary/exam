import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';

const data = [
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Jamie',
    customer: 'Jamie',
    email: 'Jamie',
    phone: 'Jamie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Cercie',
    customer: 'Cercie',
    email: 'Cercie',
    phone: 'Cercie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Arya Stark',
    customer: 'Arya Stark',
    email: 'Arya Stark',
    phone: 'Arya Stark',
    verify: true,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Jamie',
    customer: 'Jamie',
    email: 'Jamie',
    phone: 'Jamie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    service: 'Cercie',
    customer: 'Cercie',
    email: 'Cercie',
    phone: 'Cercie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Arya Stark',
    customer: 'Arya Stark',
    email: 'Arya Stark',
    phone: 'Arya Stark',
    verify: true,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Jamie',
    customer: 'Jamie',
    email: 'Jamie',
    phone: 'Jamie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Cercie',
    customer: 'Cercie',
    email: 'Cercie',
    phone: 'Cercie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Arya Stark',
    customer: 'Arya Stark',
    email: 'Arya Stark',
    phone: 'Arya Stark',
    verify: true,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Jamie',
    customer: 'Jamie',
    email: 'Jamie',
    phone: 'Jamie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Cercie',
    customer: 'Cercie',
    email: 'Cercie',
    phone: 'Cercie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Arya Stark',
    customer: 'Arya Stark',
    email: 'Arya Stark',
    phone: 'Arya Stark',
    verify: true,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Jamie',
    customer: 'Jamie',
    email: 'Jamie',
    phone: 'Jamie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    service: 'Cercie',
    customer: 'Cercie',
    email: 'Cercie',
    phone: 'Cercie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Arya Stark',
    customer: 'Arya Stark',
    email: 'Arya Stark',
    phone: 'Arya Stark',
    verify: true,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Jamie',
    customer: 'Jamie',
    email: 'Jamie',
    phone: 'Jamie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Cercie',
    customer: 'Cercie',
    email: 'Cercie',
    phone: 'Cercie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Arya Stark',
    customer: 'Arya Stark',
    email: 'Arya Stark',
    phone: 'Arya Stark',
    verify: true,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Jamie',
    customer: 'Jamie',
    email: 'Jamie',
    phone: 'Jamie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Cercie',
    customer: 'Cercie',
    email: 'Cercie',
    phone: 'Cercie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Arya Stark',
    customer: 'Arya Stark',
    email: 'Arya Stark',
    phone: 'Arya Stark',
    verify: true,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Jamie',
    customer: 'Jamie',
    email: 'Jamie',
    phone: 'Jamie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    service: 'Cercie',
    customer: 'Cercie',
    email: 'Cercie',
    phone: 'Cercie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Arya Stark',
    customer: 'Arya Stark',
    email: 'Arya Stark',
    phone: 'Arya Stark',
    verify: true,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Jamie',
    customer: 'Jamie',
    email: 'Jamie',
    phone: 'Jamie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Cercie',
    customer: 'Cercie',
    email: 'Cercie',
    phone: 'Cercie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Arya Stark',
    customer: 'Arya Stark',
    email: 'Arya Stark',
    phone: 'Arya Stark',
    verify: true,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Jamie',
    customer: 'Jamie',
    email: 'Jamie',
    phone: 'Jamie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Cercie',
    customer: 'Cercie',
    email: 'Cercie',
    phone: 'Cercie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Arya Stark',
    customer: 'Arya Stark',
    email: 'Arya Stark',
    phone: 'Arya Stark',
    verify: true,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Jamie',
    customer: 'Jamie',
    email: 'Jamie',
    phone: 'Jamie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    service: 'Cercie',
    customer: 'Cercie',
    email: 'Cercie',
    phone: 'Cercie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Arya Stark',
    customer: 'Arya Stark',
    email: 'Arya Stark',
    phone: 'Arya Stark',
    verify: true,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    service: 'Jamie',
    customer: 'Jamie',
    email: 'Jamie',
    phone: 'Jamie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Cercie',
    customer: 'Cercie',
    email: 'Cercie',
    phone: 'Cercie',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Arya Stark',
    customer: 'Arya Stark',
    email: 'Arya Stark',
    phone: 'Arya Stark',
    verify: true,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    service: 'Joffery',
    customer: 'Joffery',
    email: 'Joffery',
    phone: 'Joffery',
    verify: false,
    date: '2-12-2023',
    time: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  }
];

const ValuationServicesTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sino',
        header: '   SI NO'
      },
      {
        accessorKey: 'service',
        header: 'Name'
      },
      {
        accessorKey: 'date',
        header: 'Request Date'
      },
      {
        accessorKey: 'time',
        header: 'Time'
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
        accessorKey: 'company',
        header: 'Company'
      },
      {
        accessorKey: 'date',
        header: 'Date'
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialcompany={{ density: 'compact' }} />;
};

export default ValuationServicesTable;
