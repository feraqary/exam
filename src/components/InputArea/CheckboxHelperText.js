import { FormControlLabel, Checkbox } from '@mui/material';
import { useFormikContext } from 'formik';
import { memo } from 'react';

export const CheckboxHelperText = memo(({ handleChange, ...rest }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <FormControlLabel
      control={<Checkbox onChange={(event) => handleChange(event, setFieldValue)} {...rest} />}
      label="Subscription Validity Same As Company Registration"
    />
  );
});
