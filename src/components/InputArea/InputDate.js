// project imports
import React, { memo } from 'react';
import InputLayout from './InputLayout';
import CustomDateTime from 'components/forms/components/DateTime/CustomDateTime';
const InputDateTime = memo(({ label, placeholder, helperText, style, value, setValue, ...rest }) => {
  return (
    <InputLayout label={label} helperText={helperText} style={style}>
      <CustomDateTime />
    </InputLayout>
  );
});

export default InputDateTime;
