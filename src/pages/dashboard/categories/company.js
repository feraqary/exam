// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import { AqaryButton } from 'components/Elements/AqaryButton';
import Table from 'components/Table/Table';
import { useEffect, useState } from 'react';
import MainCard from 'components/ui-component/cards/MainCard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useGetCompaniesByStatusQuery, useUpdateCompanyStatusMutation } from 'store/services/company/companyApi';
import { ToastSuccess } from 'utils/toast';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CompanyType from '../company/add_type';
const CompanyCategory = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page title="Company Categories management">
      <ToastContainer />
      {/* <Grid container spacing={gridSpacing}> */}
      {/* <Grid item xs={12}> */}
      {/* <MainCard title="Project details"></MainCard> */}
      {/* </Grid> */}
      {/* </Grid> */}
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Add Company Type" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <CompanyType />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Page>
  );
};

CompanyCategory.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CompanyCategory;
