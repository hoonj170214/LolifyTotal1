import React from "react";
import styled from "styled-components";
import { GoChevronDown } from "react-icons/go";

const MoreInfoButtonWrap = styled.div`
  position: absolute;
  width: 30px;
  height: 96px;
  top: -1px;
  right: -1px;
  box-sizing: border-box;
  border: 1px solid;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  &.win-game {
    background-color: #7fb0e1;
    border-color: #549dc7;
    color: #04609e;
  }
  &.lose-game {
    background-color: #e89c95;
    border-color: #c8817c;
    color: #c1433e;
  }
  &.re-game {
    background-color: #a7a7a7;
    border-color: #999;
    color: #555;
  }
`;

const ArrowWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .arrow {
    position: absolute;
    z-index: 1;
    left: 50%;
    bottom: 4px;
    font-size: 23px;
    transform: translateX(-50%);
    cursor: pointer;
  }
`;

const MoreInfoButton = ({ resultClassName }) => {
  return (
    <MoreInfoButtonWrap className={resultClassName}>
      <ArrowWrap>
        <GoChevronDown className="arrow" />
      </ArrowWrap>
    </MoreInfoButtonWrap>
  );
};

export default MoreInfoButton;
