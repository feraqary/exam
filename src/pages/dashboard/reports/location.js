import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState, useMemo } from 'react';
import Container from 'components/Elements/Container';

// material-ui
import { Grid } from '@mui/material';
import Table from 'components/Table/Table';
import InputText from 'components/InputArea/TextInput';
import { NormalAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';

const Insights = () => {
  return (
    <Container title="Location Insights" style={{ xs: 12 }}>
      <Grid container spacing={gridSpacing}>
        <NormalAutoCompleteSelector
          label="Country"
          placeholder="Select Country"
          options={['PK', 'UAE']}
          name="countrySelect"
          id="CountrySelect"
          labelObject="Country"
          style={{ xs: 12, lg: 6 }}
        />
        <NormalAutoCompleteSelector
          label="City/State"
          placeholder="Select City/State"
          options={['Ajman', 'Dubai']}
          name="selectCity"
          id="CountrySelect"
          labelObject="City"
          style={{ xs: 12, lg: 6 }}
        />
        <NormalAutoCompleteSelector
          label="Community"
          placeholder="Select Community"
          options={['Standard', 'Luxury']}
          name="countrySelect"
          id="CountrySelect"
          labelObject="Country"
          style={{ xs: 12, lg: 6 }}
        />
        <NormalAutoCompleteSelector
          label="Sub Community"
          placeholder="Select Sub Community"
          options={['Affor', 'Dudfdbai']}
          name="countrySelect"
          id="CountrySelect"
          labelObject="Country"
          style={{ xs: 12, lg: 6 }}
        />
        <NormalAutoCompleteSelector
          label="Type"
          placeholder="Select Type"
          options={['rich', 'poor']}
          name="countrySelect"
          id="CountrySelect"
          labelObject="Country"
          style={{ xs: 12, lg: 6 }}
        />
        <NormalAutoCompleteSelector
          label="Category"
          placeholder="Select Category"
          options={['Local', 'International']}
          name="countrySelect"
          id="CountrySelect"
          labelObject="Country"
          style={{ xs: 12, lg: 6 }}
        />
        <NormalAutoCompleteSelector
          label="Beds"
          placeholder="Select Beds"
          options={['2BH', '3BH']}
          name="countrySelect"
          id="CountrySelect"
          labelObject="Country"
          style={{ xs: 12, lg: 6 }}
        />
      </Grid>
    </Container>
  );
};

const PopularUnits = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const ColumnHeaders = [
    {
      accessorKey: 'serialNo',
      header: 'Serial No'
    },
    {
      accessorKey: 'Name',
      header: 'Property Name'
    },
    {
      accessorKey: 'visits',
      header: 'Visits'
    },
    {
      accessorKey: 'leads',
      header: 'Leads'
    }
  ];
  return (
    <Container title="Popular Units" style={{ xs: 12 }} sx={{ mt: 2 }}>
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
  );
};

const PriceOfUnits = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const ColumnHeaders = [
    {
      accessorKey: 'serialNo',
      header: 'Serial No'
    },
    {
      accessorKey: 'type',
      header: 'Unit Type'
    },
    {
      accessorKey: 'averagePrice',
      header: 'Average Price'
    },
    {
      accessorKey: 'Maximum',
      header: 'Maximum'
    },
    {
      accessorKey: 'price',
      header: 'Price'
    }
  ];
  return (
    <Container title="Average Price of Units" style={{ xs: 12 }} sx={{ mt: 2 }}>
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
  );
};
const Statistics = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const ColumnHeaders = [
    {
      accessorKey: 'serialNo',
      header: 'Serial No'
    },
    {
      accessorKey: 'type',
      header: 'Unit Type'
    },
    {
      accessorKey: 'averagePrice',
      header: 'Average Price'
    },
    {
      accessorKey: 'Maximum',
      header: 'Maximum'
    },
    {
      accessorKey: 'price',
      header: 'Price'
    }
  ];
  return (
    <Container title="Building Statistics" style={{ xs: 12 }} sx={{ mt: 2 }}>
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
  );
};

export default function Location() {
  return (
    <Page title="Location">
      <Insights />
      <PopularUnits />
      <PriceOfUnits />
      <Statistics />
    </Page>
  );
}

Location.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
