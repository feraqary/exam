// material-ui
import { Grid } from '@mui/material';

//project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';
import { useState } from 'react';
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

const data = Array.from({ length: 12 }, (_, index) => {
  return {
    unittitle: 'USA',

    date: '2-12-2023',
    companyname: ' uploaded',
    activity: ' edit, multiple',
    slno: (++index)
  };
}); 
 
function ExhibitionActivities() {

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  return (
    <Page title="Exhibition Activities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table 
            data={data}
            columnHeaders={ColumnHeaders}
            loading={false}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={false}
            rowCount={data.length} />
        </Grid>
      </Grid>
    </Page>
  );
}

ExhibitionActivities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ExhibitionActivities;
