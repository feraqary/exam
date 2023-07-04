import { FormControlLabel, Checkbox } from '@mui/material';
import { useFormikContext } from 'formik';

export const CheckboxHelperText = ({ handleChange, ...rest }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <FormControlLabel
      control={<Checkbox onChange={(event) => handleChange(event, setFieldValue)} {...rest} />}
      label="Subscription Validity Same As Company Registration"
    />
  );
};
