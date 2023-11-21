import { Checkbox } from "antd";
import Accordion from "components/Accordion/Accordion";

const WIOAProgram = (props) => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const children = (
    <Checkbox onChange={onChange}>
      Only show schools that have Department of Labor WIOA programs
    </Checkbox>
  );

  return (
    <Accordion
      searchKey={props.searchKey}
      label="WIOA Programs"
      children={children}
    />
  );
};

export default WIOAProgram;
