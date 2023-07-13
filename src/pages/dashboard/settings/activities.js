// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';

// ==============================|| Activity datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'slno',
    header: 'SL.NO'
  },
  {
    accessorKey: 'date',
    header: 'Date'
  },
  {
    accessorKey: 'section',
    header: 'Section'
  },
  {
    accessorKey: 'title',
    header: 'Title'
  },
  {
    accessorKey: 'companyname',
    header: 'Company Name'
  },
  {
    accessorKey: 'agentName',
    header: 'Agent Name'
  },
  {
    accessorKey: 'activity',
    header: 'Activity'
  }
];

const data = [
  {
    agentName: 'Agent Name',
    companyname: 'Broker Company',
    title: 'Lannisters',
    date: '2-12-2023',
    section: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    agentName: 'Agent Name',
    companyname: 'Marketing Company',
    title: 'Winterfell',
    date: '2-12-2023',
    section: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    agentName: 'Agent Name',
    companyname: 'Developer Company',
    title: 'Lannisters',
    date: '2-12-2023',
    section: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  }
];

function Activities() {
  return (
    <Page title=" Company Section Activities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

Activities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Activities;
