// material-ui
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { AqaryButton } from 'components/Elements/AqaryButton';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import TableSelectorOption from 'components/InputArea/TableSelectorOption';
import { Grid, Box, Button } from '@mui/material';
import { useGetLocalCompaniesQuery, useUpdateCompanyRankMutation, useUpdateCompanyStatusMutation } from 'store/services/company/companyApi';
import { ToastError, ToastSuccess } from 'utils/toast';
import Link from 'next/link';
// ===========================|| Local Company Managment list||=========================== //

const localCompanies = () => {
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
      Cell: ({ renderedCellValue, row }) => {
        const formData = new FormData();
        const func = useUpdateCompanyRankMutation();
        formData.append('company_type', row.original.CompanyType);
        formData.append('company_id', row.original.ID);
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TableSelectorOption value={row.original.CompanyRank} formData={formData} func={func} />
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
              <Button>View Documents</Button>
              <Button variant="contained" color="primary">
                Report
              </Button>
              <Button variant="contained" onClick={handleBlock} color="error" startIcon={<DeleteIcon />}>
                Block
              </Button>
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
    </Page>
  );
};

localCompanies.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default localCompanies;
