import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
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


const VideoRequest = () => {
  const columns = useMemo(
    () => [
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
      },

      
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default VideoRequest;
