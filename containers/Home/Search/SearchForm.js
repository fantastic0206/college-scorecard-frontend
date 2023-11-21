import React, { useState, useContext, Fragment } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import isEmpty from "lodash/isEmpty";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoIosAdd,
} from "react-icons/io";
import { Input, Popover } from "antd";
import Container from "components/UI/Container/Container";
import Heading from "components/UI/Heading/Heading";
import Text from "components/UI/Text/Text";
import { ProfilePicLoader } from "components/UI/ContentLoader/ContentLoader";
import Loader from "components/Loader/Loader";
import { AuthContext } from "context/AuthProvider";
// import { ADD_HOTEL_PAGE } from 'settings/constant';
// import AgentDetailsPage, {
//   BannerSection,
//   UserInfoArea,
//   ProfileImage,
//   ProfileInformationArea,
//   ProfileInformation,
//   SocialAccount,
//   NavigationArea,
// } from './AgentDetails.style';
import { SearchFormArea } from "./Search.style";
import SearchFieldStudy from "./SearchFieldStudy";
import SearchOption from "./SearchOption";
import FitSearchSchool from "./FitSearchSchool";

const { Search } = Input;

// const AgentFavItemLists = dynamic(() => import('./AgentFavItemLists'));
// const AgentContact = dynamic(() => import('./AgentContact'));
// const AgentItemLists = dynamic(() => import('./AgentItemLists'));

const SearchForm = (props) => {
  const { loggedIn } = useContext(AuthContext);
  const [component, setComponent] = useState("searchschool");
  const { className } = props;

  return (
    <Fragment>
      <SearchFormArea>
        <Container fluid={true}>
          <ul className={`ant-menu ${className}`}>
            <li>
              <a
                className={component === "searchschool" ? "active" : ""}
                onClick={() => setComponent("searchschool")}
              >
                SEARCH SCHOOLS
              </a>
            </li>
            <li>
              <a
                className={component === "searchfieldofstudy" ? "active" : ""}
                onClick={() => setComponent("searchfieldofstudy")}
              >
                SEARCH FIELDS OF STUDY
              </a>
            </li>
            <li>
              <a
                className={component === "showmeoptions" ? "active" : ""}
                onClick={() => setComponent("showmeoptions")}
              >
                SHOW ME OPTIONS
              </a>
            </li>
          </ul>
        </Container>
      </SearchFormArea>

      <Container fluid={true}>
        {component === "searchschool" && <FitSearchSchool />}
        {component === "searchfieldofstudy" && <SearchFieldStudy />}
        {component === "showmeoptions" && <SearchOption />}
      </Container>
    </Fragment>
  );
};

// const AgentProfileInfo = (props) => {
//   const { processedData, loading } = props;
//   if (isEmpty(processedData) || loading) return <Loader />;

//   const {
//     first_name,
//     last_name,
//     content,
//     profile_pic,
//     cover_pic,
//     social_profile,
//   } = processedData[0];

//   return (
//     <Fragment>
//       <BannerSection>
//         <Image
//           src={cover_pic.url}
//           alt="Profile Cover Pic"
//           layout="fill"
//           objectFit="cover"
//         />
//       </BannerSection>

//       <UserInfoArea>
//         <Container fluid={true}>
//           <ProfileImage>
//             {profile_pic ? (
//               <Image
//                 src={profile_pic.url}
//                 alt="Profile Pic"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             ) : (
//               <ProfilePicLoader />
//             )}
//           </ProfileImage>

//           <ProfileInformationArea>
//             <ProfileInformation>
//               <Heading content={`${first_name} ${last_name}`} />
//               <Text content={content} />
//             </ProfileInformation>

//             <SocialAccount>
//               <Popover content="Twitter">
//                 <a
//                   href={social_profile.twitter}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <IoLogoTwitter className="twitter" />
//                 </a>
//               </Popover>
//               <Popover content="Facebook">
//                 <a
//                   href={social_profile.facebook}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <IoLogoFacebook className="facebook" />
//                 </a>
//               </Popover>
//               <Popover content="Instagram">
//                 <a
//                   href={social_profile.instagram}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <IoLogoInstagram className="instagram" />
//                 </a>
//               </Popover>
//             </SocialAccount>
//           </ProfileInformationArea>
//         </Container>
//       </UserInfoArea>
//     </Fragment>
//   );
// };

// export default function AgentDetailsViewPage(props) {
//   return (
//     <AgentDetailsPage>
//       <AgentProfileInfo {...props} />
//       <SearchForm {...props} />
//     </AgentDetailsPage>
//   );
// }

export default SearchForm;
