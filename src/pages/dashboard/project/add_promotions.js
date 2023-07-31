import React, { useState } from 'react';
import { Grid, TextField, FormGroup, FormControlLabel, FormControl, InputLabel, FormHelperText, Select, MenuItem } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { MultipleAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';
import { Formik } from 'formik';

const promotionOptions = [
  { id: 0, label: 'Open to All Nationalities' },
  { id: 1, label: 'Flexible Payment Plan' },
  { id: 2, label: 'No Commission' },
  { id: 3, label: '0 ADM Waiver' },
  { id: 4, label: 'Discount' },
  { id: 5, label: 'Low Down Payment' },
];

const inputFieldStyle = { width: '100%' };
const selectFieldStyle = { width: '100%' };

function AddPromotions() {
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPromotions, setSelectedPromotions] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePromotionsChange = (event) => {
    setSelectedPromotions(event.target.value);
  };
  <Formik
  initialValue={{
    
  }}>

  </Formik>
  return (

    <Page title="Add Promotions">
      <MainCard title="Add Promotions" >
      <Grid container spacing={2} >
            <Grid item xs={12}>
        <FormControl fullWidth sx={selectFieldStyle}>
          <InputLabel>Select Promotions</InputLabel>
          <Select
            multiple
            value={selectedPromotions}
            onChange={handlePromotionsChange}
            renderValue={(selected) => selected.join(', ')}
          >
            {promotionOptions.map((option) => (
              <MenuItem key={option.id} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Choose Promotion types</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Description"
          placeholder="Describe Promotion"
          multiline
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={inputFieldStyle}
        />
        <FormHelperText>Please Select Promotion Types</FormHelperText>
      </Grid>
      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Pick a Date"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} sx={inputFieldStyle} />}
          />
        </LocalizationProvider>
        <FormHelperText>Pick any Date</FormHelperText>
      </Grid>

    </Grid> 
      </MainCard>
   
  </Page>
  
  );
}



export default AddPromotions;
