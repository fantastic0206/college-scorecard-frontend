import SectionTitle from "components/SectionTitle/SectionTitle";
import Heading from "components/UI/Heading/Heading";
import { Button, Col, Row } from "antd";
import { DescriptionArea } from "./Description.style";
import Link from "next/link";
import { ExportOutlined } from "@ant-design/icons";

const Description = () => {
  return (
    <DescriptionArea>
      <Row gutter={16}>
        <Col span={12}>
          <SectionTitle
            title={<Heading content="Alternative Pathways to a Career" />}
            // link={
            //   <Link href={LISTING_POSTS_PAGE}>
            //     <a>Show all</a>
            //   </Link>
            // }
          />
          <p>
            Search for apprenticeship jobs and programs on{" "}
            <Link href={"#"}>
              <a>
                apprenticeship.gov <ExportOutlined />
              </a>
            </Link>
          </p>
          <p>
            Use the{" "}
            <Link href={"#"}>
              <a>
                MyNextMove.org <ExportOutlined />
              </a>
            </Link>{" "}
            tool for career exploration and job analysis.
          </p>
          <p>
            Find training programs: compare completion rates, employment rates,
            and more on{" "}
            <Link href={"#"}>
              <a>
                {" "}
                TrainingProviderResults.gov <ExportOutlined />
              </a>
            </Link>
          </p>
          <p>
            Visit{" "}
            <Link href={"#"}>
              <a>
                CareerOneStop.org <ExportOutlined />
              </a>
            </Link>
            , your source for career exploration training and jobs.
          </p>
          <p>
            Explore the{" "}
            <Link href={"#"}>
              <a>
                Occupational Outlook Handbook (OOH). <ExportOutlined />
              </a>
            </Link>{" "}
            for detailed information about over 300 occupational profiles.
          </p>
        </Col>
        <Col span={12}>
          <SectionTitle
            title={<Heading content="Best Rated: Luxary hotels" />}
            // link={
            //   <Link href={LISTING_POSTS_PAGE}>
            //     <a>Show all</a>
            //   </Link>
            // }
          />
          <p>
            You can learn more about the types of financial aid that are
            available at
            <Link href={"#"}>
              <a>
                StudentAid.gov
                <ExportOutlined />
              </a>
            </Link>
          </p>
          <p>
            To receive financial aid, you must complete the Free Application for
            Federal Student Aid (FAFSA®) form. You can use Federal
            <Link href={"#"}>
              <a>
                Student Aid Estimator <ExportOutlined />
              </a>
            </Link>{" "}
            to see how much aid may be available to you.
          </p>
          <Button type="primary" size="large">
            <Link href={"#"}>
              <a>
                Start Your FAFSA® Application <ExportOutlined />
              </a>
            </Link>
          </Button>
          <p>
            Veterans are eligible for higher education funding through the G.I.
            Bill benefits. Use the
            <Link href={"#"}>
              <a>
                GI Bill® comparison tool <ExportOutlined />
              </a>
            </Link>{" "}
            to learn about education programs and compare benefits by school.
          </p>
        </Col>
      </Row>
    </DescriptionArea>
  );
};

export default Description;
