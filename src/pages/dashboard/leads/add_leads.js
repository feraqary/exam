// material-ui
import {
  Grid,
  TextField,
  FormHelperText
} from '@mui/material';
import VerticalTabs from './leads_components/VerticalTabs';
import React from 'react';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useState } from 'react';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import Container from 'components/Elements/Container';
import Selector from 'components/InputArea/Selector';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import InputText from 'components/InputArea/TextInput';
import SubmitButton from 'components/Elements/SubmitButton';
import * as Yup from 'yup';
import { Formik } from 'formik';
// ==============================|| Add Leads||============================== //


const SUPPORTED_FORMATS =  ['image/jpg', 'image/jpeg', 'image/png'];

const validationSchema  = Yup.object({

})
function add_leads() {
  const [valueBasic, setValueBasic] = useState('No');
  const [value, setValue] = useState('');
  const emails = [
    { label: 'ali@gmail.com' },
    { label: 'osman@gmail.com' },
    { label: 'ali@yahoo.com' },
    { label: 'new@outlook.com' },
    { label: 'new1@gmail.com' }
  ];
  return (
    <Page title="Add Leads">
      <Grid container spacing={gridSpacing}>
        <Container title="Leads Contact Management" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center">
            <Selector label="Lead Type" id="lead-type-selector" style={{ xs: 12, lg: 6 }} options={['Sales', 'Leasing']} />

            <AutoCompleteSelector
              label="Contact Email"
              id="contact_email"
              name = "contact_email"
              style={{ xs: 12, lg: 6 }}
              options={emails}
              helperText="Please select a contact email"
              value={value}
              setValue={setValue}
              placeholder="Contact Email"
            />
            <Selector label="Contact Type" id="contact-type-selector" style={{ xs: 12, lg: 6 }} options={['Seller', 'Buyer']} />
            <Selector
              label="Unit Type"
              id="unit_type"
              name= "unit_type"
              style={{ xs: 12, lg: 6 }}
              options={['Apartment', 'Villa', 'Commercial Villa', 'Plot']}
            />
            <Grid item xs={12} lg={6}>
              <InputLabel required>Price Range</InputLabel>
              <Grid item row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <TextField type="number" sx={{ width: '45%' }} label="min" />
                <span style={{ fontWeight: 'bolder', fontSize: '1.7em' }}>:</span>
                <TextField type="number" sx={{ width: '45%' }} label="max" />
              </Grid>
              <FormHelperText>Please enter the price range</FormHelperText>
            </Grid>
            <InputText
              label="Actual Price"
              type="text"
              id= "actual_price"
              name= "actual_price"
              style={{ xs: 12, lg: 6 }}
              helperText="Please enter the actual price"
              placeholder="actual price"
            />

            <Grid item xs={12} lg={6}>
              <InputLabel required>Size/Area(sq.ft)</InputLabel>
              <Grid item row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <TextField type="number" sx={{ width: '45%' }} label="min" />
                <span style={{ fontWeight: 'bolder', fontSize: '1.7em' }}>:</span>
                <TextField type="number" sx={{ width: '45%' }} label="max" />
              </Grid>
              <FormHelperText>Please enter the area range</FormHelperText>
            </Grid>
            <InputText
              label="Numbe of Bedrooms"
              id= "bedrooms"
              name=" becdrooms"
              type="text"
              style={{ xs: 12, lg: 6 }}
              helperText="Please enter the number of bedrooms"
              placeholder="Number of Bedrooms"
            />
          </Grid>
        </Container>
        <Container title="Location" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center">
            <AutoCompleteSelector
              label="Countries"
              id="countries"
              name= " countries"
              style={{ xs: 12, lg: 6 }}
              options={['United Arab Emirates', 'America', 'Egypt', 'Sudan', 'Phillipines']}
              value={value}
              setValue={setValue}
              placeholder="Countries"
              helperText="Please select a country"
            />
            <AutoCompleteSelector
              label="States"
              id= " states"
              name= " states"
             
              style={{ xs: 12, lg: 6 }}
              options={['United Arab Emirates', 'America', 'Egypt', 'Sudan', 'Phillipines']}
              value={value}
              setValue={setValue}
              placeholder="States"
              helperText="Please select a state"
            />

            <AutoCompleteSelector
              label="Cities"
              id="citiesr"
              name= "cities"
              style={{ xs: 12, lg: 6 }}
              options={['United Arab Emirates', 'America', 'Egypt', 'Sudan', 'Phillipines']}
              value={value}
              setValue={setValue}
              placeholder="Cities"
              helperText="Please select a city"
            />
            <AutoCompleteSelector
              label="Districts"
              id="district"
              name= "district" 
              style={{ xs: 12, lg: 6 }}
              options={['United Arab Emirates', 'America', 'Egypt', 'Sudan', 'Phillipines']}
              value={value}
              setValue={setValue}
              placeholder="Districts"
              helperText="Please select a district"
            />
            <AutoCompleteSelector
              label="Communities"
              id="communities"
              name= " communities"
              style={{ xs: 12, lg: 6 }}
              options={['United Arab Emirates', 'America', 'Egypt', 'Sudan', 'Phillipines']}
              value={value}
              setValue={setValue}
              placeholder="Communities"
              helperText="Please select a community"
            />

            <AutoCompleteSelector
              label="Sub Communities"
              id="sub_communities"
              name= " sub_communities"
              style={{ xs: 12, lg: 6 }}
              options={['United Arab Emirates', 'America', 'Egypt', 'Sudan', 'Phillipines']}
              value={value}
              setValue={setValue}
              placeholder="Sub Communities"
              helperText="Please select a sub community"
            />

            <AutoCompleteSelector
              label="Properties"
              id="property"
              name= "property"
              style={{ xs: 12, lg: 6 }}
              options={['United Arab Emirates', 'America', 'Egypt', 'Sudan', 'Phillipines']}
              value={value}
              setValue={setValue}
              placeholder="Properties"
              helperText="Please select a property"
            />
            <InputText
              label="Unit Ref. No"
              type="text"
              id= "unit_ref"
              name= "unit_ref"
              style={{ xs: 12, lg: 6 }}
              helperText="Please enter the unit ref. no"
              placeholder="Unit Ref. No"
            />
          </Grid>
        </Container>

        <Container label="Reference Details" style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="flex-start">
            <Selector
              label="Contact Mode"
              id="contact_mode"
              name="contact_mode"
              
              style={{ xs: 12, lg: 6 }}
              options={['Email', 'Email-To-Lead', 'Phone', 'Whatsapp', 'Website']}
            />
            <Grid item xs={12} lg={6}></Grid>

            <InputText
              label="Media Name"
              type="text"
              style={{ xs: 12, lg: 6 }}
              helperText="Please enter the media name"
              placeholder="Media Name"
            />

            <InputText
              label="Required Timeline"
              type="text"
              style={{ xs: 12, lg: 6 }}
              helperText="Please enter the required timeline"
              placeholder="Required Timeline"
            />

            {/* <Grid item xs={12} lg={6}>
              <InputLabel>Required Timeline</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}> */}
            {/* <DateTimePicker label="From" />
                  <DateTimePicker label="To" /> */}
            {/* </LocalizationProvider>
            </Grid> */}

            <Selector
              label="Unit Status"
              id="unit-status-selector"
              style={{ xs: 12, lg: 6 }}
              options={['Cancel', 'Sold', 'Sale', 'References', 'Booked']}
            />
            <Selector
              label="Priority Level"
              id="priority-level-selector"
              style={{ xs: 12, lg: 6 }}
              options={['Normal', 'Urgent', 'High', 'Low']}
            />
            <Selector label="Hot Property" id="hot-property-selector" style={{ xs: 12, lg: 6 }} options={['Yes', 'No']} />
            <Selector label="Exclusive" id="exclusive-selector" style={{ xs: 12, lg: 6 }} options={['Yes', 'No']} />
            <InputText
              type="text"
              label="Notes/Extra Requirements"
              multiline
              rows={4}
              defaultValue="Add here...."
              variant="filled"
              fullWidth
              style={{ xs: 12, lg: 6 }}
            />
            <Selector label="Language" id="language-selector" style={{ xs: 12, lg: 6 }} options={['Arabic', 'English']} />
            <InputText
              label="Int. Referral Commission %"
              type="text"
              style={{ xs: 12, lg: 6 }}
              helperText="Please enter the int. referral commission %"
              placeholder="Int. Referral Commission %"
            />
            <AutoCompleteSelector
              label="Referred By"
              id="referred-by-selector"
              style={{ xs: 12, lg: 6 }}
              options={['Amal', 'Ali', 'Usman', 'Alexander']}
              value={value}
              setValue={setValue}
              placeholder="Referred By"
              helperText="Please select an option"
            />
            <AutoCompleteSelector
              label="Referred To"
              id="referred-to-selector"
              style={{ xs: 12, lg: 6 }}
              options={['Amal', 'Ali', 'Usman', 'Alexander']}
              value={value}
              setValue={setValue}
              placeholder="Referred To"
              helperText="Please select an option"
            />
            <AutoCompleteSelector
              label="Rotation Label"
              id="rotation-label-selector"
              style={{ xs: 12, lg: 6 }}
              options={['cxc', 'cxc1', 'cxc2', 'cxc3']}
              value={value}
              setValue={setValue}
              placeholder="Rotation Label"
              helperText="Please select a rotation label"
            />
            <Selector label="Phone Status" id="phone-status-selector" style={{ xs: 12, lg: 6 }} options={['Open', 'Close']} />
            <Selector
              label="Leads Stage"
              id="leads-stage-selector"
              style={{ xs: 12, lg: 6 }}
              options={['In Progress', 'Not Yet Connected', 'Called No Reply', 'Follow-up']}
            />

            <InputText
              label="Entered By"
              type="text"
              style={{ xs: 12, lg: 6 }}
              placeholder="Entered By"
              helperText="Please enter your name"
            />

            <InputText
              label="Modified By"
              type="text"
              style={{ xs: 12, lg: 6 }}
              placeholder="Modified By"
              helperText="Please enter your name"
            />
            <InputText
              label="Modification Date & Time"
              type="date"
              style={{ xs: 12, lg: 6 }}
              helperText="Please enter the modification date & time"
            />
          </Grid>
        </Container>

        <Grid item xs={12}>
          <MainCard title="Leads Additional Information">
            <VerticalTabs />
          </MainCard>
        </Grid>

        <Grid item lg={10}></Grid>

        <SubmitButton />
      </Grid>
    </Page>
  );
}

add_leads.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default add_leads;
