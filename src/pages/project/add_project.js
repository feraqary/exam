// material-ui
import { Grid, InputAdornment, TextField, FormHelperText, NativeSelect, Button, Alert, Divider, FormGroup, Checkbox} from '@mui/material';

import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useState } from 'react';

//assets
import AutocompleteForms from 'components/forms/forms-validation/AutocompleteForms';
import GoogleApiWrapper from 'google-map-react';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';


// ==============================|| Add Project ||============================== //
function AddProject() {




  // this is aglobal handle change that requires both value and of the input its used in to return an object with name: value
  const [globalValues, setGlobalValues] = useState({});

  const handleGlobalChange = ({target: {name, value}}) => {
    setGlobalValues(values => {
        return {...values, [name]: value};
    });
    
};

  const countries = ["-",'UAE', 'Egypt', 'Sudan', 'Lebanon', 'Saudi Arabia'];
  


  const {isLoaded} = useLoadScript({
    googleMapsApiKey: 'AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y',
  })

  const defaultProps = {
    center: {
      lat: 24.499947,
      lng: 54.404524
    },
    zoom: 13
  };


  return (
    <Page title="Add Project">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Project details">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={6}>
                  <InputLabel required>Project title</InputLabel>
                  <TextField name="project title" onChange={handleGlobalChange} fullWidth placeholder="Enter Company " />
              </Grid>
              <Grid item xs={12} lg={6}>
                  <InputLabel>Country</InputLabel>
                  <AutocompleteForms setCompanyFun={handleGlobalChange} data={countries} name='project-details-country'/>
              </Grid>
              <Grid item xs={12} lg={6}>
                  <InputLabel>Phase Type</InputLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    row
                    onChange={handleGlobalChange}
                  >
                    <FormControlLabel
                      value="Single"
                      control={<Radio />}
                      label="Single"
                    />
                    <FormControlLabel
                      value="Multiple"
                      control={<Radio />}
                      label="Multiple"
                    />
                  </RadioGroup>
              </Grid>

              {/* //!fix here, number selctor needed */}
              <Grid item xs={12} lg={6}>
                  <InputLabel>No of phases:</InputLabel>
                  <TextField onChange={handleGlobalChange} fullWidth type='number' placeholder=" " />
              </Grid>
              <Grid item xs={12} lg={6}>
                  <InputLabel>Master Developer / Management Company</InputLabel>
                  <AutocompleteForms setCompanyFun={handleGlobalChange} name="Master-Developer-Management-Company" data={countries} placeholder="hello"/>
              </Grid>.
              <Grid item xs={12} lg={6}>
                  <InputLabel>Sub Developer Company</InputLabel>
                  <AutocompleteForms  setCompanyFun={handleGlobalChange} name='sub-developer-company' data={countries} placeholder="hello"/>
              </Grid>
            </Grid>
          </MainCard>

          
          
        </Grid>
        <Grid item xs={12}>
          <MainCard title="Location details">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={6}>
                  <InputLabel required>Country</InputLabel>
                  <AutocompleteForms  setCompanyFun={handleGlobalChange} name='location-details-country' data={countries} />
              </Grid>
              <Grid item xs={12} lg={6}>
                  <InputLabel >Map Url</InputLabel>
                  <TextField onChange={handleGlobalChange} name='location-details-map-url' fullWidth placeholder="Enter map url " />
              </Grid>
              
              <Grid item xs={12} lg={6}>
                  <InputLabel required>State</InputLabel>
                  <AutocompleteForms setCompanyFun={handleGlobalChange} data={countries} name='location-details-state' />
              </Grid>
              <Grid item xs={12} lg={6}>
                  <InputLabel required>Place</InputLabel>
                  <TextField fullWidth placeholder="Place" onChange={handleGlobalChange} name='location-details-place'/>
              </Grid>

              <Grid xs={12} lg={6}>
                <Grid  xs={12} lg={12}>
                    <InputLabel required>City</InputLabel>
                    <AutocompleteForms setCompanyFun={handleGlobalChange} data={countries} name='location-details-city'/>
                </Grid>
                
                <Grid  xs={12} lg={12}>
                    <InputLabel required>District</InputLabel>
                    <AutocompleteForms setCompanyFun={handleGlobalChange} data={countries} name='location-details-district'/>
                </Grid>
                <Grid  xs={12} lg={12}>
                    <InputLabel required>Community</InputLabel>
                    <AutocompleteForms setCompanyFun={handleGlobalChange} data={countries} name='location-details-community'/>
                </Grid>
                <Grid  xs={12} lg={12}>
                    <InputLabel required>Sub Community</InputLabel>
                    <AutocompleteForms setCompanyFun={handleGlobalChange} data={countries} name='location-details-sub-community'/>
                </Grid>

              </Grid>

              <Grid item xs={12} lg={6}  style={{ height:'16em'}} nowrap alignItems="center" >
                    {/* API Key for google map
                      AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y */}

                    {/* //!fix the height*/}
                    {!isLoaded? (<div>loading....</div>) : (
                    
                      <GoogleMap 
                      bootstrapURLKeys={{
                        key: 'AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y', 
                        language: 'en'
                     }}
                      mapContainerStyle={{position:"relative",height:"15em", width:"100%"}}
                      center={defaultProps.center}
                      zoom={defaultProps.zoom}
                      >
                         <Marker position={defaultProps.center} />
                      </GoogleMap>
                      
                      
                    )}
                </Grid>

            </Grid>
          </MainCard>
        </Grid>


        <Grid item xs={12}>
          <MainCard title="Property Details">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={6}>
                  <InputLabel id="propertyStatus-select-label" required>Property status</InputLabel>
                  <AutocompleteForms name='property-details-property-status' setCompanyFun={handleGlobalChange} data={countries} />
              </Grid>
              <Grid item xs={12} lg={6}>
                  <InputLabel required>Property Type</InputLabel>
                  <AutocompleteForms name='property-details-property-type' setCompanyFun={handleGlobalChange} data={countries} />
              </Grid>
              <Grid item xs={12} lg={6}>
                  <InputLabel required>Life Style</InputLabel>
                  <AutocompleteForms name='property-details-life-style' setCompanyFun={handleGlobalChange} data={countries} />
              </Grid>
              <Grid item xs={12} lg={6}>
                  {/* //*date */}
                  <InputLabel required>Start Date</InputLabel>
                  <TextField name='property-details-start-date' onChange={handleGlobalChange} fullWidth type="date" />
              </Grid>

              <Grid item xs={12} lg={6}>
                  <InputLabel required>Ownership</InputLabel>
                  <AutocompleteForms name='property-details-ownership' setCompanyFun={handleGlobalChange} data={countries} />
              </Grid>
              <Grid item xs={12} lg={6}>
                  <InputLabel required>Completion Date</InputLabel>
                  <TextField name='property-details-completion-date' onChange={handleGlobalChange} fullWidth type="date" />
              </Grid>
              <Grid item xs={12} lg={6}>
                  <InputLabel required>Plot Area (sqft)</InputLabel>
                  <AutocompleteForms name='property-details-plot-area' setCompanyFun={handleGlobalChange} data={countries} />
              </Grid>
              <Grid item xs={12} lg={6}>
                {/* //*date */}
                  <InputLabel required>Handover Date</InputLabel>
                  <TextField name='property-details-handover-date' onChange={handleGlobalChange} fullWidth type="date" />
              </Grid>
              <Grid item xs={12} lg={6}>
                  <InputLabel required>Built up Area (sqft)</InputLabel>
                  <TextField fullWidth type="number" name='property-details-built' />

              </Grid>
              <Grid item xs={12} lg={6}>
                  <InputLabel required>Starting Price</InputLabel>
                  <TextField onChange={handleGlobalChange} name='property-details-starting-price' fullWidth type="number" />
              </Grid>
              <Grid item xs={12} lg={6}>

                {/* //!figure this out */}
                  <InputLabel required>Area Range</InputLabel>
                  <Grid item row style={{display:'flex',justifyContent:'space-around',alignItems:"center"}} >
                    <TextField   type="number" />
                    <span style={{fontWeight:'bolder',fontSize:'1.7em'}}>:</span>
                    <TextField type="number" />
                  </Grid>
              </Grid>
              <Grid item xs={12} lg={6}>
                  <InputLabel required>Service Charge</InputLabel>
                  <TextField onChange={handleGlobalChange} name='property-details-service-charge' fullWidth type="number" />
              </Grid>
              <Grid item xs={12} lg={6}>
                  <InputLabel required>Property title</InputLabel>
                  <TextField onChange={handleGlobalChange} name='property-details-property-title' fullWidth label='Title'/>
              </Grid>
              <Grid item xs={12} lg={6}>
                  <InputLabel required>Property Description</InputLabel>
                  <TextField
                    multiline
                    rows={4}
                    placeholder='Description'
                    onChange={handleGlobalChange} 
                    name='property-details-property-description'
                    fullWidth
                  />
              </Grid>

              <Grid item xs={12} lg={6}>
                  <InputLabel required>Arabic title</InputLabel>
                  <TextField fullWidth label='Title' onChange={handleGlobalChange} name='property-details-property-arabic-title'/>
              </Grid>
              <Grid item xs={12} lg={6}>
                  <InputLabel required>Arabic Description</InputLabel>
                  <TextField
                    multiline
                    rows={4}
                    placeholder='Description'
                    fullWidth
                  />
              </Grid>
              <Grid item xs={12} lg={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox value={"sasuke"}/>
                      }
                      label="Jiraya"
                      onChange={handleGlobalChange} name='property-details-starting-price'
                    />
                  </FormGroup>
              </Grid>

            </Grid> 

          </MainCard>
        </Grid>
      </Grid>
    </Page>
  );
}

AddProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddProject;
