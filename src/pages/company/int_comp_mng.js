// material-ui
import { Grid } from '@mui/material';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PreviewIcon from '@mui/icons-material/Preview';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { AqaryButton } from 'components/Elements/AqaryButton';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getInternationalCompanies, updateCompanyStatus } from 'store/slices/company-section/action/company';
import { useSelector } from 'react-redux';
import ColumnsLayouts from './add_comp';
import { Dialog, DialogContent, DialogActions } from '@mui/material';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateCompany from './helper/CompanyForm';
import TableSelectorOption from 'components/InputArea/TableSelectorOption';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ===========================|| International Company Managment list||=========================== //

// const data = [
//   {
//     id: 1,
//     CompanyName: 'Aqary',
//     companyLogo: '',
//     LicenseNO: '123456789',
//     State: 'Maharashtra',
//     CompanyType: 'International',
//     Country: 'India',
//     SubscriptionStartDate: '2020-01-01',
//     AddedBy: 'Aqary',
//     ContactPerson: 'Aqary'
//   }
// ];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ColumnHeaders = [
  {
    accessorKey: 'CompanyName',
    header: 'Company Name'
  },
  {
    accessorKey: 'companyLogo',
    header: 'Company Logo',
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Image src={`http://20.203.31.58/upload/${row.original.CompanyLogo}`} width={60} height={30} style={{ objectFit: 'contain' }} />
      </Box>
    )
  },
  {
    accessorKey: 'Status',
    header: 'Company Status',
    Cell: ({ renderedCellValue, row }) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TableSelectorOption value={row.original.CompanyRank} companyMainType={row.original.CompanyMainType} id={row.original.ID} />
      </Box>
    )
  },
  {
    accessorKey: 'LicenseNO',
    header: 'Liscense Number'
  },
  {
    accessorKey: 'State',
    header: ' State '
  },
  {
    accessorKey: 'CompanyType',
    header: ' Company Type'
  },
  {
    accessorKey: 'Country',
    header: ' Country'
  },
  {
    accessorKey: 'SubscriptionStartDate',
    header: ' Subscription Date'
  },

  {
    accessorKey: 'AddedBy',
    header: 'Added By'
  },
  {
    accessorKey: 'ContactPerson',
    header: 'Contact Person'
  },
  {
    accessorKey: 'Email',
    header: 'Email'
  },
  { accessorKey: 'Phone', header: 'Phone' },
  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ renderedCellValue, row }) => {
      const [open, setOpen] = React.useState(false);
      const [editOpen, setEditOpen] = React.useState(false);
      const [Blocked, setBlocked] = React.useState(false);
      const [status, setStatus] = React.useState(4);
      const [id, setId] = React.useState();
      const [MainType, setMainType] = React.useState(null);

      const dispatch = useDispatch();

      const handleEditOpen = (e) => {
        setEditOpen(true);
        console.log(row.original);
        setId(row.original.ID);
        console.log('e', e.target);
        setMainType(row.original.CompanyMainType);
      };
      const handleEditClose = () => {
        setEditOpen(false);
      };
      const handleClickOpen = () => {
        setOpen(true);
        console.log(row.original);
        setId(row.original.ID);
      };

      const handleClose = () => {
        setOpen(false);
      };
      const handleBlock = () => {
        // setBlocked();
        console.log('int_company', row.original);
        console.log('status', '5');

        const formData = new FormData();

        formData.append('company_id', row.original.ID);
        formData.append('status', '5');
        formData.append('company_type', row.original.CompanyMainType);

        dispatch(updateCompanyStatus(formData));

        window.location.reload();
      };

      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <AqaryButton variant="contained">Edit </AqaryButton>
          <Button variant="contained" color="primary" onClick={handleClickOpen} startIcon={<PreviewIcon />}>
            Add sub-company
          </Button>
          <Button color="primary" variant="contained" startIcon={<AssignmentIcon />}>
            View Documents
          </Button>
          <Button variant="contained" color="primary" startIcon={<PreviewIcon />}>
            View Live
          </Button>
          <Button variant="contained" color="primary">
            Multiple
          </Button>
          <Button variant="contained" color="primary">
            Report
          </Button>

          <Button variant="contained" onClick={handleBlock} color="error" startIcon={<DeleteIcon />}>
            Block
          </Button>

          <Dialog fullScreen open={editOpen} onClose={handleEditClose} TransitionComponent={Transition}>
            <DialogActions sx={{ justifyContent: 'flex-start' }} onClick={handleEditClose}>
              <IconButton>
                <CloseIcon />
              </IconButton>
            </DialogActions>
            <DialogContent>
              <UpdateCompany title={'Edit Company Details'} id={id} CompanyMainType={MainType} formfor={'update'} />
            </DialogContent>
          </Dialog>

          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <DialogActions sx={{ justifyContent: 'flex-start' }} onClick={handleClose}>
              <IconButton>
                <CloseIcon />
              </IconButton>
            </DialogActions>
            <DialogContent>
              <UpdateCompany title={'Sub Company Details'} formfor={'sub'} />
            </DialogContent>
          </Dialog>
        </Box>
      );
    }
  }
];

const IntCompData = () => {
  const dispatch = useDispatch();
  const { loading, error, internationalCompanies } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(getInternationalCompanies());
  }, []);
  return (
    <Page title="International Company List">
      <ToastContainer />
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={internationalCompanies} />
        </Grid>
      </Grid>
    </Page>
  );
};

IntCompData.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default IntCompData;
