import React from "react";
import styled from "styled-components";

import dinger from "@assets/images/dinger.png";

const NoResultWrap = styled.div`
  height: calc(100vh - 97px);
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 20px;
    font-size: 35px;
    font-weight: 600;
    color: #879292;
  }
`;

const NoResult = () => {
  return (
    <NoResultWrap>
      <img src={dinger} alt="dinger-img" />
      <p>소환사명을 입력해주세요.</p>
    </NoResultWrap>
  );
};

export default NoResult;
