import styled from "styled-components";

export const SearchSchoolArea = styled.div`
  padding: 0;

  .mt-1 {
    margin-top: 1px;
  }

  .mt-2 {
    margin-top: 3px;
  }

  .mt-3 {
    margin-top: 5px;
  }

  .mt-4 {
    margin-top: 10px;
  }

  .mt-5 {
    margin-top: 20px;
  }

  .mt-6 {
    margin-top: 40px;
  }

  .mb-5 {
    margin-bottom: 20px;
  }

  .ml-1 {
    margin-left: 1px;
  }

  .ml-2 {
    margin-left: 3px;
  }

  .ml-3 {
    margin-left: 5px;
  }

  .ml-4 {
    margin-left: 10px;
  }

  .ml-5 {
    margin-left: 20px;
  }

  .right {
    float: right;
  }

  .w-100 {
    width: 100%;
  }

  .t-title {
    color: #027a48;
  }

  .t-number {
    color: #00365e;
  }
`;

export const SearchDescriptionArea = styled.div`
  padding: 40px;
  //   background: #108ee9;
`;

export const SearchArea = styled.div`
  .search-header {
    height: 64px;
    background: white;
    box-shadow: 0 -6px 10px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.12) !important;
    z-index: 1;
    padding: 10px 20px;
  }

  .search-content {
    padding: 24px;
  }

  .search-sider {
    flex: unset !important;
    max-width: 25% !important;
    min-width: 25% !important;
    background: white;
    padding: 20px;
  }

  .ant-collapse-header {
    padding: 12px 0 !important;
    padding-inline-start: unset;
  }

  .ant-collapse-expand-icon {
    margin-inline-start: 0 !important;
  }

  .ant-collapse-content-box {
    padding: unset !important;
  }

  .ant-collapse-item {
    background: white !important;
  }
`;

export const ContentHeaderArea = styled.div`
  background: white;
  box-shadow: 0 -6px 10px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.12) !important;
  z-index: 1;
  padding: 10px 20px;
`;

export const ContentBodyArea = styled.div`
  margin-top: 10px;
  background: white;

  .ant-list-item {
    flex-direction: row-reverse;
  }

  .ant-list-item-main {
    margin-inline-start: 24px;
  }

  .ant-list-item-extra {
    margin-inline-start: unset;
  }
`;

export const SortArea = styled.div`
  padding: 10px;
  box-shadow: 0 -6px 10px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 1px 0 rgba(0, 0, 0, 0.12) !important;
`;

export const ListItemArea = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;

  .ant-rate-star {
    margin-inline-end: unset !important;
  }

  .year {
    background-color: black;
    color: white;
    border-radius: 50%;
    padding: 0 5px;
  }

  .ant-image {
    position: relative;
    top: 20%;
  }
`;
