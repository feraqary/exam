// material-ui
import { Grid } from '@mui/material';

// project imports
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import React, { useMemo, useState } from 'react';
import { getAllCompanyTypes } from '../../store/slices/company-section/action/company';
import { setCompany } from 'store/slices/company-section/slice/company';

// assets
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';
import Container from 'components/Elements/Container';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const roles = ['Broker Company', 'Developer Company', 'Service Company'];

// ==============================|| Add Company Type form ||============================== //
function MainService() {
  const dispatch = useDispatch();
  const { companies, loading, error, company } = useSelector((state) => state.companies);

  useEffect(() => {
    dispatch(getAllCompanyTypes());
  }, [dispatch]);

  const handleCompanyTypeChanage = (newValue) => {
    // console.log(newValue);
    dispatch(setCompany(newValue));
  };

  return (
    <Page title="Add Main Services">
      <Grid container spacing={gridSpacing}>
        <Container title="Add Main Services" style={{ xs: 12 }}>
          <Grid container xs={12} lg={12} justifyContent="center" gap={3}>
            <AutoCompleteSelector
              style={{ xs: 12, lg: 8 }}
              label="Company Type"
              placeholder="Company Type"
              options={companies.map((company) => {
                return { label: company.title, ...company };
              })}
              id="compnType"
              value={company}
              func={handleCompanyTypeChanage}
              loading={loading}
            />

            <InputText
              label="Service Name"
              placeholder="Enter Service Name"
              helperText="Please enter service name"
              style={{ xs: 12, lg: 8 }}
              type="text"
            />
            <InputText
              label="Description"
              placeholder="Enter Description"
              style={{ xs: 12, lg: 8 }}
              type="text"
              multiline
              rows={5}
              id="outlined-multiline-flexible"
            />

            <FileUpload
              label="Upload Logo"
              style={{ xs: 12, lg: 8 }}
              placeholder="Upload Logo"
              type="file"
              helperText="Please upload your logo"
              image={{ alt: 'Logo Preview', width: '250px', height: '250px' }}
            />
            <FileUpload
              label="Upload Icon"
              style={{ xs: 12, lg: 8 }}
              placeholder="Upload Icon"
              type="file"
              helperText="Please upload your Icon"
              image={{ alt: 'Icon Preview', width: '250px', height: '250px' }}
            />
          </Grid>
        </Container>
        <SubmitButton />
      </Grid>
    </Page>
  );
}

MainService.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default MainService;
