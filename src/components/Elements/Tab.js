import PropTypes from 'prop-types';
import React from 'react';

import Link from 'Link';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Chip, Grid, Tab, Tabs, Typography } from '@mui/material';
import InputText from 'components/InputArea/TextInput';

// tab content
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box
          sx={{
            p: 3
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

// ================================|| UI TABS - SAMPLE ||================================ //

export default function CustomizedTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container xs={12} lg={4} flexDirection="column">
      <Tabs
        value={value}
        variant="scrollable"
        onChange={handleChange}
        sx={{
          mb: 3,
          '& a': {
            minHeight: 'auto',
            minWidth: 10,
            py: 1.5,
            px: 1,
            mr: 2.2,
            color: theme.palette.grey[600],
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          },
          '& a.Mui-selected': {
            color: theme.palette.primary.main
          },
          '& a > svg': {
            mb: '0px !important',
            mr: 1.1
          },
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Tab label="English" {...a11yProps(0)} />
        <Tab label="Arabic" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <InputText
          label="Unit Title English"
          type="text"
          placeholder="Unit Title"
          style={{ xs: 12, lg: 12 }}
          helperText="Please eneter the unit title"
        />
        <InputText
          label="Unit Description English"
          type="text"
          placeholder="Unit Description"
          style={{ xs: 12, lg: 12 }}
          helperText="Please enter the unit description"
        />
        <InputText
          label="Unit Notes English"
          type="text"
          placeholder="Unit Notes"
          style={{ xs: 12, lg: 12 }}
          helperText="Please enter the unit notes"
          multiline
          rows={5}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InputText
          label="Unit Title Arabic"
          type="text"
          placeholder="Unit Title"
          style={{ xs: 12, lg: 12 }}
          helperText="Please eneter the unit title"
        />
        <InputText
          label="Unit Description Arabic"
          type="text"
          placeholder="Unit Description"
          style={{ xs: 12, lg: 12 }}
          helperText="Please enter the unit description"
        />
        <InputText
          label="Unit Notes Arabic"
          type="text"
          placeholder="Unit Notes"
          style={{ xs: 12, lg: 12 }}
          helperText="Please enter the unit notes"
          multiline
          rows={5}
        />
      </TabPanel>
    </Grid>
  );
}
