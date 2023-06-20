// material-ui
import { Grid, Box, Button } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';

// ==============================|| Add Services ||============================== //
import { useDispatch } from 'react-redux';
import { getAllMainServices } from 'store/slices/company-section/action/company';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import company from 'store/slices/company-section/slice/company';
import { ToastContainer } from 'react-toastify';
import Container from 'components/Elements/Container';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function ManageServices() {
  const [open, setOpen] = React.useState(false);

  const ColumnHeaders = [
    {
      accessorKey: 'id',
      header: 'id'
    },
  
    {
      accessorKey: 'title',
      header: 'title'
    },
    {
      accessorKey: 'company_types_id',
      header: 'company_types_id'
    },
    {
      accessorKey: 'description',
      header: 'description'
    },
    {
      accessorKey: 'icon_url',
      header: 'icon_url',
      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <Image src={row.original.service_icon} width={60} height={30} style={{ objectFit: 'contain' }} />
        </Box>
      )
    },
  
    {
      accessorKey: 'action',
      header: 'Action',
      Cell: ({ renderedCellValue, row }) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <Button variant="contained" color="primary">
            View Service
          </Button>
          <Button variant="contained" color="primary" onClick={()=>handleUpdateMain(row)}>
            Edit Service
          </Button>
          <Button variant="contained" color="error" onClick={()=>console.log("clicked", row.original.id)}>
            Delete
          </Button>
        </Box>
      )
    }
  ];

  const dispatch = useDispatch();
  const { loading, error, mainServices } = useSelector((state) => state.companies);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 function AlertDialogSlide() {
  
  
    return (
      <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            maxWidth={{xs: 12, lg: 6}}
          >
                <Page title="Manage Services" >
                  <Grid container spacing={gridSpacing} xs={12}>
                    <ToastContainer />
                    <Container style={{ xs: 12 }}>
                      <Grid container xs={12} lg={12} justifyContent="center" gap={3}>
                          <AutoCompleteSelector
                            style={{ xs: 12, lg: 8 }}
                            label="Company Type"
                            placeholder="Company Type"
                            options={mainServices.map((service) => {
                              return { label: service.title, ...service };
                            })}
                            id="compnType"
                            // value={serviceType}
                            helperText="Company Type"
                            // func={handleMainServiceChange}
                          />

                        <InputText
                          label="Service Name"
                          placeholder="Services Name"
                          helperText="Please Services Name"
                          style={{ xs: 12, lg: 8 }}
                          type="text"
                          // value={service}
                          // setValue={setService}
                        />

                        <FileUpload
                          label="Upload Logo"
                          style={{ xs: 12, lg: 8 }}
                          placeholder="Upload Logo"
                          type="png,jpeg,jpg"
                          helperText="Please upload your logo"
                          image={{ alt: 'Logo Preview', width: '250px', height: '250px' }}
                          // ref={logoRef}
                          // imagePreview={logoPreview}
                          // setImagePreview={setLogoPreview}
                          // setValue={setLogoImage}
                        />

                        <InputText
                          label="Description"
                          placeholder="Enter Description"
                          style={{ xs: 12, lg: 8 }}
                          type="text"
                          multiline
                          rows={5}
                          id="outlined-multiline-flexible"
                          description
                          // value={description}
                          // setValue={setDescription}
                        />

                        <FileUpload
                          label="Upload Icon"
                          style={{ xs: 12, lg: 8 }}
                          placeholder="Upload Icon"
                          type="png,jpeg,jpg"
                          helperText="Please upload your Icon"
                          image={{ alt: 'Icon Preview', width: '250px', height: '250px' }}
                          // ref={iconRef}
                          // imagePreview={iconPreview}
                          // setImagePreview={setIconPreview}
                          // setValue={setIconImage}
                        />
                      </Grid>
                    </Container>
                    <SubmitButton submit={
                      ()=> handleClose()
                    } clear={()=>{
                      ()=> handleClose()
                    }} />
                  </Grid>
            </Page>
          </Dialog>
    );
  }


  // Handle update services
  const handleUpdateMain = (row)=>{
    const servicesID = row.original.id;
    handleClickOpen();

  }

  
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
      {AlertDialogSlide()}
    </Page>
  );
}

ManageServices.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageServices;
