import Text from "components/UI/Text/Text";
import { SearchOptionArea, SwitchLine } from "./Search.style";
import { Button, Col, Row, Switch } from "antd";

const SearchOption = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <SearchOptionArea>
      <Text
        fontSize="18px"
        content="Select one or more options to create a list of chools that fit your needs."
      />
      <Row gutter={16}>
        <Col span={12}>
          <SwitchLine>
            <Switch onChange={onChange} />
            <label className="switch-label">Schools Near Me</label>
          </SwitchLine>
          <SwitchLine>
            <Switch onChange={onChange} />
            <label className="switch-label">Most People Get In</label>
          </SwitchLine>
          <SwitchLine>
            <Switch onChange={onChange} />
            <label className="switch-label">Most People graduate</label>
          </SwitchLine>
        </Col>
        <Col span={12}>
          <SwitchLine>
            <Switch onChange={onChange} />
            <label className="switch-label">I Want a Certificate</label>
          </SwitchLine>
          <SwitchLine>
            <Switch onChange={onChange} />
            <label className="switch-label">I Want an Associate's Degree</label>
          </SwitchLine>
          <SwitchLine>
            <Switch onChange={onChange} />
            <label className="switch-label">I Want a Bachelor's Degree</label>
          </SwitchLine>
        </Col>
      </Row>
      <Button type="primary" size="large" className="find-school">Find Schools</Button>
    </SearchOptionArea>
  );
};

export default SearchOption;
