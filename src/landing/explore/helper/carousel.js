import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { positions } from '@mui/system';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel({ list }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = list.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        maxWidth: '70%',
        flexGrow: 1,
        margin: 'auto',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 5,
        boxShadow: '0px 7px 10px -5px rgba(0,0,0,0.75);'
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          //   height: "100%",
          pl: 2,
          bgcolor: 'background.default',
          width: '70%'
        }}
      >
        <Typography
          variant="h1"
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            padding: 10,
            zIndex: 10,
            width: '100%',
            background: 'linear-gradient(#000000, rgba(0,0,0,.01));',
            color: 'white',
            borderRadius: '5'
          }}
        >
          {list[activeStep].title}
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {list.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 550,
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                  //   margin: '0 auto',
                  objectFit: 'cover',
                  borderRadius: 5
                }}
                src={step.img}
                alt={step.title}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default Carousel;
