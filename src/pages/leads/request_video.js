// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';

// ==============================|| Request Video||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'date',
    header: 'Date'
  },
  {
    accessorKey: 'preffered',
    header: 'Preffered Date & Time'
  },
  {
    accessorKey: 'ref_id',
    header: 'Reference ID'
  },
  {
    accessorKey: 'property_name',
    header: 'Property Name'
  },
  {
    accessorKey: 'client_name',
    header: 'Client Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'mobile',
    header: 'Mobile Number'
  }
];

const data = [
  {
    date: '12-12-2022',
    preffered: '13-12-2022 10:00 AM',
    ref_id: '31231231',
    property_name: 'EMAAR',
    client_name: 'Cercie',
    email: 'lannister@gmail.com',
    mobile: '+3820983092'
  },
  {
    date: '12-12-2022',
    preffered: '13-12-2022 10:00 AM',
    ref_id: '31231231',
    property_name: 'EMAAR',
    client_name: 'Cercie',
    email: 'lannister@gmail.com',
    mobile: '+3820983092'
  },
  {
    date: '12-12-2022',
    preffered: '13-12-2022 10:00 AM',
    ref_id: '31231231',
    property_name: 'EMAAR',
    client_name: 'Cercie',
    email: 'lannister@gmail.com',
    mobile: '+3820983092'
  },
  {
    date: '12-12-2022',
    preffered: '13-12-2022 10:00 AM',
    ref_id: '31231231',
    property_name: 'EMAAR',
    client_name: 'Cercie',
    email: 'lannister@gmail.com',
    mobile: '+3820983092'
  },
  {
    date: '12-12-2022',
    preffered: '13-12-2022 10:00 AM',
    ref_id: '31231231',
    property_name: 'EMAAR',
    client_name: 'Cercie',
    email: 'lannister@gmail.com',
    mobile: '+3820983092'
  },
  {
    date: '12-12-2022',
    preffered: '13-12-2022 10:00 AM',
    ref_id: '31231231',
    property_name: 'EMAAR',
    client_name: 'Cercie',
    email: 'lannister@gmail.com',
    mobile: '+3820983092'
  }
];

function RequestVideos() {
  return (
    <Page title="Request Video">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

RequestVideos.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default RequestVideos;
