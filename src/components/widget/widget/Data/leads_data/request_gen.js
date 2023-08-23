import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

const data = [
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },

  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },

  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },

  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },

  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },

  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  },
  {
    Date: '12-12-2022',
    client_name: '13-12-2022 10:00 AM',
    company_name: 'Clean Pro',
    email: '31231231',
    phone: 'EMAAR',
    message: 'lannister@gmail.com',
    mobile: '+3820983092',
  }


];


const GenRequest = () => {
  const columns = useMemo(
    () => [
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
      
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default GenRequest;
