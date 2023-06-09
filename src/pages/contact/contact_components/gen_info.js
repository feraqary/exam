// material-ui
import { Grid, RadioGroup,InputLabel, FormControlLabel,Radio, TextField, FormGroup, Checkbox, Typography, Select, MenuItem} from '@mui/material';


// project imports
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import CustomDateTime from 'components/forms/components/DateTime/CustomDateTime';
import Container from 'components/Elements/Container';
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import Selector from 'components/InputArea/Selector';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import InputDateTime from 'components/InputArea/InputDate';
import SubmitButton from 'components/Elements/SubmitButton';

export default function GenInfo() {



    const companies = ['Develope LLC', 'Al dar', 'EMAAR', 'AQARY', 'FINE HOME', 'VERY FINE HOME']
    const prof = ['Developer', 'Broker', 'Student', 'Manager', 'Realtor', 'Teacher']
    const nationality = ['UAE', 'Egypt', 'Sudan', 'Morocco', 'Rwanda', 'Turkey']

  return (
    <>
    <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
            
            <Container title="General Information" style={{ xs: 12 }}>
                <Grid container spacing={2} alignItems="center">
                    <AutoCompleteSelector
                    label="Select Company"
                    style={{ xs: 12, lg: 6 }}
                    options={companies}
                    placeholder="select company"
                    />

                    <InputDateTime label="Date Of Birth" style={{xs:12,lg:6}}/>


                    <AutoCompleteSelector
                    label="Proffession"
                    style={{ xs: 12, lg: 6 }}
                    options={companies}
                    placeholder="select proffession"
                    />



                    <Selector label='Gender' id="gender-selector" options={["Male", "Female"]} style={{ xs: 12, lg: 6 }} placeholder="Select Gender" />

                    <AutoCompleteSelector
                    label="Nationality"
                    style={{ xs: 12, lg: 6 }}
                    options={nationality}
                    id="nationality-selector"
                    placeholder="select image"
                    />
                    

                    <Selector label='Marital Status' id="marital-status-selector" options={["Single", "Maried"]} style={{ xs: 12, lg: 6 }} placeholder="Select Status" />



                    <Grid item xs={12} lg={6}>
                    </Grid>


                    <InputText
                    label="External ID"
                    placeholder="gen-info-external-id"
                    helperText="Please enter external id"
                    style={{ xs: 12, lg: 6 }}
                    type="text"
                    // value={value}
                    // setValue={setValue}
                    />

                    <InputText
                    label="Passport Number"
                    placeholder="enter passport number"
                    helperText="Please enter passport number"
                    style={{ xs: 12, lg: 6 }}
                    type="number"
                    // value={value}
                    // setValue={setValue}
                    />

                    <InputDateTime label={"Passport Issue Date"} helperText="Please enter passport issue date" style={{xs:12,lg:6}}/>
                    <InputDateTime label={"Passport Expiry Date"} helperText="Please enter passport expiry date" style={{xs:12,lg:6}}/>
                    <Grid item xs={12} lg={6}>
                    </Grid>
                    <InputText
                    label="ID Type"
                    placeholder="enter id type"
                    helperText="Please enter id type"
                    style={{ xs: 12, lg: 6 }}
                    type="text"
                    // value={value}
                    // setValue={setValue}
                    />
                    <InputText
                    label="ID Number"
                    placeholder="enter id type"
                    helperText="Please enter id number"
                    style={{ xs: 12, lg: 6 }}
                    type="Number"
                    // value={value}
                    // setValue={setValue}
                    />

                    <AutoCompleteSelector
                    label="ID Issuer Country"
                    style={{ xs: 12, lg: 6 }}
                    options={nationality}
                    id="id-issuer-country-selector"
                    helperText="Please enter id issuer country"
                    />

                    <InputDateTime label={"ID Issue Date"}  helperText="Please enter id issue date" style={{xs:12,lg:6}}/>
                    <InputDateTime label={"ID Expiry Date"} helperText="Please enter id expiry date" style={{xs:12,lg:6}}/>

                    {/* <Grid item xs={12} lg={6}>
                    </Grid> */}
                    <InputText
                    label="Interests"
                    placeholder="enter id type"
                    helperText="Please enter interests"
                    style={{ xs: 12, lg: 12 }}
                    type="Number"
                    // value={value}
                    // setValue={setValue}
                    />
                </Grid>
            </Container>



            <Container title="" style={{ xs: 12 }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item lg={6}>
                        <Grid item lg={12} sx={{marginBottom:"26px"}}>
                            <Typography variant="h3">Residence address</Typography>
                        </Grid>
                        
                        
                        <InputText
                        label="Address Line 1"
                        placeholder="address1"
                        style={{ xs: 12, lg: 12 }}
                        type="text"
                        helperText="Please enter address line 1"
                        // value={value}
                        // setValue={setValue}
                        />

                        <InputText
                        label="Address Line 2"
                        placeholder="address2"
                        helperText="Please enter address line 2"
                        style={{ xs: 12, lg: 12 }}
                        type="text"
                        // value={value}
                        // setValue={setValue}
                        />

                        <AutoCompleteSelector
                        label="Country"
                        style={{ xs: 12, lg: 12 }}
                        options={nationality}
                        id="country-selector"
                        placeholder="please enter country"
                        />
                        <AutoCompleteSelector
                        label="State"
                        style={{ xs: 12, lg: 12 }}
                        options={['Abudhabi','Dubai','Sharjah','Ajman','Om al quwain']}
                        id="state-selector"
                        placeholder="please enter state"
                        />
                        <AutoCompleteSelector
                        label="City"
                        style={{ xs: 12, lg: 12 }}
                        options={['Abudhabi','Dubai','Sharjah','Ajman','Om al quwain']}
                        id="city-selector"
                        placeholder="please enter city"
                        />


                        <InputText
                        label="Postal/Zip Code"
                        placeholder="please enter postal/zip code"
                        style={{ xs: 12, lg: 12 }}
                        type="text"

                        // value={value}
                        // setValue={setValue}
                        />
                        <Grid item lg={12} padding="16px 0px 0px 16px">

                        </Grid>
                        <Grid item lg={12} padding="16px 0px 0px 16px">
                        </Grid>
                        <Grid item lg={12} padding="16px 0px 0px 16px">
                        </Grid>
                    </Grid>





                    <Grid item lg={6}  alignItems="center">
                        <Grid item lg={12} sx={{marginBottom:"26px"}}>
                            <Typography variant="h3">Mailing address</Typography>
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <FormGroup row>
                                <FormControlLabel
                                control={<Checkbox value={'i'} />}
                                label="Same as residence"
                                labelPlacement="start"
                            />
                            </FormGroup>
                            <FormGroup row>
                                <FormControlLabel
                                control={<Checkbox value={'i'} />}
                                label="Same as company"
                                labelPlacement="start"
                            />
                            </FormGroup>
                        </Grid>                
                        <InputText
                        label="Mailing Address Line 1"
                        placeholder="please enter mailing address1"
                        style={{ xs: 12, lg: 12 }}
                        type="text"
                        // value={value}
                        // setValue={setValue}
                        />

                        <InputText
                        label="Mailing Address Line 2"
                        placeholder="please enter mailing address2"
                        style={{ xs: 12, lg: 12 }}
                        type="text"
                        // value={value}
                        // setValue={setValue}
                        />

                        <AutoCompleteSelector
                        label="Mailing Country"
                        style={{ xs: 12, lg: 12 }}
                        options={nationality}
                        id="country-selector"
                        placeholder="please enter mailing country"
                        />
                        <AutoCompleteSelector
                        label="Mailing State"
                        style={{ xs: 12, lg: 12 }}
                        options={['Abudhabi','Dubai','Sharjah','Ajman','Om al quwain']}
                        id="state-selector"
                        placeholder="please enter mailing state"
                        />
                        <AutoCompleteSelector
                        label="Mailing City"
                        style={{ xs: 12, lg: 12 }}
                        options={['Abudhabi','Dubai','Sharjah','Ajman','Om al quwain']}
                        id="city-selector"
                        placeholder="please enter mailing city"
                        />


                        <InputText
                        label="Mailing Postal/Zip Code"
                        placeholder="please enter mailing postal/zip code"
                        style={{ xs: 12, lg: 12 }}
                        type="text"
                        // value={value}
                        // setValue={setValue}
                        />
                    </Grid>

                    <Selector label='Address for Correspondence' id="address-for=correspondence" options={["Individual", "Company"]} style={{ xs: 12, lg: 6 }} placeholder="Select Gender" />


                    <Grid item lg={6} padding="16px 0px 0px 16px">
                    </Grid>




                </Grid>
            </Container>



            <MainCard title="Direct Marketing">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} lg={12} justifyContent="center">
                            <FormGroup row>
                                <FormControlLabel
                                control={<Checkbox value={'i'} />}
                                label="General Information"
                                labelPlacement="start"
                                />
                                <FormControlLabel
                                control={<Checkbox value={'i'} />}
                                label="Property Listings"
                                labelPlacement="start"
                                />
                                <FormControlLabel
                                control={<Checkbox value={'i'} />}
                                label="SMS Updates"
                                labelPlacement="start"
                                />
                                <FormControlLabel
                                control={<Checkbox value={'i'} />}
                                label="Newletter"
                                labelPlacement="start"
                                />
                            </FormGroup>
                                
                    </Grid>         
                </Grid>
            </MainCard>
        </Grid>
    </Grid>
    </>
  )
}
