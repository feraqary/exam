// material-ui
import { Grid, FormHelperText, Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

// project imports
import InputLabel from 'components/ui-component/extended/Form/InputLabel';
import React from 'react';

/**
 * A layout component for form inputs that includes a label, helper text, and error message.
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the input.
 * @param {string} props.helperText - The helper text to display below the input.
 * @param {Object} props.style - The custom styles to apply to the component.
 * @param {boolean} props.required - Indicates if the input is required.
 * @param {string} props.metaError - The error message for the input.
 * @param {boolean} props.metaTouched - Indicates if the input has been touched.
 * @param {ReactNode} props.children - The input component(s) wrapped by the layout.
 * @returns {JSX.Element} The rendered InputLayout component.
 */

const InputLayout = ({ label, helperText, style, children, required,metaError, metaTouched, helperInfo }) => {
  return (
    <Grid item xs={style.xs} lg={style.lg}>
      <Grid container flexDirection="row" justifyContent="space-between" alignItems="flex-start">
        <InputLabel required={required}>{label}</InputLabel>
        <Tooltip title={helperText}>
          <IconButton>
            <InfoIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Grid>
      {children}
      {metaError && metaTouched ? (
        <FormHelperText sx={{ color: 'red' }}>{metaError}</FormHelperText>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </Grid>
  );
};

export default InputLayout;
