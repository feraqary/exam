// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';

// ==============================|| Schedule Viewing||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'web_id',
    header: 'WEBID'
  },
  {
    accessorKey: 'date_time',
    header: 'Date & Time'
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
  },
  {
    accessorKey: 'viewing_status',
    header: 'Viewing Status'
  }
];

const data = [
  {
    web_id: '12-12-2022',
    date_time: '13-12-2022 10:00 AM',
    ref_id: '31231231',
    property_name: 'EMAAR',
    client_name: 'Cercie',
    email: 'lannister@gmail.com',
    mobile: '+3820983092',
    viewing_status: 'Live Meeting'
  },
  {
    web_id: '12-12-2022',
    date_time: '13-12-2022 10:00 AM',
    ref_id: '31231231',
    property_name: 'EMAAR',
    client_name: 'Cercie',
    email: 'lannister@gmail.com',
    mobile: '+3820983092',
    viewing_status: 'Live Meeting'
  },
  {
    web_id: '12-12-2022',
    date_time: '13-12-2022 10:00 AM',
    ref_id: '31231231',
    property_name: 'EMAAR',
    client_name: 'Cercie',
    email: 'lannister@gmail.com',
    mobile: '+3820983092',
    viewing_status: 'Live Meeting'
  },
  {
    web_id: '12-12-2022',
    date_time: '13-12-2022 10:00 AM',
    ref_id: '31231231',
    property_name: 'EMAAR',
    client_name: 'Cercie',
    email: 'lannister@gmail.com',
    mobile: '+3820983092',
    viewing_status: 'Live Meeting'
  },
  {
    web_id: '12-12-2022',
    date_time: '13-12-2022 10:00 AM',
    ref_id: '31231231',
    property_name: 'EMAAR',
    client_name: 'Cercie',
    email: 'lannister@gmail.com',
    mobile: '+3820983092',
    viewing_status: 'Live Meeting'
  },
  {
    web_id: '12-12-2022',
    date_time: '13-12-2022 10:00 AM',
    ref_id: '31231231',
    property_name: 'EMAAR',
    client_name: 'Cercie',
    email: 'lannister@gmail.com',
    mobile: '+3820983092',
    viewing_status: 'Live Meeting'
  }
];

function ScheduleViewingList() {
  return (
    <Page title="Schedule Viewing">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
}

ScheduleViewingList.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ScheduleViewingList;
