// material-ui
import Image from 'next/image';
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
import { ToastContainer } from 'react-toastify';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import TableSelectorOption from 'components/InputArea/TableSelectorOption';
import { Grid, Box, Button, Dialog, DialogActions, DialogContent, Slide } from '@mui/material';
import Documents from '../documents';
import { useGetLocalCompaniesQuery, useUpdateCompanyStatusMutation } from 'store/services/company/companyApi';
import { ToastError, ToastSuccess } from 'utils/toast';
import Link from 'next/link';
// ===========================|| Local Company Managment list||=========================== //

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const localCompanies = () => {
  const [docsOpen, setDocsOpen] = useState(false);
  const [docsCrid, setDocsCrid] = useState({ comp: null, id: null });

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const { data: localCompaniesData, isError, error, isLoading, isFetching } = useGetLocalCompaniesQuery(pagination);

  const [blockCompany, result] = useUpdateCompanyStatusMutation();

  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Company has been successfully blocked');
    }
  }, [result.isSuccess]);

  useEffect(() => {
    if (result.isError) {
      const { data } = result.error;
      ToastError(data.error);
    }
  }, [result.isError]);

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
      accessorKey: 'Status',
      header: 'Company Status',
      Cell: ({ renderedCellValue, row }) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TableSelectorOption value={row.original.CompanyRank} CompanyType={row.original.CompanyType} id={row.original.ID} />
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

        const handleClose = () => {
          setOpen(false);
        };

        const handleBlock = () => {
          const formData = new FormData();
          formData.append('company_id', row.original.ID);
          formData.append('status', '5');
          formData.append('company_type', row.original.CompanyType);
          formData.append('is_branch', row.original.IsBranch);
          blockCompany(formData);
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
              <Link
                href={{
                  pathname: `/dashboard/company/local_company_management/${row.original.ID}`,
                  query: {
                    company_type: row.original.CompanyType,
                    is_branch: row.original.IsBranch
                  }
                }}
              >
                <AqaryButton variant="contained">Edit </AqaryButton>
              </Link>
              <Link href={{ pathname: `/dashboard/company/add_comp/${row.original.ID}` }}>
                <Button variant="contained" color="primary">
                  Add sub-company
                </Button>
              </Link>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  handleDocsOpen(), setDocsCrid({ comp: row.original.CompanyMainType, id: row.original.ID });
                }}
                startIcon={<AssignmentIcon />}
              >
                View Documents
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
                <DialogContent></DialogContent>
              </Dialog>
            </Box>
          </>
        );
      }
    }
  ];

  useEffect(() => {}, [pagination.pageIndex, pagination.pageSize]);

  if (isLoading) return;
  return (
    <Page title="Local Company List">
      <ToastContainer />
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table
            columnHeaders={ColumnHeaders}
            data={error ? [] : localCompaniesData?.data || []}
            loading={isLoading}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={isFetching}
            rowCount={localCompaniesData?.Total}
          />
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
