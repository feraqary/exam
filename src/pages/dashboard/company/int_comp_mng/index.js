// material-ui
import { Grid } from '@mui/material';
import { Box, Button } from '@mui/material';
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
import React, { useEffect, useState } from 'react';
// import ColumnsLayouts from '../dashboard/company/add_comp';
import { Dialog, DialogContent, DialogActions } from '@mui/material';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Documents from '../documents';
import { useGetInternationalCompaniesQuery, useUpdateCompanyStatusMutation } from 'store/services/company/companyApi';
import { ToastError, ToastSuccess } from 'utils/toast';
import TableSelectorOption from 'components/InputArea/TableSelectorOption';

// ===========================|| International Company Managment list||=========================== //

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const IntCompData = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const { data: internationalCompaniesData, isError, error, isLoading, isFetching } = useGetInternationalCompaniesQuery(pagination);

  const [blockCompany, result] = useUpdateCompanyStatusMutation();

  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Company hase been successfully blocked');
    }
  }, [result.isSuccess]);

  useEffect(() => {
    if (result.isError) {
      ToastError(result.error);
    }
  });

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
        const [open, setOpen] = React.useState(false);
        const [editOpen, setEditOpen] = React.useState(false);
        const [id, setId] = React.useState();
        const [MainType, setMainType] = React.useState(null);

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
          const formData = new FormData();
          formData.append('company_id', row.original.ID);
          formData.append('status', '5');
          formData.append('company_type', row.original.CompanyType);

          blockCompany(formData);
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
              <DialogContent></DialogContent>
            </Dialog>

            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
              <DialogActions sx={{ justifyContent: 'flex-start' }} onClick={handleClose}>
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </DialogActions>
              <DialogContent></DialogContent>
            </Dialog>
          </Box>
        );
      }
    }
  ];

  useEffect(() => {}, [pagination.pageIndex, pagination.pageSize]);

  if (isLoading) return;

  return (
    <Page title="International Company List">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table
            columnHeaders={ColumnHeaders}
            data={internationalCompaniesData?.data}
            loading={isLoading}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={isFetching}
            rowCount={internationalCompaniesData?.Total}
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

IntCompData.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default IntCompData;
