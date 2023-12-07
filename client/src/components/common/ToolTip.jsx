import React from "react";
import styled from "styled-components";

const ToolTipWrap = styled.div`
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  ::after {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #222727;
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: rotate(45deg) translateX(-50%);
    z-index: -1;
  }
`;

const ToolTipText = styled.p`
  display: inline-block;
  min-width: 30px;
  padding: 10px;
  background-color: #222727;
  font-size: 11px;
  color: #f2f2f2;
  line-height: 15px;
  white-space: nowrap;
  a {
    color: #e67e22;
  }
`;

const ToolTip = ({ text }) => {
  const createMarkup = () => {
    return { __html: text };
  };

  return (
    <ToolTipWrap>
      <ToolTipText dangerouslySetInnerHTML={createMarkup()} />
    </ToolTipWrap>
  );
};

export default ToolTip;
