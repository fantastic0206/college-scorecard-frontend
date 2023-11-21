import { Checkbox } from "antd";
import Accordion from "components/Accordion/Accordion";
import { UrbanicityArea } from "./Urbanicity.style";

const Urbanicity = (props) => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const urbanicityOptions = [
    {
      label: "City",
      value: "city",
    },
    {
      label: "Suburban",
      value: "suburban",
    },
    {
      label: "Town",
      value: "town",
    },
    {
      label: "Rural",
      value: "rural",
    },
  ];

  const children = (
    <UrbanicityArea>
      <Checkbox.Group
        key="urbanicity"
        options={urbanicityOptions}
        onChange={onChange}
      />
    </UrbanicityArea>
  );

  return (
    <Accordion
      searchKey={props.searchKey}
      label="Urbanicity"
      children={children}
    />
  );
};

export default Urbanicity;
