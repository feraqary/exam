// material-ui
import { Grid, Box, Checkbox } from '@mui/material';
import Image from 'next/image';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import Table from 'components/Table/Table';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFeaturedCompanies } from 'store/slices/company-section/action/company';
import { useSelector } from 'react-redux';

// ===========================|| International Company Managment list||=========================== //

const ColumnHeaders = [
  {
    accessorKey: 'ID',
    header: 'SI.NO',
    accessorKey: 'CompanyLogo',
    header: 'Company Logo',
    Cell: ({ renderedCellValue, row }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Image src={`http://20.203.31.58/upload/${row.original.CompanyLogo}`} width={60} height={30} style={{ objectFit: 'contain' }} />
      </Box>
    )
  },
  {
    accessorKey: 'CompanyName',
    header: 'Company Name'
  },

  {
    accessorKey: 'LicenseNO',
    header: 'License Number'
  },
  {
    accessorKey: 'ContactPerson',
    header: ' Contact Person'
  },
  {
    accessorKey: 'Email',
    header: 'Email'
  },
  { accessorKey: 'Phone', header: 'Phone' },
  { accessorKey: 'show', header: 'Show in Homepage', Cell: ({ cell }) => <Checkbox /> }
];

const FeaturedCompanies = () => {
  const dispatch = useDispatch();

  const { error, loading, featuredCompanies } = useSelector((state) => state.companies);
  console.log(featuredCompanies);
  useEffect(() => {
    dispatch(getFeaturedCompanies());
  }, []);

  return (
    <Page title="Featured Companies">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table data={featuredCompanies} columnHeaders={ColumnHeaders} />
        </Grid>
      </Grid>
    </Page>
  );
};

FeaturedCompanies.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default FeaturedCompanies;
