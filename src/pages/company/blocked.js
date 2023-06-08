// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import { AqaryButton } from 'components/Elements/AqaryButton';
import Table from 'components/Table/Table';

// ===========================|| International Company Managment list||=========================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: 'SL.No'
  },
  {
    accessorKey: 'name.companyName',
    header: 'Company Name'
  },
  {
    accessorKey: 'phone',
    header: 'Phone'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({}) => <AqaryButton variant="contained">Restore</AqaryButton>
  }
];

const data = [
  {
    name: {
      companyName: 'Dubai Holding'
    },
    email: 'new@gmail.com',
    phone: '+0192831-310',
    action: ' edit, multiple',
    sino: '2'
  },
  {
    name: {
      companyName: 'Dubai Holding'
    },
    email: 'new@gmail.com',
    phone: '+0192831-310',
    action: ' edit, multiple',
    sino: '2'
  },
  {
    name: {
      companyName: 'Dubai Holding'
    },
    email: 'new@gmail.com',
    phone: '+0192831-310',
    action: ' edit, multiple',
    sino: '2'
  },
  {
    name: {
      companyName: 'Dubai Holding'
    },
    email: 'new@gmail.com',
    phone: '+0192831-310',
    action: ' edit, multiple',
    sino: '2'
  },
  {
    name: {
      companyName: 'Dubai Holding'
    },
    email: 'new@gmail.com',
    phone: '+0192831-310',
    action: ' edit, multiple',
    sino: '2'
  },
  {
    name: {
      companyName: 'Dubai Holding'
    },
    email: 'new@gmail.com',
    phone: '+0192831-310',
    action: ' edit, multiple',
    sino: '2'
  },
  {
    name: {
      companyName: 'Dubai Holding'
    },
    email: 'new@gmail.com',
    phone: '+0192831-310',
    action: ' edit, multiple',
    sino: '2'
  },
  {
    name: {
      companyName: 'Dubai Holding'
    },
    email: 'new@gmail.com',
    phone: '+0192831-310',
    action: ' edit, multiple',
    sino: '2'
  },
  {
    name: {
      companyName: 'Dubai Holding'
    },
    email: 'new@gmail.com',
    phone: '+0192831-310',
    action: ' edit, multiple',
    sino: '2'
  },
  {
    name: {
      companyName: 'Dubai Holding'
    },
    email: 'new@gmail.com',
    phone: '+0192831-310',
    action: ' edit, multiple',
    sino: '2'
  },
  {
    name: {
      companyName: 'Dubai Holding'
    },
    email: 'new@gmail.com',
    phone: '+0192831-310',
    action: ' edit, multiple',
    sino: '2'
  },
  {
    name: {
      companyName: 'Dubai Holding'
    },
    email: 'new@gmail.com',
    phone: '+0192831-310',
    action: ' edit, multiple',
    sino: '2'
  },
  {
    name: {
      companyName: 'Dubai Holding'
    },
    email: 'new@gmail.com',
    phone: '+0192831-310',
    action: ' edit, multiple',
    sino: '2'
  },
  {
    name: {
      companyName: 'Dubai Holding'
    },
    email: 'new@gmail.com',
    phone: '+0192831-310',
    action: ' edit, multiple',
    sino: '2'
  }
];

const BlockedCompanies = () => (
  <Page title="Blocked Companies">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Table data={data} columnHeaders={ColumnHeaders} />
      </Grid>
    </Grid>
  </Page>
);

BlockedCompanies.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default BlockedCompanies;
