import React from 'react';
// material-ui
import {
  Grid,
  RadioGroup,
  CardActions,
  Chip,
  Box,
  FormControlLabel,
  OutlinedInput,
  Radio,
  FormGroup,
  Checkbox,
  Typography,
  FormHelperText,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';
import VerticalTabs from './contact_components/VerticalTabs';

import InputLabel from 'components/ui-component/extended/Form/InputLabel';
// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import AutocompleteForms from 'components/forms/forms-validation/AutocompleteForms';
import { useState, useEffect } from 'react';
import CustomDateTime from 'components/forms/components/DateTime/CustomDateTime';
import Container from 'components/Elements/Container';
import InputText from 'components/InputArea/TextInput';
import FileUpload from 'components/InputArea/FileUpload';
import Selector from 'components/InputArea/Selector';
import AutoCompleteSelector from 'components/InputArea/AutoCompleteSelector';
import InputDateTime from 'components/InputArea/InputDate';
import SubmitButton from 'components/Elements/SubmitButton';
import MainTabs from './Tabs';

// ==============================|| Add Contact||===========
export default function LandingPage() {
  return <MainTabs />;
}
