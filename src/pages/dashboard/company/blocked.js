// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import { AqaryButton } from 'components/Elements/AqaryButton';
import Table from 'components/Table/Table';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useGetCompaniesByStatusQuery, useUpdateCompanyStatusMutation } from 'store/services/company/companyApi';
import { ToastSuccess } from 'utils/toast';

// ===========================|| Blocked Company list||=========================== //

const ColumnHeaders = [
  {
    accessorKey: 'ID',
    header: 'SL.No'
  },
  {
    accessorKey: 'CompanyName',
    header: 'Company Name'
  },
  {
    accessorKey: 'Phone',
    header: 'Phone'
  },
  {
    accessorKey: 'Email',
    header: 'Email'
  },
  {
    accessorKey: 'action',
    header: 'Action',

    Cell: ({ row }) => {
      const [restoreCompany, result] = useUpdateCompanyStatusMutation();

      useEffect(() => {
        if (result.isSuccess) {
          ToastSuccess('Company has been restored Successfully');
        }
      }, [result.isSuccess]);

      return (
        <AqaryButton
          variant="contained"
          onClick={() => {
            const formData = new FormData();
            formData.append('company_id', row.original.ID);
            formData.append('status', '4');
            formData.append('company_type', row.original.CompanyMainType);

            restoreCompany(formData);
          }}
        >
          Restore
        </AqaryButton>
      );
    }
  }
];

const BlockedCompanies = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const { data, error, isLoading, isFetching, isError } = useGetCompaniesByStatusQuery({ status: 5, pagination });

  useEffect(() => {}, [pagination.pageIndex, pagination.pageSize]);

  return (
    <Page title="Blocked Companies">
      <ToastContainer />
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table
            data={data?.data || []}
            columnHeaders={ColumnHeaders}
            loading={isLoading}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={isFetching}
            rowCount={data?.Total}
          />
        </Grid>
      </Grid>
    </Page>
  );
};

BlockedCompanies.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default BlockedCompanies;
