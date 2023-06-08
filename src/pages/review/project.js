// material-ui
import { Grid, Checkbox } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Rating from '@mui/material/Rating';

import Table from 'components/Table/Table';

// ==============================|| Reviews datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'projectname',
    header: 'Ref No. '
  },
  {
    accessorKey: 'projectname',
    header: 'Project Name '
  },
  {
    accessorKey: 'rating',
    header: 'Rating',
    Cell: ({ cell }) => <Rating value={cell.getValue()} readOnly />
  },
  {
    accessorKey: 'comments',
    header: 'Comments'
  },
  {
    accessorKey: 'username',
    header: 'User Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'mobile',
    header: 'Mobile'
  },
  {
    accessorKey: 'date',
    header: 'Date'
  },
  {
    accessorKey: 'action',
    header: 'Verify',
    Cell: ({ cell }) => <Checkbox defaultChecked={cell.getValue()} />
  }
];

const data = [
  {
    projectname: 'Broker Company',
    username: 'standard',
    comments: 'UAE',
    rating: 3,
    email: 'new@gmail.com',
    date: '2-12-2023',
    mobile: ' uploaded'
  },
  {
    projectname: 'Marketing Company',
    username: 'standard',
    comments: 'UAE',
    rating: 2,
    email: 'new@gmail.com',
    date: '2-12-2023',
    mobile: ' uploaded'
  },
  {
    projectname: 'Developer Company',
    username: 'standard',
    comments: 'USA',
    rating: 5,
    email: 'new@gmail.com',
    date: '2-12-2023',
    mobile: ' uploaded'
  }
];

function ProjectReviews() {
  return (
    <Page title="Reviews">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

ProjectReviews.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ProjectReviews;
