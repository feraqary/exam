// material-ui
import { Grid, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import Image from 'next/image';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'components/Table/Table';
import { getAllServices } from 'store/slices/company-section/action/company';
import React, { useEffect, useState } from 'react';
import Edit_Service from './helper_components/Edit_sub_service';
// ==============================|| Activities Project ||============================== //

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ColumnHeaders = [
  {
    accessorKey: 'id',
    header: '   SI NO'
  },
  {
    accessorKey: 'title',
    header: 'Sub Service Name'
  },
  {
    accessorKey: 'description',
    header: 'Discription'
  },
  {
    accessorKey: 'icon_url',
    header: 'Icon',
    Cell: ({ cell }) => (
      <Box display="flex" alignItems="center">
        <Image src={`/${cell.getValue()}`} width={60} height={30} style={{ objectFit: 'contain' }} />
      </Box>
    )
  },
  {
    accessorKey: 'image_url',
    header: 'Image',
    Cell: ({ cell }) => (
      <Box display="flex" alignItems="center">
        <Image src={`/${cell.getValue()}`} width={60} height={30} style={{ objectFit: 'contain' }} />
      </Box>
    )
  },
  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ renderedCellValue, row }) => {
      const [open, setOpen] = useState(false);

      console.log(renderedCellValue, row);

      const handleClickOpen = () => {
        setOpen(true);
        console.log(row.original);
      };

      const handleClose = () => {
        setOpen(false);
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
          <Button variant="contained" onClick={handleClickOpen} color="primary">
            Edit
          </Button>
          <Button variant="contained" color="error">
            Delete
          </Button>

          <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} maxWidth="lg">
            <DialogTitle>{'Edit Sub Service'}</DialogTitle>
            <DialogContent>
              <Edit_Service
                desc={row.original.description}
                iconUrl={row.original.icon_url}
                id={row.original.id}
                main_services_id={row.original.main_services_id}
                title={row.original.title}
              />
            </DialogContent>
          </Dialog>
        </Box>
      );
    }
  }
];

function SubService() {
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(getAllServices());
    console.log('services: ', services);
  }, []);

  return (
    <Page title=" Sub Service">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={services} />
        </Grid>
      </Grid>
    </Page>
  );
}
SubService.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SubService;
