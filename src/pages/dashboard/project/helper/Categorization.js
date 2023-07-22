import React from 'react';
// material-ui
import {
  Grid,
  TextField,
  FormHelperText,
  Button,
  Box,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  InputLabel,
  Typography
} from '@mui/material';
import { m } from 'framer-motion';

export default function Categorization({ list, label }) {
  const handleChange = (e) => {
    (e) => {
      if (e.target.checked == true) {
        console.log(e.target.value);
        setfacilitiesSelected([...facilitiesSelected, e.target.value]);
      } else {
        const updatedState = facilitiesSelected.filter((item) => item !== e.target.value);
        setfacilitiesSelected(updatedState);
      }
    };
  };

  return (
    <>
      <Grid item>
        <Typography variant="h4">{label}</Typography>
        <FormGroup>
          {list.map((facility, i) => {
            return (
              <FormControlLabel
                // onChange={}
                key={i}
                value={1}
                control={<Checkbox color="primary" />}
                label={facility}
                labelPlacement="end"
              />
            );
          })}
        </FormGroup>
      </Grid>
    </>
  );
}

{
  /* {facilities.map((facility, i) => {
                          return (
                            <FormControlLabel
                              onChange={(e) => {
                                if (e.target.checked == true) {
                                  console.log(e.target.value);
                                  setfacilitiesSelected([...facilitiesSelected, e.target.value]);
                                } else {
                                  const updatedState = facilitiesSelected.filter((item) => item !== e.target.value);
                                  setfacilitiesSelected(updatedState);
                                }
                              }}
                              key={i}
                              value={facility.ID}
                              control={<Checkbox color="primary" />}
                              label={facility.Title}
                              labelPlacement="end"
                            />
                          );
                        })} */
}
