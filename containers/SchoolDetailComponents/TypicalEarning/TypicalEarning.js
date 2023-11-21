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
import {
  Button,
  Checkbox,
  Col,
  Input,
  Progress,
  Row,
  Select,
  Table,
  Tabs,
} from "antd";

const TypicalEarning = (props) => {
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
    <Row gutter={16} style={{ padding: "0 20px" }}>
      <Col span={15} className="d-border">
        <Row>
          <Text
            fontSize="16px"
            fontWeight="bolder"
            content="Students Receiving Federal Loans"
          />
          <InfoCircleFilled className="ml-3" />
        </Row>
        <Text
          fontSize="20px"
          content={`$19500`}
          className="t-number mt-4"
          fontWeight="bolder"
        />
        <Text
          className="mt-5 mb-5"
          content="The median earnings of former students who received federal financial aid at 10 years after entering the school."
        />
        <i>Show Midpoint for:</i>
        <Tabs items={items} />
      </Col>
      <Col span={9}>
        <div className="d-border">
          <Row>
            <Text
              fontSize="16px"
              fontWeight="bolder"
              content="Percentage Earning More Than a High School Graduate"
            />
            {/* <InfoCircleFilled className="ml-3" /> */}
          </Row>
          <Row className="mt-5">
            <Text
              fontSize="20px"
              content={`$19500`}
              className="t-number mt-4"
              fontWeight="bolder"
            />
            <Text content="of students" className="mt-5 ml-2" />
          </Row>
        </div>
        <div className="d-border mt-5">
          <Row>
            <Text
              fontSize="16px"
              fontWeight="bolder"
              content="Earnings After Completing Field of Study "
            />
            {/* <InfoCircleFilled className="ml-3" /> */}
          </Row>
          <Text
            className="mt-5"
            content="Salary information for Fields of Study available at this school are in the All Fields of Study page."
          />
        </div>
      </Col>
    </Row>
  );

  return (
    <Accordion
      searchKey={props.searchKey}
      label={
        <Text fontWeight="bolder" fontSize="18px" content="Typical Earnings" />
      }
      children={children}
    />
  );
};

export default TypicalEarning;
