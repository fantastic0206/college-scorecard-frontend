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
import { FinancialAidDebtArea } from "./FinancialAidDebt.style";
import {
  Button,
  Checkbox,
  Col,
  Input,
  Progress,
  Row,
  Select,
  Table,
} from "antd";

const { Option } = Select;

const FinancialAidDebt = (props) => {
  const columns = [
    {
      title: "Repayment Status",
      key: "repaymentstatus",
      dataIndex: "repayment_status",
    },
    {
      title: "Percent",
      key: "percent",
      dataIndex: "percent",
    },
  ];

  const dataSource = [
    {
      repayment_status: "Making Progress",
      percent: "36%",
    },
    {
      repayment_status: "Making Progress",
      percent: "36%",
    },
    {
      repayment_status: "Making Progress",
      percent: "36%",
    },
    {
      repayment_status: "Making Progress",
      percent: "36%",
    },
    {
      repayment_status: "Making Progress",
      percent: "36%",
    },
    {
      repayment_status: "Making Progress",
      percent: "36%",
    },
    {
      repayment_status: "Making Progress",
      percent: "36%",
    },
    {
      repayment_status: "Making Progress",
      percent: "36%",
    },
  ];

  const children = (
    <FinancialAidDebtArea style={{ padding: "0 20px" }}>
      <Select
        placeholder="Federal Student Loans"
        style={{ width: "50%", marginLeft: "-8px" }}
        size="large"
      >
        <Option>Federal Student Loans</Option>
        <Option>Parent PLUS Loans</Option>
      </Select>
      <Row gutter={16} className="mt-5" justify={"space-between"}>
        <Col span={9} className="d-border" style={{ textAlign: "center" }}>
          <Row>
            <Text
              fontSize="16px"
              fontWeight="bolder"
              content="Students Receiving Federal Loans "
            />
            <InfoCircleFilled className="ml-3" />
          </Row>
          <Progress
            type="circle"
            percent={23}
            size={150}
            strokeWidth={15}
            className="mt-5"
          />
          <Text
            className="mt-5"
            content="At some schools where few students borrow federal loans, the typical undergraduate may leave school with $0 in debt."
          />
        </Col>
        <Col span={14} style={{ marginRight: "-8px" }}>
          <div className="d-border">
            <Row>
              <Text
                fontSize="16px"
                fontWeight="bolder"
                content="Median Total Debt After Graduation"
              />
              <InfoCircleFilled className="ml-3" />
            </Row>
            <Text
              className="mt-5"
              content="The typical total debt for undergraduate borrowers who complete college."
            />
            <Text
              fontSize="20px"
              content={`$19500`}
              className="t-number mt-4"
              fontWeight="bolder"
            />
          </div>
          <div className="d-border mt-5">
            <Row>
              <Text
                fontSize="16px"
                fontWeight="bolder"
                content="Typical Monthly Loan Payment"
              />
              <InfoCircleFilled className="ml-3" />
            </Row>
            <Text
              fontSize="20px"
              content={`$207`}
              className="t-number mt-4"
              fontWeight="bolder"
            />
            <Text
              className="mt-5"
              content="his is based on a standard 10-year payment plan, other payment options are available, like income-driven repayment. An income-driven repayment plan sets your monthly student loan payment at an amount that is intended to be affordable based on your income and family size."
            />
          </div>
        </Col>
      </Row>
      <Row gutter={16} className="mt-5" justify={"space-between"}>
        <Col span={15} className="d-border">
          <Row>
            <Text
              fontSize="16px"
              fontWeight="bolder"
              content="Repayment Rate"
            />
            <InfoCircleFilled className="ml-3" />
          </Row>
          <Text
            className="mt-5"
            content="Percentage of borrowers in each category 2 years after entering repayment. For category definitions, please see <a>the glossary</a>."
          />
          <Checkbox className="mt-5">
            Only show data for those who graduated
          </Checkbox>
          <Table
            className="mt-5"
            size="small"
            columns={columns}
            dataSource={dataSource}
          />
        </Col>
        <Col span={8} className="d-border">
          <Text
            fontSize="16px"
            fontWeight="bolder"
            content="Get Help Paying for College"
          />
          <Text
            className="mt-5"
            content="Submit a Free Application for Federal Student Aid (FAFSA®) form. You may be eligible to receive federal grants or loans."
          />
          <Button className="mt-5" type="primary">
            Start My FAFSA@ Form
          </Button>
        </Col>
      </Row>
    </FinancialAidDebtArea>
  );

  return (
    <Accordion
      searchKey={props.searchKey}
      label={
        <Text
          fontWeight="bolder"
          fontSize="18px"
          content="Financial Aid Debt"
        />
      }
      children={children}
    />
  );
};

export default FinancialAidDebt;
