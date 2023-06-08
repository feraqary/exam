// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Reviews datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: 'SI NO'
  },
  {
    accessorKey: 'towername',
    header: 'Tower Name'
  },
  {
    accessorKey: 'customername',
    header: 'Customer Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'country',
    header: 'Country '
  },
  {
    accessorKey: 'service',
    header: 'Review Title'
  },
  {
    accessorKey: 'maintenance',
    header: 'Maintenance'
  },
  {
    accessorKey: 'staff',
    header: 'Staff'
  },
  {
    accessorKey: 'gym',
    header: 'Gym'
  },
  {
    accessorKey: 'maintenance',
    header: 'Noise'
  },
  {
    accessorKey: 'children',
    header: 'Children'
  },
  {
    accessorKey: 'traffic',
    header: 'Traffic'
  },
  {
    accessorKey: 'guestparking',
    header: 'Guest Parking'
  }
];

const data = [
  {
    customername: 'Broker Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 5,
    staff: 3,
    email: 'new@gmail.com',
    noise: '3',
    gym: 2,
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino: 2
  },
  {
    customername: 'Marketing Company',
    towername: 'standard',
    country: 'UAE',
    maintenance: 5,
    staff: 2,
    email: 'new@gmail.com',
    noise: '3',
    gym: 4,
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino: 2
  },
  {
    customername: 'Developer Company',
    towername: 'standard',
    country: 'USA',
    maintenance: 5,
    staff: 5,
    email: 'new@gmail.com',
    noise: '3',
    gym: 2,
    service: ' uploaded',
    children: 4,
    traffic: 4,
    guestparking: 4,
    sino: 2
  }
];

function BuildingReviews() {
  return (
    <Page title="Reviews">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

BuildingReviews.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default BuildingReviews;
