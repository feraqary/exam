// material-ui
import { Grid, Box, Button, DialogActions, IconButton, Dialog, DialogContent } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { useGetInternationalProjectsQuery, useUpdateProjectStatusMutation } from 'store/services/project/projectApi';
import React, { useState } from 'react';
import { ToastSuccess, ToastError } from 'utils/toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slide from '@mui/material/Slide';


// ==============================|| Manage Rent Unit ||============================== //

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '10px solid #000',
  boxShadow: 24,
  p: 4,
};
const saleUnits = () => {
  const [docsOpen, setDocsOpen] = useState(false);
  const [updateDocs, setUpdateDocs] = useState({ project: null, id: null });
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });
  const { data: localProjectsData, isError, error, isLoading, isFetching } = useGetInternationalProjectsQuery(pagination);
  const [deleteProject, result] = useUpdateProjectStatusMutation();
  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Project has been Successfully Deleted!');
    }
  }, [result.isSuccess]);
  useEffect(() => {
    if (result.isError) {
      const { data } = result.error;
      console.log(data);
      ToastError('Error');
    }
  }, [result.isError]);

  const handleDocsOpen = () => {
    setDocsOpen(true);
  };
  const handleDocsClose = () => {
    setDocsOpen(false);
  };


  const data = [
    {
      web_id: '1234556',
      ref_no: '1234567',
      unit_title: 'some title',
      company_agent: 'New company agent',
      category: 'Standard',
      type: 'some type',
      country: 'UAE',
      location: 'Abu Dhabi',
      price: '100',
      quality_score: '100%',
      listing_type: 'some type',
      bedroom: '2',
      plot_area: '130,000',
      build_area: '130,000',
      created_date: '2020-01-01',
      updated_date: '2020-01-01',
      status: 'Active',
      verify: 'Verified',
      book_now: 'Book Now Button',
      request_video: 'Request Video Button',
      open_house: 'Open House Button'
    },
    {
      web_id: '1234556',
      ref_no: '1234567',
      unit_title: 'some title',
      company_agent: 'New company agent',
      category: 'Standard',
      type: 'some type',
      country: 'UAE',
      location: 'Abu Dhabi',
      price: '100',
      quality_score: '100%',
      listing_type: 'some type',
      bedroom: '2',
      plot_area: '130,000',
      build_area: '130,000',
      created_date: '2020-01-01',
      updated_date: '2020-01-01',
      status: 'Active',
      verify: 'Verified',
      book_now: 'Book Now Button',
      request_video: 'Request Video Button',
      open_house: 'Open House Button'
    },
    {
      web_id: '1234556',
      ref_no: '1234567',
      unit_title: 'some title',
      company_agent: 'New company agent',
      category: 'Standard',
      type: 'some type',
      country: 'UAE',
      location: 'Abu Dhabi',
      price: '100',
      quality_score: '100%',
      listing_type: 'some type',
      bedroom: '2',
      plot_area: '130,000',
      build_area: '130,000',
      created_date: '2020-01-01',
      updated_date: '2020-01-01',
      status: 'Active',
      verify: 'Verified',
      book_now: 'Book Now Button',
      request_video: 'Request Video Button',
      open_house: 'Open House Button'
    },
    {
      web_id: '1234556',
      ref_no: '1234567',
      unit_title: 'some title',
      company_agent: 'New company agent',
      category: 'Standard',
      type: 'some type',
      country: 'UAE',
      location: 'Abu Dhabi',
      price: '100',
      quality_score: '100%',
      listing_type: 'some type',
      bedroom: '2',
      plot_area: '130,000',
      build_area: '130,000',
      created_date: '2020-01-01',
      updated_date: '2020-01-01',
      status: 'Active',
      verify: 'Verified',
      book_now: 'Book Now Button',
      request_video: 'Request Video Button',
      open_house: 'Open House Button'
    },
    {
      web_id: '1234556',
      ref_no: '1234567',
      unit_title: 'some title',
      company_agent: 'New company agent',
      category: 'Standard',
      type: 'some type',
      country: 'UAE',
      location: 'Abu Dhabi',
      price: '100',
      quality_score: '100%',
      listing_type: 'some type',
      bedroom: '2',
      plot_area: '130,000',
      build_area: '130,000',
      created_date: '2020-01-01',
      updated_date: '2020-01-01',
      status: 'Active',
      verify: 'Verified',
      book_now: 'Book Now Button',
      request_video: 'Request Video Button',
      open_house: 'Open House Button'
    },
    {
      web_id: '1234556',
      ref_no: '1234567',
      unit_title: 'some title',
      company_agent: 'New company agent',
      category: 'Standard',
      type: 'some type',
      country: 'UAE',
      location: 'Abu Dhabi',
      price: '100',
      quality_score: '100%',
      listing_type: 'some type',
      bedroom: '2',
      plot_area: '130,000',
      build_area: '130,000',
      created_date: '2020-01-01',
      updated_date: '2020-01-01',
      status: 'Active',
      verify: 'Verified',
      book_now: 'Book Now Button',
      request_video: 'Request Video Button',
      open_house: 'Open House Button'
    },
    {
      web_id: '1234556',
      ref_no: '1234567',
      unit_title: 'some title',
      company_agent: 'New company agent',
      category: 'Standard',
      type: 'some type',
      country: 'UAE',
      location: 'Abu Dhabi',
      price: '100',
      quality_score: '100%',
      listing_type: 'some type',
      bedroom: '2',
      plot_area: '130,000',
      build_area: '130,000',
      created_date: '2020-01-01',
      updated_date: '2020-01-01',
      status: 'Active',
      verify: 'Verified',
      book_now: 'Book Now Button',
      request_video: 'Request Video Button',
      open_house: 'Open House Button'
    },
    {
      web_id: '1234556',
      ref_no: '1234567',
      unit_title: 'some title',
      company_agent: 'New company agent',
      category: 'Standard',
      type: 'some type',
      country: 'UAE',
      location: 'Abu Dhabi',
      price: '100',
      quality_score: '100%',
      listing_type: 'some type',
      bedroom: '2',
      plot_area: '130,000',
      build_area: '130,000',
      created_date: '2020-01-01',
      updated_date: '2020-01-01',
      status: 'Active',
      verify: 'Verified',
      book_now: 'Book Now Button',
      request_video: 'Request Video Button',
      open_house: 'Open House Button'
    },

    {
      web_id: '1234556',
      ref_no: '1234567',
      unit_title: 'some title',
      company_agent: 'New company agent',
      category: 'Standard',
      type: 'some type',
      country: 'UAE',
      location: 'Abu Dhabi',
      price: '100',
      quality_score: '100%',
      listing_type: 'some type',
      bedroom: '2',
      plot_area: '130,000',
      build_area: '130,000',
      created_date: '2020-01-01',
      updated_date: '2020-01-01',
      status: 'Active',
      verify: 'Verified',
      book_now: 'Book Now Button',
      request_video: 'Request Video Button',
      open_house: 'Open House Button'
    },
    {
      web_id: '1234556',
      ref_no: '1234567',
      unit_title: 'some title',
      company_agent: 'New company agent',
      category: 'Standard',
      type: 'some type',
      country: 'UAE',
      location: 'Abu Dhabi',
      price: '100',
      quality_score: '100%',
      listing_type: 'some type',
      bedroom: '2',
      plot_area: '130,000',
      build_area: '130,000',
      created_date: '2020-01-01',
      updated_date: '2020-01-01',
      status: 'Active',
      verify: 'Verified',
      book_now: 'Book Now Button',
      request_video: 'Request Video Button',
      open_house: 'Open House Button'
    },
    {
      web_id: '1234556',
      ref_no: '1234567',
      unit_title: 'some title',
      company_agent: 'New company agent',
      category: 'Standard',
      type: 'some type',
      country: 'UAE',
      location: 'Abu Dhabi',
      price: '100',
      quality_score: '100%',
      listing_type: 'some type',
      bedroom: '2',
      plot_area: '130,000',
      build_area: '130,000',
      created_date: '2020-01-01',
      updated_date: '2020-01-01',
      status: 'Active',
      verify: 'Verified',
      book_now: 'Book Now Button',
      request_video: 'Request Video Button',
      open_house: 'Open House Button'
    },
    
    {
      web_id: '1234556',
      ref_no: '1234567',
      unit_title: 'some title',
      company_agent: 'New company agent',
      category: 'Standard',
      type: 'some type',
      country: 'UAE',
      location: 'Abu Dhabi',
      price: '100',
      quality_score: '100%',
      listing_type: 'some type',
      bedroom: '2',
      plot_area: '130,000',
      build_area: '130,000',
      created_date: '2020-01-01',
      updated_date: '2020-01-01',
      status: 'Active',
      verify: 'Verified',
      book_now: 'Book Now Button',
      request_video: 'Request Video Button',
      open_house: 'Open House Button'
    },
    
    {
      web_id: '1234556',
      ref_no: '1234567',
      unit_title: 'some title',
      company_agent: 'New company agent',
      category: 'Standard',
      type: 'some type',
      country: 'UAE',
      location: 'Abu Dhabi',
      price: '100',
      quality_score: '100%',
      listing_type: 'some type',
      bedroom: '2',
      plot_area: '130,000',
      build_area: '130,000',
      created_date: '2020-01-01',
      updated_date: '2020-01-01',
      status: 'Active',
      verify: 'Verified',
      book_now: 'Book Now Button',
      request_video: 'Request Video Button',
      open_house: 'Open House Button'
    },
    

  ];
  const ColumnHeaders = [

    {
      accessorKey: 'web_id',
      header: 'Web ID'
    },
    {
      accessorKey: 'ref_no',
      header: 'Reference Number ',
      title: (
        <Tooltip title={'Ref.No'}>
          <span>Reference Number</span>
        </Tooltip>
      )
    },

    {
      accessorKey: 'unit_title',
      header: 'Unit Title '
    },
    {
      accessorKey: 'company_agent',
      header: 'Company/Agent'
    },
    {
      accessorKey: 'category',
      header: 'Category',
     
    },
    { accessorKey: 'type',
     header: 'Type' },

    {
      accessorKey: 'country',
      header: 'Country'
    },
    {
      accessorKey: 'location',
      header: 'Location'
    },
    {
      accessorKey: 'price',
      header: 'Price'
    },
    {
      accessorKey: 'quality_score',
      header: 'Quality Score'
    },
    {
      accessorKey: 'listing_type',
      header: 'Listing Type'
    },
    {
      accessorKey: 'bedroom',
      header: 'Bedroom'
    },
    {
      accessorKey: 'plot_area',
      header: 'Plot Area'
    },
    {
      accessorKey: 'created_date',
      header: 'Created Date'
    },
    {
      accessorKey:"updated_date",
      header: 'Updated Date'
    },
    {
      accessorKey: 'book_now',
      header: 'Book Now'
    },
    {
      accessorKey:  'request_video',
      header: 'Request Video'
    },
    {
      accessorKey: 'open_house',
      header: 'Open House'
    },
 
    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ renderedCellValue, row }) => {
        const [open, setOpen] = useState(false);
        const handleClickOpen = () => {
          setOpen(true);
        };
        const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
        const [deleteProject, result] = useUpdateProjectStatusMutation();
        useEffect(() => {
          if (result.isSuccess) {
            ToastSuccess('Project has been Deleted Successfully');
          }
        }, [result.isSuccess]);

        return (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <Button variant="contained" color="primary">
                Verify
              </Button>
              <Button variant="contained" color="primary">
                Edit
              </Button>
              <Button color="primary" variant="contained">
                Manage Documents
              </Button>
              <Button variant="contained" color="primary">
                View
              </Button>
              <Button variant="contained" color="primary">
                View Live
              </Button>
              <Button variant="contained" color="primary">
              Add to Draft
              </Button>
              <Button variant="contained" color="primary">
              Add to Exchange
              </Button>
              <Button variant="contained" color="primary">
              Add to Auction
              </Button>
              <Button variant="contained" color="primary">
              Add to Rent
              </Button>
            
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  const formData = new FormData();
                  formData.append('status_id', 6);
                  formData.append('id', row.original.id);
                  deleteProject(formData);
                }}
              >
                Delete
              </Button>
            </Box>
          </>
        );
      }
    }
  ];

  if (isLoading) return;
  return (
    <Page title="Manage Project">
      <ToastContainer />
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table
            columnHeaders={ColumnHeaders}
            data={data || []}
            loading={isLoading}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={isFetching}
            rowCount={localProjectsData?.Total}
          />
        </Grid>
      </Grid>
      <Dialog maxWidth={'xl'} open={docsOpen} onClose={handleDocsClose} TransitionComponent={Transition}>
        <DialogActions sx={{ justifyContent: 'flex-start' }} onClick={handleDocsClose}>
          <IconButton></IconButton>
        </DialogActions>
        <DialogContent>{/* <Documents comp={docs} /> */}</DialogContent>
      </Dialog>
    </Page>
  );
};

saleUnits.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default saleUnits;
