import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import Container from 'components/Elements/Container';
import CustomDateTime from 'components/InputArea/CustomDateTime';

// material-ui
import { Grid } from '@mui/material';
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
  transactionType: objectValidator('Mandatory selection', true),
});
export default function Transactions() {
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
              <Grid container spacing={2}>
                <Grid item lg={12} xs={12}>
                  <SatisfactionChartCard
                    chartTitle="Transaction Volume"
                    chartData={{
                      options: {
                        annotaions: 'gdasd',
                        chart: {
                          type: 'line',
                          height: '250px'
                        },
                        labels: ['Leads', 'Visits', 'Units', 'fdf']
                      },
                      series: [30, 50, 10, 25]
                    }}
                  />
                </Grid>
              </Grid>
            </>
          )}
        </Formik>
      </Container>
    </Page>
  );
}

Transactions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
