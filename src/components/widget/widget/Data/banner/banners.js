import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';


const data = [
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: true,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: false,
    title: 'US',
    subtitle: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Winterfell',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 75,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PB192323',
    reference: 'PB192323',
    type: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 100,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Winterfell',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 55,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: true,
    title: 'US',
    subtitle: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Winterfell',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'USA',
    subtitle: 'USA',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: false,
    title: 'US',
    subtitle: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Winterfell',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PB192323',
    reference: 'PB192323',
    type: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Winterfell',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'US',
    subtitle: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Winterfell',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'USA',
    subtitle: 'USA',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: false,
    title: 'US',
    subtitle: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Winterfell',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PB192323',
    reference: 'PB192323',
    type: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Winterfell',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'US',
    subtitle: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Winterfell',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'USA',
    subtitle: 'USA',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: '261 Erdman Ford',
    featured: false,
    title: 'US',
    subtitle: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Winterfell',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Management Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PB192323',
    reference: 'PB192323',
    type: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Winterfell',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'US',
    subtitle: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Winterfell',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'USA',
    subtitle: 'USA',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  }
];

const BannersTable = () => {
    const columns = useMemo(
      () => [
        {
          accessorKey: 'title',
          header: 'Title'
        },
        {
          accessorKey: 'subtitle',
          header: 'Sub Title'
        },
        {
          accessorKey: 'enddate',
          header: 'End Date'
        },
        {
          accessorKey: 'endtime',
          header: 'End Time'
        },
        {
          accessorKey: 'target',
          header: 'Target'
        },
        {
          accessorKey: 'name.companyLogo',
          header: 'Image',
          Cell: ({cell}) => (
            <img src={cell.getValue()} width={50} height={100} style={{'objectFit':'contain'}}/>
          )
        },
  
        {
          accessorKey: 'type',
          header: 'Banner Type'
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
              <Button color="primary" variant="contained">
                Delete
              </Button>
              <Button variant="contained" color="primary">
                Published
              </Button>
            </Box>
          )
        }
      ],
      []
    );
  
    return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
  };
  
export default BannersTable;
  