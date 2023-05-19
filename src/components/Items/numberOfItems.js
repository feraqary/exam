// material-ui
import { Grid, TextField, FormHelperText, InputLabel, Typography } from '@mui/material';

export const NumberOfItems = ({
  standard,
  setStandard,
  featured,
  setFeatured,
  premium,
  setPremium,
  dealOfWeek,
  setDealOfWeek,
  numberOfUnits
}) => {
  const handleStandardChange = (event) => {
    let val = event.target.value;
    if (val < 0) {
      val = '';
    }
    setStandard(val);
  };
  const handleFeaturedChange = (event) => {
    let val = event.target.value;
    if (val < 0) {
      val = '';
    }
    setFeatured(event.target.value);
  };
  const handlePremiumChange = (event) => {
    let val = event.target.value;
    if (val < 0) {
      val = '';
    }
    setPremium(event.target.value);
  };
  const handleDealOfWeekChange = (event) => {
    let val = event.target.value;
    if (val < 0) {
      val = '';
    }
    setDealOfWeek(event.target.value);
  };
  return (
    <Grid item xs={12} lg={6}>
      <Typography variant="h3" component="div" sx={{ mb: 3, mt: 8 }}>
        Items
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
          <InputLabel horizontal>Standard (10)</InputLabel>
        </Grid>
        <Grid item xs={12} sm={9} lg={6}>
          <TextField
            fullWidth
            type="number"
            InputProps={{
              inputProps: {
                min: 0
              }
            }}
            value={standard}
            onChange={handleStandardChange}
          />
          <FormHelperText>Please enter number of units</FormHelperText>
        </Grid>
        <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
          <InputLabel horizontal>Featured (20)</InputLabel>
        </Grid>
        <Grid item xs={12} sm={9} lg={6}>
          <TextField
            fullWidth
            type="number"
            InputProps={{
              inputProps: {
                min: 0
              }
            }}
            value={featured}
            onChange={handleFeaturedChange}
          />
          <FormHelperText>Please enter number of units</FormHelperText>
        </Grid>
        <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
          <InputLabel horizontal>Premium (30)</InputLabel>
        </Grid>
        <Grid item xs={12} sm={9} lg={6}>
          <TextField
            fullWidth
            type="number"
            InputProps={{
              inputProps: {
                min: 0
              }
            }}
            value={premium}
            onChange={handlePremiumChange}
          />
          <FormHelperText>Please enter number of units</FormHelperText>
        </Grid>
        <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
          <InputLabel horizontal>Deal Of Week (40)</InputLabel>
        </Grid>
        <Grid item xs={12} sm={9} lg={6}>
          <TextField
            fullWidth
            type="number"
            InputProps={{
              inputProps: {
                min: 0
              }
            }}
            value={dealOfWeek}
            onChange={handleDealOfWeekChange}
          />
          <FormHelperText>Please enter number of units</FormHelperText>
        </Grid>
        <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
          <InputLabel horizontal>Number of units</InputLabel>
        </Grid>
        <Grid item xs={12} sm={9} lg={6}>
          <TextField fullWidth value={numberOfUnits} disabled />
          <FormHelperText>number of units</FormHelperText>
        </Grid>
      </Grid>
    </Grid>
  );
};
