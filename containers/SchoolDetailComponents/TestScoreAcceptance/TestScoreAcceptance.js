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
  Slider,
  Table,
  Tabs,
} from "antd";

const TestScoreAcceptance = (props) => {
  const children = (
    <Row gutter={16} style={{ padding: "0 20px " }} justify={"space-between"}>
      <Col span={17} className="d-border">
        <Row>
          <Text fontWeight="bolder" fontSize="16px" content="Test Scores" />
          <InfoCircleFilled className="ml-3" />
        </Row>
        <Text
          className="mt-5"
          content="Southern Methodist University has an acceptance rate of 53%. Southern Methodist University considers admission test scores (SAT/ACT) during the application process, but does not require them. Students who were admitted to Southern Methodist University and enrolled typically had admission test scores in these ranges."
        />
        <Text
          className="mt-5"
          fontWeight="bolder"
          fontSize="16px"
          content="SAT"
        />
        <Text content="CRITICAL READING" />
        <Slider
          range
          step={10}
          defaultValue={[660, 740]}
          max={800}
          className="mb-5"
        />
        <Text content="MATH" />
        <Slider
          range
          step={10}
          defaultValue={[680, 770]}
          max={800}
          className="mb-5"
        />
        <Text fontWeight="bolder" fontSize="16px" content="ACT" />
        <Slider
          range
          step={10}
          defaultValue={[31, 34]}
          max={36}
          className="mb-5"
        />
      </Col>
      <Col span={6} className="d-border">
        <Row>
          <Text fontWeight="bolder" fontSize="16px" content="Acceptance Rate" />
          <InfoCircleFilled className="ml-3" />
        </Row>
        <div style={{ textAlign: "center" }}>
          <Progress
            className="mt-5"
            size={150}
            strokeWidth={15}
            type="circle"
            percent={53}
          />
        </div>
      </Col>
    </Row>
  );

  return (
    <Accordion
      searchKey={props.searchKey}
      label={
        <Text
          fontWeight="bolder"
          fontSize="18px"
          content="TestScores & Acceptance"
        />
      }
      children={children}
    />
  );
};

export default TestScoreAcceptance;
