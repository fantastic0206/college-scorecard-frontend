import { useState } from "react";
import SearchSchoolForm from "../../Search/SearchItem/SearchSchoolForm/SearchSchoolForm";
import { FitSearchSchoolArea } from "./Search.style";
import SearchSchool from "../../Search/SearchSChool";
import { Button, Drawer } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";

const FitSearchSchool = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const customSearch = () => {
    setOpen(true);
  };

  return (
    <FitSearchSchoolArea>
      <SearchSchoolForm />
      <Button className="custom-search-btn" onClick={customSearch}>
        CUSTOM SEARCH <CaretLeftOutlined />
      </Button>
      <Drawer
        title="Search School"
        placement="right"
        onClose={onClose}
        open={open}
        size="large"
      >
        <SearchSchool />
      </Drawer>
    </FitSearchSchoolArea>
  );
};

export default FitSearchSchool;
