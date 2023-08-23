import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PreviewIcon from '@mui/icons-material/Preview';
import { styled } from '@mui/material/styles';

const data = [
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    sino: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    company: 'some company',
    exhibition: 'Standard',
    type: 'some type',
    country: 'UAE',
    place: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    start: '130,000',
    end: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
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

const InternationalExihibitionTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'sino',
        header: 'SI.NO'
      },
      {
        accessorKey: 'exhibition',
        header: 'Exhibition Name'
      },
      {
        accessorKey: 'place',
        header: 'Place'
      },
      {
        accessorKey: 'company',
        header: 'Company'
      },
      {
        accessorKey: 'start',
        header: 'Starting Date'
      },
      {
        accessorKey: 'end',
        header: 'End Date'
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
            <Button variant="contained" color="primary">
              Edit
            </Button>
            <Button color="primary" variant="contained" >
              Add Video Gallery
            </Button>
            <Button variant="contained" color="primary" >
              Parnter
            </Button>
            <Button variant="contained" color="primary">
              Sponsor
            </Button>
            <Button variant="contained" color="primary">
              Exhibitors
            </Button>
            <Button variant="contained" color="primary" >
              Sponsors
            </Button>
            <Button variant="contained"  color="primary">
              Broucher
            </Button>
            <Button variant="contained" color="primary">
              Queries
            </Button>
            <Button variant="contained"  color="primary">
              Video
            </Button>
            <Button variant="contained"  color="primary">
              Register Details
            </Button>
            <Button variant="contained"  color="primary">
              Add Gallery
            </Button>
          </Box>
        )
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default InternationalExihibitionTable;
