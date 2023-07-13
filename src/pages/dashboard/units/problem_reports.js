// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Add Services ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'slno',
    header: 'Ref.ID'
  },
  {
    accessorKey: 'property',
    header: 'Property Name'
  },
  {
    accessorKey: 'reason',
    header: 'Reason'
  },
  {
    accessorKey: 'company',
    header: 'Company'
  },
  {
    accessorKey: 'usertype',
    header: 'User Type'
  },
  {
    accessorKey: 'message',
    header: 'Message'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  }
];

const data = [
  {
    company: 'Developer Company',
    property: 'Jamie',
    email: 'new@gmail.com',
    usertype: 'Lannisters',
    message: ' uploaded',
    reason: ' edit, multiple',
    slno: 4
  },
  {
    company: 'Broker Company',
    property: 'Cercie',
    email: 'new@gmail.com',
    usertype: 'Lannisters',
    message: ' uploaded',
    reason: ' edit, multiple',
    slno: 4
  },
  {
    company: 'Marketing Company',
    property: 'Arya Stark',
    email: 'new@gmail.com',
    usertype: 'Winterfell',
    message: ' uploaded',
    reason: ' edit, multiple',
    slno: 4
  },
  {
    company: 'Developer Company',
    property: 'Joffery',
    email: 'new@gmail.com',
    usertype: 'Lannisters',
    message: ' uploaded',
    reason: ' edit, multiple',
    slno: 4
  }
];

function ReportProblemListing() {
  return (
    <Page title="Units">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

ReportProblemListing.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ReportProblemListing;
