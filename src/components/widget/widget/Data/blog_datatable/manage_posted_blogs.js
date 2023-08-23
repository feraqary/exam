import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import { styled } from '@mui/material/styles';

const data = [
  {
    title: 'Home',
    description: 'The main landing page of the website that provides an overview and introduction to the website and its content.',
    company: 'company name'
  },
  {
    title: 'About',
    description: 'A page that provides information about the website, its purpose, mission, and the team or organization behind it.',
    company: 'company name'
  },
  {
    title: 'Products',
    description:
      'A page showcasing the products or services offered by the website or business, along with their descriptions, features, and pricing.',
    company: 'company name'
  },
  {
    title: 'Blog',
    description:
      'A section containing articles, news, or blog posts related to the website topic or industry, providing informative or entertaining content.',
    company: 'company name'
  },
  {
    title: 'Contact',
    description:
      'A page that provides contact information, such as an email address, phone number, or contact form, allowing visitors to reach out to the website owners or support team.',
    company: 'company name'
  },
  {
    title: 'Gallery',
    description:
      'A collection of images or videos showcasing various aspects related to the website topic, such as products, events, or visual content.',
    company: 'company name'
  },
  {
    title: 'FAQ',
    description:
      'A frequently asked questions page that addresses common queries or concerns visitors may have regarding the website, its products, or services.',
    company: 'company name'
  },
  {
    title: 'Testimonials',
    description:
      'A page featuring testimonials or reviews from satisfied customers or users, highlighting their positive experiences with the website or its offerings.',
    company: 'company name'
  },
  {
    title: 'Services',
    description:
      'A page providing detailed information about the specific services offered by the website or business, including their benefits and how to access them.',
    company: 'company name'
  },
  {
    title: 'Privacy Policy',
    description:
      'A page outlining the website privacy policy, explaining how user data is collected, stored, and used, and addressing any data protection concerns.',
    company: 'company name'
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

const ManPostedBlogs = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'title',
        header: 'Title'
      },
      {
        accessorKey: 'description',
        header: 'Description'
      },
      {
        accessorKey: 'company',
        header: 'Company'
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
            <AqaryButton variant="contained">Edit </AqaryButton>

            <Button variant="contained" color="primary" startIcon={<PreviewIcon />}>
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

export default ManPostedBlogs;
