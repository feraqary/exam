// material-ui
import { Grid, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { useGetProjectPropertyMediaByPropertyIDQuery, useGetPropertyByProjectIdQuery } from 'store/services/project/projectApi';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastSuccess, ToastError } from 'utils/toast';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Container from 'components/Elements/Container';
import PopUp from 'components/InputArea/PopUp';
import AddGallery from './add_media/add-gallery';
import Image from 'next/image';
import ViewPicture from 'components/InputArea/information/view_picture';

// ==============================|| Manage International Projects ||============================== //

const ListingProperties = () => {
  const router = useRouter();
  const { property_id } = router.query;
  console.log(property_id);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const [viewFileModal, setViewFileModal] = useState(false);
  const [viewFile, setViewFile] = useState(null);
  const [addGalleryModel, setAddGalleryModel] = useState(false);

  const { data: propertGalleryData, isError, error, isLoading, isFetching } = useGetProjectPropertyMediaByPropertyIDQuery(property_id);
  console.log(propertGalleryData);
  const ColumnHeaders = [
    {
      accessorKey: 'main_media_section',
      header: 'Gallery Type'
    },
    {
      accessorKey: 'imasdge',
      header: 'Image',
      Cell: ({ row }) => {
        let galleryFiles = [];
        if (row.original.image_url) {
          galleryFiles = galleryFiles.concat(row.original.image_url);
        }
        if (row.original.image360_url) {
          galleryFiles = galleryFiles.concat(row.original.image360_url);
        }
        if (row.original.panaroma_url) {
          galleryFiles = galleryFiles.concat(row.original.panaroma_url);
        }
        // = row.original.image_url?.concat(row.original.image360_url ? row.original.image360_url : [])
        console.log(galleryFiles);
        return (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem'
              }}
            >
              {galleryFiles.map((galleryFile) => (
                <Box position="relative">
                  <DeleteIcon
                    style={{ position: 'absolute', bottom: '10px', right: '10px', color: 'red', zIndex: 10 }}
                    onClick={() => console.log('deleting')}
                  />
                  <Button
                    sx={{ p: 0 }}
                    onClick={(e) => {
                      setViewFileModal(true);
                      setViewFile(e.target.src);
                    }}
                  >
                    <Image
                      src={`http://20.203.31.58/upload/${galleryFile}`}
                      width={100}
                      height={100}
                      unoptimized
                      style={{
                        width: '100px',
                        height: '80px',
                        objectFit: 'cover',
                        borderRadius: '5px',
                        border: '1px solid #b9afaf',
                        padding: '2px'
                      }}
                    />{' '}
                  </Button>
                </Box>
              ))}
            </Box>
          </>
        );
      }
    },
    {
      accessorKey: 'actions',
      header: 'Actions',
      Cell: ({ row }) => {
        return (
          <>
            <Button variant="contained" color="error">
              Delete All
            </Button>
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
              data={propertGalleryData?.data || []}
              loading={isLoading}
              pagination={pagination}
              setPagination={setPagination}
              isFetching={isFetching}
              // rowCount={propertGalleryData?.Total}
              renderTopToolbarCustomActions={({ table }) => {
                return (
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button color="primary" variant="outlined" onClick={() => setAddGalleryModel(true)}>
                      Add Gallery
                    </Button>
                  </div>
                );
              }}
            />
          </Grid>
        </Grid>
        <PopUp opened={addGalleryModel} setOpen={setAddGalleryModel} size={'lg'} title="Add Gallery">
          <AddGallery closeModal={setAddGalleryModel} />
        </PopUp>
        <ViewPicture viewFile={viewFileModal} setViewFile={setViewFileModal} image={viewFile} />
      </Container>
    </Page>
  );
};

ListingProperties.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ListingProperties;
