import React from 'react';

// project imports
import Table from 'components/Table/Table';

const data = [
  {
    last_updated: '123',
    reference: '1/2/3',
    community: 'Minato',
    property: 'Uzumaki',
    unit_type: '+9711234567',
    unit_no: 'uzumaki@konoha.com',
    model: 'new',
    can_view: 'new',
    area: 'new',
    selling_price: 'new',
    listing_agent: 'new',
    bedrooms: 'new',
    permit_number: 'new',
    seller_name: 'new',
    seller_phone: 'new',
    seller_ref: 'new'
  },
  {
    last_updated: '123',
    reference: '1/2/3',
    community: 'Minato',
    property: 'Uzumaki',
    unit_type: '+9711234567',
    unit_no: 'uzumaki@konoha.com',
    model: 'new',
    can_view: 'new',
    area: 'new',
    selling_price: 'new',
    listing_agent: 'new',
    bedrooms: 'new',
    permit_number: 'new',
    seller_name: 'new',
    seller_phone: 'new',
    seller_ref: 'new'
  },
  {
    last_updated: '123',
    reference: '1/2/3',
    community: 'Minato',
    property: 'Uzumaki',
    unit_type: '+9711234567',
    unit_no: 'uzumaki@konoha.com',
    model: 'new',
    can_view: 'new',
    area: 'new',
    selling_price: 'new',
    listing_agent: 'new',
    bedrooms: 'new',
    permit_number: 'new',
    seller_name: 'new',
    seller_phone: 'new',
    seller_ref: 'new'
  },
  {
    last_updated: '123',
    reference: '1/2/3',
    community: 'Minato',
    property: 'Uzumaki',
    unit_type: '+9711234567',
    unit_no: 'uzumaki@konoha.com',
    model: 'new',
    can_view: 'new',
    area: 'new',
    selling_price: 'new',
    listing_agent: 'new',
    bedrooms: 'new',
    permit_number: 'new',
    seller_name: 'new',
    seller_phone: 'new',
    seller_ref: 'new'
  },
  {
    last_updated: '123',
    reference: '1/2/3',
    community: 'Minato',
    property: 'Uzumaki',
    unit_type: '+9711234567',
    unit_no: 'uzumaki@konoha.com',
    model: 'new',
    can_view: 'new',
    area: 'new',
    selling_price: 'new',
    listing_agent: 'new',
    bedrooms: 'new',
    permit_number: 'new',
    seller_name: 'new',
    seller_phone: 'new',
    seller_ref: 'new'
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'ut',
    header: 'Last Updated'
  },
  {
    accessorKey: 'matches',
    header: 'References'
  },
  {
    accessorKey: 'lead_no',
    header: 'Community'
  },
  {
    accessorKey: 'lead_type',
    header: 'Property'
  },
  {
    accessorKey: 'community',
    header: 'Unit Type'
  },
  {
    accessorKey: 'agent',
    header: 'Unit No'
  },

  {
    accessorKey: 'status',
    header: 'Model'
  },
  {
    accessorKey: 'status',
    header: 'Can View'
  },
  {
    accessorKey: 'status',
    header: 'Area'
  },
  {
    accessorKey: 'status',
    header: 'Selling Price'
  },
  {
    accessorKey: 'status',
    header: 'Listing Agent'
  },
  {
    accessorKey: 'status',
    header: 'Bedrooms'
  },
  {
    accessorKey: 'status',
    header: 'Permit Number'
  },
  {
    accessorKey: 'status',
    header: 'Seller Reference Number'
  },
  {
    accessorKey: 'status',
    header: 'Seller Name'
  },
  {
    accessorKey: 'status',
    header: 'Seller Phone Number'
  }
];

export default function Leads() {
  return <Table columnHeaders={ColumnHeaders} data={data} />;
}
