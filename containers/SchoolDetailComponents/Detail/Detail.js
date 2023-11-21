import { Col, Progress, Row, Tabs } from "antd";
import Text from "components/UI/Text/Text";
import Accordion from "components/Accordion/Accordion";
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

const TabItem = (props) => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Row>
          <Text fontSize="28px" content="Graduation Rate" />
          <InfoCircleFilled className="ml-3" />
        </Row>
        <Text
          fontSize="20px"
          content={`80%`}
          className="t-number mt-4"
          fontWeight="bolder"
        />
        <i>Midpoint for 4-yr Schools: 58%</i>
        <div
          style={{ width: "30px", height: "200px", border: "1px solid #ccc" }}
        ></div>
      </Col>
      <Col span={12}>
        <div>
          <Row>
            <Text fontSize="28px" content="Average Annual Cost" />
            <InfoCircleFilled className="ml-3" />
          </Row>
          <Text
            fontSize="20px"
            content={`$40452`}
            className="t-number mt-4"
            fontWeight="bolder"
          />
          <i>Midpoint for 4-yr Schools: $18902</i>
          <Progress percent={40} />
        </div>
        <div>
          <Row>
            <Text fontSize="28px" content="Median Earnings" />
            <InfoCircleFilled className="ml-3" />
          </Row>
          <Text
            fontSize="20px"
            content={`$76672`}
            className="t-number mt-4"
            fontWeight="bolder"
          />
          <i>Midpoint for 4-yr Schools: $50482</i>
          <Progress percent={75} />
        </div>
      </Col>
    </Row>
  );
};

const Detail = () => {
  const items = [
    {
      label: "Midpoint for 4-yr Schools",
      key: "yrschool",
      children: <TabItem />,
    },
    {
      label: "Midpoint for All Schools",
      key: "allschool",
      children: <TabItem />,
    },
  ];

  return <Tabs items={items} />;
};

export default Detail;
