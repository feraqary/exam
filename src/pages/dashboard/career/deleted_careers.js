// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';
import { useState } from 'react';

// ==============================|| Careers datatable ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: 'SI.NO'
  },
  {
    accessorKey: 'company',
    header: 'Company Name'
  },
  {
    accessorKey: 'jobtitle',
    header: 'Job Title'
  },
  {
    accessorKey: 'vacancy',
    header: 'Vacancy'
  },
  {
    accessorKey: 'yearOfExperience',
    header: 'Experience'
  },
  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Button variant="contained" color="warning">
          Restore
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    company: 'Management Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    jobtitle: ' edit, multiple'
  },
  {
    company: 'Developer Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    jobtitle: ' edit, multiple'
  },
  {
    company: 'Broker Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PB192323',
    jobtitle: ' edit, multiple'
  },
  {
    company: 'Marketing Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA2831023',
    jobtitle: ' edit, multiple'
  },
  {
    company: 'Developer Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    jobtitle: ' edit, multiple'
  },
  {
    company: 'Developer Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    jobtitle: ' edit, multiple'
  },
  {
    company: 'Broker Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    jobtitle: ' edit, multiple'
  },
  {
    company: 'Marketing Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    jobtitle: ' edit, multiple'
  },
  {
    company: 'Developer Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    jobtitle: ' edit, multiple'
  }
];

function DeletedJobs() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  return (
    <Page title="Deleted Careers">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table pagination={pagination} setPagination={setPagination} columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

DeletedJobs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DeletedJobs;
