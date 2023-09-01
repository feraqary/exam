import {  Grid } from '@mui/material';
import MainCard from 'components/ui-component/cards/MainCard';
import React from 'react';
import { Item } from 'components/InputArea/information/view_information';
import { useGetProjectByIdQuery } from 'store/services/project/projectApi';
const ProjectInformation = ({ id }) => {
  const { data, isError, isLoading } = useGetProjectByIdQuery(id);

  const completionStatus = ['Upcoming', 'Under Construction', 'Completed', 'Off Plan', 'Ready'];
  const lifestylelist = ['Affordable', 'Standard', 'Luxury', 'Ultra Luxury'];
  const furnished = ['Non Furnished', 'Semi Furnished', 'Fully Furnished'];
  return (
    <>
      <Grid item xs={12}>
        <MainCard title="Project Details">
          <Grid container spacing={2} alignItems="center">
            <Item primary="Project Name:" secondary={data?.data?.label} />
            <Grid item xs={12} lg={12}></Grid>
            <Item primary="Is The Project Shared?:" secondary={data?.data?.is_shared ? 'Yes' : 'No'} />
            {data?.data?.is_shared && <Item primary="Broker Companies:" secondary={''} />}
            <Item primary="Developer Company:" secondary={data?.data?.parent_developer_company?.label} />
            <Item primary="Sub Developer Company:" secondary={''} />
            {data?.data?.phases.length !== 0 && <Item primary="Phases:" secondary={data?.data?.phases.map((phases) => phases.label)} />}
          </Grid>
        </MainCard>
      </Grid>

      <Grid item xs={12}>
        <MainCard title="Location Details">
          <Grid container spacing={2} alignItems="center">
            <Item primary="Country:" secondary={data?.data?.country?.country} />
            <Item primary="State:" secondary={data?.data?.state?.state} />
            <Item primary="City:" secondary={data?.data?.city?.city} />
            <Item primary="Community:" secondary={data?.data?.community?.community} />
            <Item primary="Sub Community:" secondary={data?.data?.sub_community?.sub_community} />
          </Grid>
        </MainCard>
      </Grid>

      <Grid item xs={12}>
        {data?.data?.phases?.length === 0 && (
          <MainCard title="Property Details">
            <Grid container spacing={2}>
              <>
                <Item primary="Property Title:" secondary={data?.data?.property_title} />
                <Item primary="Arabic Property Title:" secondary={data?.data?.property_title_arabic} />
                <Item primary="Property Description:" secondary={data?.data?.description} />
                <Item primary="Arabic Property Description:" secondary={data?.data?.description_arabic} />
                <Item primary="Completion Status:" secondary={completionStatus[data?.data?.completion_status]} />
                <Item primary="Property Status:" secondary={data?.data?.property_type?.map((type) => `${type.label}, `)} />
                <Item primary="View:" secondary={data?.data?.view?.map((v) => `${v.label}, `)} />
                <Item primary="Facilities:" secondary={data?.data?.facilities?.map((f) => `${f.label}, `)} />
                <Item primary="Amenities:" secondary={data?.data?.amenities?.map((a) => `${a.label}, `)} />
                <Item primary="Plot Area:" secondary={data?.data?.plot_area || 0} />
                <Item primary="Elevators:" secondary={data?.data?.elevator || 0} />
                <Item primary="Lifestyle:" secondary={lifestylelist[data?.data?.life_style]} />
                <Item primary="Built Up Area:" secondary={data?.data?.built_up_area || 0} />
                <Item primary="Ownership:" secondary={data?.data?.ownership || ''} />
                <Item primary="Furnished:" secondary={furnished[data?.data?.furnished]} />
                <Item primary="Area Range -max-:" secondary={data?.data?.max_area || 0} />
                <Item primary="Area Range -min-:" secondary={data?.data?.min_area || 0} />
                <Item primary="Parking:" secondary={data?.data?.parking || 0} />
                <Item primary="Start Date:" secondary={data?.data?.start_date} />
                <Item primary="Completion Date:" secondary={data?.data?.completion_date} />
                <Item primary="Handover Date:" secondary={data?.data?.handover_date} />
                <Item primary="No. Of Floors:" secondary={data?.data?.no_of_floor || 0} />
                <Item primary="No. Of Units:" secondary={'' || 0} />
                <Item primary="Available Units:" secondary={'' || 0} />
                <Item primary="No. Of Pools:" secondary={data?.data?.no_of_pool || 0} />
                <Item primary="No. Of Retail Center:" secondary={data?.data?.no_of_retail || 0} />
                <Item primary="Service Charge:" secondary={data?.data?.service_charge || 0} />
                <Item primary="Starting Price:" secondary={data?.data?.starting_price || 0} />
              </>
            </Grid>
          </MainCard>
        )}
      </Grid>
    </>
  );
};

export default ProjectInformation;
