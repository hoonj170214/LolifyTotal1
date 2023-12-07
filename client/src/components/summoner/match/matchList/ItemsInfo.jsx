import React from "react";
import styled from "styled-components";
import { GAME_RESULT } from "@constants/constant";

import buildIconBlue from "@assets/images/buildIconBlue.png";
import buildIconRed from "@assets/images/buildIconRed.png";
import wardIconBlue from "@assets/images/wardIconBlue.png";
import wardIconRed from "@assets/images/wardIconRed.png";

import Item from "./Item";

const DummyItem = styled.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 2px;
`;

const ItemsInfoWrap = styled.div`
  width: 114px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .itemsList-wrap {
    width: 96px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1px;
  }
  &.win-game {
    ${DummyItem} {
      background-color: #7aa5c3;
    }
  }
  &.lose-game {
    ${DummyItem} {
      background-color: #cb9e9a;
    }
  }
  &.re-game {
    ${DummyItem} {
      background-color: #979797;
    }
  }
`;

const VisionWardInfo = styled.div`
  display: flex;
  align-items: center;
  height: 16px;
  font-size: 11px;
  letter-spacing: -0.42px;
  color: #000;
  margin-top: 7px;
  img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;

const BuildIcon = styled(DummyItem)`
  background: url(${({ background }) => background}) no-repeat;
`;

const ItemsInfo = ({ ward, items, resultClassName }) => {
  const _items = [...items];
  const accessoryItem = _items.pop();

  const needItemsLength = 6;
  const needDummyItemLength = needItemsLength - _items.length;

  const { visionWardsBought } = ward;
  const { LOSE_GAME } = GAME_RESULT;
  const wardIconSrc = resultClassName === LOSE_GAME ? wardIconRed : wardIconBlue;
  const buildIconSrc = resultClassName === LOSE_GAME ? buildIconRed : buildIconBlue;

  const itemsList = _items.map((item, idx) => <Item key={idx} src={item.imageUrl} alt="item-img" />);

  for (let i = 0; i < needDummyItemLength; i++) {
    itemsList.push(<DummyItem key={"dummy" + i} />);
  }
  itemsList.push(<BuildIcon background={buildIconSrc} key="b-icon" />);
  itemsList.splice(3, 0, <Item key="ac-item" src={accessoryItem.imageUrl} alt="item-img" />);

  return (
    <ItemsInfoWrap className={resultClassName}>
      <div className="itemsList-wrap">{itemsList}</div>
      {visionWardsBought && (
        <VisionWardInfo>
          <img src={wardIconSrc} alt="ward-icon-img" />
          <span>제어와드 {visionWardsBought}</span>
        </VisionWardInfo>
      )}
    </ItemsInfoWrap>
  );
};

export default ItemsInfo;
