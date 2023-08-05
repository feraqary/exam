// material-ui
import { Grid, Alert } from '@mui/material';

// project imports
import Layout from 'layout';
import { useTheme } from '@mui/material/styles';
import Page from 'components/ui-component/Page';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import React, { useState } from 'react';

// assets
import Container from 'components/Elements/Container';
import InputText from 'components/InputArea/TextInput';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';

// ==============================|| FIELDS ||============================== //

const fetchType = ['Image', 'Video'];

// ==============================|| Add Company form ||============================== //
function ManageTowerContents() {
  const theme = useTheme();
  const [type, setType] = useState(null);

  return (
    <Page title="Add Tower Content">
      <Grid container spacing={gridSpacing}>
        <Container title="Add Tower Content Details" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <InputText
              label="Title"
              placeholder="Title"
              helperText="Please enter the tower content title"
              style={{ xs: 12, lg: 8 }}
              type="text"
            />
            <Grid item xs={12} lg={8}>
              <InputLabel required>Description</InputLabel>
            </Grid>

            <AutoCompleteSelector
              label="type"
              placeholder="type"
              helperText="please select the type"
              options={fetchType}
              value={type}
              setValue={setType}
              id="type-selector"
              style={{ xs: 12, lg: 8 }}
            />

            {type === 'Image' && (
              <FileUpload
                label="Upload VAT"
                placeholder="Upload VAT"
                type="file"
                helperText="Please upload the VAT"
                style={{ xs: 12, lg: 8 }}
                image={{ alt: 'VAT Preview', width: '250px', height: '250psx' }}
              />
            )}
            {type === 'Video' && (
              <InputText
                label="Video URL"
                placeholder="Video URL"
                helperText="Please enter the video URL"
                style={{ xs: 12, lg: 8 }}
                type="text"
              />
            )}
          </Grid>
        </Container>
        <SubmitButton />
        <Grid item xs={12} lg={5} spacing={gridSpacing}>
          <Alert icon={false} severity="success" sx={{ color: theme.palette.success.dark }}>
            Record Added Successfully!
          </Alert>
        </Grid>
      </Grid>
    </Page>
  );
}

ManageTowerContents.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageTowerContents;
