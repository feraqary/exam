import { NormalInputText } from 'components/InputArea/TextInput';
import { useState } from 'react';

const DynamicPaymentPlan = () => {
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

export default DynamicPaymentPlan;
