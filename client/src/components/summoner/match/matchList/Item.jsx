import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getItemDescription } from "@utils/util";

import ToolTip from "@components/common/ToolTip";

const ItemWrap = styled.span`
  position: relative;
`;

const ItemImg = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 2px;
`;

const Item = ({ src, alt }) => {
  const [bHover, setHover] = useState(false);

  const { itemsData } = useSelector(({ gameDescription }) => gameDescription);
  const { name, description } = getItemDescription(src, itemsData);
  const tooltipText = `<div style="color:#1abc9c;">${name}</div>${description}`;

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <>
      <ItemWrap>
        <ItemImg onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} src={src} alt={alt} />
        {bHover && <ToolTip text={tooltipText} />}
      </ItemWrap>
    </>
  );
};

export default Item;
