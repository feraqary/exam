import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EditIcon from '@mui/icons-material/Edit';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';


const data = [
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    company: 'Developer Company',
    webID: 'PA2831023',
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PB192323',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PB192323',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PB192323',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PB192323',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Cercie',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Arya Stark',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
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
    vacancy:3,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date:"2-12-2023",
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
        }
    ]

  }
];



const CareerListTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sino',
        header: '   SI NO'
      },
      {
        accessorKey: 'state',
        header: 'State'
      },
      {
        accessorKey: 'company',
        header: 'Company'
      },
      {
        accessorKey: 'minsal',
        header: 'Minimum Salary',
      },
      {
        accessorKey: 'maxsal',
        header: 'Maximum Salary',
      },
      {
        accessorKey: 'jobtitle',
        header: 'Job Title',
      },
      {
        accessorKey: 'vacancy',
        header: 'Vacancy',
      },
      {
        accessorKey: 'yearOfExperience',
        header: 'Year Of Experience',
      },
      {
        accessorKey: 'date',
        header: 'Date',
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
              View
            </Button>
            <Button variant="contained" color="primary">
              Edit
            </Button>
            <Button variant="contained" color="primary">
              Delete
            </Button>
          </Box>
        )
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default CareerListTable;
