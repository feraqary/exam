// material-ui
import { Grid, Box, Button } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import { AqaryButton } from 'components/Elements/AqaryButton';
import Table from 'components/Table/Table';

// ==============================|| Reviews datatable ||============================== //

const data = [
  {
    sino: '1234556',
    company: 'some company',
    exhibition: 'Standard',
    startedDate: '2020-01-01',
    place: 'Abu Dhabi',
    endDate: '2020-01-01'
  },
  {
    sino: '1234556',
    company: 'some company',
    exhibition: 'Standard',
    startedDate: '2020-01-01',
    place: 'Abu Dhabi',
    endDate: '2020-01-01'
  },
  {
    sino: '1234556',
    company: 'some company',
    exhibition: 'Standard',
    startedDate: '2020-01-01',
    place: 'Abu Dhabi',
    endDate: '2020-01-01'
  },
  {
    sino: '1234556',
    company: 'some company',
    exhibition: 'Standard',
    startedDate: '2020-01-01',
    place: 'Abu Dhabi',
    endDate: '2020-01-01'
  },
  {
    sino: '1234556',
    company: 'some company',
    exhibition: 'Standard',
    startedDate: '2020-01-01',
    place: 'Abu Dhabi',
    endDate: '2020-01-01'
  },
  {
    sino: '1234556',
    company: 'some company',
    exhibition: 'Standard',
    startedDate: '2020-01-01',
    place: 'Abu Dhabi',
    endDate: '2020-01-01'
  },
  {
    sino: '1234556',
    company: 'some company',
    exhibition: 'Standard',
    startedDate: '2020-01-01',
    place: 'Abu Dhabi',
    endDate: '2020-01-01'
  },
  {
    sino: '1234556',
    company: 'some company',
    exhibition: 'Standard',
    startedDate: '2020-01-01',
    place: 'Abu Dhabi',
    endDate: '2020-01-01'
  },
  {
    sino: '1234556',
    company: 'some company',
    exhibition: 'Standard',
    startedDate: '2020-01-01',
    place: 'Abu Dhabi',
    endDate: '2020-01-01'
  },
  {
    sino: '1234556',
    company: 'some company',
    exhibition: 'Standard',
    startedDate: '2020-01-01',
    place: 'Abu Dhabi',
    endDate: '2020-01-01'
  },
  {
    sino: '1234556',
    company: 'some company',
    exhibition: 'Standard',
    startedDate: '2020-01-01',
    place: 'Abu Dhabi',
    endDate: '2020-01-01'
  },
  {
    sino: '1234556',
    company: 'some company',
    exhibition: 'Standard',
    startedDate: '2020-01-01',
    place: 'Abu Dhabi',
    endDate: '2020-01-01'
  }
];

const ColumnHeaders = [
  {
    accessorKey: 'sino',
    header: 'SI.NO'
  },
  {
    accessorKey: 'exhibition',
    header: 'Exhibition Name'
  },
  {
    accessorKey: 'place',
    header: 'Place'
  },
  {
    accessorKey: 'company',
    header: 'Company'
  },
  {
    accessorKey: 'startedDate',
    header: 'Starting Date'
  },
  {
    accessorKey: 'endDate',
    header: 'End Date'
  },

  {
    accessorKey: 'action',
    header: 'Action',
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <AqaryButton variant="contained">Edit </AqaryButton>

        <Button color="primary" variant="contained">
          Add Video Gallery
        </Button>
        <Button variant="contained" color="primary">
          Parnter
        </Button>
        <Button variant="contained" color="primary">
          Sponsor
        </Button>
        <Button variant="contained" color="primary">
          Exhibitors
        </Button>
        <Button variant="contained" color="primary">
          Sponsors
        </Button>
        <Button variant="contained" color="primary">
          Broucher
        </Button>
        <Button variant="contained" color="primary">
          Queries
        </Button>
        <Button variant="contained" color="primary">
          Video
        </Button>
        <Button variant="contained" color="primary">
          Register Details
        </Button>
        <Button variant="contained" color="primary">
          Add Gallery
        </Button>
      </Box>
    )
  }
];

function InternationalExhibition() {
  return (
    <Page title="International Exhibitions">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={data} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
}

InternationalExhibition.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default InternationalExhibition;
