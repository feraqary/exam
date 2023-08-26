import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const data = [
  {
    name: {
      companyTypeName: 'Developer Company',
      companyTypeLogo: '/assets/images/company_logo/logo1.png'
    },
    description:
      'Developer company is one that is focused on delivering value to software developers/software engineers. A developer company doesnt just aim to be a great business and increase revenue, but also be a pillar of the software community'
  },
  {
    name: {
      companyTypeName: 'Broker Company',
      companyTypeLogo: '/assets/images/company_logo/logo2.png'
    },
    description:
      'Brokerage firms act as a liaison between their clients and the stock exchange. Their primary function is to buy and sell financial products, including stocks, on behalf of their clients.'
  },
  {
    name: {
      companyTypeName: 'Management Company',
      companyTypeLogo: '/assets/images/company_logo/logo3.png'
    },
    description: 'Management company is set up to manage a group of properties, a unit trust, an investment fund'
  },
  {
    name: {
      companyTypeName: 'Marketing Company',
      companyTypeLogo: '/assets/images/company_logo/logo3.png'
    },
    description:
      'A marketing firm is any company that assists a business with creating, implementing, and sustaining marketing strategies. These specialized firms are outside contractors that businesses of any size and in any industry can hire to improve their marketing efforts'
  },
  {
    name: {
      companyTypeName: 'Developer Company',
      companyTypeLogo: '/assets/images/company_logo/logo1.png'
    },
    description:
      'Developer company is one that is focused on delivering value to software developers/software engineers. A developer company doesnt just aim to be a great business and increase revenue, but also be a pillar of the software community'
  },
  {
    name: {
      companyTypeName: 'Broker Company',
      companyTypeLogo: '/assets/images/company_logo/logo2.png'
    },
    description:
      'Brokerage firms act as a liaison between their clients and the stock exchange. Their primary function is to buy and sell financial products, including stocks, on behalf of their clients.'
  },
  {
    name: {
      companyTypeName: 'Management Company',
      companyTypeLogo: '/assets/images/company_logo/logo3.png'
    },
    description: 'Management company is set up to manage a group of properties, a unit trust, an investment fund'
  },
  {
    name: {
      companyTypeName: 'Marketing Company',
      companyTypeLogo: '/assets/images/company_logo/logo3.png'
    },
    description:
      'A marketing firm is any company that assists a business with creating, implementing, and sustaining marketing strategies. These specialized firms are outside contractors that businesses of any size and in any industry can hire to improve their marketing efforts'
  },
  {
    name: {
      companyTypeName: 'Developer Company',
      companyTypeLogo: '/assets/images/company_logo/logo1.png'
    },
    description:
      'Developer company is one that is focused on delivering value to software developers/software engineers. A developer company doesnt just aim to be a great business and increase revenue, but also be a pillar of the software community'
  },
  {
    name: {
      companyTypeName: 'Broker Company',
      companyTypeLogo: '/assets/images/company_logo/logo2.png'
    },
    description:
      'Brokerage firms act as a liaison between their clients and the stock exchange. Their primary function is to buy and sell financial products, including stocks, on behalf of their clients.'
  },
  {
    name: {
      companyTypeName: 'Management Company',
      companyTypeLogo: '/assets/images/company_logo/logo3.png'
    },
    description: 'Management company is set up to manage a group of properties, a unit trust, an investment fund'
  },
  {
    name: {
      companyTypeName: 'Marketing Company',
      companyTypeLogo: '/assets/images/company_logo/logo3.png'
    },
    description:
      'A marketing firm is any company that assists a business with creating, implementing, and sustaining marketing strategies. These specialized firms are outside contractors that businesses of any size and in any industry can hire to improve their marketing efforts'
  },
  {
    name: {
      companyTypeName: 'Developer Company',
      companyTypeLogo: '/assets/images/company_logo/logo1.png'
    },
    description:
      'Developer company is one that is focused on delivering value to software developers/software engineers. A developer company doesnt just aim to be a great business and increase revenue, but also be a pillar of the software community'
  },
  {
    name: {
      companyTypeName: 'Broker Company',
      companyTypeLogo: '/assets/images/company_logo/logo2.png'
    },
    description:
      'Brokerage firms act as a liaison between their clients and the stock exchange. Their primary function is to buy and sell financial products, including stocks, on behalf of their clients.'
  },
  {
    name: {
      companyTypeName: 'Management Company',
      companyTypeLogo: '/assets/images/company_logo/logo3.png'
    },
    description: 'Management company is set up to manage a group of properties, a unit trust, an investment fund'
  },
  {
    name: {
      companyTypeName: 'Marketing Company',
      companyTypeLogo: '/assets/images/company_logo/logo3.png'
    },
    description:
      'A marketing firm is any company that assists a business with creating, implementing, and sustaining marketing strategies. These specialized firms are outside contractors that businesses of any size and in any industry can hire to improve their marketing efforts'
  },
  {
    name: {
      companyTypeName: 'Developer Company',
      companyTypeLogo: '/assets/images/company_logo/logo1.png'
    },
    description:
      'Developer company is one that is focused on delivering value to software developers/software engineers. A developer company doesnt just aim to be a great business and increase revenue, but also be a pillar of the software community'
  },
  {
    name: {
      companyTypeName: 'Broker Company',
      companyTypeLogo: '/assets/images/company_logo/logo2.png'
    },
    description:
      'Brokerage firms act as a liaison between their clients and the stock exchange. Their primary function is to buy and sell financial products, including stocks, on behalf of their clients.'
  },
  {
    name: {
      companyTypeName: 'Management Company',
      companyTypeLogo: '/assets/images/company_logo/logo3.png'
    },
    description: 'Management company is set up to manage a group of properties, a unit trust, an investment fund'
  },
  {
    name: {
      companyTypeName: 'Marketing Company',
      companyTypeLogo: '/assets/images/company_logo/logo3.png'
    },
    description:
      'A marketing firm is any company that assists a business with creating, implementing, and sustaining marketing strategies. These specialized firms are outside contractors that businesses of any size and in any industry can hire to improve their marketing efforts'
  }
];

const TypeComp = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.companyTypeLogo',
        header: 'Company Logo',
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Image src={row.original.name.companyTypeLogo} width={60} height={30} />
          </Box>
        )
      },
      {
        accessorKey: 'name.companyTypeName',
        header: 'Company Type'
      },

      {
        accessorKey: 'description',
        header: 'Description'
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
            <Button variant="contained" color="primary" startIcon={<EditIcon />}>
              Edit
            </Button>
            <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
              Block
            </Button>
          </Box>
        )
      }
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default TypeComp;
