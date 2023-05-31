import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import { styled } from '@mui/material/styles';

const data = [
  {
    si_num: 1,
    date: '12/12/2022',
    title: 'Home',
    activities: 'The main landing page of the website that provides an overview and introduction to the website and its content.'
  },
  {
    si_num: 1,
    date: '12/12/2022',
    title: 'About',
    activities: 'A page that provides information about the website, its purpose, mission, and the team or organization behind it.'
  },
  {
    si_num: 1,
    date: '12/12/2022',
    title: 'Products',
    activities:
      'A page showcasing the products or services offered by the website or business, along with their descriptions, features, and pricing.'
  },
  {
    si_num: 1,
    date: '12/12/2022',
    title: 'Blog',
    activities:
      'A section containing articles, news, or blog posts related to the website topic or industry, providing informative or entertaining content.'
  },
  {
    si_num: 1,
    date: '12/12/2022',
    title: 'Contact',
    activities:
      'A page that provides contact information, such as an email address, phone number, or contact form, allowing visitors to reach out to the website owners or support team.'
  },
  {
    si_num: 1,
    date: '12/12/2022',
    title: 'Gallery',
    activities:
      'A collection of images or videos showcasing various aspects related to the website topic, such as products, events, or visual content.'
  },
  {
    si_num: 1,
    date: '12/12/2022',
    title: 'FAQ',
    activities:
      'A frequently asked questions page that addresses common queries or concerns visitors may have regarding the website, its products, or services.'
  },
  {
    si_num: 1,
    date: '12/12/2022',
    title: 'Testimonials',
    activities:
      'A page featuring testimonials or reviews from satisfied customers or users, highlighting their positive experiences with the website or its offerings.'
  },
  {
    si_num: 1,
    date: '12/12/2022',
    title: 'Services',
    activities:
      'A page providing detailed information about the specific services offered by the website or business, including their benefits and how to access them.'
  },
  {
    si_num: 1,
    date: '12/12/2022',
    title: 'Privacy Policy',
    activities:
      'A page outlining the website privacy policy, explaining how user data is collected, stored, and used, and addressing any data protection concerns.'
  }
];
const AqaryButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#436496',
  borderColor: '#436496',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  '&:hover': {
    backgroundColor: '#436496',
    borderColor: '#0062cc',
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#436496',
    borderColor: '#005cbf'
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(67 100 150)'
  }
});

const Activities = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'si_num',
        header: 'SI Number'
      },
      {
        accessorKey: 'date',
        header: 'Date'
      },
      {
        accessorKey: 'title',
        header: 'Title'
      },
      {
        accessorKey: 'activities',
        header: 'Activities'
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default Activities;
