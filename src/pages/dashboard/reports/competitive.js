import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import Container from 'components/Elements/Container';

// material-ui
import { Grid } from '@mui/material';
import Table from 'components/Table/Table';
import { NormalAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';

export default function Competitive() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const ColumnHeaders = [
    {
      accessorKey: 'location',
      header: 'Location'
    },
    {
      accessorKey: 'EC',
      header: 'Exposure Comparison'
    },
    {
      accessorKey: 'UC',
      header: 'Unite Comaprison'
    },
    {
      accessorKey: 'lQ',
      header: 'Listing Quality'
    }
  ];
  return (
    <Page title="Reports">
      <Container title="Competitive" style={{ xs: 12 }}>
        <Grid container spacing={gridSpacing}>
          <NormalAutoCompleteSelector
            label="Country"
            placeholder="Select Country"
            options={['PK', 'UAE']}
            name="countrySelect"
            id="CountrySelect"
            labelObject="Country"
            style={{ xs: 12, lg: 4, md: 6 }}
          />
          <NormalAutoCompleteSelector
            label="State"
            placeholder="Select State"
            options={['PK', 'UAE']}
            name="countrySelect"
            id="CountrySelect"
            labelObject="Country"
            style={{ xs: 12, lg: 4, md: 6 }}
          />
          <NormalAutoCompleteSelector
            label="Companies"
            placeholder="Select Company"
            options={['PK', 'UAE']}
            name="countrySelect"
            id="CountrySelect"
            labelObject="Country"
            style={{ xs: 12, lg: 4, md: 6 }}
          />
        </Grid>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Table
              columnHeaders={ColumnHeaders}
              data={[]}
              //   loading={isLoading}
              pagination={pagination}
              //   setPagination={setPagination}
              //   isFetching={isFetching}
              //   rowCount={localProjectsData?.Total}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

Competitive.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
