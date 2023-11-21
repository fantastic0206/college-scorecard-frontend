import Accordion from "components/Accordion/Accordion";
import { AverageAnnualCostArea } from "./AverageAnnualCost.style";
import { Checkbox, InputNumber, Slider } from "antd";
import { useState } from "react";

const AverageAnnualCost = (props) => {
  const [inputValue, setInputValue] = useState(0);
  const [rateValue, setRateValue] = useState(0);
  const [checked, setChecked] = useState(false);

  const onCheckboxChange = (e) => {
    console.log("checked====", e.target.checked);
    setChecked(e.target.checked);
  };

  const onRateChange = (newValue) => {
    setRateValue(newValue);
    setInputValue(`=<${newValue}k`);
    setChecked(true);
  };

  const children = (
    <AverageAnnualCostArea>
      <Checkbox onChange={onCheckboxChange} checked={checked} />
      <Slider
        onChange={onRateChange}
        value={typeof rateValue === "number" ? rateValue : 0}
        className="rate"
      />
      <InputNumber value={inputValue} onChange={onRateChange} />
    </AverageAnnualCostArea>
  );

  return (
    <Accordion
      searchKey={props.searchKey}
      label="Average Annual Cost"
      children={children}
    />
  );
};

export default AverageAnnualCost;
