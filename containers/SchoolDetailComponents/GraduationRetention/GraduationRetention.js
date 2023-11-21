import { Button, Checkbox, Col, Progress, Row, Tabs } from "antd";
import { GraduationRetentionArea } from "./GraduationRetention.style";
import Accordion from "components/Accordion/Accordion";
import Text from "components/UI/Text/Text";
import {
  SlidersOutlined,
  CloseCircleOutlined,
  SortAscendingOutlined,
  ShareAltOutlined,
  StarOutlined,
  LikeOutlined,
  MessageOutlined,
  StarFilled,
  BankOutlined,
  HomeFilled,
  UserOutlined,
  InfoCircleFilled,
  BankFilled,
  SettingFilled,
  CalculatorOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const GraduationRetention = (props) => {
  const items = [
    {
      label: "4-yr Schools",
      key: "yrschool",
      children: <Progress percent={80} size={["100%", 30]} />,
    },
    {
      label: "All Schools",
      key: "allschool",
      children: <Progress percent={80} size={["100%", 30]} />,
    },
  ];

  const children = (
    <GraduationRetentionArea style={{ padding: "0 20px" }}>
      <Row gutter={16} justify={"space-between"}>
        <Col span={11} className="d-border">
          <Row>
            <Text
              fontSize="16px"
              fontWeight="bolder"
              content="Graduation Rate"
            />
            <InfoCircleFilled className="ml-3" />
          </Row>
          <Checkbox className="mt-5 mb-5">
            Show Pell Grant Recipients Onlly
          </Checkbox>
          <br />
          <i>Show Midpoint for:</i>
          <Tabs items={items} />
        </Col>
        <Col span={11} className="d-border" style={{ textAlign: "center" }}>
          <Row className="mb-5">
            <Text
              fontSize="16px"
              fontWeight="bolder"
              content="Students Who Return After Their First Year"
            />
            <InfoCircleFilled className="ml-3" />
          </Row>
          <Progress type="circle" percent={90} size={150} strokeWidth={15} />
        </Col>
      </Row>
      <Row className="mt-5" style={{ marginRight: "-8px", marginLeft: "-8px" }}>
        <Col span={24} className="d-border">
          <Row>
            <Text
              fontSize="16px"
              fontWeight="bolder"
              content="Outcomes 8 Years After Attending"
            />
            <InfoCircleFilled className="ml-3" />
          </Row>
          <Checkbox className="mt-5">Show Pell Grant Recipients Onlly</Checkbox>
          <Row className="mt-5">
            <Text content="Show data for students who" />
            <Button size="small" className="ml-3">
              Started College here
            </Button>
            <Button size="small" className="ml-3">
              transferred in
            </Button>
            <Button size="small" className="ml-3" type="primary">
              both
            </Button>
          </Row>
          <Row className="mt-4">
            <Text content="and started their studies" />
            <Button className="ml-3" size="small">
              full-time
            </Button>
            <Button className="ml-3" size="small">
              part-time
            </Button>
            <Button className="ml-3" size="small" type="primary">
              both
            </Button>
          </Row>
          <Row className="mt-5" gutter={16}>
            <Col span={6} className="mt-6">
              <Text content="Out of 3,797 students..." />
            </Col>
            <Col span={12}>
              <Row>
                <div
                  style={{
                    width: "70px",
                    height: "150px",
                    background: "#1677ff",
                  }}
                ></div>
                <Text content="80% graduated" className="ml-5 mt-6" />
              </Row>
              <Row className="mt-3">
                <div
                  style={{
                    width: "70px",
                    height: "20px",
                    background: "#1677ff",
                  }}
                ></div>
                <Text content="17% graduated" className="ml-5" />
              </Row>
              <Row className="mt-3">
                <div
                  style={{
                    width: "70px",
                    height: "10px",
                    background: "#1677ff",
                  }}
                ></div>
                <Text content="4% graduated" className="ml-5" />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </GraduationRetentionArea>
  );

  return (
    <Accordion
      searchKey={props.searchKey}
      label={
        <Text
          fontWeight="bolder"
          fontSize="18px"
          content="Graduation Retention"
        />
      }
      children={children}
    />
  );
};

export default GraduationRetention;
