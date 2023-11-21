import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const SearchSchoolPageArea = styled.div`
  border-top: 1px solid ${themeGet("border.3", "#E6E6E6")};
  border-bottom: 1px solid ${themeGet("border.3", "#E6E6E6")};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 667px) {
      flex-wrap: wrap;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      padding-left: 25px;
      padding-right: 25px;
      padding-bottom: 20px;
    }
  }

  .add_card {
    display: inline-flex;
    align-items: center;
    padding: 11px 22px;
    border-radius: 3px;
    font-size: 15px;
    text-transform: capitalize;
    color: ${themeGet("color.1", "#ffffff")};
    background-color: ${themeGet("primary.0", "#008489")};
    transition: all 0.3s ease;

    @media (max-width: 480px) {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    svg {
      font-size: 22px;
      margin-right: 5px;
      margin-left: -5px;
    }

    &:hover,
    &:focus {
      background-color: ${themeGet("primary.1", "#399C9F")};
    }
  }

  .ant-menu {
    border: 0;
    display: flex;
    align-items: center;
    box-shadow: none;

    @media (max-width: 480px) {
      flex-direction: column;
      width: 100%;
      padding-bottom: 10px;
    }

    li {
      height: auto;
      line-height: 1;
      margin-right: 16px;

      @media (max-width: 480px) {
        width: 100%;
        margin-right: 0;
      }

      a {
        display: block;
        font-size: 15px;
        line-height: 25px;
        padding: 23px 10px;
        color: ${themeGet("text.0", "#2C2C2C")};
        position: relative;

        @media (max-width: 480px) {
          padding: 15px 10px;
        }

        &::after {
          content: "";
          display: block;
          width: 0%;
          height: 2px;
          border-radius: 4px;
          position: absolute;
          left: 0;
          bottom: 0;
          opacity: 0;
          visibility: hidden;
          background-color: ${themeGet("primary.0", "#008489")};
          transition: all 0.3s ease;
        }

        &.active {
          font-weight: 700;

          &::after {
            opacity: 1;
            visibility: visible;
            width: 100%;
          }
        }

        &:hover {
          &::after {
            opacity: 1;
            visibility: visible;
            width: 100%;
          }
        }

        &:hover,
        &:focus {
          text-decoration: none;
        }
      }
    }
  }
`;
