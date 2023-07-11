// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Activities Project ||============================== //

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
    accessorKey: 'title',
    header: 'Title'
  },

  { accessorKey: 'activity', header: 'Activity' }
];

const data = [
  {
    title: 'USA',
    date: '2-12-2023 13:10:05',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    title: 'USA',
    date: '2-12-2023 13:10:05',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    title: 'USA',
    date: '2-12-2023 13:10:05',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    title: 'USA',
    date: '2-12-2023 13:10:05',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    title: 'USA',
    date: '2-12-2023 13:10:05',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    title: 'USA',
    date: '2-12-2023 13:10:05',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    title: 'USA',
    date: '2-12-2023 13:10:05',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    title: 'USA',
    date: '2-12-2023 13:10:05',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    title: 'USA',
    date: '2-12-2023 13:10:05',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    title: 'USA',
    date: '2-12-2023 13:10:05',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    title: 'USA',
    date: '2-12-2023 13:10:05',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    title: 'USA',
    date: '2-12-2023 13:10:05',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    title: 'USA',
    date: '2-12-2023 13:10:05',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    title: 'USA',
    date: '2-12-2023 13:10:05',
    activity: ' edit, multiple',
    slno: 4
  }
];

function ServiceActivities() {
  return (
    <Page title=" Service Activities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}
ServiceActivities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ServiceActivities;
