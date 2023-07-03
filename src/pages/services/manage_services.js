// material-ui
import { Grid, Box, Button } from '@mui/material';
import Image from 'next/image';

// project imports
import React, { useState, useEffect } from 'react';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Edit_service from './helper_components/edit_services';
import { getAllMainServices, deleteMainService } from 'store/slices/company-section/action/company';
import AlertDialogSlide from 'components/ui-elements/advance/UIDialog/AlertDialogSlide';
// ==============================|| Add Services ||============================== //
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const options = ['Broker Company', 'Developer Company', 'Service Company'];

const ColumnHeaders = [
  {
    accessorKey: 'id',
    header: 'Serial No.'
  },

  {
    accessorKey: 'title',
    header: 'Service Name'
  },
  {
    accessorKey: 'description',
    header: 'Description'
  },
  {
    accessorKey: 'icon_url',
    header: 'Service Icon',
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Image src={`http://20.203.31.58/upload/${row.original.icon_url}`} width={60} height={30} style={{ objectFit: 'contain' }} />
      </Box>
    )
  },

  {
    accessorKey: 'image_url',
    header: 'Service Image',
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
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ renderedCellValue, row }) => {
      const [open, setOpen] = useState(false);
      const dispatch = useDispatch();
      const handleClickOpen = () => {
        setOpen(true);
        console.log(row.original);
      };

      const handleClose = () => {
        setOpen(false);
      };
      const handleDelete = (e) => {
        console.log(row.original.id);
        dispatch(deleteMainService(row.original.id));
        // location.reload()
      };

      return (
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
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Edit
          </Button>

          <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} maxWidth="lg">
            <DialogTitle>{'Edit Service'}</DialogTitle>
            <DialogContent>
              <Edit_service
                id={row.original.id}
                comp_id={row.original.company_types_id}
                description={row.original.description}
                serial_no={row.original.serial_no}
                icon_url={row.original.icon_url}
                service_name={row.original.title}
                img_url={row.original.image_url}
                close={setOpen}
              />
            </DialogContent>
          </Dialog>
          <Button onClick={handleDelete} variant="contained" color="error">
            Delete
          </Button>
        </Box>
      )
    }
  }
  ]

function ManageServices() {
  const dispatch = useDispatch();
  const { mainServices } = useSelector((state) => state.companies);
  // console.log(mainServices);
  useEffect(() => {
    dispatch(getAllMainServices());
  }, []);
  return (
    <Page title="Manage Services">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={mainServices} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>

    </Page>
  );
}

ManageServices.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageServices;
