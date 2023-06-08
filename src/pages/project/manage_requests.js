// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';

// ==============================|| Manage International Project ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'proId',
    header: 'Project ID '
  },
  {
    accessorKey: 'projectName',
    header: 'Project Name'
  },
  {
    accessorKey: 'reqType',
    header: 'Request type'
  },
  {
    accessorKey: 'reqName',
    header: 'name'
  },
  {
    accessorKey: 'endis',
    header: 'Email'
  },
  { accessorKey: 'mobile', header: 'Mobile' },
  {
    accessorKey: 'date',
    header: 'Date'
  }
];

const data = [
  {
    projectName: 'Forum',
    reqName: 'Broker Company',
    reqType: 'UAE',
    proId: 'PA283102',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    date: '2-12-2023'
  },
  {
    projectName: 'Dubai Holding',
    reqName: 'Marketing Company',
    reqType: 'UAE',
    proId: 'PA283102',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    date: '2-12-2023'
  },
  {
    projectName: 'BlueStone',
    reqName: 'Developer Company',
    reqType: 'USA',
    proId: 'PA283102',
    endis: 'new@gmail.com',
    mobile: '+0192831-310',
    date: '2-12-2023'
  }
];
function ManageProject() {
  return (
    <Page title="Manage Project">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageProject;
