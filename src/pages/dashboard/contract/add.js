// material-ui
import { Grid, Alert , Button} from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';
// assets
import Container from 'components/Elements/Container';
import SubmitButton from 'components/Elements/SubmitButton';
import {NormalAutoCompleteSelector} from 'components/InputArea/AutoCompleteSelector';

// ==============================|| FIELDS ||============================== //

const companyCategories = [
  { label: 'Broker Company', id: 1 },
  { label: 'Developer Company', id: 2 },
  { label: 'Service Company', id: 3 }
];


// ==============================|| Add Company form ||============================== //
function AddContract() {
  const theme = useTheme();
  const [compCategory, setCompCat] = useState([]);
const [showTextField , setShowTextField] = useState(false);
const [showFileUpload , setShowFileUpload] = useState (false);
const handleCheckBoxChange = (event) => {
  const { name, checked} = event.target;
  if (name == "URL_paste") {
      setShowTextField(checked);
      setShowFileUpload(!showFileUpload);
  }
  else if ( name == "file_upload") {
  setShowFileUpload(checked); 
  setShowTextField(!showTextField);
} 
}
  return (
    <Page title="Contract">
      <Grid container spacing={gridSpacing}>
        <Container title="Add Contract Details" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <NormalAutoCompleteSelector
              label="Company Categories"
              options={companyCategories}
              id="company-category-selector"
              style={{ xs: 12, lg: 8 }}
              placeholder="Company Categories"
              helperText="Please select a category"
            />
            <NormalAutoCompleteSelector
              label="Company Names"
              id="company-name-selector"
              helperText="Please select a company name"
              style={{ xs: 12, lg: 8 }}
              placeholder="Company Names"
            />

            <NormalAutoCompleteSelector
              label="Choose Order ID"
              
              id="company-order-selector"
              helperText="Please select an order"
              style={{ xs: 12, lg: 8 }}
              placeholder="Order"
            />

            {/* <FileUpload label = "File Upload"  */}
            <Grid item xs={12} lg={8}>
              <InputLabel required>File Upload From</InputLabel>
              <div >
              <label>
                <input
                  type="checkbox"
                  name="file_upload"
                  checked={showFileUpload}
                  onChange={handleCheckBoxChange}
                />
               Upload File
               
              </label>
              </div>
              <label>
                <input
                  type="checkbox"
                  name="URL_paste"
                  checked={showTextField}
                  onChange={handleCheckBoxChange}
                />
                Upload URL
               
              </label>
              {
                showTextField && (
                  <div style={{
                    margin: '10px 50px 100px 200px'
                  }}>
                    <label>
                      Paste Web URL Here:
                      <input type="text"/>
                    </label>
                  </div>
                )}
               {showFileUpload && (
                <div style={{
                  margin: '10px 50px 100px 200px'
                }}>
                  <label>
                    Upload File:
                    <input type="file"/>
                  </label>
                </div>
               )}
            </Grid>
          </Grid>
        
        </Container>

        <Grid item xs={12} lg={5} spacing={gridSpacing}>
          <Alert icon={false} severity="success" sx={{ color: theme.palette.success.dark }}>
            Record Added Successfully!
          </Alert>
        </Grid>
      </Grid>
    </Page>
  );
}

AddContract.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddContract;
