// material-ui
import { Grid, Box, Button, Rating } from '@mui/material';

// react imports
import { useState } from 'react';
import { useRouter } from 'next/router';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useGetRatingsQuery } from 'store/services/project/projectApi';
import Container from 'components/Elements/Container';

// ===========================|| International Company Managment list||=========================== //

const Ratings = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
    id: id
  });

  const { data: RatingsData, isLoading, isError, isFetching } = useGetRatingsQuery(pagination);
  if (isLoading) {
    return;
  }
  const ColumnHeaders = [
    {
      accessorKey: 'reference_number',
      header: 'Reference Number'
    },
    {
      accessorKey: 'label',
      header: 'Project Name'
    },
    {
      accessorKey: 'rating',
      header: 'Rating',
      Cell: ({ renderedCellValue, row }) => {
        return (
          <>
            <Rating name="read-only" value={RatingsData?.data[row.index]?.rating + 1} readOnly />
          </>
        );
      }
    },
    {
      accessorKey: 'comments',
      header: 'Comments'
    },
    {
      accessorKey: 'user_name',
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
      accessorKey: '-',
      header: 'Verify'
    }
  ];

  return (
    <Page title="Project Rating">
      <Container title="Project Ratings" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table
              columnHeaders={ColumnHeaders}
              data={[]}
              loading={isLoading}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={isFetching}
              rowCount={RatingsData?.data?.length}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

Ratings.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Ratings;
