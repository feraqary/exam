// material-ui
import { Grid, RadioGroup, InputLabel, FormControlLabel, Radio } from '@mui/material';

// project imports
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

export default function Notification() {
  const companies = ['Develope LLC', 'Al dar', 'EMAAR', 'AQARY', 'FINE HOME', 'VERY FINE HOME'];
  const prof = ['Developer', 'Broker', 'Student', 'Manager', 'Realtor', 'Teacher'];
  const nationality = ['UAE', 'Egypt', 'Sudan', 'Morocco', 'Rwanda', 'Turkey'];

  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Notifications">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={6}>
                <InputLabel>Agent SMS</InputLabel>
                <RadioGroup aria-labelledby="radio-buttons-group-label" row>
                  <FormControlLabel value="1" control={<Radio />} label="Enable" />
                  <FormControlLabel value="2" control={<Radio />} label="Disable" />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel>Agent Mail</InputLabel>
                <RadioGroup aria-labelledby="radio-buttons-group-label" row>
                  <FormControlLabel value="1" control={<Radio />} label="Enable" />
                  <FormControlLabel value="2" control={<Radio />} label="Disable" />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel>New Lead SMS</InputLabel>
                <RadioGroup aria-labelledby="radio-buttons-group-label" row>
                  <FormControlLabel value="1" control={<Radio />} label="Enable" />
                  <FormControlLabel value="2" control={<Radio />} label="Disable" />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel>New Lead Mail</InputLabel>
                <RadioGroup aria-labelledby="radio-buttons-group-label" row>
                  <FormControlLabel value="1" control={<Radio />} label="Enable" />
                  <FormControlLabel value="2" control={<Radio />} label="Disable" />
                </RadioGroup>
              </Grid>
            </Grid>
          </MainCard>

          <MainCard title="Auto Correspondance">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={6}>
                <InputLabel>Follow Up Emails</InputLabel>
                <RadioGroup aria-labelledby="radio-buttons-group-label" row>
                  <FormControlLabel value="1" control={<Radio />} label="Enable" />
                  <FormControlLabel value="2" control={<Radio />} label="Disable" />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel>Close Lead (Won) Email</InputLabel>
                <RadioGroup aria-labelledby="radio-buttons-group-label" row>
                  <FormControlLabel value="1" control={<Radio />} label="Enable" />
                  <FormControlLabel value="2" control={<Radio />} label="Disable" />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel>Close Lead (Lost) Email</InputLabel>
                <RadioGroup aria-labelledby="radio-buttons-group-label" row>
                  <FormControlLabel value="1" control={<Radio />} label="Enable" />
                  <FormControlLabel value="2" control={<Radio />} label="Disable" />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel>Close Lead (Won) SMS </InputLabel>
                <RadioGroup aria-labelledby="radio-buttons-group-label" row>
                  <FormControlLabel value="1" control={<Radio />} label="Enable" />
                  <FormControlLabel value="2" control={<Radio />} label="Disable" />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} lg={6}>
                <InputLabel>Close Lead (Lost) SMS </InputLabel>
                <RadioGroup aria-labelledby="radio-buttons-group-label" row>
                  <FormControlLabel value="1" control={<Radio />} label="Enable" />
                  <FormControlLabel value="2" control={<Radio />} label="Disable" />
                </RadioGroup>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
}
