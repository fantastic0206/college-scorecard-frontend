import { Select } from "antd";
import Accordion from "../../../../components/Accordion/Accordion";

const { Option } = Select;

const Location = (props) => {
  const children = (
    <Select className="w-100" size="large">
      <Option value="Near Me">Near Me</Option>
      <Option value="ZIP Code">ZIP Code</Option>
      <Option value="State">State</Option>
    </Select>
  );

  return (
    <Accordion
      searchKey={props.searchKey}
      label="Location"
      children={children}
    />
  );
};

export default Location;
