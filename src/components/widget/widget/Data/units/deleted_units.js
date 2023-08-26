
import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RestoreIcon from '@mui/icons-material/Restore';


const data = [
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Jamie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: '261 Erdman Ford',
    unitname: 'US',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Cercie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Broker Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Arya Stark',
    loc: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Management Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Joffery',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',
 

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Jamie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    ref: 'PB192323',
    sino: 'PB192323',
    title: 'Cercie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Arya Stark',
    loc: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Joffery',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    unitname: 'US',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Jamie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Cercie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Arya Stark',
    loc: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Joffery',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Jamie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: '261 Erdman Ford',
    unitname: 'US',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Cercie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Broker Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Arya Stark',
    loc: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Management Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Joffery',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Jamie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    ref: 'PB192323',
    sino: 'PB192323',
    title: 'Cercie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Arya Stark',
    loc: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Joffery',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    unitname: 'US',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Jamie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Cercie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Arya Stark',
    loc: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Joffery',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Jamie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: '261 Erdman Ford',
    unitname: 'US',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Cercie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',
 

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Broker Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Arya Stark',
    loc: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Management Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Joffery',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Jamie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    ref: 'PB192323',
    sino: 'PB192323',
    title: 'Cercie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Arya Stark',
    loc: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Joffery',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    unitname: 'US',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Jamie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Cercie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Arya Stark',
    loc: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Joffery',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Jamie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: '261 Erdman Ford',
    unitname: 'US',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Cercie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',
 

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Broker Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Arya Stark',
    loc: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Management Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Joffery',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Jamie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    ref: 'PB192323',
    sino: 'PB192323',
    title: 'Cercie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Arya Stark',
    loc: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Joffery',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    unitname: 'US',
    ref: 'PA2831023',
    sino: 'PA2831023',
    title: 'Jamie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Cercie',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Arya Stark',
    loc: 'Winterfell',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    ref: 'PA283102',
    sino: 'PA283102',
    title: 'Joffery',
    loc: 'Lannisters',
    type: '2-12-2023',
    reason: ' uploaded',
    action: ' edit, multiple',


  }
];

const DeletedUnitsTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sino',
        header: 'Ref.ID'
      },
      {
        accessorKey: 'ref',
        header: 'Ref.No'
      },
      {
        accessorKey: 'title',
        header: 'Unit Title'
      },
      {
        accessorKey: 'company',
        header: 'Company'
      },
      {
        accessorKey: 'loc',
        header: 'Location'
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
              <Button variant="contained" color="primary" startIcon={<RestoreIcon />}>
                Restore
              </Button>
            </Box>
          )
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialcompany={{ density: 'compact' }} />;
};

export default DeletedUnitsTable;
