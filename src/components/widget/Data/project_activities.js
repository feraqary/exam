import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PreviewIcon from '@mui/icons-material/Preview';

const data = [
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: 'standard',
    location: 'US',
    proId: 'PA2831023',
    rating: 'Cercie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Winterfell',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Joffery',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PB192323',
    rating: 'Cercie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Winterfell',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA283102',
    rating: 'Joffery',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'US',
    proId: 'PA2831023',
    rating: 'Jamie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA283102',
    rating: 'Cercie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA283102',
    rating: 'Arya Stark',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Winterfell',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'USA',
    proId: 'PA283102',
    rating: 'Joffery',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: 'standard',
    location: 'US',
    proId: 'PA2831023',
    rating: 'Cercie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Winterfell',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Joffery',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PB192323',
    rating: 'Cercie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Winterfell',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA283102',
    rating: 'Joffery',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'US',
    proId: 'PA2831023',
    rating: 'Jamie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA283102',
    rating: 'Cercie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA283102',
    rating: 'Arya Stark',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Winterfell',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'USA',
    proId: 'PA283102',
    rating: 'Joffery',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: 'standard',
    location: 'US',
    proId: 'PA2831023',
    rating: 'Cercie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Winterfell',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Joffery',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PB192323',
    rating: 'Cercie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Winterfell',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA283102',
    rating: 'Joffery',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'US',
    proId: 'PA2831023',
    rating: 'Jamie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA283102',
    rating: 'Cercie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA283102',
    rating: 'Arya Stark',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Winterfell',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'USA',
    proId: 'PA283102',
    rating: 'Joffery',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: 'standard',
    location: 'US',
    proId: 'PA2831023',
    rating: 'Cercie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Winterfell',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Joffery',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Jamie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PB192323',
    rating: 'Cercie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA2831023',
    rating: 'Arya Stark',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Winterfell',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA283102',
    rating: 'Joffery',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'US',
    proId: 'PA2831023',
    rating: 'Jamie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA283102',
    rating: 'Cercie',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    location: 'UAE',
    proId: 'PA283102',
    rating: 'Arya Stark',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Winterfell',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    location: 'USA',
    proId: 'PA283102',
    rating: 'Joffery',
    activities: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  }
];

const LocalProjectActivities = () => {
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
        accessorKey: 'developerCompany',
        header: 'Company Name'
      },
      {
        accessorKey: 'activities',
        header: 'Activities'
      },
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default LocalProjectActivities;
