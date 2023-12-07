import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import SearchAutoComplete from "./SearchAutoComplete";
import SearchHistory from "./SearchHistory";

const SearchFormModalWrap = styled.div`
  position: absolute;
  top: 36px;
  left: 0;
  width: 100%;
  border-radius: 2px;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
`;

const SearchFormModal = ({ value, bFocus, setFocus, setValue, inputEl }) => {
  const modalEl = useRef();
  const modalContent = value ? <SearchAutoComplete {...{ value, setFocus, setValue }} /> : <SearchHistory {...{ setFocus }} />;

  const handleClickOutside = ({ target }) => {
    if (bFocus && !modalEl.current.contains(target) && target !== inputEl.current) setFocus(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return <SearchFormModalWrap ref={modalEl}>{modalContent}</SearchFormModalWrap>;
};

export default SearchFormModal;
