import styled from "styled-components";

export const CampustDiversityArea = styled.div`
  .ratio-circle {
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 7em;
    width: 7em;
    color: rgb(255, 255, 255);
    z-index: 2;
    border-radius: 50%;
    margin: 0px 5px;
  }

  .student-color {
    border-width: 0.1875em;
    border-image: initial;
    background: rgb(24, 116, 220);
    border-style: solid;
    border-color: rgb(24, 116, 220);
  }

  .staff-color {
    background: rgb(16, 46, 82);
    border-width: 0.1875em;
    border-style: solid;
    border-color: rgb(16, 46, 82);
    border-image: initial;
  }

  .key-box {
    margin-right: 10px;
    height: 10px;
    width: 10px;
    display: inline-block;
  }

  .blue {
    background-color: rgb(24, 116, 220);
  }

  .dark {
    background-color: rgb(16, 46, 82);
  }
`;
