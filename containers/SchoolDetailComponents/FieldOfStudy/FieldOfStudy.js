import {
  Alert,
  Button,
  Checkbox,
  Col,
  Collapse,
  Progress,
  Row,
  Tabs,
  Input,
} from "antd";
import SearchFieldStudyForm from "../../Home/Search/SearchFieldStudy";
import AcademicField from "../../Search/SearchItem/AcademicField/AcademicField";
import {
  FieldOfStudyArea,
  TabItemArea,
  TabItemChildrenArea,
} from "./FieldOfStudy.style";
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

const { Search } = Input;

const TabItemChildren = (props) => {
  return (
    <TabItemChildrenArea>
      <Row gutter={16} justify={"space-between"}>
        <Col span={11}>
          <Row>
            <Text
              fontSize="16px"
              fontWeight="bolder"
              content="Median Earnings"
            />
            <InfoCircleFilled className="ml-3" />
          </Row>
          <Text
            fontSize="20px"
            content={`$113839`}
            className="t-number mt-4"
            fontWeight="bolder"
          />
          <Progress percent={90} size={["100%", 30]} />
        </Col>
        <Col span={11}>
          <Row>
            <Text
              fontSize="16px"
              fontWeight="bolder"
              content="Median Total Debt After Graduation"
            />
            <InfoCircleFilled className="ml-3" />
          </Row>
          <Text
            fontSize="20px"
            content={`$19439`}
            className="t-number mt-4"
            fontWeight="bolder"
          />
          <Progress percent={20} size={["100%", 30]} />
        </Col>
      </Row>
      <Row gutter={16} justify={"space-between"} className="mt-5">
        <Col span={7}>
          <Row>
            <Text
              fontSize="16px"
              fontWeight="bolder"
              content="Monthly Earnings"
            />
            <InfoCircleFilled className="ml-3" />
          </Row>
          <Text
            fontSize="20px"
            content={`$9487`}
            className="t-number mt-4"
            fontWeight="bolder"
          />
        </Col>
        <Col span={7}>
          <Row>
            <Text
              fontSize="16px"
              fontWeight="bolder"
              content="Monthly Loan Payment"
            />
            <InfoCircleFilled className="ml-3" />
          </Row>
          <Text
            fontSize="20px"
            content={`$206`}
            className="t-number mt-4"
            fontWeight="bolder"
          />
        </Col>
        <Col span={7}>
          <Row>
            <Text
              fontSize="16px"
              fontWeight="bolder"
              content="Number of Graduates"
            />
            <InfoCircleFilled className="ml-3" />
          </Row>
          <Text
            fontSize="20px"
            content={`$287`}
            className="t-number mt-4"
            fontWeight="bolder"
          />
        </Col>
      </Row>
      <Checkbox className="mt-5">
        <Row>
          <Text content="Include debt borrowed at any prior institutions" />
          <InfoCircleFilled className="ml-3" />
        </Row>
      </Checkbox>
    </TabItemChildrenArea>
  );
};

const TabItem = (props) => {
  const items = [
    {
      key: "1",
      label: (
        <Row>
          <Col span={16}>
            <Text
              fontSize="15px"
              fontWeight="bolder"
              content="Finance and Financial Management Services-Bachelor's Degree"
            />
          </Col>
          <Col span={8} className="t-number">
            <Text fontSize="15px" fontWeight="bolder" content="287" />
          </Col>
        </Row>
      ),
      children: <TabItemChildren />,
    },
  ];

  return (
    <TabItemArea>
      <Row>
        <Col span={14} className="ml-7">
          <Text content="Field of Study" fontSize="16px" fontWeight="bolder" />
        </Col>
        <Col span={8} className="ml-5">
          <Text content="Graduates" fontSize="16px" fontWeight="bolder" />
        </Col>
      </Row>
      <Collapse accordion items={items} />
    </TabItemArea>
  );
};

const FieldOfStudy = (props) => {
  const items = [
    {
      label: (
        <Text fontSize="16px" fontWeight="bolder" content="Largest Size" />
      ),
      key: "largestsize",
      children: <TabItem />,
    },
    {
      label: (
        <Text fontSize="16px" fontWeight="bolder" content="Highest Earnings" />
      ),
      key: "highestearning",
      children: <TabItem />,
    },
    {
      label: <Text fontSize="16px" fontWeight="bolder" content="Lowest Debt" />,
      key: "lowestdebt",
      children: <TabItem />,
    },
  ];

  return (
    <FieldOfStudyArea>
      <Search size="large" placeholder="Type to search" />
      <div className="mt-5 d-border">
        <Row>
          <Text
            fontSize="24px"
            content="Top Fields of Study at Southern Methodist University"
            fontWeight="bolder"
          />
          <InfoCircleFilled className="ml-3" />
        </Row>
        <Text
          className="mt-5"
          content="Out of 109 undergraduate fields of study at Southern Methodist University, the 5 largest are shown below. (52 had relevant data on number of graduates.) See All Fields of Study »"
        />
        <Tabs items={items} className="mt-5" />
      </div>
      <div className="mt-5 d-border">
        <Text fontSize="28px" content="Awards Offered" />
        <Text
          className="mt-3"
          content="Southern Methodist University awards Bachelor's, Master's, Doctoral and First Professional Degrees as well as Graduate/Professional and Post-baccalaureate Certificates, and Undergraduate Certificate or Diploma."
        />
        <Button type="primary" className="mt-5">
          See All Available Fields of Study
        </Button>
        <Alert
          type="warning"
          className="mt-5"
          message={
            <Text content="NOTE: These data were collected from undergradute students who received federal financial aid." />
          }
        />
      </div>
    </FieldOfStudyArea>
  );
};

export default FieldOfStudy;
