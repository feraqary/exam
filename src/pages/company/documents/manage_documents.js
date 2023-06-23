/**
 * Companies documents mangement
 * 
 */

import * as React from 'react';
import { useState } from 'react';

import { Grid } from '@mui/material';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import MainCard from 'components/ui-component/cards/MainCard';
import FileUpload from 'components/InputArea/FileUpload';
import SubmitButton from 'components/Elements/SubmitButton';

// Dummy data
const catOptions = [
    { label: 'Accountant', id: 1 },
    { label: 'Fax document', id: 2 },
    { label: 'General Papers', id: 3 }
  ];

const titleOptions = [
    { label: 'InVoice', id: 1 },
    { label: 'InCome', id: 2 },
  ];

function ManageDocuments() {
    const [category, setCategory] = useState([]);
    const [title, setTitle] = useState([]);

    return (
        <Page title="ManageDocuments">
          <Grid container  >
            <Grid item xs={12} >
              <MainCard title="Manage Documents" >
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                <AutoCompleteSelector
                    label="Category"
                    placeholder="Select Category"
                    style={{ xs: 12}}
                    id="category-selector"
                    value={category}
                    setValue={setCategory}
                    options={catOptions}
                    />
                <AutoCompleteSelector
                    label="Title"
                    placeholder="Select Title"
                    style={{ xs: 12}}
                    id="title-selector"
                    value={title}
                    setValue={setTitle}
                    options={titleOptions}
                    />
                <FileUpload
                    label="Docunments"
                    type="png,jpeg,jpg"
                    placeholder="Upload Company License"
                    style={{ xs: 12 }}
                />
                <SubmitButton />
                </Grid>
              </MainCard>
            </Grid>
          </Grid>
        </Page>
      );
};

ManageDocuments.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };
  
export default ManageDocuments;