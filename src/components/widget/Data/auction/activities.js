import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

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

const AuctionActivitiesTable = () => {
  const columns = useMemo(
    () => [
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
        header: 'Unit Title'
      },
      {
        accessorKey: 'companyname',
        header: 'Company'
      },
      {
        accessorKey: 'activity',
        header: 'Activity'
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default AuctionActivitiesTable;
