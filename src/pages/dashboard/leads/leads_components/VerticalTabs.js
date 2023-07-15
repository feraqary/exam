import PropTypes from 'prop-types';
import React, { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';

// project imports
import useConfig from 'hooks/useConfig';
import { gridSpacing } from 'store/constant';
import SubCard from 'components/ui-component/cards/SubCard';

// assets

//components
import Notification from './notifications';
import Leads from './property';
import Documents from './documents';

// tab content
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box
          sx={{
            p: 0
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

export default function VerticalTabs({ related_contacts }) {
  const theme = useTheme();
  const { borderRadius } = useConfig();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const companies = ['Develope LLC', 'Al dar', 'EMAAR', 'AQARY', 'FINE HOME', 'VERY FINE HOME'];

  return (
    <div>
      <Grid container spacing={gridSpacing}>
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
                px: 2,
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
            <Tab
              label={
                <Grid container direction="column">
                  <Typography variant="subtitle1" color="inherit">
                    Notification
                  </Typography>
                </Grid>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <Grid container direction="column">
                  <Typography variant="subtitle1" color="inherit">
                    Property
                  </Typography>
                </Grid>
              }
              {...a11yProps(6)}
            />
            <Tab
              label={
                <Grid container direction="column">
                  <Typography variant="subtitle1" color="inherit">
                    Documents
                  </Typography>
                </Grid>
              }
              {...a11yProps(4)}
            />
          </Tabs>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={9}>
          <TabPanel value={value} index={0}>
            <SubCard>
              <Stack spacing={gridSpacing}>
                <Notification />
              </Stack>
            </SubCard>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SubCard>
              <Stack spacing={gridSpacing}>
                <Leads />
              </Stack>
            </SubCard>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <SubCard>
              <Stack spacing={gridSpacing}>
                {/* //? hereeeeeeee contaxt ****************************/}
                <Documents />
              </Stack>
            </SubCard>
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}
