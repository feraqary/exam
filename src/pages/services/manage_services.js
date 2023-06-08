// material-ui
import { Grid, Box, Button } from '@mui/material';
import Image from 'next/image';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';

// ==============================|| Add Services ||============================== //

const ColumnHeaders = [
  {
    accessorKey: 'serial_no',
    header: 'Company Name'
  },

  {
    accessorKey: 'service_name',
    header: 'Standard'
  },
  {
    accessorKey: 'company_type',
    header: 'Featured'
  },
  {
    accessorKey: 'description',
    header: 'Premium'
  },
  {
    accessorKey: 'service_icon',
    header: 'Service Icon',
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Image src={row.original.service_icon} width={60} height={30} style={{ objectFit: 'contain' }} />
      </Box>
    )
  },

  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Button variant="contained" color="primary">
          View Service
        </Button>
        <Button variant="contained" color="primary">
          Edit Service
        </Button>
        <Button variant="contained" color="error">
          Delete
        </Button>
      </Box>
    )
  }
];

const data = [
  {
    serial_no: '1',
    sservice_name: 'Car Services',
    company_type: ' Car Care',
    description:
      'Car Oil Change Service, Engine & Gearbox, Suspension Service, Computer Diagnostics & More. Basic Service, Full Service and Major Car Services Abu Dhabi, Al Ain',
    service_icon: '/assets/images/company_logo/logo4.png'
  },
  {
    serial_no: '2',
    service_name: 'Car Services',
    company_type: ' Car Care',
    description:
      'Car Oil Change Service, Engine & Gearbox, Suspension Service, Computer Diagnostics & More. Basic Service, Full Service and Major Car Services Abu Dhabi, Al Ain',
    service_icon: '/assets/images/company_logo/logo4.png'
  },
  {
    serial_no: '3',
    service_name: 'Car Services',
    company_type: ' Car Care',
    description:
      'Car Oil Change Service, Engine & Gearbox, Suspension Service, Computer Diagnostics & More. Basic Service, Full Service and Major Car Services Abu Dhabi, Al Ain',
    service_icon: '/assets/images/company_logo/logo4.png'
  },
  {
    serial_no: '4',
    service_name: 'Car Services',
    company_type: ' Car Care',
    description:
      'Car Oil Change Service, Engine & Gearbox, Suspension Service, Computer Diagnostics & More. Basic Service, Full Service and Major Car Services Abu Dhabi, Al Ain',
    service_icon: '/assets/images/company_logo/logo4.png'
  },
  {
    serial_no: '5',
    service_name: 'Car Services',
    company_type: ' Car Care',
    description:
      'Car Oil Change Service, Engine & Gearbox, Suspension Service, Computer Diagnostics & More. Basic Service, Full Service and Major Car Services Abu Dhabi, Al Ain',
    service_icon: '/assets/images/company_logo/logo4.png'
  },
  {
    serial_no: '6',
    service_name: 'Car Services',
    company_type: ' Car Care',
    description:
      'Car Oil Change Service, Engine & Gearbox, Suspension Service, Computer Diagnostics & More. Basic Service, Full Service and Major Car Services Abu Dhabi, Al Ain',
    service_icon: '/assets/images/company_logo/logo4.png'
  },
  {
    serial_no: '7',
    service_name: 'Car Services',
    company_type: ' Car Care',
    description:
      'Car Oil Change Service, Engine & Gearbox, Suspension Service, Computer Diagnostics & More. Basic Service, Full Service and Major Car Services Abu Dhabi, Al Ain',
    service_icon: '/assets/images/company_logo/logo4.png'
  },
  {
    serial_no: '8',
    service_name: 'Car Services',
    company_type: ' Car Care',
    description:
      'Car Oil Change Service, Engine & Gearbox, Suspension Service, Computer Diagnostics & More. Basic Service, Full Service and Major Car Services Abu Dhabi, Al Ain',
    service_icon: '/assets/images/company_logo/logo4.png'
  },
  {
    serial_no: '9',
    service_name: 'Car Services',
    company_type: ' Car Care',
    description:
      'Car Oil Change Service, Engine & Gearbox, Suspension Service, Computer Diagnostics & More. Basic Service, Full Service and Major Car Services Abu Dhabi, Al Ain',
    service_icon: '/assets/images/company_logo/logo4.png'
  }
];

function ManageServices() {
  return (
    <Page title="Manage Services">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

ManageServices.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageServices;
