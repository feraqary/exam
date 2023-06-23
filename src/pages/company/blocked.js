// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import { AqaryButton } from 'components/Elements/AqaryButton';
import Table from 'components/Table/Table';
import { getBlockedCompany } from 'store/slices/company-section/action/company';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// ===========================|| Blocked Company list||=========================== //

const ColumnHeaders = [
  {
    accessorKey: 'CompanyMainType',
    header: 'Company Main Type'
  },
  {
    accessorKey: 'CompanyName',
    header: 'Company Name'
  },
  {
    accessorKey: 'Email',
    header: 'Email'
  },
  {
    accessorKey: 'Phone',
    header: 'Phone'
  },
  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({}) => <AqaryButton variant="contained">Restore</AqaryButton>
  }
];

const BlockedCompanies = () => {
  const { blocks } = useSelector((state) => state.companies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlockedCompany());
  }, [dispatch]);

  return (
    <Page title="Featured Companies">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={blocks} />
        </Grid>
      </Grid>
    </Page>
  );
};

BlockedCompanies.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default BlockedCompanies;
