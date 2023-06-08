// material-ui
import { Grid } from '@mui/material';

//project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| EXHIBITION ACTIVITIES ||==============================//

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

const data = [
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  },
  {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: 4
  }
];

function ExhibitionActivities() {
  return (
    <Page title="Exhibition Activities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

ExhibitionActivities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ExhibitionActivities;
