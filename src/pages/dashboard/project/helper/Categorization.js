// material-ui
import { Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Categorization({ list, setFieldValue, name, data }) {
  const [checkedItems, setCheckedItems] = useState([]);
  useEffect(() => {
    console.log(`checked ${name}`, checkedItems);
    setFieldValue(name, [...checkedItems]);
  }, [checkedItems]);
  // Function to handle checkbox changes
  const handleChange = (event) => {
    const { value, checked } = event?.target;

    setCheckedItems((prevCheckedItems) => {
      if (checked) {
        return [...prevCheckedItems, Number(value)]; // Add the item to the list if it's checked
      } else {
        return prevCheckedItems.filter((item) => item !== Number(value)); // Remove the item from the list if it's unchecked
      }
    });
  };

  return (
    <>
      {list?.map((element) => (
        <Grid item>
          <Typography variant="h4">{element}</Typography>
          {data[element]?.map((item, i) => {
            return (
              <Grid container>
                <FormControlLabel
                  key={i}
                  value={item?.id || 0}
                  control={<Checkbox onChange={handleChange} color="primary" />}
                  label={item?.name || item?.title || item?.label}
                  labelPlacement="end"
                />
              </Grid>
            );
          })}
        </Grid>
      ))}
    </>
  );
}
