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
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCompanyTypes } from 'store/slices/company-section/action/company';
import { useSelector } from 'react-redux';
import EditType from './edit_type';

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
    Cell: ({ renderedCellValue, row }) => {
      const [open, setOpen] = useState(false);

      const [compType, setCompType] = useState(0);
      const [logoImg, setLogoImg] = useState(null);
      const [imgUrl, setImgUrl] = useState('');
      const [id, setId] = useState('');
      const [title, setTitle] = useState('');
      const [desc, setDesc] = useState('');

      // console.table({ compType: compType, logoImg: logoImg, imgUrl: imgUrl, id: id, title: title, desc: desc });

      const handleClickOpen = (id) => {
        setCompType(row.original.main_company_type_id);
        setLogoImg(row.original.icon_url);
        setImgUrl(row.original.image_url);
        setId(id);
        setTitle(row.original.title);
        setDesc(row.original.description);

        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      console.log(row.original);
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <Button variant="contained" onClick={() => handleClickOpen(row.original.id)} color="primary" startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
            Block
          </Button>

          <Dialog
            // fullWidth={fullWidth}
            maxWidth={'lg'}
            open={open}
            onClose={handleClose}
          >
            <DialogContent>
              <DialogContentText>
                <EditType
                  setClose={setOpen}
                  id={id}
                  compType={compType}
                  imgUrl={imgUrl}
                  logoImg={logoImg}
                  serviceName={title}
                  desc={desc}
                  open={open}
                />
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </Box>
      );
    }
  }
];

const companyType = () => {
  const { companyTypes } = useSelector((state) => state.companies);
  console.log(companyTypes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCompanyTypes());
    console.log(dispatch(getAllCompanyTypes()));
  }, [dispatch]);

  return (
    <Page title="International Company List">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={companyTypes} />
        </Grid>
      </Grid>
    </Page>
  );
};

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
