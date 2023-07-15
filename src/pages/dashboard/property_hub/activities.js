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
    accessorKey: 'slno',
    header: 'SL.NO'
  },
  {
    accessorKey: 'date',
    header: 'Date'
  },
  {
    accessorKey: 'propertytitle',
    header: 'Property Title'
  },
  {
    accessorKey: 'companyname',
    header: 'Company Name'
  },
  {
    accessorKey: 'activity',
    header: 'Activity'
  }
];
const data = [
  {
    companyname: 'Developer Company',
    propertytitle: 'Lannisters',
    date: '2-12-2023',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    companyname: 'Broker Company',
    propertytitle: 'Lannisters',
    date: '2-12-2023',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    companyname: 'Marketing Company',
    propertytitle: 'Winterfell',
    date: '2-12-2023',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    companyname: 'Developer Company',
    propertytitle: 'Lannisters',
    date: '2-12-2023',
    activity: ' edit, multiple',
    slno: 4
  }
];

function ActivitiesPropertiesHub() {
  return (
    <Page title="Activities Property Hub">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

ActivitiesPropertiesHub.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ActivitiesPropertiesHub;
