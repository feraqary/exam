// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { useGetDocByProjectPropertyIdQuery } from 'store/services/project/projectApi';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastSuccess, ToastError } from 'utils/toast';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from 'components/Elements/Container';
import ViewInformation from 'components/InputArea/information/view_information';
import ViewDocuments from './view_documents';
import PopUp from 'components/InputArea/PopUp';
import AddDocuments from '../../add_doc/AddDoc';
// ==============================|| Manage International Projects ||============================== //

const Documents = () => {
  const router = useRouter();
  const { project_id, type } = router.query;

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const { data: projectDocData, isError, error, isLoading, isFetching } = useGetDocByProjectPropertyIdQuery({ pagination, project_id });
  const [addDocOpen, setAddDocOpen] = useState(false);

  const ColumnHeaders = [
    {
      accessorKey: 'id',
      header: 'Document ID ',
      title: (
        <Tooltip title={'Project ID'}>
          <span>{type == 'project ' ? 'Project ID' : 'Property ID'}</span>
        </Tooltip>
      )
    },
    {
      accessorKey: 'document_category',
      header: 'Category',
      Cell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>{row.original.document_category.label}</span>
          </Box>
        );
      }
    },
    {
      accessorKey: 'document_subcategory',
      header: 'Sub Category',
      Cell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>{row.original.document_subcategory.label}</span>
          </Box>
        );
      }
    },
    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ row }) => {
        const [viewOpen, setViewOpen] = useState(false);
        return (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <Button variant="contained" color="primary" onClick={() => setViewOpen(true)}>
                View
              </Button>
              <ViewInformation opened={viewOpen} setOpen={setViewOpen} pageTitle="Documents" size={'lg'} title="Project Documents">
                <ViewDocuments document={row.original} type="property" />
              </ViewInformation>
            </Box>
          </>
        );
      }
    }
  ];

  if (isLoading) return;

  return (
    <Page title="Manage Documents">
      <ToastContainer />
      <Container title="Manage Documents" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table
              columnHeaders={ColumnHeaders}
              data={projectDocData?.data || []}
              loading={isLoading}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={isFetching}
              rowCount={projectDocData?.Total}
              renderTopToolbarCustomActions={({ table }) => {
                return (
                  <>
                    <PopUp setOpen={setAddDocOpen} opened={addDocOpen} size={'lg'}>
                      <AddDocuments project_id={project_id} close={setAddDocOpen} type={type} />
                    </PopUp>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setAddDocOpen(true);
                      }}
                    >
                      Add Document
                    </Button>
                  </>
                );
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

Documents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Documents;
