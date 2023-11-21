import { Fragment, useState } from "react";
import Container from "components/UI/Container/Container";
import { SearchSchoolPageArea } from "./SearchSchoolPage.style";
import SearchSchool from "../../containers/SearchPage/SearchSchool/SearchSchool";
import FieldofStudy from "../../containers/SearchPage/FieldofStudy/FieldofStudy";
import Text from "components/UI/Text/Text";
import { getDeviceType } from "library/helpers/get-device-type";
import {
  getAPIData,
  paginator,
  searchedData,
  searchStateKeyCheck,
  processAPIData,
} from "library/helpers/get-api-data";

const SearchSchoolPage = (props) => {
  const [component, setComponent] = useState("schools");
  const { className, universityData, deviceType } = props;

  return (
    <Fragment>
      {/* <SearchSchoolPageArea>
        <Container fluid={true}>
          <ul className={`ant-menu ${className}`}>
            <li>
              <Text fontSize="18px" content="SEARCH:" />
            </li>
            <li>
              <a
                className={component === "schools" ? "active" : ""}
                onClick={() => setComponent("schools")}
              >
                Schools
              </a>
            </li>
            <li>
              <a
                className={component === "fieldofstudy" ? "active" : ""}
                onClick={() => setComponent("fieldofstudy")}
              >
                Fields of Study
              </a>
            </li>
          </ul>
        </Container>
      </SearchSchoolPageArea> */}

      {/* <Container fluid={true}> */}
      {/* {component === "schools" && (
        <SearchSchool processedData={processedData} deviceType={deviceType} />
      )} */}
      {/* {component === "fieldofstudy" && <FieldofStudy />} */}
      {/* </Container> */}
      <SearchSchool universityData={universityData} deviceType={deviceType} />
    </Fragment>
  );
};

export default SearchSchoolPage;

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
