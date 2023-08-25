// material-ui
import { Grid, Button, Box } from '@mui/material';
import Image from 'next/image';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import { useState } from 'react';
import Table from 'components/Table/Table';

// ==============================|| Banners datatable ||============================== //
const data = [
    {
      name: {
        projectName: 'Khidmah',
        companyLogo: '/assets/images/company_logo/logo1.png'
      },
      company: 'Developer Company',
      featured: true,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: '261 Erdman Ford',
      featured: false,
      link: 'US',
      subtitle: 'US',
      sino: 'PA2831023',
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
      company: 'Broker Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Management Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Developer Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Broker Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PB192323',
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
      company: 'Marketing Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Developer Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA283102',
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
      company: 'Developer Company',
      featured: true,
      link: 'US',
      subtitle: 'US',
      sino: 'PA2831023',
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
      company: 'Broker Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA283102',
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
      company: 'Marketing Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA283102',
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
      company: 'Developer Company',
      featured: false,
      link: 'USA',
      subtitle: 'USA',
      sino: 'PA283102',
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
      company: 'Developer Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: '261 Erdman Ford',
      featured: false,
      link: 'US',
      subtitle: 'US',
      sino: 'PA2831023',
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
      company: 'Broker Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Management Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Developer Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Broker Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PB192323',
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
      company: 'Marketing Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Developer Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA283102',
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
      company: 'Developer Company',
      featured: false,
      link: 'US',
      subtitle: 'US',
      sino: 'PA2831023',
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
      company: 'Broker Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA283102',
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
      company: 'Marketing Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA283102',
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
      company: 'Developer Company',
      featured: false,
      link: 'USA',
      subtitle: 'USA',
      sino: 'PA283102',
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
      company: 'Developer Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: '261 Erdman Ford',
      featured: false,
      link: 'US',
      subtitle: 'US',
      sino: 'PA2831023',
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
      company: 'Broker Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Management Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Developer Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Broker Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PB192323',
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
      company: 'Marketing Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Developer Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA283102',
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
      company: 'Developer Company',
      featured: false,
      link: 'US',
      subtitle: 'US',
      sino: 'PA2831023',
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
      company: 'Broker Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA283102',
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
      company: 'Marketing Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA283102',
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
      company: 'Developer Company',
      featured: false,
      link: 'USA',
      subtitle: 'USA',
      sino: 'PA283102',
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
      company: 'Developer Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: '261 Erdman Ford',
      featured: false,
      link: 'US',
      subtitle: 'US',
      sino: 'PA2831023',
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
      company: 'Broker Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Management Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Developer Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Broker Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PB192323',
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
      company: 'Marketing Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA2831023',
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
      company: 'Developer Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA283102',
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
      company: 'Developer Company',
      featured: false,
      link: 'US',
      subtitle: 'US',
      sino: 'PA2831023',
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
      company: 'Broker Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA283102',
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
      company: 'Marketing Company',
      featured: false,
      link: 'UAE',
      subtitle: 'UAE',
      sino: 'PA283102',
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
      company: 'Developer Company',
      featured: false,
      link: 'USA',
      subtitle: 'USA',
      sino: 'PA283102',
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
  const ColumnHeaders = [
    {
        accessorKey: 'sino',
        header: 'SL.NO'
      },
      {
        accessorKey: 'company',
        header: 'Company Name'
      },
      {
        accessorKey: 'link',
        header: 'Link'
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
  ];
function ProjectVideosTable() {

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
 
    return (
      <Page title="Banners">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table              
              data={data}
              columnHeaders={ColumnHeaders}
              loading={false}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={false}
              rowCount={data.length}  
            />
          </Grid>
        </Grid>
      </Page>
    );
  }
  
  ProjectVideosTable.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };
  
  export default ProjectVideosTable;