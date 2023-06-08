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
    accessorKey: 'proId',
    header: 'Project ID '
  },
  {
    accessorKey: 'date',
    header: 'Date '
  },
  {
    accessorKey: 'developerCompany',
    header: 'Company Name'
  },
  {
    accessorKey: 'activities',
    header: 'Activities'
  }
];

const data = [
  {
    developerCompany: 'Marketing Company',
    proId: 'PA283102',
    activities: 'new@gmail.com',
    date: '2-12-2023'
  },
  {
    developerCompany: 'Developer Company',
    proId: 'PA283102',
    activities: 'new@gmail.com',
    date: '2-12-2023'
  }
];

function Activities() {
  return (
    <Page title=" Company Section Activities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

Activities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Activities;
