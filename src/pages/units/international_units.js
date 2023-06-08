// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import { AqaryButton } from 'components/Elements/AqaryButton';
import Table from 'components/Table/Table';

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
  }
];

const ColumnHeaders = [
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

  { accessorKey: 'status', header: 'Status' },
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

        <Button color="primary" variant="contained">
          View Documents
        </Button>
        <Button variant="contained" color="primary">
          View Live
        </Button>
        <Button variant="contained" color="primary">
          Multiple
        </Button>
        <Button variant="contained" color="primary">
          Report
        </Button>
        <Button variant="contained" color="primary">
          Block
        </Button>
        <Button variant="contained">Reset</Button>
      </Box>
    )
  }
];

function InternationalUnits() {
  return (
    <Page title="Inernational Units">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

InternationalUnits.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default InternationalUnits;
