import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

const data = [
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    featured: true,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyname: '261 Erdman Ford',
    featured: false,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Winterfell',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Management Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 75,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PB192323',
    reference: 'PB192323',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 100,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Winterfell',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 55,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    featured: true,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Winterfell',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'USA',
    community: 'USA',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyname: '261 Erdman Ford',
    featured: false,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Winterfell',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Management Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PB192323',
    reference: 'PB192323',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Winterfell',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Winterfell',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'USA',
    community: 'USA',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyname: '261 Erdman Ford',
    featured: false,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Winterfell',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Management Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PB192323',
    reference: 'PB192323',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Winterfell',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Winterfell',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'USA',
    community: 'USA',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyname: '261 Erdman Ford',
    featured: false,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Winterfell',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Management Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PB192323',
    reference: 'PB192323',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Winterfell',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'US',
    community: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    propertytype: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyname: 'Broker Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyname: 'Marketing Company',
    featured: false,
    place: 'UAE',
    community: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Winterfell',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyname: 'Developer Company',
    featured: false,
    place: 'USA',
    community: 'USA',
    refno: 'PA283102',
    reference: 'PA283102',
    propertytype: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    propertytitle: 'Lannisters',
    type: '2-12-2023',
    date: '2-12-2023',
    movedDate: '2-12-2023',
    lifestyle: ' uploaded',
    activity: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  }
];

const ActivitiesPropertyHubTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'slno',
        header: 'SL.NO'
      },
      {
        accessorKey: 'date',
        header: 'Date'
      },
      {
        accessorKey: 'propertytitle',
        header: 'Property Title'
      },
      {
        accessorKey: 'companyname',
        header: 'Company Name'
      },
      {
        accessorKey: 'activity',
        header: 'Activity'
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default ActivitiesPropertyHubTable;
