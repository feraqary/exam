import { Button, Grid } from '@mui/material';
import Map from 'components/map/google-map';
// material-ui

// project imports
import CloseIcon from '@mui/icons-material/Close';
import PopUp from 'components/InputArea/PopUp';
import InputText from 'components/InputArea/TextInput';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function MultiPhaseInputs({ num, values, setFieldValues, DeleteFunc, id, phaseIndex }) {
  const size = 5.1;
  const MAP_SIZE = 1.2;
  const [open, setOpen] = useState(false);
  const [mapSubmitted, setMapSubmitted] = useState(false);
  const [polys, setPolys] = useState([]);
  const uuid = uuidv4();

  useEffect(() => {
    setFieldValues(`phases[${num}].id`, uuid);
    setFieldValues('numberofPhases', num + 1);
  }, []);

  useEffect(() => {
    setFieldValues(`phases[${num}].polygons`, [...polys]);
  }, [polys]);
  useEffect(() => {
    setFieldValues(`phases[${num}].mapSubmitted`, mapSubmitted);
  }, [mapSubmitted]);

  return (
    <>
      <InputText
        required
        label="Phase Name"
        placeholder="Phase Name"
        helperText="Please enter phase name"
        style={{ xs: 12, lg: size }}
        type="text"
        id={`phases[${num}].phaseName`}
        name={`phases[${num}].phaseName`}
      />
      <InputText
        required
        label="Number of Properties"
        placeholder="Number of Properties"
        helperText="Please enter number of properties"
        style={{ xs: 12, lg: size }}
        id={`phases[${num}].NoOfProperties`}
        name={`phases[${num}].NoOfProperties`}
        type="number"
      />

      <Grid xs={6} lg={MAP_SIZE} justifyContent="center" fullWidth>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          variant={values.phases[num].mapSubmitted ? 'contained' : 'outlined'}
          fullWidth
          sx={{ margin: '19px 0px 0px 8px', height: '48px' }}
        >
          {values.phases[num].mapSubmitted ? 'Edit Location' : 'Select Location'}
        </Button>
      </Grid>
      <PopUp title="Use the Map" opened={open} setOpen={setOpen} size={'xl'} fullWidth>
        {/* <MapAutocomplete placeHolder onChangeAddress={setAddress} value="uae" setlong={setlong} setlat={setlat} /> */}
        <Map
          setFieldValues={setFieldValues}
          setPolyValue={setPolys}
          xs={12}
          num={id}
          phaseIndex={num}
          phaseID={values.phases[num].id}
          lg={12}
          values={values}
          height={'65vh'}
          forPhase={true}
          close={setOpen}
          setSubmitted={setMapSubmitted}
        />
      </PopUp>
      <Grid xs={6} lg={0.5} justifyContent="center" fullWidth>
        <Button
          onClick={(e) => {
            const updatedPhases = values.phases?.filter((phase, index) => phase.id !== id);
            setFieldValues('phases', updatedPhases);
          }}
          fullWidth
          variant="outlined"
          color="error"
          sx={{ margin: '19px 0px 0px 8px', height: '48px' }}
        >
          <CloseIcon />
        </Button>
      </Grid>
    </>
  );
}

const resetComponents = (phaseType) => {
  if (phaseType) {
    setPhases((prev) => {
      const newPhases = [prev[0]];

      return newPhases;
    });
  }
};
