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
import Checkbox from '@mui/material/Checkbox';


const data = [
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: true,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: false,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 75,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PB192323',
    reference: 'PB192323',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 100,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 55,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: true,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'USA',
    community: 'USA',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: false,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PB192323',
    reference: 'PB192323',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'USA',
    community: 'USA',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: false,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PB192323',
    reference: 'PB192323',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'USA',
    community: 'USA',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: false,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PB192323',
    reference: 'PB192323',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Winterfell',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    place: 'USA',
    community: 'USA',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertyname: 'Lannisters',
    type: '2-12-2023',
    insert: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4,

  }
];



const LocalPropertyHubTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'slno',
        header: 'SL.NO'
      },
      {
        accessorKey: 'refno',
        header: 'Ref.NO'
      },
      {
        accessorKey: 'propertyname',
        header: 'Property Name'
      },
      {
        accessorKey: 'place',
        header: 'Place'
      },
      {
        accessorKey: 'community',
        header: 'Community'
      },
      {
        accessorKey: 'developerCompany',
        header: 'Developer Company'
      },

      {
        accessorKey: 'propertytype',
        header: 'Property Type'
      },
      {
        accessorKey: 'floors',
        header: 'No of Floors'
      },
      {
        accessorKey: 'lifestyle',
        header: 'Lifestyle'
      },
      {
        accessorKey: 'featured',
        header: 'Featured',
        Cell: ({cell}) => (
            <Checkbox checked={cell.getValue()} name='featured' />
        )
      },
      {
        accessorKey: 'quality',
        header: 'Quality Score',
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
              Verified
            </Button>
            <Button color="primary" variant="contained">
              Edit
            </Button>
            <Button variant="contained" color="primary" >
              Copy
            </Button>
            <Button variant="contained" color="primary">
              View
            </Button>
            <Button variant="contained" color="primary">
              Documents
            </Button>
            <Button variant="contained" color="primary" >
              Gallery
            </Button>
            <Button variant="contained" color="primary" >
              Manage Units
            </Button>
            <Button variant="contained" color="primary" >
              Manage Unit Types
            </Button>
            <Button variant="contained" color="primary" >
              Manage Floor Plan
            </Button>
            <Button variant="contained" color="primary" >
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

export default LocalPropertyHubTable;
