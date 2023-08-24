import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import Container from 'components/Elements/Container';
import CustomDateTime from 'components/InputArea/CustomDateTime';

// material-ui
import { Grid, Typography } from '@mui/material';
import Table from 'components/Table/Table';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import SatisfactionChartCard from 'components/widget/widget/Chart/SatisfactionChartCard';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { dateValidator, objectValidator } from 'utils/formik-validations';

const validationSchema = Yup.object({
  date: dateValidator('Mandatory selection', true),
  country: objectValidator('Mandatory selection', true),
  state: objectValidator('Mandatory selection', true),
  community: objectValidator('Mandatory selection', true),
  subCommunity: objectValidator('Mandatory selection', true),
  projects: objectValidator('Mandatory selection', true),
  category: objectValidator('Mandatory selection', true),
  beds: objectValidator('Mandatory selection', true),
  price: objectValidator('Mandatory selection', true),
  transactionType: objectValidator('Mandatory selection', true)
});
export default function Transactions() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const chartDummy = {
    series: [
      {
        name: 'Money',
        data: [10, 41, 25, 51, 45, 35, 85, 78, 95, 78]
      },
      {
        name: 'Sales',
        data: [50, 21, 15, 81, 75, 85, 35, 28, 55, 18]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: true
        }
      },
      dataLables: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Transaction Valume',
        align: 'left'
      },
      grid: {
        rows: {
          colors: ['#fefefe', 'transparent']
        }
      },

      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
      }
    }
  };

  const ColumnHeaders = [
    {
      accessorKey: 'serialNo',
      header: '#'
    },
    {
      accessorKey: 'Name',
      header: 'Location'
    },
    {
      accessorKey: 'visits',
      header: 'Type'
    },
    {
      accessorKey: 'leads',
      header: 'Sale Price'
    },
    {
      accessorKey: 'leads',
      header: 'Category'
    },
    {
      accessorKey: 'leads',
      header: 'Bed'
    },
    {
      accessorKey: 'leads',
      header: 'Area SQFT'
    },
  ];

  return (
    <Page title="Transactions">
      <Container title="Transactions" style={{ xs: 12 }}>
        <Formik
          initialValues={{
            date: '',
            country: '',
            state: '',
            community: '',
            subCommunity: '',
            projects: '',
            category: '',
            beds: '',
            price: '',
            transactionType: ''
          }}
          validationSchema={validationSchema}
        >
          {(props) => (
            <>
              <Grid container spacing={gridSpacing}>
                <CustomDateTime
                  helperInfo
                  style={{ xs: 12, lg: 4 }}
                  name="date"
                  id="date"
                  label="Transaction Date"
                  helperText="Please enter the date"
                  required={true}
                />
              </Grid>
              <Grid container spacing={gridSpacing} sx={{ mt: 0 }}>
                <AutoCompleteSelector
                  placeholder="Country"
                  options={['PK', 'UAE']}
                  name="country"
                  id="country"
                  labelObject="Country"
                  style={{ xs: 12, lg: 4, md: 6 }}
                />
                <AutoCompleteSelector
                  placeholder="State"
                  options={['PK', 'UAE']}
                  name="state"
                  id="state"
                  labelObject="Country"
                  style={{ xs: 12, lg: 4, md: 6 }}
                />
                <AutoCompleteSelector
                  placeholder="Community"
                  options={['PK', 'UAE']}
                  name="community"
                  id="community"
                  labelObject="Country"
                  style={{ xs: 12, lg: 4, md: 6 }}
                />
                <AutoCompleteSelector
                  placeholder="Sub Community"
                  options={['PK', 'UAE']}
                  name="subCommunity"
                  id="subCommunity"
                  labelObject="Country"
                  style={{ xs: 12, lg: 4, md: 6 }}
                />
                <AutoCompleteSelector
                  placeholder="Category"
                  options={['PK', 'UAE']}
                  name="category"
                  id="category"
                  labelObject="Country"
                  style={{ xs: 12, lg: 4, md: 6 }}
                />
                <AutoCompleteSelector
                  placeholder="Projects"
                  options={['PK', 'UAE']}
                  name="projects"
                  id="projects"
                  labelObject="Country"
                  style={{ xs: 12, lg: 4, md: 6 }}
                />
                <AutoCompleteSelector
                  placeholder="Beds"
                  options={['PK', 'UAE']}
                  name="beds"
                  id="beds"
                  labelObject="Country"
                  style={{ xs: 12, lg: 4, md: 6 }}
                />
                <AutoCompleteSelector
                  placeholder="Price"
                  options={['PK', 'UAE']}
                  name="price"
                  id="price"
                  labelObject="Country"
                  style={{ xs: 12, lg: 4, md: 6 }}
                />
                <AutoCompleteSelector
                  placeholder="Transaction Type"
                  options={['PK', 'UAE']}
                  name="transactionType"
                  id="transactionType"
                  labelObject="Country"
                  style={{ xs: 12, lg: 4, md: 6 }}
                />
              </Grid>
              {/* Line Charts */}

              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <SatisfactionChartCard chartData={chartDummy} />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SatisfactionChartCard chartData={chartDummy} />
                </Grid>
              </Grid>
            </>
          )}
        </Formik>
        <Grid container spacing={2} sx={{ border: 1, mt: 0 }}>
          <Grid item lg={4} md={6} xs={12} sx={{ p: 2 }}>
            <Typography variant="subtitle1" textAlign="center">
              Transaction Price/sqft(Avg) AED 1,502
            </Typography>
          </Grid>
          <Grid item lg={4} md={6} xs={12} sx={{ p: 2 }}>
            <Typography variant="subtitle1" textAlign="center">
              Transaction Price/sqft(Avg) AED 1,502
            </Typography>
          </Grid>
          <Grid item lg={4} md={6} xs={12} sx={{ p: 2 }}>
            <Typography variant="subtitle1" textAlign="center">
              Transaction Price/sqft(Avg) AED 1,502
            </Typography>
          </Grid>
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

Transactions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
