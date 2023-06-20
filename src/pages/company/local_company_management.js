// material-ui
import { Chip, Grid } from '@mui/material';
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
import { useEffect } from 'react';
import { getLocalCompanies } from 'store/slices/company-section/action/company';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Dialog, DialogContent, DialogActions } from '@mui/material';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// ===========================|| International Company Managment list||=========================== //

const ColumnHeaders = [
  {
    accessorKey: 'CompanyName',
    header: 'Company Name'
  },
  {
    accessorKey: 'companyLogo',
    header: 'Company Logo',
    Cell: ({ renderedCellValue, row }) => {
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <Image src={`http://20.203.31.58/upload/${row.original.CompanyLogo}`} width={60} height={30} />
        </Box>
      );
    }
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

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      
      
      return(
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
        <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
          Block
        </Button>
        <Button variant="contained" startIcon={<KeyIcon />}>
          Reset
        </Button>

        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <DialogActions sx={{justifyContent:"flex-start"}} onClick={handleClose}>
              <IconButton>
                <CloseIcon />
              </IconButton>
            </DialogActions>
            <DialogContent>
              <ColumnsLayouts />
            </DialogContent>
          </Dialog>
      </Box>
    )}
  }
];

const localCompanies = () => {
  const dispatch = useDispatch();
  const { loading, error, localCompanies } = useSelector((state) => state.companies);
  useEffect(() => {
    dispatch(getLocalCompanies());
  }, []);
  return (
    <Page title="Local Company List">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={localCompanies} loading={loading} />
        </Grid>
      </Grid>
    </Page>
  );
};

localCompanies.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default localCompanies;
