// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useState } from 'react';
import Container from 'components/Elements/Container';

// ==============================|| Activities Project ||============================== //

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
    accessorKey: 'projectName',
    header: 'Project Name'
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
    projectName: 'Khidmah',
    developerCompany: 'Developer Company',
    proId: 'PA2831023',
    activities: 'new@gmail.com',
    date: '2-12-2023'
  },
  {
    projectName: 'Forum',
    developerCompany: 'Broker Company',
    proId: 'PA283102',
    activities: 'new@gmail.com',
    date: '2-12-2023'
  },
  {
    projectName: 'Dubai Holding',
    developerCompany: 'Marketing Company',
    proId: 'PA283102',
    activities: 'new@gmail.com',
    date: '2-12-2023'
  },
  {
    projectName: 'BlueStone',
    developerCompany: 'Developer Company',
    proId: 'PA283102',
    activities: 'new@gmail.com',
    date: '2-12-2023'
  }
];

function Activities() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  return (
    <Page title="Activities">
      <Container title="Manage Activities" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table
              columnHeaders={ColumnHeaders}
              data={data}
              pagination={pagination}
              setPagination={setPagination}
              rowCount={data.length}
              isFetching={false}
              loading={false}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

Activities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Activities;
