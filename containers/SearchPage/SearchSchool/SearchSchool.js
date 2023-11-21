import {
  Button,
  Col,
  Dropdown,
  Form,
  Layout,
  List,
  Menu,
  Pagination,
  Row,
  Select,
  Avatar,
  Space,
  Image,
  Progress,
  Rate,
} from "antd";
import {
  SearchSchoolArea,
  SearchDescriptionArea,
  SearchArea,
  ContentHeaderArea,
  ContentBodyArea,
  SortArea,
  ListItemArea,
} from "./SearchSchool.style";
import Text from "components/UI/Text/Text";
import SearchSchoolForm from "../../Search/SearchItem/SearchSchoolForm/SearchSchoolForm";
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
} from "@ant-design/icons";
import AcademicField from "../../Search/SearchItem/AcademicField/AcademicField";
import DegreeType from "../../Search/SearchItem/DegreeType/DegreeType";
import GraduationRate from "../../Search/SearchItem/GraduationRate/GraduationRate";
import AverageAnnualCost from "../../Search/SearchItem/AverageAnnualCost/AverageAnnualCost";
import TestScore from "../../Search/SearchItem/TestScore/TestScore";
import AcceptanceRate from "../../Search/SearchItem/AcceptanceRate/AcceptanceRate";
import Size from "../../Search/SearchItem/Size/Size";
import TypeOfSchool from "../../Search/SearchItem/TypeOfSchool/TypeOfSchool";
import Urbanicity from "../../Search/SearchItem/Urbanicity/Urbanicity";
import SpecializedMission from "../../Search/SearchItem/SpecializedMission/SpecializedMission";
import ReligiousAffiliation from "../../Search/SearchItem/ReligiousAffiliation/ReligiousAffiliation";
import WIOAProgram from "../../Search/SearchItem/WIOAProgram/WIOAProgram";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { SCHOOL_DETAIL_PAGE } from "../../../settings/constant";
import ActiveLink from "library/helpers/activeLink";

const { Header, Footer, Sider, Content } = Layout;
const { Option } = Select;

const SearchSchool = ({ universityData, deviceType }) => {
  const [showSide, setShowSide] = useState(true);
  const [totalCount, setTotal] = useState(0);

  const visibleSide = () => {
    setShowSide(!showSide);
  };

  const sortMenu = (
    <Menu>
      <Menu.Item key="name">Name</Menu.Item>
      <Menu.Item key="annualcost">Annual Cost</Menu.Item>
      <Menu.Item key="graduationrate">Graduation Rate</Menu.Item>
      <Menu.Item key="earning">
        % Earning More Than a High School Grad
      </Menu.Item>
    </Menu>
  );

  const shareMenu = (
    <Menu>
      <Menu.Item key="twitter">Twitter</Menu.Item>
      <Menu.Item key="facebook">Facebook</Menu.Item>
      <Menu.Item key="linkedin">LinkedIn</Menu.Item>
      <Menu.Item key="copyurl">Copy URL to Clipboard</Menu.Item>
    </Menu>
  );

  return (
    <SearchSchoolArea>
      <SearchDescriptionArea>
        <Text
          textAlign="center"
          fontWeight="bolder"
          fontSize="30px"
          content="Search Schools"
        />
        <Text
          textAlign="center"
          className="mt-5"
          fontSize="20px"
          content="Search schools that might be a good fit, and add to your compare list to see how they match up."
        />
      </SearchDescriptionArea>
      <SearchArea>
        <Layout>
          <Header className="search-header">
            <Form>
              <Row gutter={16}>
                <Col span={6}>
                  <Form.Item
                    name="name"
                    label={<Text fontSize="18px" content="School" />}
                    children={<SearchSchoolForm />}
                  />
                </Col>
                <Col span={6}>
                  <Form.Item
                    name="location"
                    label={<Text fontSize="18px" content="Location" />}
                    children={
                      <Select className="w-100" size="large">
                        <Option value="Near Me">Near Me</Option>
                        <Option value="ZIP Code">ZIP Code</Option>
                        <Option value="State">State</Option>
                      </Select>
                    }
                  />
                </Col>
                <Col span={5}></Col>
                <Col span={4}></Col>
                <Col span={3}>
                  <Button size="large" className="right" onClick={visibleSide}>
                    <SlidersOutlined />
                    {showSide ? "Hide Filters" : "Show Filters"}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Header>
          <Layout hasSider>
            {showSide ? (
              <Sider className="search-sider">
                <Text
                  fontWeight="bolder"
                  fontSize="24px"
                  content="More Filters"
                  className="mb-5"
                />
                <AcademicField searchKey="academicfield" />
                <DegreeType />
                <GraduationRate />
                <AverageAnnualCost />
                <TestScore />
                <AcceptanceRate />
                <Size />
                <TypeOfSchool />
                <Urbanicity />
                <SpecializedMission />
                <ReligiousAffiliation />
                <WIOAProgram />
              </Sider>
            ) : null}
            <Content className="search-content">
              <ContentHeaderArea>
                <Pagination
                  total={universityData.length}
                  showSizeChanger
                  showQuickJumper
                  showTotal={(total) => `${total} Results`}
                />
                <Row className="mt-3">
                  <Button>
                    <CloseCircleOutlined />
                    Reset Result
                  </Button>
                  <Dropdown
                    overlay={sortMenu}
                    trigger={["click"]}
                    placement="bottomLeft"
                    className="ml-3"
                  >
                    <Button>
                      <SortAscendingOutlined />
                      Sort:%Earning More Than...
                    </Button>
                  </Dropdown>
                  <Dropdown
                    overlay={shareMenu}
                    trigger={["click"]}
                    placement="bottomLeft"
                    className="ml-3"
                  >
                    <Button>
                      <ShareAltOutlined />
                      Share
                    </Button>
                  </Dropdown>
                </Row>
              </ContentHeaderArea>
              <ContentBodyArea>
                <SortArea>
                  <Row>
                    <Col span={10}>
                      <a>School Name</a>
                    </Col>
                    <Col span={6}>
                      <a>Earning</a>
                    </Col>
                    <Col span={6}>
                      <a>Debt</a>
                    </Col>
                    <Col span={2}>
                      <a>Graduates</a>
                    </Col>
                  </Row>
                </SortArea>
                {universityData.map((item, index) => {
                  return (
                    <ListItemArea className="mt-4">
                      <Row>
                        <Col span={10}>
                          <Row gutter={16}>
                            <Col span={6}>
                              <Image width={100} src={item.logo} />
                            </Col>
                            <Col span={18}>
                              <Text
                                fontSize="18px"
                                content={
                                  <ActiveLink
                                    href={`${SCHOOL_DETAIL_PAGE}/${
                                      item.state
                                    }/${item.city}/${item.title.replaceAll(
                                      " ",
                                      "-"
                                    )}`}
                                    query={{ id: item.id }}
                                  >
                                    {item.title}
                                  </ActiveLink>
                                }
                                fontWeight="bolder"
                                className="t-title"
                              />
                              <Row className="mt-4">
                                <Col span={9}>
                                  <Rate allowHalf defaultValue={item.mark} />
                                </Col>
                                <Col span={3}>
                                  <Text
                                    fontSize="14px"
                                    content={`${item.reviews}`}
                                  />
                                </Col>
                                <Col span={12}>
                                  <Text fontSize="14px" content={item.state} />
                                </Col>
                              </Row>
                              <Row className="mt-4">
                                <Col span={6}>
                                  {typeof item.year === "number" ? (
                                    <>
                                      <label className="year ml-3">
                                        {item.year}
                                      </label>
                                      <Text
                                        fontSize="12px"
                                        content="year"
                                        className="mt-2"
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <SettingFilled className="ml-5" />
                                      <Text
                                        fontSize="12px"
                                        content="certificate"
                                        className="mt-2"
                                      />
                                    </>
                                  )}
                                </Col>
                                <Col span={6}>
                                  <BankFilled className="ml-4" />
                                  <Text
                                    fontSize="12px"
                                    content={item.public}
                                    className="mt-2"
                                  />
                                </Col>
                                <Col span={6}>
                                  <HomeFilled className="ml-3" />
                                  <Text
                                    fontSize="12px"
                                    content={item.city}
                                    className="mt-2"
                                  />
                                </Col>
                                <Col span={6}>
                                  <UserOutlined className="ml-3" />
                                  <Text
                                    fontSize="12px"
                                    content={item.students}
                                    className="mt-2"
                                  />
                                </Col>
                              </Row>
                              <Text
                                fontSize="12px"
                                content={item.description}
                                className="mt-4"
                              />
                              <a className="mt-4 right">Read More</a>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={6}>
                          <Row>
                            <Text fontSize="14px" content="MEDIAN EARNNINGS" />
                            <InfoCircleFilled className="ml-3" />
                          </Row>
                          <Text
                            fontSize="24px"
                            content={`$${item.median_earning}`}
                            className="t-number mt-4"
                          />
                          <Progress
                            percent={(item.median_earning / 100000) * 100}
                            showInfo={false}
                          />
                          <Row className="mt-5">
                            <Text fontSize="14px" content="MONTHLY EARNINGS" />
                            <InfoCircleFilled className="ml-3" />
                          </Row>
                          <Text
                            fontSize="24px"
                            content={`$${item.monthly_earning}`}
                            className="t-number mt-4"
                          />
                        </Col>
                        <Col span={6}>
                          <Row>
                            <Text fontSize="14px" content="MEDIAN EARNNINGS" />
                            <InfoCircleFilled className="ml-3" />
                          </Row>
                          <Text
                            fontSize="14px"
                            content="Data Not Available"
                            className="mt-4 right"
                          />
                          <Row className="mt-6">
                            <Text fontSize="14px" content="MEDIAN EARNNINGS" />
                            <InfoCircleFilled className="ml-3" />
                          </Row>
                          <Text
                            fontSize="14px"
                            content="Data Not Available"
                            className="mt-4 right"
                          />
                        </Col>
                        <Col span={2}>
                          <Text fontSize="14px" content="GRADUATES" />
                          <Text
                            fontSize="24px"
                            content={item.graduates}
                            className="t-number mt-4 right"
                          />
                        </Col>
                      </Row>
                    </ListItemArea>
                  );
                })}
              </ContentBodyArea>
            </Content>
          </Layout>
        </Layout>
      </SearchArea>
    </SearchSchoolArea>
  );
};

export default SearchSchool;
