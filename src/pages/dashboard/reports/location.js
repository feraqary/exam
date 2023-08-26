import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState, useMemo } from 'react';
import Container from 'components/Elements/Container';
import { Formik } from 'formik';
import * as Yup from 'yup';
// material-ui
import { Grid } from '@mui/material';
import Table from 'components/Table/Table';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import SatisfactionChartCard from 'components/widget/widget/Chart/SatisfactionChartCard';
import { objectValidator } from 'utils/formik-validations';

const validationSchema = Yup.object({
  country: objectValidator('Mandatory selection', true),
  state: objectValidator('Mandatory selection', true),
  community: objectValidator('Mandatory selection', true),
  subCommunity: objectValidator('Mandatory selection', true),
  type: objectValidator('Mandatory selection', true),
  category: objectValidator('Mandatory selection', true),
  beds: objectValidator('Mandatory selection', true)
});

const Insights = () => {
  return (
    <Container title="Location Insights" style={{ xs: 12 }}>
      <Formik
        initialValues={{
          country: '',
          state: '',
          community: '',
          subCommunity: '',
          type: '',
          category: '',
          beds: ''
        }}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Grid container spacing={gridSpacing}>
            <AutoCompleteSelector
              label="Country"
              placeholder="Select Country"
              options={['PK', 'UAE']}
              name="country"
              id="country"
              labelObject="Country"
              style={{ xs: 12, lg: 6 }}
            />
            <AutoCompleteSelector
              label="City/State"
              placeholder="Select City/State"
              options={['Ajman', 'Dubai']}
              name="state"
              id="state"
              labelObject="City"
              style={{ xs: 12, lg: 6 }}
            />
            <AutoCompleteSelector
              label="Community"
              placeholder="Select Community"
              options={['Standard', 'Luxury']}
              name="community"
              id="community"
              labelObject="Country"
              style={{ xs: 12, lg: 6 }}
            />
            <AutoCompleteSelector
              label="Sub Community"
              placeholder="Select Sub Community"
              options={['Affor', 'Dudfdbai']}
              name="subCommunity"
              id="subCommunity"
              labelObject="Country"
              style={{ xs: 12, lg: 6 }}
            />
            <AutoCompleteSelector
              label="Type"
              placeholder="Select Type"
              options={['rich', 'poor']}
              name="type"
              id="type"
              labelObject="Country"
              style={{ xs: 12, lg: 6 }}
            />
            <AutoCompleteSelector
              label="Category"
              placeholder="Select Category"
              options={['Local', 'International']}
              name="category"
              id="category"
              labelObject="Country"
              style={{ xs: 12, lg: 6 }}
            />
            <AutoCompleteSelector
              label="Beds"
              placeholder="Select Beds"
              options={['2BH', '3BH']}
              name="beds"
              id="beds"
              labelObject="Country"
              style={{ xs: 12, lg: 6 }}
            />
          </Grid>
        )}
      </Formik>
      {/* Pie Charts */}

      <Grid container spacing={2}>
        <Grid item lg={6} xs={12}>
          <SatisfactionChartCard
            chartTitle="Units Selling"
            chartData={{
              options: {
                annotaions: 'gdasd',
                chart: {
                  type: 'pie',
                  height: '250px'
                },
                labels: ['Leads', 'Visits', 'Units']
              },
              series: [30, 50, 10]
            }}
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <SatisfactionChartCard
            chartTitle="Daily Visits"
            chartData={{
              options: {
                annotaions: 'gdasd',
                chart: {
                  type: 'pie',
                  height: '250px'
                },
                labels: ['Leads', 'Visits', 'Units']
              },
              series: [30, 50, 10]
            }}
          />
        </Grid>
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
      accessorKey: 'name',
      header: 'Property Name'
    },
    {
      accessorKey: 'd',
      header: 'No of Floors'
    },
    {
      accessorKey: 'd',
      header: 'No of Units'
    },
    {
      accessorKey: 'dd',
      header: 'Built up area'
    },
    {
      accessorKey: 'dd',
      header: 'Plot Area'
    },
    {
      accessorKey: 'sdd',
      header: 'Cross Build'
    },
    {
      accessorKey: 'x',
      header: 'Years'
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
