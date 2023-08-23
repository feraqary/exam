// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { useGetDocByProjectIdQuery, useGetPropertyByProjectIdQuery } from 'store/services/project/projectApi';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastSuccess, ToastError } from 'utils/toast';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from 'components/Elements/Container';
import PopUp from 'components/InputArea/PopUp';
import AddGallery from './add_media/add-gallery';

// ==============================|| Manage International Projects ||============================== //

const ListingProperties = () => {
  const router = useRouter();
  const { property_id } = router.query;
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const [addGalleryModel,setAddGalleryModel ] = useState(false)

  const { data: projectDocData, isError, error, isLoading, isFetching } = useGetPropertyByProjectIdQuery({ pagination, property_id });
  console.log(projectDocData);
  const ColumnHeaders = [
    {
      accessorKey: 'Gallery_type',
      header: 'Phase ID'
    },
    {
      accessorKey: 'image',
      header: 'Image',
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
              {/* <Image/> */}
            </Box>
          </>
        );
      }
    }
  ];

  if (isLoading) return;
  return (
    <Page title="Manage listing Propeties">
      <ToastContainer />
      <Container title="Manage listing Propeties" style={{ xs: 12 }}>
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
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <Button color="primary" variant="outlined" onClick={()=>setAddGalleryModel(true)}>
                        Add Gallery
                      </Button>
                  </div>
                );
              }}
            />
          </Grid>
        </Grid>
        <PopUp opened={addGalleryModel} setOpen={setAddGalleryModel} size={'lg'} title="Add Gallery">
        <AddGallery closeModal={setAddGalleryModel}/>
          </PopUp>

      </Container>
    </Page>
  );
};

ListingProperties.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ListingProperties;
