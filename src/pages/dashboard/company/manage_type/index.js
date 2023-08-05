// material-ui
import { Grid } from '@mui/material';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useGetAllSubCompanyTypesQuery } from 'store/services/company/companyApi';
import { ToastContainer } from 'react-toastify';
// ===========================|| International Company Managment list||=========================== //

const ColumnHeaders = [
  {
    accessorKey: 'image_url',
    header: 'Company Logo',
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Image src={`http://20.203.31.58/upload/${row.original.image_url}`} width={60} height={30} style={{ objectFit: 'contain' }} />
      </Box>
    )
  },
  {
    accessorKey: 'title',
    header: 'Company Type'
  },

  {
    accessorKey: 'description',
    header: 'Description'
  },

  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ renderedCellValue, row }) => {
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <Link href={`/dashboard/company/manage_type/${row.original.id}`}>
            <Button variant="contained" color="primary">
              Edit
            </Button>
          </Link>
        </Box>
      );
    }
  }
];

const companyType = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const { data, isError, error, isLoading, isFetching } = useGetAllSubCompanyTypesQuery(pagination);

  useEffect(() => {}, [pagination.pageIndex, pagination.pageSize]);

  return (
    <Page title="Company Type List">
      <ToastContainer />
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table
            columnHeaders={ColumnHeaders}
            data={error ? [] : data?.data || []}
            loading={isLoading}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={isFetching}
            rowCount={data?.Total}
          />
        </Grid>
      </Grid>
    </Page>
  );
};

companyType.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default companyType;
