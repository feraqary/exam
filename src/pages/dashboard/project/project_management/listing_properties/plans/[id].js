// // material-ui
import { Grid, Box, Button, DialogActions, IconButton, Dialog, DialogContent } from '@mui/material';
import MainCard from 'components/ui-component/cards/MainCard';
import AutoCompleteSelector, {
  MultipleAutoCompleteSelector,
  AutoCompleteSelectorAPI,
  NormalAutoCompleteSelector
} from 'components/InputArea/AutoCompleteSelector';
import Page from 'components/ui-component/Page';
import Layout from 'layout';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import FileUpload from 'components/InputArea/FileUpload';
import React, { useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastSuccess, ToastError } from 'utils/toast';
import Container from 'components/Elements/Container';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import { useGetPlansByPropertyIdQuery } from 'store/services/project/projectApi';
import Image from 'next/image';

export default function Plans() {
  const router = useRouter();
  const { id } = router.query;
  const documents = useRef(null);
  const { data: PlansData, isError, isLoading, isSuccess, isFetching } = useGetPlansByPropertyIdQuery(id);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const ColumnHeaders = [
    {
      accessorKey: 'title',
      header: 'Title'
    },
    {
      accessorKey: 'ref_no',
      header: 'Plan',
      Cell: ({ row }) => {
        console.log(row.original.image_urls);
        {
          return (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              {row.original.image_urls.map((url, i) => {
                return <Image src={`http://20.203.31.58/upload/${url}`} key={i} alt="plan" width={60} height={30} />;
              })}
            </Box>
          );
        }
      }
    },
    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ row }) => {
        return (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <Link
                href={{
                  pathname: `/dashboard/project/project_management/listing_properties/plans/edit/${id}`
                }}
              >
                <Button variant="contained" color="primary">
                  Edit
                </Button>
              </Link>
              <Button variant="contained" color="error">
                Delete
              </Button>
            </Box>
          </>
        );
      }
    }
  ];
  return (
    <Container title="Manage listing Propeties" style={{ xs: 12 }}>
      <ToastContainer />
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table
            columnHeaders={ColumnHeaders}
            data={PlansData?.data || []}
            loading={isLoading}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={isFetching}
            rowCount={1}
            renderTopToolbarCustomActions={({ table }) => {
              return (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Link
                    href={{
                      pathname: `/dashboard/project/project_management/listing_properties/plans/add/${id}`
                    }}
                  >
                    <Button variant="outlined" color="primary">
                      Add Plan
                    </Button>
                  </Link>
                </div>
              );
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

Plans.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
