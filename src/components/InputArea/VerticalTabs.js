import PropTypes from 'prop-types';
import React, { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';

// project imports
import useConfig from 'hooks/useConfig';
import { gridSpacing } from 'store/constant';
import SubCard from 'components/ui-component/cards/SubCard';

// tab content
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box
          sx={{
            p: 0,
            overflow: 'hidden'
          }}
        >
          {children}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

// ================================|| UI TABS - VERTICAL ||================================ //

export default function VerticalTabs({ TabsData }) {
  const theme = useTheme();
  const { borderRadius } = useConfig();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={gridSpacing} sx={{ overflow: 'hidden' }}>
      <Grid item xs={12} sm={4} md={4} lg={3}>
        <Tabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          variant="scrollable"
          sx={{
            '& .MuiTabs-flexContainer': {
              borderBottom: 'none'
            },
            '& button': {
              borderRadius: `${borderRadius}px`,
              color: theme.palette.mode === 'dark' ? theme.palette.grey[600] : theme.palette.grey[600],
              minHeight: 'auto',
              minWidth: '100%',
              py: 1.5,
              px: 3,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              textAlign: 'left',
              justifyContent: 'flex-start'
            },
            '& button.Mui-selected': {
              color: theme.palette.primary.main,
              background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50]
            },
            '& button > svg': {
              marginBottom: '0px !important',
              marginRight: 1.25,
              marginTop: 1.25,
              height: 20,
              width: 20
            },
            '& button > div > span': {
              display: 'block'
            },
            '& > div > span': {
              display: 'none'
            }
          }}
        >
          {TabsData?.map((tabs) => {
            return (
              <Tab
                label={
                  <Grid container direction="column">
                    <Typography variant="subtitle1" color="inherit">
                      {tabs.label}
                    </Typography>
                  </Grid>
                }
                {...a11yProps(tabs.index)}
              />
            );
          })}
        </Tabs>
      </Grid>
      <Grid item xs={12} sm={8} md={8} lg={9}>
        {TabsData?.map((tabs) => {
          return (
            <TabPanel value={value} index={tabs.index}>
              <SubCard>
                <Stack spacing={gridSpacing}>{tabs.component}</Stack>
              </SubCard>
            </TabPanel>
          );
        })}
      </Grid>
    </Grid>
  );
}
