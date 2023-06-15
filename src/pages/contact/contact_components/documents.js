import React, { useMemo, useState } from 'react';
// material-ui
import { Grid, InputLabel, FormControlLabel, TextField, Checkbox, Select, MenuItem, Button } from '@mui/material';

import { Box } from '@mui/material';
// project imports
import MaterialReactTable from 'material-react-table';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import InputText from 'components/widgets/TextInput';
import FileUpload from 'components/widgets/FileUpload';
import Selector from 'components/widgets/Selector';
import Container from 'components/Elements/Container';
import AutoCompleteSelector from 'components/widgets/AutoCompleteSelector';
import SubmitButton from 'components/Elements/SubmitButton';
import CompanyServices from 'components/Data/company_types_data/fetch_company_types';

const data = [
  {
    contact_id: '123',
    updated_date: '1/2/3',
    name: 'Minato',
    family_name: 'Uzumaki',
    mobile: '+9711234567',
    email: 'uzumaki@konoha.com'
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'contact_id',
    header: 'contact_id'
  },
  {
    accessorKey: 'updated_date',
    header: 'updated_date'
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
  return (
    <Page>
      <Grid container spacing={gridSpacing}>
        <Container title="Add Compnay Details" style={{ xs: 12, lg: 12 }}>
          <Grid container spacing={2} alignItems="center">
            <AutoCompleteSelector
              style={{ xs: 12, lg: 8, mb: 2 }}
              label="Category"
              id="category"
              options={['image', 'video', 'audio', 'fax', 'email']}
              placeholder={'select company category'}
              helperText={'please select company category...'}
              // value={serviceType}
              // setValue={setServiceType}
            />
            <Grid item xs={12} lg={4}>
              <FormControlLabel control={<Checkbox value={'i'} />} label="Mark as Private" labelPlacement="start" />
            </Grid>

            <FileUpload label="Upload Document" type="file" style={{ xs: 12, lg: 8 }} helperText="please upload document..." />

            <Grid item xs={12} lg={6}>
              <Button variant="contained">Add</Button>
            </Grid>
          </Grid>
        </Container>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}
