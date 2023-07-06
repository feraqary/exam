// material-ui
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
import { getLocalCompanies, updateCompanyStatus} from 'store/slices/company-section/action/company';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import CompanyForm from './helper/CompanyForm';

import TableSelectorOption from 'components/InputArea/TableSelectorOption';

import { Grid, Box, Button, Dialog, DialogActions, DialogContent, Slide } from '@mui/material';
import Documents from './documents';
// ===========================|| International Company Managment list||=========================== //

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
      const [open, setOpen] = useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      const dispatch = useDispatch();

      const handleBlock = () => {
        const formData = new FormData();

        formData.append('company_id', row.original.ID);
        formData.append('status', '5');
        formData.append('company_type', row.original.CompanyMainType);

        dispatch(updateCompanyStatus(formData));
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
            Report
          </Button>
          <Button variant="contained" onClick={handleBlock} color="error" startIcon={<DeleteIcon />}>
            Block
          </Button>

          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <DialogActions sx={{ justifyContent: 'flex-start' }} onClick={handleClose}>
              <IconButton>
                <CloseIcon />
              </IconButton>
            </DialogActions>
            <DialogContent>
              <CompanyForm />
            </DialogContent>
          </Dialog>
        </Box>
      );
    }
  }
];

const localCompanies = () => {
  const dispatch = useDispatch();
  const { loading, error, localCompanies } = useSelector((state) => state.companies);

  const [docsOpen, setDocsOpen] = useState(false);
  const [docsCrid, setDocsCrid] = useState({ comp: null, id: null });

  const handleDocsOpen = () => {
    setDocsOpen(true);
  };

  const handleDocsClose = () => {
    setDocsOpen(false);
  };

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
            <Image src={`http://20.203.31.58/upload/${row.original.CompanyLogo}`} alt="company logo" width={60} height={30} />
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
        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
          setOpen(true);
        };

        const handleClose = () => {
          setOpen(false);
        };

        const dispatch = useDispatch();

        const handleBlock = () => {
          // setBlocked();
          console.log('int_company', row.original.ID);
          console.log('status', '5');
          console.log('company_type', row.original.CompanyMainType);

          const formData = new FormData();

          formData.append('company_id', row.original.ID);
          formData.append('status', '5');
          formData.append('company_type', row.original.CompanyMainType);

          dispatch(updateCompanyStatus(formData));
          // dispatch(getLocalCompanies());
          // window.location.reload();
        };

        return (
          <>
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
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  handleDocsOpen(), setDocsCrid({ comp: row.original.CompanyMainType, id: row.original.ID });
                  console.log(docsCrid);
                }}
                startIcon={<AssignmentIcon />}
              >
                View Documents
              </Button>

              <Button variant="contained" color="primary" startIcon={<PreviewIcon />}>
                View Live
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  console.log(row.original);
                }}
              >
                Multiple
              </Button>
              <Button variant="contained" color="primary">
                Report
              </Button>
              <Button variant="contained" onClick={handleBlock} color="error" startIcon={<DeleteIcon />}>
                Block
              </Button>

              <Dialog maxWidth={'xl'} open={open} onClose={handleClose} TransitionComponent={Transition}>
                <DialogActions sx={{ justifyContent: 'flex-start' }} onClick={handleClose}>
                  <IconButton>
                    <CloseIcon />
                  </IconButton>
                </DialogActions>
                <DialogContent>
                  <CompanyForm />
                </DialogContent>
              </Dialog>
            </Box>
          </>
        );
      }
    }
  ];

  useEffect(() => {
    dispatch(getLocalCompanies());
  }, [dispatch]);
  return (
    <Page title="Local Company List">
      <ToastContainer />
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={localCompanies} loading={loading} />
        </Grid>
      </Grid>

      <Dialog maxWidth={'xl'} open={docsOpen} onClose={handleDocsClose} TransitionComponent={Transition}>
        <DialogActions sx={{ justifyContent: 'flex-start' }} onClick={handleDocsClose}>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogContent>
          <Documents comp={docsCrid.comp} id={docsCrid.id} />
        </DialogContent>
      </Dialog>
    </Page>
  );
};

localCompanies.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default localCompanies;