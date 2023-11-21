import Head from "next/head";
import Link from "next/link";
import Container from "components/UI/Container/Container";
import Heading from "components/UI/Heading/Heading";
import SectionTitle from "components/SectionTitle/SectionTitle";
import SearchArea from "containers/Home/Search/Search";
import LocationGrid from "containers/Home/Location/Location";
import SectionGrid from "components/SectionGrid/SectionGrid";
import { getAPIData } from "library/helpers/get-api-data";
import { getDeviceType } from "library/helpers/get-device-type";
import { LISTING_POSTS_PAGE, SINGLE_POST_PAGE } from "settings/constant";
import {
  HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE,
  HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE,
  HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE,
  HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH,
} from "settings/config";
import { Col, Row } from "antd";
import Description from "../containers/Home/Description/Description";
export default function HomePage({
  deviceType,
  locationData,
  topHotelData,
  luxaryHotelData,
}) {
  let limit;

  if (deviceType === "mobile") {
    limit = HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE;
  }
  if (deviceType === "tablet") {
    limit = HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE;
  }

  if (deviceType === "desktop") {
    limit = HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE;
  }
  return (
    <>
      <Head>
        <title>College Scorecard</title>
      </Head>
      <SearchArea />
      <Container fluid={true}>
        <Description />
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const apiUrl = [
    {
      endpoint: "hotel",
      name: "luxaryHotelData",
    },
    {
      endpoint: "top-hotel",
      name: "topHotelData",
    },
    {
      endpoint: "location",
      name: "locationData",
    },
  ];
  const deviceType = getDeviceType(req);
  const pageData = await getAPIData(apiUrl);
  let locationData = [],
    topHotelData = [],
    luxaryHotelData = [];

  if (pageData) {
    pageData.forEach((item, key) => {
      if (item.name === "locationData") {
        locationData = item.data ? [...item.data] : [];
      } else if (item.name === "topHotelData") {
        topHotelData = item.data ? [...item.data] : [];
      } else if (item.name === "luxaryHotelData") {
        luxaryHotelData = item.data ? [...item.data] : [];
      }
    });
  }
  return {
    props: { deviceType, locationData, topHotelData, luxaryHotelData },
  };
}
