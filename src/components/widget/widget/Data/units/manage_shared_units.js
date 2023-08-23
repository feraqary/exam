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
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
    createdDate: '2020-01-01',
    updatedDate: '2020-01-01',
    status: 'Active',
    verify: 'Verified',
    bookNow: 'Book Now Button',
    requestVideo: 'Request Video Button',
    openHouse: 'Open House Button'
  },
  {
    webId: '1234556',
    referenceNo: '1234567',
    unitTitle: 'some title',
    companyAgent: 'some company',
    category: 'Standard',
    type: 'some type',
    country: 'UAE',
    location: 'Abu Dhabi',
    price: '100',
    qualityScore: '100%',
    listingType: 'some type',
    bedroom: '2',
    plotArea: '130,000',
    buildArea: '130,000',
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

const SharedUnits = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'webId',
        header: 'Web ID'
      },
      {
        accessorKey: 'referenceNo',
        header: 'Reference No'
      },
      {
        accessorKey: 'unitTitle',
        header: 'Unit Title'
      },
      {
        accessorKey: 'companyAgent',
        header: 'Company or Agent'
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
        accessorKey: 'country',
        header: ' Country'
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
        accessorKey: 'qualityScore',
        header: 'Quality Score'
      },
      {
        accessorKey: 'listingType',
        header: 'Listing Type'
      },
      {
        accessorKey: 'bedroom',
        header: 'Bedroom'
      },
      {
        accessorKey: 'plotArea',
        header: 'Plot Area'
      },
      {
        accessorKey: 'buildArea',
        header: 'Build Area'
      },
      {
        accessorKey: 'createdDate',
        header: 'Created Date'
      },
      {
        accessorKey: 'updatedDate',
        header: 'Updated Date'
      },
      {
        accessorKey: 'verify',
        header: 'Verify'
      },
      {
        accessorKey: 'bookNow',
        header: 'Book Now'
      },
      {
        accessorKey: 'requestVideo',
        header: 'Request Video'
      },
      {
        accessorKey: 'openHouse',
        header: 'Open House'
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
            <Button color="primary" variant="contained" startIcon={<AssignmentIcon />}>
              View Documents
            </Button>
            <Button variant="contained" color="primary" startIcon={<PreviewIcon />}>
              View Live
            </Button>
            <Button variant="contained" color="primary">
              Multiple
            </Button>
            <Button variant="contained" color="primary">
              Report
            </Button>
            <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
              Block
            </Button>
            <Button variant="contained" startIcon={<KeyIcon />}>
              Reset
            </Button>
          </Box>
        )
      },
      { accessorKey: 'status', header: 'Status' }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default SharedUnits;
