import { CaretRightOutlined } from "@ant-design/icons";
import React from "react";
import { Collapse, theme } from "antd";
import { AccordionArea } from "./Accordion.style";

const Accordion = (props) => {
  const { searchKey, label, children } = props;
  const { token } = theme.useToken();

  const getItems = (panelStyle) => [
    {
      key: searchKey,
      label: label,
      children: children,
      style: panelStyle,
    },
  ];

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <AccordionArea>
      <Collapse
        size="large"
        bordered={false}
        defaultActiveKey={[`${searchKey}`]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        style={{
          background: token.colorBgContainer,
        }}
        items={getItems(panelStyle)}
      />
    </AccordionArea>
  );
};
export default Accordion;
