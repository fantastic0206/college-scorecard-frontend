import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getDeviceType } from "library/helpers/get-device-type";
import Text from "components/UI/Text/Text";
import Loader from "components/Loader/Loader";
import Accordion from "components/Accordion/Accordion";
import {
  getAPIData,
  paginator,
  searchedData,
  searchStateKeyCheck,
  processAPIData,
} from "library/helpers/get-api-data";
import isEmpty from "is-empty";
import {
  BannerWrapper,
  ContentWrapper,
  IntroWrapper,
  SchoolDetailArea,
} from "./SchoolDetailPage.style";
import Container from "components/UI/Container/Container";
import GlideCarousel, {
  GlideSlide,
} from "components/UI/GlideCarousel/GlideCarousel";
import {
  Col,
  Progress,
  Row,
  Tabs,
  Image,
  List,
  Typography,
  Avatar,
  Card,
  Rate,
} from "antd";
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
import TopBar from "containers/SchoolDetailComponents/TopBar/TopBar";
import Detail from "../../containers/SchoolDetailComponents/Detail/Detail";
import Discussion from "../../containers/SchoolDetailComponents/Discussion/Discussion";
import Overview from "../../containers/SchoolDetailComponents/Overview/Overview";
import Review from "../../containers/SchoolDetailComponents/Review/Review";
import FieldOfStudy from "../../containers/SchoolDetailComponents/FieldOfStudy/FieldOfStudy";
import Cost from "../../containers/SchoolDetailComponents/Cost/Cost";
import GraduationRetention from "../../containers/SchoolDetailComponents/GraduationRetention/GraduationRetention";
import FinancialAidDebt from "../../containers/SchoolDetailComponents/FinancialAidDebt/FinancialAidDebt";
import TypicalEarning from "../../containers/SchoolDetailComponents/TypicalEarning/TypicalEarning";
import CampusDiversity from "../../containers/SchoolDetailComponents/CampusDiversity/CampusDiversity";
import TestScoreAcceptance from "../../containers/SchoolDetailComponents/TestScoreAcceptance/TestScoreAcceptance";
import ProductCard from "../../components/ProductCard/ProductCard";

const { Meta } = Card;

const SchoolDetailPage = (props) => {
  const router = useRouter();
  const { className, universityData, deviceType } = props;

  const [universityDetailData, setDetailData] = useState([]);
  const [href, setHref] = useState("");

  const rankData = [
    "#89 in National Universities(tie)",
    "#121 in Best Value Schools",
    "#120 in Best Undergraduate Engineering Programs(tie)",
  ];

  const userData = [
    {
      title: "Dream School - 2023/24",
      description: "By alicore",
    },
    {
      title: "Best Private Schools in Texas",
      description: "By DoubleZ",
    },
    {
      title: "Best Accounting Programs in DFW",
      description: "By ClayDjs03",
    },
  ];

  const items = [
    {
      label: "Overview",
      key: "overview",
      children: <Overview />,
    },
    {
      label: "Discussion",
      key: "discussion",
      children: <Discussion />,
    },
    {
      label: "Review",
      key: "revoew",
      children: <Review />,
    },
    {
      label: "Detail",
      key: "detail",
      children: <Detail />,
    },
  ];

  useEffect(() => {
    if (!isEmpty(universityData)) {
      const temp = universityData.filter((item) => item.id == router.query.id);

      setDetailData(temp);
    } else return <Loader />;
  }, [universityData]);

  useEffect(() => {
    const path = window.location.href;
    setHref(path);
  }, [setHref]);

  return universityDetailData[0] ? (
    <SchoolDetailArea>
      <BannerWrapper>
        <GlideCarousel
          controls={false}
          options={{ gap: 0, autoplay: 5000, animationDuration: 1000 }}
          bullets={true}
          numberOfBullets={1}
        >
          <>
            <GlideSlide>
              <Image
                src="/images/southern-methodist-university.jpg"
                alt="Home banner 1"
                layout="fill"
                objectFit="cover"
              />
            </GlideSlide>
          </>
        </GlideCarousel>

        <Container>
          <IntroWrapper>
            <Text fontSize="28px" content={universityDetailData[0].title} />
            <Row gutter={16}>
              <Col span={8}>
                <Row>
                  <Text fontSize="12px" content="GRADUATION RATE" />
                  <InfoCircleFilled className="ml-3" />
                </Row>
                <Text
                  fontSize="20px"
                  content={`${universityDetailData[0].graduation_rate}%`}
                  className="t-number mt-4"
                  fontWeight="bolder"
                />
              </Col>
              <Col span={8}>
                <Row>
                  <Text fontSize="12px" content="AVERAGE ANNUAL COST" />
                  <InfoCircleFilled className="ml-3" />
                </Row>
                <Text
                  fontSize="20px"
                  content={`$${Math.floor(
                    universityDetailData[0].average_annual_cost / 1000
                  )}k`}
                  fontWeight="bolder"
                  className="t-number mt-4"
                />
              </Col>
              <Col span={8}>
                <Row>
                  <Text fontSize="12px" content="MEDIAN EARNINGS" />
                  <InfoCircleFilled className="ml-3" />
                </Row>
                <Text
                  fontSize="20px"
                  content={`$${Math.floor(
                    universityDetailData[0].median_earning / 1000
                  )}k`}
                  fontWeight="bolder"
                  className="t-number mt-4"
                />
              </Col>
            </Row>
            <Text
              fontSize="14px"
              fontWeight="bolder"
              content="USER SCORE"
              className="mt-5"
            />
            <Row gutter={16} className="mt-1">
              <Col span={6}>
                <Text
                  fontSize="28px"
                  content={universityDetailData[0].user_score}
                  fontWeight="bolder"
                  style={{ textAlign: "center" }}
                />
                <Progress
                  percent={universityDetailData[0].user_score}
                  showInfo={false}
                />
              </Col>
              <Col span={8}>
                <Text
                  fontSize="12px"
                  content="Based on 307 ratings 2023 Ratings: #68 Liked by 41 people"
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col span={6}>
                {typeof universityDetailData[0].year === "number" ? (
                  <>
                    <label className="year ml-3" style={{ fontSize: "23px" }}>
                      {universityDetailData[0].year}
                    </label>
                    <Text fontSize="17px" content="Year" className="mt-2" />
                  </>
                ) : (
                  <>
                    <SettingFilled className="ml-5 sign-font" />
                    <Text
                      fontSize="17px"
                      content="certificate"
                      className="mt-2"
                    />
                  </>
                )}
              </Col>
              <Col span={6}>
                <BankFilled className="ml-4 sign-font" />
                <Text
                  fontSize="17px"
                  content={universityDetailData[0].public}
                  className="mt-2"
                />
              </Col>
              <Col span={6}>
                <HomeFilled className="ml-3 sign-font" />
                <Text
                  fontSize="17px"
                  content={universityDetailData[0].city}
                  className="mt-2"
                />
              </Col>
              <Col span={6}>
                <UserOutlined className="ml-3 sign-font" />
                <Text
                  fontSize="17px"
                  content={universityDetailData[0].students}
                  className="mt-2"
                />
              </Col>
            </Row>
          </IntroWrapper>
        </Container>
      </BannerWrapper>

      <Row style={{ padding: "20px" }}>
        <Text
          fontSize="28px"
          fontWeight="bolder"
          content="Accounting Program - Details, Reviews, Guides & Advice"
        />
      </Row>

      <ContentWrapper>
        <Row gutter={30} id="reviewSection">
          <Col xl={16}>
            <Tabs items={items} />
            <Accordion
              searchKey="fieldofstudy"
              label={
                <Text
                  fontWeight="bolder"
                  fontSize="18px"
                  content="Fields of Study"
                />
              }
              children={<FieldOfStudy />}
            />
            <Cost />
            <GraduationRetention />
            <FinancialAidDebt />
            <TypicalEarning />
            <CampusDiversity />
            <TestScoreAcceptance />
          </Col>
          <Col xl={8}>
            <div className="d-border" style={{ textAlign: "center" }}>
              <Text content="ADERTISEMENT" />
              <Image
                className="mt-5"
                width={200}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
              />
            </div>
            <div className="d-border mt-5">
              <List
                header={<Text fontWeight="bolder" content="RANKINGS" />}
                dataSource={rankData}
                renderItem={(item) => (
                  <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                  </List.Item>
                )}
              />
            </div>
            <div className="d-border mt-5">
              <List
                itemLayout="horizontal"
                dataSource={userData}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                        />
                      }
                      title={<a href="https://ant.design">{item.title}</a>}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <img
                  alt="example"
                  src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-5.jpg"
                />
              }
            >
              <Meta
                title="4 - 8 hours * No Captain"
                description="Island Explorer for lake Union cruising"
              />
              <Rate allowHalf defaultValue={5} className="mt-5" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <img
                  alt="example"
                  src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-2.jpg"
                />
              }
            >
              <Meta
                title="5 - 9 hours * No Captain"
                description="Perfect set up for Lake Union crusing"
              />
              <Rate allowHalf defaultValue={5} className="mt-5" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <img
                  alt="example"
                  src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-3.jpg"
                />
              }
            >
              <Meta
                title="2 - 7 hours * No Captain"
                description="Coastal Cruisers Lake Union cruising"
              />
              <Rate allowHalf defaultValue={5} className="mt-5" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <img
                  alt="example"
                  src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-4.jpg"
                />
              }
            >
              <Meta
                title="1 - 5 hours * No Captain"
                description="Yacht Major Lake Union cruising"
              />
              <Rate allowHalf defaultValue={5} className="mt-5" />
            </Card>
          </Col>
        </Row>
      </ContentWrapper>
    </SchoolDetailArea>
  ) : (
    <Loader />
  );
};

export default SchoolDetailPage;

export async function getServerSideProps(context) {
  const { req } = context;
  const apiUrl = [
    {
      endpoint: "university",
      name: "listingUniversity",
    },
  ];
  const pageData = await getAPIData(apiUrl);
  const universityData = processAPIData(pageData);
  const deviceType = getDeviceType(req);
  return {
    props: { universityData, deviceType },
  };
}
