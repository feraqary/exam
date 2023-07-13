// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';

// ==============================|| Subscribers datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: 'SI.NO'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  }
];

const data = [
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 4,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 1,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  },
  {
    sino: 5,
    email: 'new@gmail.com'
  }
];

function SubsribersList() {
  return (
    <Page title="Subscribers">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

SubsribersList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SubsribersList;
