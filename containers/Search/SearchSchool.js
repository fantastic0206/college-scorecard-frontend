import AcademicField from "./SearchItem/AcademicField/AcademicField";
import AcceptanceRate from "./SearchItem/AcceptanceRate/AcceptanceRate";
import AverageAnnualCost from "./SearchItem/AverageAnnualCost/AverageAnnualCost";
import DegreeType from "./SearchItem/DegreeType/DegreeType";
import GraduationRate from "./SearchItem/GraduationRate/GraduationRate";
import Location from "./SearchItem/Location/Location";
import ReligiousAffiliation from "./SearchItem/ReligiousAffiliation/ReligiousAffiliation";
import Size from "./SearchItem/Size/Size";
import SpecializedMission from "./SearchItem/SpecializedMission/SpecializedMission";
import TestScore from "./SearchItem/TestScore/TestScore";
import TypeOfSchool from "./SearchItem/TypeOfSchool/TypeOfSchool";
import Urbanicity from "./SearchItem/Urbanicity/Urbanicity";
import WIOAProgram from "./SearchItem/WIOAProgram/WIOAProgram";
import { SearchSchoolArea } from "./SearchSchool.style";

const SearchSchool = () => {
  return (
    <SearchSchoolArea>
      <AcademicField />
      <DegreeType />
      <Location />
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
    </SearchSchoolArea>
  );
};

export default SearchSchool;
