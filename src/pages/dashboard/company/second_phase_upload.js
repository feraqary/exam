// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import MainCard from 'components/ui-component/cards/MainCard';
import { AqaryButton } from 'components/Elements/AqaryButton';
import Table from 'components/Table/Table';

// ===========================|| International Company Managment list||=========================== //

const ColumnHeaders = [
  {
    accessorKey: 'name.companyName',
    header: 'Company/Agent Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'regId',
    header: 'Register Id'
  },
  {
    accessorKey: 'type',
    header: 'Type'
  },

  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({}) => <AqaryButton variant="contained">Registration - Second Phase</AqaryButton>
  }
];

const data = [
  {
    name: {
      companyName: 'BlueStone'
    },
    type: 'Virginia',
    regId: 'PA283102',
    email: 'new@gmail.com'
  },
  {
    name: {
      companyName: 'BlueStone'
    },
    type: 'Virginia',
    regId: 'PA283102',
    email: 'new@gmail.com'
  },
  {
    name: {
      companyName: 'BlueStone'
    },
    type: 'Virginia',
    regId: 'PA283102',
    email: 'new@gmail.com'
  },
  {
    name: {
      companyName: 'BlueStone'
    },
    type: 'Virginia',
    regId: 'PA283102',
    email: 'new@gmail.com'
  },
  {
    name: {
      companyName: 'BlueStone'
    },
    type: 'Virginia',
    regId: 'PA283102',
    email: 'new@gmail.com'
  },
  {
    name: {
      companyName: 'BlueStone'
    },
    type: 'Virginia',
    regId: 'PA283102',
    email: 'new@gmail.com'
  },
  {
    name: {
      companyName: 'BlueStone'
    },
    type: 'Virginia',
    regId: 'PA283102',
    email: 'new@gmail.com'
  },
  {
    name: {
      companyName: 'BlueStone'
    },
    type: 'Virginia',
    regId: 'PA283102',
    email: 'new@gmail.com'
  },
  {
    name: {
      companyName: 'BlueStone'
    },
    type: 'Virginia',
    regId: 'PA283102',
    email: 'new@gmail.com'
  }
];

const SecondPhaseUpload = () => (
  <Page title="Second Phase Upload">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Table columnHeaders={ColumnHeaders} data={data} />
      </Grid>
    </Grid>
  </Page>
);

SecondPhaseUpload.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SecondPhaseUpload;
