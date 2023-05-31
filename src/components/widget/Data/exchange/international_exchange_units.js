import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PreviewIcon from '@mui/icons-material/Preview';
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
    developerCompany: 'Developer Company',
    featured: 'premium',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: 'standard',
    unitname: 'US',
    location: 'US',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 75,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PB192323',
    reference: 'PB192323',
    category: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 100,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 55,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'premium',
    unitname: 'US',
    location: 'US',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'USA',
    location: 'USA',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: 'standard',
    unitname: 'US',
    location: 'US',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PB192323',
    reference: 'PB192323',
    category: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'US',
    location: 'US',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'USA',
    location: 'USA',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: 'standard',
    unitname: 'US',
    location: 'US',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PB192323',
    reference: 'PB192323',
    category: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'US',
    location: 'US',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'USA',
    location: 'USA',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: 'standard',
    unitname: 'US',
    location: 'US',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PB192323',
    reference: 'PB192323',
    category: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'US',
    location: 'US',
    webID: 'PA2831023',
    reference: 'PA2831023',
    category: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: 'standard',
    unitname: 'UAE',
    location: 'UAE',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: 'standard',
    unitname: 'USA',
    location: 'USA',
    webID: 'PA283102',
    reference: 'PA283102',
    category: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    phaseType: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    phases: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    sqft: 2430,
    bedroom: 4,

  }
];



const InternationalExhangeTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'featured',
        header: '',
        Cell: ({cell}) => (
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={cell.getValue()}    
            >
                <MenuItem value={cell.getValue()}>
            <em>{cell.getValue()}</em>
          </MenuItem>
             { cell.getValue() !== 'standard' && <MenuItem value='Standard'>Standard</MenuItem>}
             { cell.getValue() !== 'featured' && <MenuItem value='Featured'>Featured</MenuItem>}
             { cell.getValue() !== 'premium' && <MenuItem value='Premium'>Premium</MenuItem>}
            </Select>
          </FormControl>
        )
      },
      {
        accessorKey: 'webID',
        header: 'Web Id'
      },
      {
        accessorKey: 'reference',
        header: 'Reference'
      },
      {
        accessorKey: 'unitname',
        header: 'Unit Name'
      },
      {
        accessorKey: 'developerCompany',
        header: 'Company/Agent'
      },
      {
        accessorKey: 'category',
        header: 'Category'
      },
      {
        accessorKey: 'type',
        header: 'Type'
      },

      {
        accessorKey: 'location',
        header: 'Location'
      },
      {
        accessorKey: 'price',
        header: 'Price'
      },
      {
        accessorKey: 'quality',
        header: 'Quality',
        Cell: ({cell}) => (
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="determinate" value={cell.getValue()} color={cell.getValue() < 50 ? 'error' : 'primary'}/>
                <Box
                    sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                >
                    <Typography variant="h5" component="div" color="text.secondary">
                    {`${cell.getValue()}%`}
                    </Typography>
                </Box>
            </Box>
        )
      },
      { accessorKey: 'price',
       header: 'Sqft'
      },
      { accessorKey: 'bedroom',
       header: 'Bedroom'
      },
      { accessorKey: 'insert',
       header: 'Insert'
      },
      { accessorKey: 'movedDate',
       header: 'Moved Date'
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
              Live View
            </Button>
            <Button color="primary" variant="contained" startIcon={<AssignmentIcon />}>
              View
            </Button>
            <Button variant="contained" color="primary" startIcon={<PreviewIcon />}>
              Edit
            </Button>
            <Button variant="contained" color="primary">
              Add to Exchange Offer
            </Button>
            <Button variant="contained" color="primary">
              Remove
            </Button>
            <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
              Remove Exchange
            </Button>
          </Box>
        )
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default InternationalExhangeTable;
