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
    accessorKey: 'slno',
    header: 'SL.No'
  },
  {
    accessorKey: 'article',
    header: 'Article Title'
  },
  {
    accessorKey: 'description',
    header: 'Description'
  },
  {
    accessorKey: 'image',
    header: 'Image',
    Cell: ({ cell }) => <img src={cell.getValue()} alt="logo" width={50} height={50} style={{ objectFit: 'contain' }} />
  },

  { accessorKey: 'date', header: 'Date' },
  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ cell }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Button variant="contained" color="primary">
          Edit
        </Button>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    slno: 4
  },
  {
    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    slno: 4
  },
  {
    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    slno: 4
  },
  {
    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    slno: 4
  },
  {
    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    slno: 4
  },
  {
    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    slno: 4
  },
  {
    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    slno: 4
  },
  {
    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    slno: 4
  },
  {
    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    slno: 4
  },
  {
    date: '2-12-2023',
    article: ' uploaded',
    description: ' edit, multiple',
    image: '/assets/images/company_logo/logo1.png',
    slno: 4
  }
];

function CareerArticles() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  return (
    <Page title="Career Articles">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table pagination={pagination} setPagination={setPagination} columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

CareerArticles.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CareerArticles;
