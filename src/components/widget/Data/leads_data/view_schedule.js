import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import { styled } from '@mui/material/styles';

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


];


const ScheduleViewing = () => {
  const columns = useMemo(
    () => [
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
      
    ],
    []
  );

  return <MaterialReactTable columns={columns} data={data} enableDensityToggle={false} initialState={{ density: 'compact' }} />;
};

export default ScheduleViewing;
