// material-ui
import { Chip, Grid } from '@mui/material';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import KeyIcon from '@mui/icons-material/Key';
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
import { useDispatch } from 'react-redux';
import { getInternationalCompanies } from 'store/slices/company-section/action/company';

// ===========================|| International Company Managment list||=========================== //

const data = [
  {
    si_num: '1',
    name: {
      companyName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyType: 'Developer Company',
    state: 'ABU DHABI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Jamie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple',
    feature: 'Standard'
  },
  {
    si_num: '2',
    name: {
      companyName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyType: '261 Erdman Ford',
    state: 'OHIO',
    country: 'US',
    regId: 'PA2831023',
    contactPerson: 'Cercie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple',
    feature: 'Premium'
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'si_num',
    header: 'SI Number'
  },
  {
    accessorKey: 'feature',
    header: 'Featured',
    Cell: ({ renderedCellValue, row }) => <Chip label={row.original.feature} color="primary" variant="outlined" />
  },
  {
    accessorKey: 'name.companyName',
    header: 'Company Name'
  },
  {
    accessorKey: 'name.companyLogo',
    header: 'Company Logo',
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Image src={row.original.name.companyLogo} width={60} height={30} />
      </Box>
    )
  },
  {
    accessorKey: 'regId',
    header: ' Registration ID '
  },
  {
    accessorKey: 'state',
    header: ' State '
  },
  {
    accessorKey: 'companyType',
    header: ' Company Type'
  },
  {
    accessorKey: 'country',
    header: ' Country'
  },
  {
    accessorKey: 'contactPerson',
    header: ' Contact Person'
  },
  {
    accessorKey: 'subsDate',
    header: ' Subscription Date'
  },

  {
    accessorKey: 'addedBy',
    header: 'Added By'
  },
  {
    accessorKey: 'contactPerson',
    header: 'Contact Person'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  { accessorKey: 'phone', header: 'Phone' },

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
        <AqaryButton variant="contained">Edit </AqaryButton>
        <Button color="primary" variant="contained" startIcon={<AssignmentIcon />}>
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
        <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
          Block
        </Button>
        <Button variant="contained" startIcon={<KeyIcon />}>
          Reset
        </Button>
      </Box>
    )
  }
];

const IntCompData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInternationalCompanies());
  }, []);
  return (
    <Page title="International Company List">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={data} />
        </Grid>
      </Grid>
    </Page>
  );
};

IntCompData.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default IntCompData;
