import React, { useState } from "react";

const Tabs = ({ children, TabButtonWrap, TabButton }) => {
  const [selected, setSelected] = useState(0);
  const tabs = children.map((c, i) => {
    const handleClick = () => {
      if (c.props.callback) c.props.callback();
      setSelected(i);
    };

    return (
      <TabButton key={i} selected={i === selected} onClick={handleClick}>
        <span>{c.props.title}</span>
      </TabButton>
    );
  });

  return (
    <>
      <TabButtonWrap>{tabs}</TabButtonWrap>
      {children[selected]}
    </>
  );
};

export default Tabs;
