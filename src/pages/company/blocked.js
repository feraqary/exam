// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import { AqaryButton } from 'components/Elements/AqaryButton';
import Table from 'components/Table/Table';

import { getCompanyByStatus, updateCompanyStatus } from 'store/slices/company-section/action/company';

import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBlockedCompanies, restoreCompany } from 'store/slices/company-section/action/company';
import { useSelector } from 'react-redux';
import { dispatch } from 'store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
      const dispatch = useDispatch();

      return (
        <AqaryButton
          variant="contained"
          onClick={() => {
            console.log('int_company', row.original);
            // console.log('status', status);

            const formData = new FormData();

            formData.append('company_id', row.original.ID);
            formData.append('status', '4');
            formData.append('company_type', row.original.CompanyMainType);
            dispatch(updateCompanyStatus(formData));
            window.location.reload();
          }}
        >
          Restore
        </AqaryButton>
      );
    }

  }
];

const BlockedCompanies = () => {
  const dispatch = useDispatch();

  const { loading, error, blockedCompanies } = useSelector((state) => state.companies);

  useEffect(() => {

    dispatch(getCompanyByStatus(5));
  }, [dispatch]);


  return (
    <Page title="Blocked Companies">
      <ToastContainer />
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={blockedCompanies} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
};

BlockedCompanies.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default BlockedCompanies;
