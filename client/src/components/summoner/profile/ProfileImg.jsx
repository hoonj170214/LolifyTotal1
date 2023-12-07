import React from "react";
import styled from "styled-components";

import levelBox from "@assets/images/levelBox.png";

const ImgWrap = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
`;

const BorderImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const LevelBox = styled.div`
  position: relative;
  left: 50%;
  top: 98px;
  width: 44px;
  height: 24px;
  transform: translateX(-50%);
  text-align: center;
  line-height: 24px;
  font-size: 14px;
  color: #eabd56;
  background: url(${levelBox});
  z-index: 2;
`;

const ProfileImg = ({ level, profileImageUrl, profileBorderImageUrl }) => {
  return (
    <ImgWrap>
      <Img src={profileImageUrl} alt="user-profile-image" />
      <BorderImg src={profileBorderImageUrl} alt="user-profile-border-image" />
      <LevelBox>{level}</LevelBox>
    </ImgWrap>
  );
};

export default ProfileImg;
