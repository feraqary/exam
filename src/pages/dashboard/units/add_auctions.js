// add_promotions.js

import React, { useState } from 'react';
import { Grid, TextField, FormHelperText, Button } from '@mui/material';
import Page from 'components/ui-component/Page';
import { Formik, Field } from 'formik';
import Input from '@mui/material/Input';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MainCard from 'components/ui-component/cards/MainCard';
import { NormalAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';
import { TimePicker } from '@mui/x-date-pickers';

const auctionTypes= [
  { id: 0, label: 'Live Auction' },
  { id: 1, label: 'Online Auction' },
]
const inputFieldStyle = { width: '100%' };

function AddAuctions({ projectId, onClose }) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const [selectedAuctions, setSelectedAuctions] = useState([]);
  const [selectedBidAmount, setSelectedBidAmount] = useState('');

  const handleStartDateAuctionChange = (date) => {
    setSelectedStartDate(date);
  };
  const handleEndDateAuctionChange = (date) => {
    setSelectedEndDate(date);
  };
  const handleStartTimeAuctionChange = (time) => {
    setSelectedStartTime(time);
  };
  const handleEndTimeAuctionChange = (time) => {
    setSelectedEndTime(time);
  };
  const handleBidAmountChange = (event) => {
    const { value} = event.target;
    setSelectedBidAmount(value);
  };
  const handleAuctionCategoryChange = (event) => {
    setSelectedPromotions(event.target.value);
  };

  const handleFormSubmit = (values, formikBag) => {
    useCreatePromotionsMutation({
      project_id: projectId,
      promotion_types: values.promotion_types,
      description: values.description,
      expiry_date: values.expiry_date
    })
      .then((response) => {
        if (response && response.data && response.data.Message === 'success') {
          console.log('Promotion created successfully!', response.data.data);
          setSelectedPromotions([]);
          setSelectedDate(null);
          onClose();
          formikBag.setSubmitting(false);
        } else {
          console.error('Error creating promotion:', response && response.data);
          formikBag.setSubmitting(false);
        }
      })
      .catch((error) => {
        console.error('Error creating promotion:', error);
        formikBag.setSubmitting(false);
      });
  };

  return (
    <Page title="Add Auctions" item xs={12} md={6}>
      <Formik
        initialValues={{
          auction_category: [],
          auction_start_date: '',
          auction_start_time: null,
          auction_end_date: '',
          auction_end_time: null,
          minimum_bid_amount: 0,
        }}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, isUpdating }) => (
          <form onSubmit={handleSubmit}>
            <MainCard title="Add Auctions">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Field
                  style={{ xs: 12, lg: 12, mb: 3 }}
                  component={NormalAutoCompleteSelector}
                  options={auctionTypes}
                  label="Auction Category"
                  name="auction_category"
                  onChange={handleAuctionCategoryChange}
                  value={selectedAuctions}
                />
              </Grid>
              <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Field
                    as={DatePicker}
                    label="Auction Start Date"
                    id="auction_start_date"
                    value={selectedStartDate}
                    onChange={handleStartDateAuctionChange}
                    renderInput={(params) => <TextField {...params} sx={inputFieldStyle} />}
                  />
                </LocalizationProvider>
                <FormHelperText>Pick Start Date</FormHelperText>
              </Grid>
              <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Field
                    as={DatePicker}
                    label="Auction End Date"
                    id="auction_end_date"
                    value={selectedEndDate}
                    onChange={handleEndDateAuctionChange}
                    renderInput={(params) => <TextField {...params} sx={inputFieldStyle} />}
                  />
                </LocalizationProvider>
                <FormHelperText>Pick End Date</FormHelperText>
              </Grid>
              <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Field
                    as={TimePicker}
                    label="Auction Start Time"
                    id="auction_start_date"
                    value={selectedStartTime}
                    onChange={handleStartTimeAuctionChange}
                    renderInput={(params) => <TextField {...params} sx={inputFieldStyle} />}
                  />
                </LocalizationProvider>
                <FormHelperText>Pick Start Date</FormHelperText>
              </Grid>
              <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Field
                    as={TimePicker}
                    label="Auction End Time"
                    id="auction_end_time"
                    value={selectedEndTime}
                    onChange={handleEndTimeAuctionChange}
                    renderInput={(params) => <TextField {...params} sx={inputFieldStyle} />}
                  />
                </LocalizationProvider>
                <FormHelperText>Pick End Date</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <Field
                as={TextField}
                fullWidth
                label= "Minimum Bid Amount"
                id="minimum_bid_amount"
                value={selectedBidAmount}
                onChange={handleBidAmountChange}
                renderInput={(params) => <TextField {...params} sx={inputFieldStyle} />}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="update" variant="contained" color="primary" disabled={isUpdating}>
                  {isUpdating? 'Updating...' : 'Update'}
                </Button>
              </Grid>
            </Grid>
            </MainCard> 
          </form>
        )}
      </Formik>
    </Page>
  );
}
export default AddAuctions;
