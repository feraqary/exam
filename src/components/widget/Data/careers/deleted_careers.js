import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Button, Box } from '@mui/material';

const data = [
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Broker Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Management Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PB192323',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PB192323',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Broker Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Management Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PB192323',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PB192323',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Broker Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Management Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PB192323',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PB192323',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: '261 Erdman Ford',
    unitname: 'US',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Broker Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Management Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PB192323',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PB192323',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    unitname: 'US',
    webID: 'PA2831023',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    company: 'Broker Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    company: 'Marketing Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    company: 'Developer Company',
    webID: 'PA283102',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images: [
      {
        name: 'view',
        url: '/assets/images/company_logo/logo1.png'
      }
    ]
  }
];

const DeletedJobsTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sino',
        header: 'SI.NO'
      },
      {
        accessorKey: 'company',
        header: 'Company Name'
      },
      {
        accessorKey: 'jobtitle',
        header: 'Job Title'
      },
      {
        accessorKey: 'vacancy',
        header: 'Vacancy'
      },
      {
        accessorKey: 'yearOfExperience',
        header: 'Experience'
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
              <Button variant="contained" color="warning">
                Restore
              </Button>
            </Box>
          )
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default DeletedJobsTable;
