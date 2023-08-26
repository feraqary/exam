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
        username: 'Khidmah',
        profile: '/assets/images/company_logo/logo1.png'
      },
      companyname: 'Developer Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 2,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Forum',
        profile: '/assets/images/company_logo/logo2.png'
      },
      companyname: '261 Erdman Ford',
      title: 'US',
      sino: 1,
      localknowledge: 3,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Dubai Holding',
        profile: '/assets/images/company_logo/logo3.png'
      },
      companyname: 'Broker Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 2,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 4,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'BlueStone',
        profile: '/assets/images/company_logo/logo4.png'
      },
      companyname: 'Management Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 5,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Khidmah',
        profile: '/assets/images/company_logo/logo1.png'
      },
      companyname: 'Developer Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 4,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Forum',
        profile: '/assets/images/company_logo/logo2.png'
      },
      companyname: 'Broker Company',
      title: 'UAE',
      sino: 4,
      localknowledge: 3,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Dubai Holding',
        profile: '/assets/images/company_logo/logo3.png'
      },
      companyname: 'Marketing Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 2,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 4,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'BlueStone',
        profile: '/assets/images/company_logo/logo4.png'
      },
      companyname: 'Developer Company',
      title: 'UAE',
      sino: 5,
      localknowledge: 5,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Khidmah',
        profile: '/assets/images/company_logo/logo1.png'
      },
      companyname: 'Developer Company',
      title: 'US',
      sino: 1,
      localknowledge: 4,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Forum',
        profile: '/assets/images/company_logo/logo2.png'
      },
      companyname: 'Broker Company',
      title: 'UAE',
      sino: 5,
      localknowledge: 3,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Dubai Holding',
        profile: '/assets/images/company_logo/logo3.png'
      },
      companyname: 'Marketing Company',
      title: 'UAE',
      sino: 5,
      localknowledge: 2,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 4,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'BlueStone',
        profile: '/assets/images/company_logo/logo4.png'
      },
      companyname: 'Developer Company',
      title: 'USA',
      sino: 5,
      localknowledge: 5,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Khidmah',
        profile: '/assets/images/company_logo/logo1.png'
      },
      companyname: 'Developer Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 4,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Forum',
        profile: '/assets/images/company_logo/logo2.png'
      },
      companyname: '261 Erdman Ford',
      title: 'US',
      sino: 1,
      localknowledge: 3,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Dubai Holding',
        profile: '/assets/images/company_logo/logo3.png'
      },
      companyname: 'Broker Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 2,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 4,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'BlueStone',
        profile: '/assets/images/company_logo/logo4.png'
      },
      companyname: 'Management Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 5,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Khidmah',
        profile: '/assets/images/company_logo/logo1.png'
      },
      companyname: 'Developer Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 4,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Forum',
        profile: '/assets/images/company_logo/logo2.png'
      },
      companyname: 'Broker Company',
      title: 'UAE',
      sino: 4,
      localknowledge: 3,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Dubai Holding',
        profile: '/assets/images/company_logo/logo3.png'
      },
      companyname: 'Marketing Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 2,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 4,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'BlueStone',
        profile: '/assets/images/company_logo/logo4.png'
      },
      companyname: 'Developer Company',
      title: 'UAE',
      sino: 5,
      localknowledge: 5,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Khidmah',
        profile: '/assets/images/company_logo/logo1.png'
      },
      companyname: 'Developer Company',
      title: 'US',
      sino: 1,
      localknowledge: 4,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Forum',
        profile: '/assets/images/company_logo/logo2.png'
      },
      companyname: 'Broker Company',
      title: 'UAE',
      sino: 5,
      localknowledge: 3,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Dubai Holding',
        profile: '/assets/images/company_logo/logo3.png'
      },
      companyname: 'Marketing Company',
      title: 'UAE',
      sino: 5,
      localknowledge: 2,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 4,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'BlueStone',
        profile: '/assets/images/company_logo/logo4.png'
      },
      companyname: 'Developer Company',
      title: 'USA',
      sino: 5,
      localknowledge: 5,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Khidmah',
        profile: '/assets/images/company_logo/logo1.png'
      },
      companyname: 'Developer Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 4,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Forum',
        profile: '/assets/images/company_logo/logo2.png'
      },
      companyname: '261 Erdman Ford',
      title: 'US',
      sino: 1,
      localknowledge: 3,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Dubai Holding',
        profile: '/assets/images/company_logo/logo3.png'
      },
      companyname: 'Broker Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 2,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 4,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'BlueStone',
        profile: '/assets/images/company_logo/logo4.png'
      },
      companyname: 'Management Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 5,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Khidmah',
        profile: '/assets/images/company_logo/logo1.png'
      },
      companyname: 'Developer Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 4,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Forum',
        profile: '/assets/images/company_logo/logo2.png'
      },
      companyname: 'Broker Company',
      title: 'UAE',
      sino: 4,
      localknowledge: 3,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Dubai Holding',
        profile: '/assets/images/company_logo/logo3.png'
      },
      companyname: 'Marketing Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 2,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 4,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'BlueStone',
        profile: '/assets/images/company_logo/logo4.png'
      },
      companyname: 'Developer Company',
      title: 'UAE',
      sino: 5,
      localknowledge: 5,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Khidmah',
        profile: '/assets/images/company_logo/logo1.png'
      },
      companyname: 'Developer Company',
      title: 'US',
      sino: 1,
      localknowledge: 4,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Forum',
        profile: '/assets/images/company_logo/logo2.png'
      },
      companyname: 'Broker Company',
      title: 'UAE',
      sino: 5,
      localknowledge: 3,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Dubai Holding',
        profile: '/assets/images/company_logo/logo3.png'
      },
      companyname: 'Marketing Company',
      title: 'UAE',
      sino: 5,
      localknowledge: 2,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 4,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'BlueStone',
        profile: '/assets/images/company_logo/logo4.png'
      },
      companyname: 'Developer Company',
      title: 'USA',
      sino: 5,
      localknowledge: 5,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Khidmah',
        profile: '/assets/images/company_logo/logo1.png'
      },
      companyname: 'Developer Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 4,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Forum',
        profile: '/assets/images/company_logo/logo2.png'
      },
      companyname: '261 Erdman Ford',
      title: 'US',
      sino: 1,
      localknowledge: 3,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Dubai Holding',
        profile: '/assets/images/company_logo/logo3.png'
      },
      companyname: 'Broker Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 2,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 4,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'BlueStone',
        profile: '/assets/images/company_logo/logo4.png'
      },
      companyname: 'Management Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 5,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Khidmah',
        profile: '/assets/images/company_logo/logo1.png'
      },
      companyname: 'Developer Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 4,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Forum',
        profile: '/assets/images/company_logo/logo2.png'
      },
      companyname: 'Broker Company',
      title: 'UAE',
      sino: 4,
      localknowledge: 3,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Dubai Holding',
        profile: '/assets/images/company_logo/logo3.png'
      },
      companyname: 'Marketing Company',
      title: 'UAE',
      sino: 1,
      localknowledge: 2,
      email: 'new@gmail.com',
      processexpertise: 3,
      responsiveness: 4,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'BlueStone',
        profile: '/assets/images/company_logo/logo4.png'
      },
      companyname: 'Developer Company',
      title: 'UAE',
      sino: 5,
      localknowledge: 5,
      email: 'new@gmail.com',
      processexpertise: '3',
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Khidmah',
        profile: '/assets/images/company_logo/logo1.png'
      },
      companyname: 'Developer Company',
      title: 'US',
      sino: 1,
      localknowledge: 4,
      email: 'new@gmail.com',
      processexpertise: '3',
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Forum',
        profile: '/assets/images/company_logo/logo2.png'
      },
      companyname: 'Broker Company',
      title: 'UAE',
      sino: 5,
      localknowledge: 3,
      email: 'new@gmail.com',
      processexpertise: '3',
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'Dubai Holding',
        profile: '/assets/images/company_logo/logo3.png'
      },
      companyname: 'Marketing Company',
      title: 'UAE',
      sino: 5,
      localknowledge: 2,
      email: 'new@gmail.com',
      processexpertise: '3',
      responsiveness: 4,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    },
    {
      name: {
        username: 'BlueStone',
        profile: '/assets/images/company_logo/logo4.png'
      },
      companyname: 'Developer Company',
      title: 'USA',
      sino: 5,
      localknowledge: 5,
      email: 'new@gmail.com',
      processexpertise: '3',
      responsiveness: 2,
      date: '2-12-2023',
      designation: ' uploaded',
      activity: ' edit, multiple'
    }
  ];
const ColumnHeaders = [
    {
      accessorKey: 'sino',
      header: 'SI.NO'
    },
    {
      accessorKey: 'date',
      header: 'Date'
    },
    {
      accessorKey: 'title',
      header: 'Title'
    },
    {
      accessorKey: 'activity',
      header: 'Activity'
    }
  ];
function BannerActivitiesTable() {

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
              rowCount={data.length} />
          </Grid>
        </Grid>
      </Page>
    );
  }
  
  BannerActivitiesTable.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };
  
  export default BannerActivitiesTable;