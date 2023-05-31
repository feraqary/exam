
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
    state: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    state: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    state: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    state: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',
 

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    state: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    state: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    type: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    state: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    state: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    state: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    state: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    state: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    state: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    state: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    state: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    state: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    state: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    state: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    state: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    type: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    state: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    state: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    state: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    state: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    state: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    state: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    state: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    state: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',
 

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    state: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    state: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    state: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    state: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    type: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    state: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    state: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    state: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    state: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    state: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    state: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    state: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    state: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',
 

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    state: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    state: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    state: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    state: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    type: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    state: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    state: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    state: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    state: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    state: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    state: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    type: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  }
];



const RejectedUnitsTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sino',
        header: 'Ref.ID'
      },
      {
        accessorKey: 'reason',
        header: 'Reason'
      },
      {
        accessorKey: 'type',
        header: 'Type'
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default RejectedUnitsTable;
