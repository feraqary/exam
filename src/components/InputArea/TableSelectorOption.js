import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { ToastError, ToastSuccess } from 'utils/toast';
import { memo, useState, useEffect } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
const COMAPANY_STATUS = ['Standard', 'Featured', 'Premium', 'Top Deal'];

const TableSelectorOption = memo(({ value, formData, func }) => {
  const [companyStatus, setCompanyStatus] = useState(value - 1);

  const [updateRank, result] = func;

  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Rank has been updated successfully');
    }
  }, [result.isSuccess]);

  useEffect(() => {
    if (result.isError) {
      const { data } = result.error;
      ToastError(data.error);
    }
  }, [result.isError]);

  const handleChange = React.useCallback(
    (event) => {
      const {
        target: { value }
      } = event;
      formData.append('rank', value + 1);
      updateRank(formData);
      setCompanyStatus(value);
    },
    [companyStatus]
  );

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="CompanyStatus">Company Status</InputLabel>
      <Select
        labelId="CompanyStatus"
        id="CompanyStatusCheckBox"
        value={COMAPANY_STATUS[companyStatus]}
        onChange={handleChange}
        input={<OutlinedInput label="CompanyStatus" />}
        renderValue={(selected) => selected}
        MenuProps={MenuProps}
      >
        {COMAPANY_STATUS.map((status) => (
          <MenuItem key={status} value={COMAPANY_STATUS.indexOf(status)}>
            <Checkbox checked={COMAPANY_STATUS.indexOf(status) === companyStatus} />
            <ListItemText primary={status} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

export default TableSelectorOption;
