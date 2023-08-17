import * as React from 'react';
import { Box, Stepper, Step, StepButton, Button, Typography, Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { useMemo } from 'react';
import { useState } from 'react';
import DynamicPaymentPlan from './DynamicPaymentPlan';
import D1 from '../Plans/D1';
import D2 from '../Plans/D2';
import D3 from '../Plans/D3';
import D4 from '../Plans/D4';
import D5 from '../Plans/D5';

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return <D1 step={step} />;
    case 1:
      return <D2 step={step} />;
    case 2:
      return <D3 step={step} />;
    case 3:
      return <D4 step={step} />;
    case 4:
      return <D5 step={step} />;
    default:
      throw new Error('Unknown step');
  }
};

export const ProjectStepper = ({ option }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const steps = useMemo(() => {
    const arr = Array.from({ length: option && option > 0 ? option : 1 });
    const res = arr.map((arr, index) => `Option ${index + 1}`);
    res.push('Reviews');
    return res;
  }, [option]);

  const [installments, setInstallments] = useState(0);

  const changeInstallments = (val) => {
    setInstallments(val);
  };

  const installmentPlans = useMemo(() => {
    const arr = Array.from({ length: installments });
    const res = arr.map((arr, index) => <DynamicPaymentPlan />);
    return res;
  }, [installments]);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Grid item lg={12} xs={12}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Grid container spacing={gridSpacing} mt={5}>
              {getStepContent(activeStep)}
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>{completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}</Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </>
    </Grid>
  );
};
