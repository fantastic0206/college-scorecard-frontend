import Accordion from "components/Accordion/Accordion";
import { Select } from "antd";

const SpecializedMission = (props) => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search", value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const children = (
    <Select
      size="large"
      showSearch
      placeholder="Select one..."
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={[
        {
          value: "select1",
          label: "select1",
        },
        {
          value: "select2",
          label: "select2",
        },
        {
          value: "select3",
          label: "select3",
        },
      ]}
      className="w-100"
    />
  );

  return (
    <Accordion
      searchKey={props.searchKey}
      label="Specialized Mission"
      children={children}
    />
  );
};

export default SpecializedMission;
