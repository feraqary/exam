// add_promotions.js

import React, { useState } from 'react';
import { Grid, TextField, FormHelperText, Button, ListItemText } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Page from 'components/ui-component/Page';
import { MultipleAutoCompleteSelector } from 'components/InputArea/AutoCompleteSelector';
import { Formik, Field } from 'formik';
import Layout from 'layout';
import { useGetProjectByIdQuery } from 'store/services/project/projectApi';
import Typography from '@mui/material/Typography';
import MainCard from 'components/ui-component/cards/MainCard';
import { a } from 'react-spring';

function ViewInformation({ project_id }) {
  const { data: projectData, isLoading, isError } = useGetProjectByIdQuery(project_id);

  const completionStatus = ['Upcoming', 'Under Construction', 'Completed', 'Off Plan', 'Ready'];
  const lifestylelist = ['Affordable', 'Standard', 'Luxury', 'Ultra Luxury'];
  const furnished = ['Non Furnished', 'Semi Furnished', 'Fully Furnished'];

  return (
    <Page title="Add Promotions">
      <Grid item xs={12}>
        <MainCard title="Project Details">
          <Grid container spacing={2} alignItems="center">
            <Item primary="Project Name:" secondary={projectData?.data?.label} />
            <Grid item xs={12} lg={12}></Grid>
            <Item primary="Is The Project Shared?:" secondary={projectData?.data?.is_shared ? 'Yes' : 'No'} />
            {projectData?.data?.is_shared && <Item primary="Broker Companies:" secondary={''} />}
            <Item primary="Developer Company:" secondary={projectData?.data?.parent_developer_company?.label} />
            <Item primary="Sub Developer Company:" secondary={''} />
            {projectData?.data?.phases.length !== 0 && (
              <Item primary="Phases:" secondary={projectData?.data?.phases.map((phases) => phases.label)} />
            )}
          </Grid>
        </MainCard>
      </Grid>

      {/* location====================== */}
      <Grid item xs={12}>
        <MainCard title="Location Details">
          <Grid container spacing={2} alignItems="center">
            <Item primary="Country:" secondary={projectData?.data?.country?.country} />
            <Item primary="State:" secondary={projectData?.data?.state?.state} />
            <Item primary="City:" secondary={projectData?.data?.city?.city} />
            <Item primary="Community:" secondary={projectData?.data?.community?.community} />
            <Item primary="Sub Community:" secondary={projectData?.data?.sub_community?.sub_community} />
          </Grid>
        </MainCard>
      </Grid>
      {/* property Information====================== */}
      <Grid item xs={12}>
        {projectData?.data?.phases.length === 0 && (
          <MainCard title="Property Details">
            <Grid container spacing={2}>
              <>
                <Item primary="Property Title:" secondary={projectData?.data?.property_title} />
                <Item primary="Arabic Property Title:" secondary={projectData?.data?.property_title_arabic} />
                <Item primary="Property Description:" secondary={projectData?.data?.description} />
                <Item primary="Arabic Property Description:" secondary={projectData?.data?.description_arabic} />
                <Item primary="Completion Status:" secondary={completionStatus[projectData?.data?.completion_status]} />
                <Item primary="Property Status:" secondary={projectData?.data?.property_type?.map((type) => `${type.label}, `)} />
                <Item primary="View:" secondary={projectData?.data?.view?.map((v) => `${v.name}, `)} />
                <Item primary="Facilities:" secondary={projectData?.data?.facilities?.map((f) => `${f.label}, `)} />
                <Item primary="Amenities:" secondary={projectData?.data?.amenities?.map((a) => `${a.label}, `)} />
                <Item primary="Plot Area:" secondary={projectData?.data?.plot_area || 0} />
                <Item primary="Elevators:" secondary={projectData?.data?.elevator || 0} />
                <Item primary="Lifestyle:" secondary={lifestylelist[projectData?.data?.life_style]} />
                <Item primary="Built Up Area:" secondary={projectData?.data?.built_up_area || 0} />
                <Item primary="Ownership:" secondary={projectData?.data?.ownership || ''} />
                <Item primary="Furnished:" secondary={furnished[projectData?.data?.furnished]} />
                <Item primary="Area Range -max-:" secondary={projectData?.data?.max_area || 0} />
                <Item primary="Area Range -min-:" secondary={projectData?.data?.min_area || 0} />
                <Item primary="Parking:" secondary={projectData?.data?.parking || 0} />
                <Item primary="Start Date:" secondary={projectData?.data?.start_date} />
                <Item primary="Completion Date:" secondary={projectData?.data?.completion_date} />
                <Item primary="Handover Date:" secondary={projectData?.data?.handover_date} />
                <Item primary="No. Of Floors:" secondary={projectData?.data?.no_of_floor || 0} />
                <Item primary="No. Of Units:" secondary={'' || 0} />
                <Item primary="Available Units:" secondary={'' || 0} />
                <Item primary="No. Of Pools:" secondary={projectData?.data?.no_of_pool || 0} />
                <Item primary="No. Of Retail Center:" secondary={projectData?.data?.no_of_retail || 0} />
                <Item primary="Service Charge:" secondary={projectData?.data?.service_charge || 0} />
                <Item primary="Starting Price:" secondary={projectData?.data?.starting_price || 0} />
              </>
            </Grid>
          </MainCard>
        )}
      </Grid>
    </Page>
  );
}

const Item = ({ primary, secondary }) => {
  return (
    <>
      <Grid item xs={6} lg={4}>
        <ListItemText primary={primary} secondary={secondary} />
      </Grid>
    </>
  );
};

const InfoDisplay = ({ dataToDisplay }) => {
  return <></>;
};

export default ViewInformation;
