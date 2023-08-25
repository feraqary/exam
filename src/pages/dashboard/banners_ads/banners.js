// material-ui
import { Grid, Button, Box } from '@mui/material';
import Image from 'next/image';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import { useState } from 'react';
import Table from 'components/Table/Table';

// ==============================|| Banners datatable ||============================== //

const data = [
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'US',
    subtitle: 'US',
    refno: 'PA2831023',
    reference: 'PA2831023',
    type: 'Jamie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    developerCompany: 'Broker Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Cercie',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    developerCompany: 'Marketing Company',
    featured: false,
    title: 'UAE',
    subtitle: 'UAE',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Arya Stark',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Winterfell',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  },
  {
    name: {
      projectName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    developerCompany: 'Developer Company',
    featured: false,
    title: 'USA',
    subtitle: 'USA',
    refno: 'PA283102',
    reference: 'PA283102',
    type: 'Joffery',
    endis: 'new@gmail.com',
    price: '+0192831-310',
    target: 'Lannisters',
    type: '2-12-2023',
    endtime: '2-12-2023',
    enddate: '2-12-2023',
    lifestyle: ' uploaded',
    action: ' edit, multiple',
    quality: 25,
    floors: 2430,
    slno: 4
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'title',
    header: 'Title'
  },
  {
    accessorKey: 'subtitle',
    header: 'Sub Title'
  },
  {
    accessorKey: 'enddate',
    header: 'End Date'
  },
  {
    accessorKey: 'endtime',
    header: 'End Time'
  },
  {
    accessorKey: 'target',
    header: 'Target'
  },
  {
    accessorKey: 'name.companyLogo',
    header: 'Image',
    Cell: ({ cell }) => <Image src={cell.getValue()} width={60} height={30} style={{ objectFit: 'contain' }} />
  },

  {
    accessorKey: 'type',
    header: 'Banner Type'
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
          Edit
        </Button>
        <Button color="primary" variant="contained">
          Delete
        </Button>
        <Button variant="contained" color="primary">
          Published
        </Button>
      </Box>
    )
  }
];

function Banners() {

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  return (
    <Page title="Banners">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table  
            data={data}
            columnHeaders={ColumnHeaders}
            loading={false}
            pagination={pagination}
            setPagination={setPagination}
            isFetching={false}
            rowCount={data.length} 
          />
        </Grid>
      </Grid>
    </Page>
  );
}

Banners.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Banners;
