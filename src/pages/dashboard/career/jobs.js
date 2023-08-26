// material-ui
import { Grid, Button, Box } from '@mui/material';

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
    header: '   SI NO'
  },
  {
    accessorKey: 'state',
    header: 'State'
  },
  {
    accessorKey: 'company',
    header: 'Company'
  },
  {
    accessorKey: 'minsal',
    header: 'Minimum Salary'
  },
  {
    accessorKey: 'maxsal',
    header: 'Maximum Salary'
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
    header: 'Year Of Experience'
  },
  {
    accessorKey: 'date',
    header: 'Date'
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
        <Button variant="contained" color="primary">
          View
        </Button>
        <Button variant="contained" color="primary">
          Edit
        </Button>
        <Button variant="contained" color="primary">
          Delete
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    company: 'Broker Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple'
  },
  {
    company: 'Broker Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple'
  },
  {
    company: 'Broker Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple'
  },
  {
    company: 'Broker Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple'
  },
  {
    company: 'Broker Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple'
  },
  {
    company: 'Marketing Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    state: 'Winterfell',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple'
  },
  {
    company: 'Developer Company',
    vacancy: 3,
    yearOfExperience: 4,
    sino: 'PA283102',
    state: 'Lannisters',
    minsal: '2-12-2023',
    date: '2-12-2023',
    maxsal: ' uploaded',
    jobtitle: ' edit, multiple'
  }
];

function CareerList() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  return (
    <Page title="Careers">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table pagination={pagination} setPagination={setPagination} columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

CareerList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CareerList;
