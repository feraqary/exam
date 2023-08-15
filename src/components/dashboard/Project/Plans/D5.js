import { NormalInputText } from 'components/InputArea/TextInput';
import { useMemo, useState } from 'react';
import { Grid } from '@mui/material';

const Plans = () => {
  const [percentage, setPercentage] = useState(null);
  const [date, setDate] = useState(null);
  const [milestone, setMilestone] = useState(null);
  return (
    <>
      <NormalInputText
        label="Percentage"
        placeholder="Please enter a percentage"
        style={{ xs: 12, lg: 4 }}
        value={percentage}
        func={setPercentage}
        type="text"
      />
      <NormalInputText label="Date" placeholder="Please enter a date" style={{ xs: 12, lg: 4 }} value={date} func={setDate} type="date" />
      <NormalInputText
        label="Milestone"
        placeholder="Please enter a milestone"
        style={{ xs: 12, lg: 4 }}
        value={milestone}
        func={setMilestone}
        type="text"
      />
    </>
  );
};

const DynamicPaymentPlan = ({ step }) => {
  const [amount, setAmount] = useState(null);

  const changeInstallmentsPlans = (val) => {
    setAmount(val);
  };

  const installmentPlans = useMemo(() => {
    const arr = Array.from({ length: amount });
    const res = arr.map((arr, index) => <Plans />);
    return res;
  }, [amount, step]);

  return (
    <>
      <NormalInputText
        label="Intallment plans"
        placeholder="enter number of intallment plans"
        style={{ xs: 12, lg: 4 }}
        type="number"
        value={amount}
        func={changeInstallmentsPlans}
      />
      <Grid lg={8} />
      {installmentPlans}
    </>
  );
};

export default DynamicPaymentPlan;
