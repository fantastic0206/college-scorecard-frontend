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
import { CampustDiversityArea } from "./CampusDiversity.style";

const CampusDiversity = (props) => {
  const children = (
    <CampustDiversityArea style={{ padding: "0 20px" }}>
      <Row gutter={16} justify={"space-between"}>
        <Col span={5} className="d-border" style={{ textAlign: "center" }}>
          <UserOutlined />
          <Text content="Medium" fontWeight="bolder" fontSize="16px" />
        </Col>
        <Col span={6} className="d-border" style={{ textAlign: "center" }}>
          <Text fontSize="20px" content="6894" className="t-number" />
          <Text
            content="Undergraduate Students"
            fontWeight="bolder"
            fontSize="16px"
          />
        </Col>
        <Col span={6} className="d-border" style={{ textAlign: "center" }}>
          <Text fontSize="20px" content="98%" className="t-number" />
          <Row>
            <Text
              content="Full-time Students"
              fontWeight="bolder"
              fontSize="16px"
            />
            <InfoCircleFilled className="ml-3" />
          </Row>
        </Col>
        <Col span={5} className="d-border" style={{ textAlign: "center" }}>
          <Text fontSize="20px" content="2%" className="t-number" />
          <Text
            content="Part-time Students"
            fontWeight="bolder"
            fontSize="16px"
          />
        </Col>
      </Row>
      <Row gutter={16} className="mt-5" justify={"space-between"}>
        <Col span={11} className="d-border">
          <Row>
            <Text
              fontWeight="bolder"
              fontSize="16px"
              content="Socio-Economic Diversity"
            />
            <InfoCircleFilled className="ml-3" />
          </Row>
          <Text
            className="mt-5"
            content="The percentage of students who received an income-based federal Pell grant intended for low-income students."
          />
          <div style={{ textAlign: "center" }}>
            <Progress
              className="mt-5"
              size={150}
              strokeWidth={15}
              type="circle"
              percent={9}
            />
          </div>
        </Col>
        <Col span={11} className="d-border">
          <Text
            fontWeight="bolder"
            fontSize="16px"
            content="Student to Faculty Ratio"
          />
          <Text
            className="mt-5"
            content="The ratio of full-time students to full-time instructional faculty."
          />
          <Row className="mt-5 ml-7">
            <div className="ratio-circle student-color">12</div>
            <Text fontSize="30px" content=":" className="mt-5" />
            <div className="ratio-circle staff-color">1</div>
          </Row>
          <Row className="mt-5">
            <div className="key-box blue mt-3"></div>Full-Time Students
            <div className="key-box dark mt-3 ml-5"></div>Full-Time Staff
          </Row>
        </Col>
      </Row>
      <Row
        className="d-border mt-5"
        style={{ marginRight: "-8px", marginLeft: "-8px" }}
      >
        <Col span={24}>
          <Row>
            <Text
              fontWeight="bolder"
              fontSize="16px"
              content="Socio-Economic Diversity"
            />
            <InfoCircleFilled className="ml-3" />
          </Row>
          <Row className="mt-5">
            <div className="key-box blue mt-3"></div>Student Body
            <div className="key-box dark mt-3 ml-5"></div>Full-Time Staff
          </Row>
          <Row className="mt-5">
            <Col span={12}>
              <Text content="American indian/Alaska Native" />
              <Progress percent={0} size={["100%", 20]} />
              <Progress percent={0} size={["100%", 20]} className="mb-5" />
              <Text content="Asian" />
              <Progress percent={8} size={["100%", 20]} />
              <Progress percent={12} size={["100%", 20]} className="mb-5" />
              <Text content="Black" />
              <Progress percent={5} size={["100%", 20]} />
              <Progress percent={4} size={["100%", 20]} className="mb-5" />
              <Text content="Hispanic" />
              <Progress percent={14} size={["100%", 20]} />
              <Progress percent={5} size={["100%", 20]} className="mb-5" />
              <Text content="Native Hawaiian/Pacific Islander" />
              <Progress percent={0} size={["100%", 20]} />
              <Progress percent={0} size={["100%", 20]} className="mb-5" />
            </Col>
            <Col span={12}>
              <Text content="Non-resident alien" />
              <Progress percent={4} size={["100%", 20]} />
              <Progress percent={8} size={["100%", 20]} className="mb-5" />
              <Text content="Two or more races" />
              <Progress percent={4} size={["100%", 20]} />
              <Progress percent={0} size={["100%", 20]} className="mb-5" />
              <Text content="Unknown" />
              <Progress percent={1} size={["100%", 20]} />
              <Progress percent={0} size={["100%", 20]} className="mb-5" />
              <Text content="White" />
              <Progress percent={63} size={["100%", 20]} />
              <Progress percent={71} size={["100%", 20]} className="mb-5" />
            </Col>
          </Row>
        </Col>
      </Row>
    </CampustDiversityArea>
  );

  return (
    <Accordion
      searchKey={props.searchKey}
      label={
        <Text fontWeight="bolder" fontSize="18px" content="Campus Diversity" />
      }
      children={children}
    />
  );
};

export default CampusDiversity;
