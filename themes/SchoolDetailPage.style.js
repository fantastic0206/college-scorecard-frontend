import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const SchoolDetailArea = styled.div`
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

  .ml-6 {
    margin-left: 30px;
  }

  .ml-7 {
    margin-left: 40px;
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

  .year {
    background-color: black;
    color: white;
    border-radius: 50%;
    padding: 0 9px;
  }

  .sign-font {
    font-size: 30px;
  }

  .d-border {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 3px;
  }

  .ant-progress-inner,
  .ant-progress-bg {
    border-radius: unset !important;
  }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: ${themeGet("color.1", "#ffffff")};

  @media (max-width: 991px) {
    > div {
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    min-height: 76vh;
  }

  .glide,
  .glide__track,
  .glide__slides {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: all;
  }

  .glide__slide {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .glide__bullets {
    position: absolute;
    bottom: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .glide__bullet {
    width: 7px;
    height: 7px;
    background-color: ${themeGet("color.1", "#ffffff")};
    transition: width 0.3s ease;
  }

  .glide__bullet--active {
    width: 25px;
    border-radius: 8px;
    background-color: ${themeGet("color.1", "#ffffff")};
  }

  > div {
    position: relative;
    min-height: 100vh;

    @media (max-width: 480px) {
      min-height: 76vh;
    }
  }

  &:after {
    display: block;
    content: "";
    width: 100%;
    height: 60%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    pointer-events: none;
    z-index: 0;
  }
`;

export const IntroWrapper = styled.div`
  //   width: calc(100% - 60px);
  width: 70%;
  padding: 28px 30px 30px;
  border-radius: 6px;
  background-color: ${themeGet("color.1", "#ffffff")};
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 20%;
  z-index: 1;

  @media (min-width: 569px) and (max-width: 991px) {
    width: 414px;
    left: 30px;
  }

  @media (max-width: 480px) {
    width: calc(100% - 30px);
    padding: 15px;
    left: 15px;

    > p {
      display: none;
    }
  }

  > div {
    @media (min-width: 481px) {
      margin-top: 30px;
    }
  }

  h2 {
    margin-bottom: 10px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 20px;
`;
