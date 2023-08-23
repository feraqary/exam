// material-ui
import { Grid, Box, Button, DialogActions, IconButton, Dialog, DialogContent, CircularProgress, Typography } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import Rating from '@mui/material/Rating';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import {
  useGetLocalProjectsQuery,
  useUpdateProjectStatusMutation,
  useUpdateProjectsVerifyStatusMutation,
  useUpdateProjectsIsEnabledMutation,
  useUpdateProjectRankMutation
} from 'store/services/project/projectApi';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastSuccess, ToastError } from 'utils/toast';
import TableSelectorOption from 'components/InputArea/TableSelectorOption';
import Link from 'next/link';
import Container from 'components/Elements/Container';
import { useRouter } from 'next/router';

// ==============================|| Manage International Projects ||============================== //

const localProjects = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const { project_id } = useRouter().query;

  const { data: localProjectsData, isError, error, isLoading, isFetching } = useGetLocalProjectsQuery(pagination);
  const [updateStatus, result] = useUpdateProjectStatusMutation();

  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Project status successfully updated');
    }
  }, [result.isSuccess]);

  useEffect(() => {
    if (result.isError) {
      const { data } = result.error;
      console.log(data);
      ToastError('Error');
    }
  }, [result.isError]);

  const ColumnHeaders = [
    { accessoryKey: 'verify', header: 'Verify' },
    { accessoryKey: 'book_now', header: 'Book now' },
    { accessoryKey: 'open_house', header: 'Open house' },
    { accessoryKey: 'web_id', header: 'Web id' },
    { accessoryKey: 'ref_no', header: 'Ref.No' },
    { accessoryKey: 'unit_title', header: 'Unit Title' },
    { accessoryKey: 'company_agent', header: 'Company/Agent' },
    { accessoryKey: 'category', header: 'Category' },
    { accessoryKey: 'type', header: 'Type' },
    { accessoryKey: 'location', header: 'Location' },
    { accessoryKey: 'price', header: 'Price' },
    { accessoryKey: 'plot_area', header: 'Plot Area' },
    { accessoryKey: 'bedroom', header: 'Bedroom' },
    { accessoryKey: 'insert', header: 'Insert' },
    { accessoryKey: 'action', header: 'Action' }
  ];

  if (isLoading) return;
  return (
    <Page title="Manage Project">
      <ToastContainer />
      <Container title="Manage Local Projects" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table
              columnHeaders={ColumnHeaders}
              data={[]}
              loading={false}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={false}
              rowCount={0}
              renderTopToolbarCustomActions={({ table }) => {
                return (
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Link href={{ pathname: `/dashboard/project/project_management/add_unit/${project_id}` }}>
                      <Button variant="outlined">Add Unit</Button>
                    </Link>
                  </div>
                );
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

localProjects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default localProjects;
