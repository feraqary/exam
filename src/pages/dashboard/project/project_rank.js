import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useUpdateProjectRankMutation } from 'store/services/project/projectApi';
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

const PROJECT_STATUS = ['Standard', 'Featured', 'Premium', 'Top Deal'];
const ProjectRankSelector = memo(({ value, id}) => {
  const [projectStatus, setProjectStatus] = useState(value - 1);
  const [updateRank, result] =  useUpdateProjectRankMutation();

  useEffect(() => {
    if (result.isSuccess) {
      ToastSuccess('Project has been updated successfully');
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

      const data = {
        project_id : id,
        rank_id: value + 1,
      }
      
      updateRank(JSON.stringify(data));
      setProjectStatus(value);
    },
    [projectStatus]
  );
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="ProjectStatus">Project Status</InputLabel>
      <Select
        labelId="ProjectStatus"
        id="ProjectStatusCheckBox"
        value={PROJECT_STATUS[projectStatus]}
        onChange={handleChange}
        input={<OutlinedInput label="ProjectStatus" />}
        renderValue={(selected) => selected}
        MenuProps={MenuProps}
      >
        {PROJECT_STATUS.map((status) => (
          <MenuItem key={status} value={PROJECT_STATUS.indexOf(status)}>
            <Checkbox checked={PROJECT_STATUS.indexOf(status) === projectStatus} />
            <ListItemText primary={status} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

export default ProjectRankSelector;
