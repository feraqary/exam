import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box } from '@mui/material';
import Image from 'next/image';

const comp1 = '/assets/images/company_logo/logo1.png';
const comp2 = '/assets/images/company_logo/logo2.png';
const comp3 = '/assets/images/company_logo/logo3.png';
const comp4 = '/assets/images/company_logo/logo4.png';

const data = [
  {
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
    action: ' edit, multiple'
  },
  {
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
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyType: 'Broker Company',
    state: 'DUBAI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Arya Stark',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Winterfell',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Management Company',
    state: 'DUBAI',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
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
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyType: 'Broker Company',
    state: 'Sharjah',
    country: 'UAE',
    regId: 'PB192323',
    contactPerson: 'Cercie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyType: 'Marketing Company',
    state: 'Sharjah',
    country: 'UAE',
    regId: 'PA2831023',
    contactPerson: 'Arya Stark',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Winterfell',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Developer Company',
    state: 'Ajman',
    country: 'UAE',
    regId: 'PA283102',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Khidmah',
      companyLogo: '/assets/images/company_logo/logo1.png'
    },
    companyType: 'Developer Company',
    state: 'Texas',
    country: 'US',
    regId: 'PA2831023',
    contactPerson: 'Jamie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Forum',
      companyLogo: '/assets/images/company_logo/logo2.png'
    },
    companyType: 'Broker Company',
    state: 'Ajman',
    country: 'UAE',
    regId: 'PA283102',
    contactPerson: 'Cercie',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'Dubai Holding',
      companyLogo: '/assets/images/company_logo/logo3.png'
    },
    companyType: 'Marketing Company',
    state: 'Dubai',
    country: 'UAE',
    regId: 'PA283102',
    contactPerson: 'Arya Stark',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Winterfell',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  },
  {
    name: {
      companyName: 'BlueStone',
      companyLogo: '/assets/images/company_logo/logo4.png'
    },
    companyType: 'Developer Company',
    state: 'Virginia',
    country: 'USA',
    regId: 'PA283102',
    contactPerson: 'Joffery',
    email: 'new@gmail.com',
    phone: '+0192831-310',
    addedBy: 'Lannisters',
    subsDate: '2-12-2023',
    documents: ' uploaded',
    action: ' edit, multiple'
  }
];

const IntComp = () => {
  const columns = useMemo(
    () => [
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
      { accessorKey: 'phone', header: 'Phone' }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default IntComp;
