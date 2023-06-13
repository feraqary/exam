// material-ui
import { Grid } from '@mui/material';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCompanyTypes } from 'store/slices/company-section/action/company';
import { useSelector } from 'react-redux';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';

// ===========================|| International Company Managment list||=========================== //



// const isTrue = (bool) =>{  return bool}

const [open, setOpen] = useState(false);

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
         <Image src={`http://20.203.31.58/upload/${row.original.image_url}`} width={60} height={30} />
      </Box>
    )
  },
  // {
  //   accessorKey: 'name.companyName',
  //   header: 'Company Name'
  // },
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
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Button variant="contained" onClick={setOpen(!open)} color="primary" startIcon={<EditIcon />}>
          Edit
        </Button>
        <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
          Block
        </Button>
      </Box>
    )
  }
];

const companyType = () => {
  const { companyTypes } = useSelector(state => state.companies)
  console.log(companyTypes) 

  // const [compName,setCompName] = useState(companyTypes[0].title)
  // const [compType,setCompType] = useState(companyTypes[0].description)
  // const [logoImg,setLogoImg] = useState(companyTypes[0].companyTypeLogo)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllCompanyTypes())
    console.log(dispatch(getAllCompanyTypes()))
  },[dispatch])


  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return(

  <Page title="International Company List">
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Table columnHeaders={ColumnHeaders} data={companyTypes} />
      </Grid>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={'lg'}
        open={open}
        onClose={handleClose}
      >
         <DialogContent>
            <DialogContentText>
              You can set my maximum width and whether to adapt or not.
            </DialogContentText>
          </DialogContent>
        </Dialog>
    </Grid>
  </Page>
)};

companyType.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default companyType;














// const data = [
//   {
//     name: {
//       companyTypeName: 'Developer Ccompany',
//       companyName: 'Compaany',
//       companyTypeLogo: '/assets/images/company_logo/logo1.png'
//     },
//     description:
//       'Developer company is one that is focused on delivering value to software developers/software engineers. A developer company doesnt just aim to be a great business and increase revenue, but also be a pillar of the software community'
//   },
//   {
//     name: {
//       companyTypeName: 'Sub-Developer Company',
//       companyName: 'Sub-Developer',
//       companyTypeLogo: '/assets/images/company_logo/logo1.png'
//     },
//     description:
//       'Developer company is one that is focused on delivering value to software developers/software engineers. A developer company doesnt just aim to be a great business and increase revenue, but also be a pillar of the software community'
//   },
//   {
//     name: {
//       companyTypeName: 'Developer Company',
//       companyTypeLogo: '/assets/images/company_logo/logo1.png'
//     },
//     description:
//       'Developer company is one that is focused on delivering value to software developers/software engineers. A developer company doesnt just aim to be a great business and increase revenue, but also be a pillar of the software community'
//   },
//   {
//     name: {
//       companyTypeName: 'Broker Company',
//       companyTypeLogo: '/assets/images/company_logo/logo2.png'
//     },
//     description:
//       'Brokerage firms act as a liaison between their clients and the stock exchange. Their primary function is to buy and sell financial products, including stocks, on behalf of their clients.'
//   },
//   {
//     name: {
//       companyTypeName: 'Management Company',
//       companyTypeLogo: '/assets/images/company_logo/logo3.png'
//     },
//     description: 'Management company is set up to manage a group of properties, a unit trust, an investment fund'
//   },
//   {
//     name: {
//       companyTypeName: 'Sub-Developer Company',
//       companyTypeLogo: '/assets/images/company_logo/logo1.png'
//     },
//     description:
//       'Developer company is one that is focused on delivering value to software developers/software engineers. A developer company doesnt just aim to be a great business and increase revenue, but also be a pillar of the software community'
//   },
//   {
//     name: {
//       companyTypeName: 'Marketing Company',
//       companyTypeLogo: '/assets/images/company_logo/logo3.png'
//     },
//     description:
//       'A marketing firm is any company that assists a business with creating, implementing, and sustaining marketing strategies. These specialized firms are outside contractors that businesses of any size and in any industry can hire to improve their marketing efforts'
//   }
// ];