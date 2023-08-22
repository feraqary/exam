import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
 

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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

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
    verify: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
 

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
    verify: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
 

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
    verify: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
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
    verify: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

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
    verify: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


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
    verify: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  }
];


const InternationalServicesTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sino',
        header: '   SI NO'
      },
      {
        accessorKey: 'company',
        header: 'Company Name'
      },
      {
        accessorKey: 'type',
        header: 'Company Type'
      },
      {
        accessorKey: 'verify',
        header: 'Verify'
      },
      {
        accessorKey: 'service',
        header: 'Service Name'
      },
      {
        accessorKey: 'action',
        header: 'Action'
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialcompany={{ density: 'compact' }} />;
};

export default InternationalServicesTable;
