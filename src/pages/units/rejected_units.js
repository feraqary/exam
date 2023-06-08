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
    accessorKey: 'sino',
    header: 'Ref.ID'
  },
  {
    accessorKey: 'reason',
    header: 'Reason'
  },
  {
    accessorKey: 'type',
    header: 'Type'
  }
];

const data = [
  {
    sino: 'PA2831023',
    type: 'Arya Stark',
    reason: ' uploaded'
  },
  {
    sino: 'PA283102',
    type: 'Joffery',
    reason: ' uploaded'
  },
  {
    webID: 'PA2831023',
    sino: 'PA2831023',
    type: '2-12-2023',
    action: ' edit, multiple'
  },
  {
    sino: 'PA283102',
    type: 'Cercie',
    reason: ' uploaded'
  },
  {
    sino: 'PA283102',
    type: 'Arya Stark',
    reason: ' uploaded'
  },
  {
    sino: 'PA283102',
    type: 'Joffery',
    reason: ' uploaded'
  }
];

function RejectedUnits() {
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

RejectedUnits.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default RejectedUnits;
