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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
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
    endis: 'new@gmail.com',
    qualityScore: '+0192831-310',
    phaseType: 'Lannisters',
    numberOfPhases: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple'
  }
];

const InterPro = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'proId',
        header: 'Project ID '
      },
      {
        accessorKey: 'featured',
        header: 'Featured'
      },
      {
        accessorKey: 'name.projectName',
        header: 'Project Name'
      },
      {
        accessorKey: 'location',
        header: 'Location'
      },
      {
        accessorKey: 'developerCompany',
        header: 'Developer Company'
      },
      {
        accessorKey: 'rating',
        header: 'Rating'
      },
      {
        accessorKey: 'numberOfPhases',
        header: 'Number of Phases'
      },

      {
        accessorKey: 'phaseType',
        header: 'Phase Type'
      },
      {
        accessorKey: 'phases',
        header: 'Phases'
      },
      {
        accessorKey: 'endis',
        header: 'Enable / Disable'
      },
      { accessorKey: 'qualityScore', header: 'Quality Score' },

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
            <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
              Block
            </Button>
            <Button variant="contained" color="warning" startIcon={<KeyIcon />}>
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

export default InterPro;
