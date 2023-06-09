// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';

// ==============================|| Leads General Requests||============================== //

const data = [
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092'
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092'
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092'
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092'
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092'
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092'
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'Date',
    header: 'Date'
  },
  {
    accessorKey: 'client_name',
    header: 'Client Name'
  },
  {
    accessorKey: 'company_name',
    header: 'Company Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'phone',
    header: 'Phone'
  },
  {
    accessorKey: 'message',
    header: 'message'
  },
  {
    accessorKey: 'mobile',
    header: 'Mobile Number'
  },
  {
    accessorKey: 'viewing_status',
    header: 'Viewing Status'
  }
];

function GeneralRequests() {
  return (
    <Page title="General Requests">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

GeneralRequests.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default GeneralRequests;
