// material-ui
import {
  Grid,
  RadioGroup,
  CardActions,
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
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import AutocompleteForms from 'components/forms/forms-validation/AutocompleteForms';
import { useState, useEffect } from 'react';
import CustomDateTime from 'components/forms/components/DateTime/CustomDateTime';
import Container from 'components/Elements/Container';
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import Selector from 'components/InputArea/Selector';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import InputDateTime from 'components/InputArea/InputDate';
import SubmitButton from 'components/Elements/SubmitButton';


// ==============================|| Add Contact||============================== //
function Add_contact() {
  const Dummy = ['this', 'is', 'a', 'dummy'];
  const [managed, setManaged] = useState('');
  const [Class, setClass] = useState('');
  const [value, setvalue] = useState();
  const [Email, setEmail] = useState(true);
  const [personName, setPersonName] = useState([]);
  const [Active, setActive] = useState(false);
  const [counts, setCounts] = useState({
    mobile: 0,
    email: 0
  });

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
      // On autofill we get a stringified value.
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

                <Selector label='Company Type' id="salutation-selector" options={["Individual", "Company"]} style={{ xs: 12, lg: 6 }} placeholder="Select Salutation" />
              </Grid>
              <Grid item xs={12} lg={6}></Grid>

            <AutoCompleteSelector
                label="Salutation"
                style={{ xs: 12, lg: 6 }}
                options={["Mr.", "Mrs."]}
                placeholder="select image"
                fullWidth
            />
                

            <InputText
            label="Name"
            helperText="Pleas enter first name"
            placeholder={"enter first name..."}
            style={{ xs: 12, lg: 6 }}
            type="text"
            value={value}
            setValue={setvalue}
            />


            <InputText
            label="Family Name"
            helperText="Pleas enter family name"
            placeholder={"enter family name..."}
            style={{ xs: 12, lg: 6 }}
            type="text"
            value={value}
            setValue={setvalue}
            />

            <AutoCompleteSelector
            label="Language"
            style={{ xs: 12, lg: 6 }}
            options={["Arabic", "English"]}
            placeholder={"select language..."}
            helperText={"please choose a language..."}
            id="add-contact-language"
            fullWidth
            />

            <Grid item xs={12} lg={6}>
            <InputLabel required>Mobile </InputLabel>
            <MuiPhoneNumber fullWidth variant="outlined" defaultCountry={'ae'} />
            <FormHelperText>please enter mobile number</FormHelperText>
            </Grid>

            <Grid item xs={12} lg={6}>
            <InputLabel>Landline </InputLabel>
            <MuiPhoneNumber fullWidth variant="outlined" defaultCountry={'ae'} />
            <FormHelperText>please enter landline number</FormHelperText>
            </Grid>


            <AutoCompleteSelector
            label="Contact preference"
            style={{ xs: 12, lg: 6 }}
            options={["Mobile", "Landline", "Email"]}
            id="add-contact-contact-preference"
            fullWidth
            placeholder={"select contact preference..."}
            helperText={"please choose a contact preference"}
            />


            <Grid item xs={12} lg={6}>
            <InputLabel>Fax</InputLabel>
            <MuiPhoneNumber fullWidth variant="outlined" defaultCountry={'ae'} />
            <FormHelperText>please enter fax</FormHelperText>

            </Grid>
              <Grid item xs={12} lg={6}>
                {/* <FormGroup row> */}
                <FormControlLabel
                  control={<Checkbox value={'i'} />}
                  label="Client not willing to give Email address"
                  onChange={() => {
                    setEmail(!Email);
                  }}
                />
                {/* </FormGroup> */}
              </Grid>

              {Email && (
                <>
                    <InputText
                    label="Email"
                    helperText="Pleas enter email address"
                    style={{ xs: 12, lg: 6 }}
                    type="text"
                    value={value}
                    setValue={setvalue}
                    placeholder={"enter email address..."}

                    />
                </>
              )}

            <InputText
            label="Remarks"
            helperText="pleare write your remarks"
            placeholder={"enter remarks..."}
            style={{ xs: 12, lg: 6 }}
            type="text"
            value={value}
            setValue={setvalue}
            multiline
            rows={2}
            />  

            <InputDateTime label="Moving Date" style={{xs:12,lg:6}}/>



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
                    fullWidth
                    helperText="please enter relationship manager...."
                    placeholder={"relationship manager..."}
                    />

                  <AutoCompleteSelector
                    label="Managed Category"
                    style={{ xs: 12, lg: 6 }}
                    options={Dummy}
                    fullWidth
                    helperText="please enter manager category...."
                    placeholder={"manager category..."}
                    />
                </>
              ) : (
                <></>
              )}
            <AutoCompleteSelector
            label="Shared With"
            style={{ xs: 12, lg: 6 }}
            options={names}
            fullWidth
            />
            <InputText
            label="Ejari Contact Ref. No."
            helperText="Pleas enter ejari contact ref. no."
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
