// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';
import { useState } from 'react';

// ==============================|| Reviews datatable ||============================== //

const data = [
  {
    refID: 'PA2831023',
    title: 25
  },
  {
    refID: 'PA2831023',
    title: 25
  },
  {
    refID: 'PA2831023',
    title: 25
  },
  {
    refID: 'PA2831023',
    title: 25
  },
  {
    refID: 'PB192323',
    title: 25
  },
  {
    refID: 'PA2831023',
    title: 25
  },
  {
    refID: 'PA283102',
    title: 25
  },
  {
    refID: 'PA2831023',
    title: 25
  },
  {
    refID: 'PA283102',
    title: 25
  },
  {
    refID: 'PA283102',
    title: 25
  },
  {
    refID: 'PA283102',
    title: 25
  }
];
const ColumnHeaders = [
  {
    accessorKey: 'refID',
    header: 'RefId'
  },
  {
    accessorKey: 'title',
    header: 'Title',
    Cell: ({ cell }) => {
      return <div>{cell.getValue()}% offer</div>;
    }
  }
];

function ManageOfferCategories() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  return (
    <Page title="Manage Offers Categories">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table pagination={pagination} setPagination={setPagination} columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageOfferCategories.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageOfferCategories;
