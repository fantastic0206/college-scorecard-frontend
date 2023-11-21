import { Checkbox } from "antd";
import Accordion from "components/Accordion/Accordion";
import { SizeArea } from "./Size.style";

const Size = (props) => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const sizeOptions = [
    {
      label: "Small",
      value: "small",
    },
    {
      label: "Medium",
      value: "medium",
    },
    {
      label: "Large",
      value: "large",
    },
  ];

  const children = (
    <SizeArea>
      <Checkbox.Group key="size" options={sizeOptions} onChange={onChange} />
    </SizeArea>
  );

  return (
    <Accordion searchKey={props.searchKey} label="Size" children={children} />
  );
};

export default Size;
