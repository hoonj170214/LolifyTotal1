import React from "react";
import styled from "styled-components";

import loading from "@assets/images/loading.svg";

const LoadingImg = styled.img`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;

const Loading = ({ size }) => {
  return <LoadingImg src={loading} alt="loading-img" size={size} />;
};

export default Loading;
