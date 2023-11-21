import Accordion from "components/Accordion/Accordion";
import { GraduationRateArea } from "./GraduationRate.style";
import { Checkbox, InputNumber, Slider } from "antd";
import { useState } from "react";

const GraduationRate = (props) => {
  const [inputValue, setInputValue] = useState(0);
  const [rateValue, setRateValue] = useState(0);
  const [checked, setChecked] = useState(false);

  const onCheckboxChange = (e) => {
    console.log("checked====", e.target.checked);
    setChecked(e.target.checked);
  };

  const onRateChange = (newValue) => {
    setRateValue(newValue);
    setInputValue(`>=${newValue}%`);
    setChecked(true);
  };

  const children = (
    <GraduationRateArea>
      <Checkbox onChange={onCheckboxChange} checked={checked} />
      <Slider
        onChange={onRateChange}
        value={typeof rateValue === "number" ? rateValue : 0}
        className="rate"
      />
      <InputNumber value={inputValue} onChange={onRateChange} />
    </GraduationRateArea>
  );

  return (
    <Accordion
      searchKey={props.searchKey}
      label="Graduation Rate"
      children={children}
    />
  );
};

export default GraduationRate;
