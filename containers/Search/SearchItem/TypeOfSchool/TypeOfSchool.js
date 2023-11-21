import { Checkbox } from "antd";
import Accordion from "components/Accordion/Accordion";
import { TypeOfSchoolArea } from "./TypeOfSchool.style";

const TypeOfSchool = (props) => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const typeSchoolOptions = [
    {
      label: "Public",
      value: "public",
    },
    {
      label: "Private Nonprofit",
      value: "privatenonprofit",
    },
    {
      label: "Private For-Profit",
      value: "Privateforprofit",
    },
  ];

  const children = (
    <TypeOfSchoolArea>
      <Checkbox.Group
        key="typeofschool"
        options={typeSchoolOptions}
        onChange={onChange}
      />
    </TypeOfSchoolArea>
  );

  return (
    <Accordion
      searchKey={props.searchKey}
      label="Type of School"
      children={children}
    />
  );
};

export default TypeOfSchool;
