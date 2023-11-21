import { Button, Col, Progress, Row, Table, Tabs } from "antd";
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

const Cost = (props) => {
  const items = [
    {
      label: "4-yr Schools",
      key: "yrschool",
      children: <Progress percent={40} size={["100%", 30]} />,
    },
    {
      label: "All Schools",
      key: "allschool",
      children: <Progress percent={40} size={["100%", 30]} />,
    },
  ];

  const columns = [
    {
      title: "Family Income",
      key: "familyincome",
      dataIndex: "family_income",
    },
    {
      title: "Average Annual Cost",
      key: "averageanuualconst",
      dataIndex: "average_annual_cost",
    },
  ];

  const dataSource = [
    {
      family_income: "$0 - $30000",
      average_annual_cost: "$32478",
    },
    {
      family_income: "$30001 - $48000",
      average_annual_cost: "$31208",
    },
    {
      family_income: "$48001 - $75000",
      average_annual_cost: "$31744",
    },
    {
      family_income: "$75001 - $110000",
      average_annual_cost: "$35728",
    },
    {
      family_income: "$110001+",
      average_annual_cost: "$47278",
    },
  ];

  const children = (
    <Row gutter={16} justify={"space-between"} style={{ padding: "0 20px" }}>
      <Col span={11} className="d-border">
        <Row>
          <Text fontSize="16px" fontWeight="bolder" content="GRADUATION RATE" />
          <InfoCircleFilled className="ml-3" />
        </Row>
        <Text
          fontSize="20px"
          content={`$40,452`}
          className="t-number mt-4"
          fontWeight="bolder"
        />
        <Text
          className="mt-5 mb-5"
          content="Cost includes tuition, living costs, books and supplies, and fees minus the average grants and scholarships for federal financial aid recipients."
        />
        <i>Show Midpoint for:</i>
        <Tabs items={items} />
      </Col>
      <Col span={11} className="d-border">
        <Text fontSize="16px" fontWeight="bolder" content="GRADUATION RATE" />
        <Text
          className="mt-5"
          content="Depending on the federal, state, or institutional grant aid available, students in your income bracket may pay more or less than the overall average costs."
        />
        <Table columns={columns} dataSource={dataSource} className="mt-5" />
        <Button type="primary">
          <CalculatorOutlined />
          Calculate your personal net price
          <LogoutOutlined />
        </Button>
      </Col>
    </Row>
  );

  return (
    <Accordion
      searchKey={props.searchKey}
      label={<Text fontWeight="bolder" fontSize="18px" content="Costs" />}
      children={children}
    />
  );
};

export default Cost;
