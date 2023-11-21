import { Button, Row, Col, Form, Input, Select } from "antd";
import { SearchFieldStudyArea } from "./Search.style";
import { CaretRightOutlined } from "@ant-design/icons";

const { Search } = Input;

const SearchFieldStudyForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <SearchFieldStudyArea>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={16}>
          <Col span={9}>
            <label>Search Fields of Study</label>
            <Form.Item
              name="field"
              children={<Search size="large" placeholder="Type to search" />}
              rules={[
                {
                  required: true,
                  message: "Please fill input!",
                },
              ]}
            />
          </Col>
          <Col span={8}>
            <label>Select Degree Type</label>
            <Form.Item
              name="degreeType"
              children={
                <Select size="large" placeholder="Select one">
                  <Option>select1</Option>
                  <Option>select2</Option>
                </Select>
              }
              rules={[
                {
                  required: true,
                  message: "Please select!",
                },
              ]}
            />
          </Col>
          <Col span={7}>
            <label className="save-search-btn">Save</label>
            <Button type="primary" size="large" className="search-btn">
              <CaretRightOutlined />
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </SearchFieldStudyArea>
  );
};

export default SearchFieldStudyForm;
