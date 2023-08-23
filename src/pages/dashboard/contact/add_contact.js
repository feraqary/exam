import {
  Grid,
  RadioGroup,

  Chip,
  Box,
  FormControlLabel,
  OutlinedInput,
  Radio,
  FormGroup,
  Checkbox,
  Typography,
  FormHelperText,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';
import VerticalTabs from './contact_components/VerticalTabs';
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import { useState, useEffect } from 'react';
import Container from 'components/Elements/Container';
import InputText from 'components/InputArea/TextInput';
import Selector from 'components/InputArea/Selector';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import InputDateTime from 'components/InputArea/InputDate';
import SubmitButton from 'components/Elements/SubmitButton';

// ==============================|| Add Contact||============================== //
function Add_contact() {
  const [managed, setManaged] = useState('');
  const [value, setvalue] = useState();
  const [value1, setvalue1] = useState();
  const [Email, setEmail] = useState(true);
  const [personName, setPersonName] = useState([]);
  const [Active, setActive] = useState(false);
  const [counts, setCounts] = useState({
    mobile: 0,
    email: 0
  });
  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
  const [mobiles, setMobiles] = useState(0);
  const [emails, setEmails] = useState(0);
  const comp = [
    {
      tab: 'General info',
      comp: <p>dsfsd</p>
    }
  ];

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder'
  ];

  return (
    <Page title="Add Contact">
      <Grid container spacing={gridSpacing}>
        <Container style={{ xs: 12 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} lg={6}></Grid>

            <Grid item xs={12} lg={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                onClick={() => {
                  setActive(!Active);
                }}
              >
                {Active ? 'Active' : 'Archived'}
              </Button>
            </Grid>

            <Grid item xs={12} lg={6}>
              <Selector
                label="Contact Type"
                name="contact_type"
                id="contact_type"
                options={['Individual', 'Company']}
                style={{ xs: 12, lg: 6 }}
                placeholder="Select Salutation"
                {...getFieldProps('salutation')}
              />
            </Grid>
            <Grid item xs={12} lg={6}></Grid>
            <AutoCompleteSelector
              label="Salutation"
              style={{ xs: 12, lg: 6 }}
              options={['Mr.', 'Mrs.']}
              placeholder="Select Reference ID Salutation"
              id="salutation"
              name="salutation"
              fullWidth
            />

            <InputText
              label="Name"
              helperText="Enter Name"
              placeholder={'Enter Name...'}
              id="name"
              name="name"
              style={{ xs: 12, lg: 6 }}
              type="text"
              value={value}
              setValue={setvalue}
            />
            <InputText
              label="Enter Family Name"
              helperText="family name"
              placeholder={'Enter Family Name...'}
              name=" family_name"
              id="family_name"
              style={{ xs: 12, lg: 6 }}
              type="text"
              value={value}
              setValue={setvalue}
            />
            <AutoCompleteSelector
              label="Language"
              style={{ xs: 12, lg: 6 }}
              options={['Arabic', 'English']}
              placeholder={'Select Language...'}
              id="contact_language"
              name="contact_language"
              fullWidth
            />

            <Grid item xs={12} lg={6}>
              <InputLabel required>Mobile </InputLabel>
              <MuiPhoneNumber fullWidth variant="outlined" defaultCountry={'ae'} />
              <FormHelperText>Please Enter Primary Mobile Number</FormHelperText>
            </Grid>
            <Grid item xs={12} lg={6}>
              <InputLabel required>Mobile 2 </InputLabel>
              <MuiPhoneNumber fullWidth variant="outlined" defaultCountry={'ae'} />
              <FormHelperText>Please Enter Secondary Mobile Number</FormHelperText>
            </Grid>
            <Grid item xs={12} lg={6}>
              <InputLabel>Landline Phone</InputLabel>
              <MuiPhoneNumber fullWidth variant="outlined" defaultCountry={'ae'} />
              <FormHelperText>please enter Landline number</FormHelperText>
            </Grid>
            <Grid item xs={12} lg={6}>
              <InputLabel>Fax</InputLabel>
              <MuiPhoneNumber fullWidth variant="outlined" defaultCountry={'ae'} />
              <FormHelperText>Enter Fax Number</FormHelperText>
            </Grid>
            {Email && (
              <>
                <InputText
                  label="Email"
                  helperText="Please Enter Primary Contact Email Address"
                  style={{ xs: 12, lg: 6 }}
                  type="email"
                  name="primary"
                  id="primary_email"
                  value={value1}
                  setValue={setvalue1}
                  placeholder={'Enter Email Address...'}
                />
              </>
            )}
               {Email && (
              <>
                <InputText
                  label="Secondary Email Address"
                  helperText="Please Enter Secondary Contact Email Address"
                  style={{ xs: 12, lg: 6 }}
                  type="email"
                  name="secondary"
                  id="secondary_email"
                  value={value}
                  setValue={setvalue}
                  placeholder={'Enter Email Address...'}
                />
              </>
            )}  
            <AutoCompleteSelector
              label="Contact Preference"
              style={{ xs: 12, lg: 6 }}
              options={['Primary Mobile Number','Secondary Mobile Number', 'Landline', 'Email', 'Both Email and Phone']}
              id="contact_preferences"
              name="contact_preferences"
              fullWidth
              placeholder={'Select the Contract Preferences..'}
              helperText={'Please choose a Contact Preference'}
            />
            <Grid item xs={12} lg={6}>
              <FormControlLabel
                control={<Checkbox value={'i'} />}
                label="Client not willing to give Email address"
                onChange={() => {
                  setEmail(!Email);
                }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <InputLabel>Managed</InputLabel>
              <RadioGroup
                aria-labelledby="radio-buttons-group-label"
                row
                onChange={(e) => {
                  setManaged(e.target.value);
                }}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>

            {managed === 'yes' ? (
              <>
                <AutoCompleteSelector
                  label="Relationship Manager"
                  style={{ xs: 12, lg: 6 }}
                  options={Dummy}
                  id="relationship_manager"
                  name="relationship_manager"
                  fullWidth
                  helperText="Please Enter Relationship Manager"
                  placeholder={'relationship manager...'}
                />

                <AutoCompleteSelector
                  label="Managed Category"
                  style={{ xs: 12, lg: 6 }}
                  options={Dummy}
                  id="managed_category"
                  name="managed_category"
                  fullWidth
                  helperText="please enter manager category...."
                  placeholder={'manager category...'}
                />
              </>
            ) : (
              <></>
            )}

            <InputText
              label="Remarks"
              helperText="pleare write your remarks"
              placeholder={'enter remarks...'}
              style={{ xs: 12, lg: 6 }}
              type="text"
              value={value}
              setValue={setvalue}
              multiline
              rows={2}
            />

            <InputDateTime label="Moving Date" style={{ xs: 12, lg: 6 }} />

            <Grid item xs={12} lg={6}>
              <InputLabel>Assigned To</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                displayEmpty
                label="Select"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    // style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} lg={6}>
              <InputLabel>Transaction to date</InputLabel>
              <Typography>1</Typography>
            </Grid>

            {/* <Selector label='Managed' onChange={(e) => {
                    setManaged(e.target.value);
                  }} 
                  id="salutation-selector" options={["yes", "no"]} style={{ xs: 12, lg: 6 }} placeholder="Select Salutation" /> */}

         
            <AutoCompleteSelector label="Shared With" style={{ xs: 12, lg: 6 }} options={names} fullWidth />
            <InputText
              label="Ejari Contact Ref. No."
              helperText="Pleas enter ejari contact ref. no."
              name="ejari_number"
              id="ejari_number"
              placeholder="ref. no. ..."
              style={{ xs: 12, lg: 6 }}
              type="text"
              value={value}
              setValue={setvalue}
            />

            <Grid item xs={12} lg={6}>
              <FormGroup row>
                <FormControlLabel control={<Checkbox value={'i'} />} label="VIP" />
                <FormControlLabel control={<Checkbox value={'i'} />} label="Black Listed" />
              </FormGroup>
            </Grid>
          </Grid>
        </Container>

        <Container title="Add Banner Details" style={{ xs: 12 }}>
          <VerticalTabs />
        </Container>

        <Grid item lg={10}></Grid>
        <SubmitButton />
      </Grid>
    </Page>
  );
}

Add_contact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Add_contact;
