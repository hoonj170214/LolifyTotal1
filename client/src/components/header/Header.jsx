import React from "react";
import styled from "styled-components";

import SearchForm from "./SearchForm";

const HeaderOutter = styled.div`
  position: relative;
  width: 100%;
  height: 97px;
  background-color: #1ea1f7;
`;

const Header = () => {
  return (
    <HeaderOutter>
      <SearchForm />
    </HeaderOutter>
  );
};

export default Header;
