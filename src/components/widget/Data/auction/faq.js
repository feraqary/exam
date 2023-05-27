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
    question: 'US',
    answer: 'PA2831023',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    question: 'US',
    answer: 'PA2831023',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Cercie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Joffery',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PB192323',
    question: 'US',
    property: 'PB192323',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PB192323',
    category: 'Cercie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    question: 'US',
    answer: 'PA2831023',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Cercie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Arya Stark',
    state: 'Winterfell',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    question: 'US',
    answer: 'PA2831023',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Cercie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Joffery',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PB192323',
    question: 'US',
    property: 'PB192323',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PB192323',
    category: 'Cercie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    question: 'US',
    answer: 'PA2831023',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Cercie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Arya Stark',
    state: 'Winterfell',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    question: 'US',
    answer: 'PA2831023',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Cercie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Joffery',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PB192323',
    question: 'US',
    property: 'PB192323',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PB192323',
    category: 'Cercie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    question: 'US',
    answer: 'PA2831023',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Cercie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Arya Stark',
    state: 'Winterfell',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    question: 'US',
    answer: 'PA2831023',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Cercie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Joffery',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PB192323',
    question: 'US',
    property: 'PB192323',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PB192323',
    category: 'Cercie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA2831023',
    question: 'US',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Arya Stark',
    state: 'Winterfell',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    question: 'US',
    answer: 'PA2831023',
    property: 'PA2831023',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA2831023',
    category: 'Jamie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Cercie',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Arya Stark',
    state: 'Winterfell',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
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
    answer: 'PA283102',
    question: 'US',
    property: 'PA283102',
    bid:33200,
    minbid:33200,
    yearOfExperience:4,
    sino: 'PA283102',
    category: 'Joffery',
    state: 'Lannisters',
    startdate: '2-12-2023',
    enddate: '2-12-2023',
    starttime:"22:00:00",
    endtime:"22:00:00",
    status: ' uploaded',
    jobtitle: ' edit, multiple',
    images:[
        {
            name:'view',
            url:'/assets/images/company_logo/logo1.png'
        }
    ]

  }
];



const FAQTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sino',
        header: '   SI NO'
      },
      {
        accessorKey: 'question',
        header: 'Question'
      },
      {
        accessorKey: 'answer',
        header: 'Answer'
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

export default FAQTable;
