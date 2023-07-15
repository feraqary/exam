// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Reviews datatable ||============================== //
const data = [
  {
    unittitle: 'UAE',
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'UAE',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4,
    date: '2-12-2023'
  },
  {
    unittitle: 'US',
    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'UAE',
    companyname: ' uploaded',
    activity: ' edit, multiple',

    date: '2-12-2023',
    slno: 4
  },
  {
    unittitle: 'UAE',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    date: '2-12-2023',
    slno: 4
  },
  {
    unittitle: 'USA',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    date: '2-12-2023',
    slno: 4
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'slno',
    header: 'SL.No'
  },
  {
    accessorKey: 'date',
    header: 'Date'
  },
  {
    accessorKey: 'unittitle',
    header: 'Unit Title'
  },
  {
    accessorKey: 'companyname',
    header: 'Company Name'
  },

  { accessorKey: 'activity', header: 'Activity' }
];
function ActitiesExchange() {
  return (
    <Page title="Exchange Activities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

ActitiesExchange.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ActitiesExchange;
