import Accordion from "components/Accordion/Accordion";
import { useState } from "react";
import { TestScoreArea, TestScoreItemArea } from "./TestScore.style";
import { Checkbox, InputNumber, Slider } from "antd";
import Text from "components/UI/Text/Text";

const TestScore = (props) => {
  const [mathInputValue, setMathInputValue] = useState(0);
  const [criticalInputValue, setCriticalInputValue] = useState(0);
  const [scoreInputValue, setScoreInputValue] = useState(0);
  const [mathChecked, setMathChecked] = useState(false);
  const [criticalChecked, setCriticalChecked] = useState(false);
  const [scoreChecked, setScoreChecked] = useState(false);

  const onCheckboxChange = (e, type) => {
    if (type === "math") setMathChecked(e.target.checked);
    if (type === "critical") setCriticalChecked(e.target.checked);
    if (type === "score") setScoreChecked(e.target.checked);
  };

  const onRateChange = (newValue, type) => {
    if (type === "math") {
      setMathInputValue(newValue);
      setMathChecked(true);
    }
    if (type === "critical") {
      setCriticalInputValue(newValue);
      setCriticalChecked(true);
    }
    if (type === "score") {
      setScoreInputValue(newValue);
      setScoreChecked(true);
    }
  };

  const children = (
    <TestScoreArea>
      <Text fontSize="16px" content="SAT Math" />
      <TestScoreItemArea>
        <Checkbox
          onChange={(e) => onCheckboxChange(e, "math")}
          checked={mathChecked}
        />
        <Slider
          onChange={(e) => onRateChange(e, "math")}
          value={typeof mathInputValue === "number" ? mathInputValue : 0}
          className="rate"
          min={0}
          max={800}
        />
        <InputNumber
          value={mathInputValue}
          onChange={(e) => onRateChange(e, "math")}
          min={0}
          max={800}
        />
      </TestScoreItemArea>
      <Text fontSize="16px" content="SAT Critical Reading" />
      <TestScoreItemArea>
        <Checkbox
          onChange={(e) => onCheckboxChange(e, "critical")}
          checked={criticalChecked}
        />
        <Slider
          onChange={(e) => onRateChange(e, "critical")}
          value={
            typeof criticalInputValue === "number" ? criticalInputValue : 0
          }
          className="rate"
          min={0}
          max={800}
        />
        <InputNumber
          value={criticalInputValue}
          onChange={(e) => onRateChange(e, "critical")}
          min={0}
          max={800}
        />
      </TestScoreItemArea>
      <Text fontSize="16px" content="ACT Score" />
      <TestScoreItemArea>
        <Checkbox
          onChange={(e) => onCheckboxChange(e, "score")}
          checked={scoreChecked}
        />
        <Slider
          onChange={(e) => onRateChange(e, "score")}
          value={typeof scoreInputValue === "number" ? scoreInputValue : 0}
          className="rate"
          min={0}
          max={36}
        />
        <InputNumber
          value={scoreInputValue}
          onChange={(e) => onRateChange(e, "score")}
          min={0}
          max={36}
        />
      </TestScoreItemArea>
    </TestScoreArea>
  );

  return (
    <Accordion
      searchKey={props.searchKey}
      label="Test Score"
      children={children}
    />
  );
};

export default TestScore;
