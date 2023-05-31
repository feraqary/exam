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
    communityname: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    communityname: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    communityname: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    communityname: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
 

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    communityname: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    communityname: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    category: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    communityname: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    communityname: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    communityname: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    communityname: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    communityname: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    communityname: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    communityname: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    communityname: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    communityname: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    communityname: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    communityname: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    communityname: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    category: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    communityname: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    communityname: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    communityname: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    communityname: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    communityname: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    communityname: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    communityname: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    communityname: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
 

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    communityname: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    communityname: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    communityname: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    communityname: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    category: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    communityname: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    communityname: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    communityname: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    communityname: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    communityname: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    communityname: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    communityname: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    communityname: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
 

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    communityname: 'Broker Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    communityname: 'Management Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    communityname: 'Developer Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    communityname: 'Broker Company',
    webID: 'PB192323',
    sino: 'PB192323',
    category: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    communityname: 'Marketing Company',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    communityname: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    communityname: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    sino: 'PA2831023',
    category: 'Jamie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    communityname: 'Broker Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Cercie',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    communityname: 'Marketing Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Arya Stark',
    publish: 'Winterfell',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    communityname: 'Developer Company',
    webID: 'PA283102',
    sino: 'PA283102',
    category: 'Joffery',
    publish: 'Lannisters',
    type: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',


  }
];



const TowerStatusTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sino',
        header: '   SI NO'
      },
      {
        accessorKey: 'communityname',
        header: 'Community Name'
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialcommunityname={{ density: 'compact' }} />;
};

export default TowerStatusTable;
