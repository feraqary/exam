import React, { useState, useEffect } from 'react';
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

export default function Categorization({ list, icon, setFieldValue, setCheckedItems }) {
  // const [checkedItems, setCheckedItems] = useState([]);

  
  // Function to handle checkbox changes
  const handleChange = (event) => {
    const { value, checked } = event.target;

    // Update the list of checked items based on the checkbox change
    setCheckedItems((prevCheckedItems) => {
      if (checked) {
        return [...prevCheckedItems, value]; // Add the item to the list if it's checked
      } else {
        return prevCheckedItems.filter((item) => item !== value); // Remove the item from the list if it's unchecked
      }
    });
  };

  return (
    <>
      <Grid item>
        <Typography variant="h4">{list[0].category}</Typography>
        <FormGroup>
          {list.map((facility, i) => {
            return (
              <FormControlLabel
                key={i}
                value={facility.id}
                control={<Checkbox onChange={handleChange} color="primary" />}
                label={facility.title}
                labelPlacement="end"
                icon={<Image fill src={icon} />}
                checkedIcon={<Image fill src={icon} />}
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
