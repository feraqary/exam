import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

const data = [
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    reqName: '261 Erdman Ford',
    featured: 'standard',
    reqType: 'US',
    proId: 'PA2831023',
    rating: 'Cercie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    reqName: 'Broker Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Winterfell',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    reqName: 'Management Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Joffery',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    reqName: 'Broker Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PB192323',
    rating: 'Cercie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    reqName: 'Marketing Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Winterfell',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA283102',
    rating: 'Joffery',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'US',
    proId: 'PA2831023',
    rating: 'Jamie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    reqName: 'Broker Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA283102',
    rating: 'Cercie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    reqName: 'Marketing Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA283102',
    rating: 'Arya Stark',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Winterfell',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'USA',
    proId: 'PA283102',
    rating: 'Joffery',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    reqName: '261 Erdman Ford',
    featured: 'standard',
    reqType: 'US',
    proId: 'PA2831023',
    rating: 'Cercie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    reqName: 'Broker Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Winterfell',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    reqName: 'Management Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Joffery',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    reqName: 'Broker Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PB192323',
    rating: 'Cercie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    reqName: 'Marketing Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Winterfell',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA283102',
    rating: 'Joffery',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'US',
    proId: 'PA2831023',
    rating: 'Jamie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    reqName: 'Broker Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA283102',
    rating: 'Cercie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    reqName: 'Marketing Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA283102',
    rating: 'Arya Stark',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Winterfell',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'USA',
    proId: 'PA283102',
    rating: 'Joffery',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    reqName: '261 Erdman Ford',
    featured: 'standard',
    reqType: 'US',
    proId: 'PA2831023',
    rating: 'Cercie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    reqName: 'Broker Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Winterfell',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    reqName: 'Management Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Joffery',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    reqName: 'Broker Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PB192323',
    rating: 'Cercie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    reqName: 'Marketing Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Winterfell',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA283102',
    rating: 'Joffery',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'US',
    proId: 'PA2831023',
    rating: 'Jamie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    reqName: 'Broker Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA283102',
    rating: 'Cercie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    reqName: 'Marketing Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA283102',
    rating: 'Arya Stark',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Winterfell',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'USA',
    proId: 'PA283102',
    rating: 'Joffery',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    reqName: '261 Erdman Ford',
    featured: 'standard',
    reqType: 'US',
    proId: 'PA2831023',
    rating: 'Cercie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    reqName: 'Broker Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Winterfell',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    reqName: 'Management Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Joffery',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    reqName: 'Broker Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PB192323',
    rating: 'Cercie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    reqName: 'Marketing Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Winterfell',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA283102',
    rating: 'Joffery',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'US',
    proId: 'PA2831023',
    rating: 'Jamie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    reqName: 'Broker Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA283102',
    rating: 'Cercie',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    reqName: 'Marketing Company',
    featured: 'standard',
    reqType: 'UAE',
    proId: 'PA283102',
    rating: 'Arya Stark',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Winterfell',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    reqName: 'Developer Company',
    featured: 'standard',
    reqType: 'USA',
    proId: 'PA283102',
    rating: 'Joffery',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    phaseType: 'Lannisters',
    date: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  }
];

const ManRequest = () => {
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
        accessorKey: 'reqType',
        header: 'Request type'
      },
      {
        accessorKey: 'reqName',
        header: 'name'
      },
      {
        accessorKey: 'endis',
        header: 'Email'
      },
      { accessorKey: 'mobile', header: 'Mobile' },
      {
        accessorKey: 'date',
        header: 'Date'
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default ManRequest;
