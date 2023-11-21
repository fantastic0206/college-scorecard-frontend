import { Checkbox } from "antd";
import Text from "components/UI/Text/Text";
import Accordion from "components/Accordion/Accordion";
import { DegreeTypeArea } from "./DegreeType.style";

const DegreeType = (props) => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const undergraduateOptions = [
    {
      label: "Certificate",
      value: "certificate",
    },
    {
      label: "Associatedegree",
      value: "associates Degree",
    },
    {
      label: "Bachelordegree",
      value: "bachelors Degree",
    },
  ];
  const graduateOptions = [
    {
      label: "Masterdegree",
      value: "masters Degree",
    },
    {
      label: "Postbaccalaureatecertificate",
      value: "post-baccalaureate Certificate",
    },
    {
      label: "Doctoraldegree",
      value: "doctoral Degree",
    },
    {
      label: "Firstprofessionaldegree",
      value: "first Professional Degree",
    },
    {
      label: "Graduateorprofessionalcertificate",
      value: "graduate/Professional Certificate",
    },
  ];

  const children = (
    <DegreeTypeArea>
      <Text fontSize="16px" content="Undergraduate" />
      <Checkbox.Group
        key="undergraduate"
        options={undergraduateOptions}
        onChange={onChange}
      />
      <Text fontSize="16px" content="Graduate" className="mt-5" />
      <Checkbox.Group
        key="graduate"
        options={graduateOptions}
        onChange={onChange}
      />
    </DegreeTypeArea>
  );

  return (
    <Accordion
      searchKey={props.searchKey}
      label="Degree Types"
      children={children}
    />
  );
};

export default DegreeType;
