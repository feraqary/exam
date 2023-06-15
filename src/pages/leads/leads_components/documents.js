import React from 'react';
// material-ui
import { Grid, InputLabel, FormControlLabel, TextField, Checkbox, Button } from '@mui/material';

// project imports
import MainCard from 'components/ui-component/cards/MainCard';
import MaterialReactTable from 'material-react-table';
import Selector from 'components/InputArea/Selector';
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import { useRef } from 'react';
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
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'contact_id',
    header: 'Open View'
  },
  {
    accessorKey: 'category',
    header: 'Category'
  },
  {
    accessorKey: 'title',
    header: 'Title'
  },
  {
    accessorKey: 'entered_on',
    header: 'Entered On'
  },
  {
    accessorKey: 'entered-by',
    header: 'Entered By'
  },
  {
    accessorKey: 'Expiry Date',
    header: 'Expiry Date'
  },
  {
    accessorKey: 'Description',
    header: 'Description'
  },
  {
    accessorKey: 'attachment',
    header: 'Attachment'
  }
];

export default function Documents() {
  const ref = useRef(null);

  return (
    <>
      <MainCard title="Add Documents">
        <Grid container spacing={2} alignItems="flex-start">
          <Selector label="Category" options={['Email', 'Video', 'Fax', 'Paper', 'Image']} style={{ xs: 12, lg: 6 }} />
          <InputText
            label="Title"
            placeholder="Document Title"
            helperText="Please enter document title"
            type="text"
            style={{ xs: 12, lg: 6 }}
          />

          <Grid item xs={12} lg={6}>
            <FormControlLabel control={<Checkbox value={'i'} />} label="Mark as Private" labelPlacement="end" />
          </Grid>

          <FileUpload helperText="Please upload document" label="Upload Document" style={{ xs: 12, lg: 8 }} ref={ref} type="file" />

          <Grid item xs={12} lg={6}>
            <Button variant="contained">Add</Button>
          </Grid>
        </Grid>
      </MainCard>

      <Table columnHeaders={ColumnHeaders} data={data} />
    </>
  );
}
