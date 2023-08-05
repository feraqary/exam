// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Reviews datatable ||============================== //

const ColumnHeaders = [
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
          Restore
        </Button>
      </Box>
    )
  }
];

const data = [
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
    slno: 4
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
    slno: 4
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
    slno: 4
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
    slno: 4
  }
];

function DeletedPropertiesHub() {
  return (
    <Page title="Deleted Property Hub">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

DeletedPropertiesHub.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DeletedPropertiesHub;
