import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
import Container from 'components/Elements/Container';
import Link from 'next/link';
// material-ui
import { Box, Grid, Typography, Button } from '@mui/material';
import Table from 'components/Table/Table';
import { NormalAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';
import TrendChart from '../../../components/dashboard/reports/trend-chart';
export default function Competitive() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });

  const chartDummy = {
    series: [
      {
        name: 'Money',
        data: [10, 41]
      }
    ],
    options: {
      chart: {
        toolbar: false,
        height: 150,
        width: 300,
        type: 'area',
        zoom: {
          enabled: false
        }
      },
      //   dataLables: {
      //     enabled: false,
      //     enabledOnSeries: [1]
      //   },
      stroke: {
        curve: 'straight'
      },
      grid: {
        show: false
      },
      legend: {
        show: false
      },
      xaxis: {
        show: false,
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        show: false,
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          show: false
        },
        tooltip: {
          enabled: false
        }
      }
    }
  };
  const ColumnHeaders = [
    {
      accessorKey: 'no',
      header: '#'
    },
    {
      accessorKey: 'PT',
      header: 'Propety Type',
      Cell: ({ renderedCellValue }) => {
        return (
          <Box justifyContent="center" display="flex">
            <Box width={300}>
              <TrendChart chartData={chartDummy} />
            </Box>
          </Box>
        );
      }
    },
    {
      accessorKey: 'TT',
      header: 'Trafiic Trend'
    },
    {
      accessorKey: 'EP',
      header: 'Earning Potential'
    },
    {
      accessorKey: 'PP',
      header: 'Property Price'
    }
  ];

  const data = [
    {
      no: 1,
      PT: 'Studio Apartment',
      TT: 'gdhjdjas',
      EP: '11000 - 12000',
      PP: '12000'
    },
    {
      no: 2,
      PT: '1 Bedroom Apartment',
      TT: 'sdfs',
      EP: '11000 - 12000',
      PP: '12000'
    },
    {
      no: 3,
      PT: '1 Bedroom Apartment',
      TT: 'sdfs',
      EP: '11000 - 12000',
      PP: '12000'
    }
  ];
  return (
    <Page title="Reports">
      <Container title="Market" style={{ xs: 12 }}>
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
            label="Community"
            placeholder="Select Community"
            options={['PK', 'UAE']}
            name="countrySelect"
            id="CountrySelect"
            labelObject="Country"
            style={{ xs: 12, lg: 4, md: 6 }}
          />
        </Grid>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ mt: 5 }}>
              POPULAR PROPERTY TYPES IN ABU DHABI
            </Typography>
            <Table
              columnHeaders={ColumnHeaders}
              data={data}
              //   loading={isLoading}
              pagination={pagination}
              //   setPagination={setPagination}
              //   isFetching={isFetching}
              //   rowCount={localProjectsData?.Total}
              renderTopToolbarCustomActions={({ table }) => {
                return (
                  <div style={{ display: 'flex', gap: '0.5rem', margin: '20px 0px' }}>
                    <Link href={{ pathname: `` }}>
                      <Button variant="contained">Heighest Traffic</Button>
                    </Link>
                    <Link href={{ pathname: `` }}>
                      <Button variant="contained">Most Earning Potential</Button>
                    </Link>
                    <Link href={{ pathname: `` }}>
                      <Button variant="contained">Best ROI for Buyers</Button>
                    </Link>
                  </div>
                );
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ mt: 5 }}>
              POPULAR Area in Abu Dhabi
            </Typography>
            <Table
              columnHeaders={ColumnHeaders}
              data={data}
              //   loading={isLoading}
              pagination={pagination}
              //   setPagination={setPagination}
              //   isFetching={isFetching}
              //   rowCount={localProjectsData?.Total}
              renderTopToolbarCustomActions={({ table }) => {
                return (
                  <div style={{ display: 'flex', gap: '0.5rem', margin: '20px 0px' }}>
                    <Link href={{ pathname: `` }}>
                      <Button variant="contained">Heighest Traffic</Button>
                    </Link>
                    <Link href={{ pathname: `` }}>
                      <Button variant="contained">Most Earning Potential</Button>
                    </Link>
                    <Link href={{ pathname: `` }}>
                      <Button variant="contained">Best ROI for Buyers</Button>
                    </Link>
                  </div>
                );
              }}
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
