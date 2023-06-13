// material-ui
import { Chip, Grid } from '@mui/material';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import KeyIcon from '@mui/icons-material/Key';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PreviewIcon from '@mui/icons-material/Preview';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import Table from 'components/Table/Table';
import { AqaryButton } from 'components/Elements/AqaryButton';
import { useEffect } from 'react';
import { getLocalCompanies } from 'store/slices/company-section/action/company';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// ===========================|| International Company Managment list||=========================== //

const ColumnHeaders = [
  {
    accessorKey: 'companyLogo',
    header: 'Company Logo',
    Cell: ({ renderedCellValue, row }) => {
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <Image src={`http://20.203.31.58/upload/${row.original.CompanyLogo}`} width={60} height={30} />
        </Box>
      );
    }
  },
  {
    accessorKey: 'companyName',
    header: 'Company Name'
  },
  {
    accessorKey: 'CompanyType',
    header: ' Company Type' 
  },
  {
    accessorKey: 'description',
    header: ' Description'
  },
];

const PlaceHolder = () => {
  return (
    <Page title="Local Company List">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Table columnHeaders={ColumnHeaders} data={[]} />
        </Grid>
      </Grid>
    </Page>
  );
};

PlaceHolder.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default PlaceHolder;
