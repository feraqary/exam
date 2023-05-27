import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';

const data = [
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    promoType: 'Developer Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' restore'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    promoType: '261 Erdman Ford',
    expDay: 'US',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    promoType: 'Broker Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    promoType: 'Management Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    promoType: 'Developer Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    promoType: 'Broker Company',
    expDay: 'UAE',
    proId: 'PB192323',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    promoType: 'Marketing Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    promoType: 'Developer Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    promoType: 'Developer Company',
    expDay: 'US',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    promoType: 'Broker Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    promoType: 'Marketing Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    promoType: 'Developer Company',
    expDay: 'USA',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    promoType: 'Developer Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    promoType: '261 Erdman Ford',
    expDay: 'US',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    promoType: 'Broker Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    promoType: 'Management Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    promoType: 'Developer Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    promoType: 'Broker Company',
    expDay: 'UAE',
    proId: 'PB192323',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    promoType: 'Marketing Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    promoType: 'Developer Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    promoType: 'Developer Company',
    expDay: 'US',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    promoType: 'Broker Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    promoType: 'Marketing Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    promoType: 'Developer Company',
    expDay: 'USA',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    promoType: 'Developer Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    promoType: '261 Erdman Ford',
    expDay: 'US',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    promoType: 'Broker Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    promoType: 'Management Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    promoType: 'Developer Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    promoType: 'Broker Company',
    expDay: 'UAE',
    proId: 'PB192323',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    promoType: 'Marketing Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    promoType: 'Developer Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    promoType: 'Developer Company',
    expDay: 'US',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    promoType: 'Broker Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    promoType: 'Marketing Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    promoType: 'Developer Company',
    expDay: 'USA',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    promoType: 'Developer Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    promoType: '261 Erdman Ford',
    expDay: 'US',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    promoType: 'Broker Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    promoType: 'Management Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    promoType: 'Developer Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    promoType: 'Broker Company',
    expDay: 'UAE',
    proId: 'PB192323',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    promoType: 'Marketing Company',
    expDay: 'UAE',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    promoType: 'Developer Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    promoType: 'Developer Company',
    expDay: 'US',
    proId: 'PA2831023',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    promoType: 'Broker Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    promoType: 'Marketing Company',
    expDay: 'UAE',
    proId: 'PA283102',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    promoType: 'Developer Company',
    expDay: 'USA',
    proId: 'PA283102',
    action: ' edit, multiple'
  }
];

const PromoPro = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'proId',
        header: 'Project ID '
      },

      {
        accessorKey: 'name.projectName',
        header: 'Project Name'
      },
      {
        accessorKey: 'expDay',
        header: 'Expiry Date'
      },
      {
        accessorKey: 'promoType',
        header: 'Promotion Type'
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
            <Button variant="contained" color="primary">
              Edit
            </Button>
            <Button variant="contained" color="error">
              Remove
            </Button>
          </Box>
        )
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default PromoPro;
