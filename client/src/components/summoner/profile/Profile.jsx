import React from "react";
import styled from "styled-components";

import PreviousTiers from "./PreviousTiers";
import ProfileImg from "./ProfileImg";
import ProfileInfo from "./ProfileInfo";

const ProfileOutter = styled.div`
  width: 100%;
  height: 175px;
  background-color: #eaeaea;
  border-bottom: 1px solid #d8d8d8;
`;

const ProfileInner = styled.div`
  padding: 15px 0 14px 200px;
`;

const ProfileWrap = styled.div`
  display: flex;
`;

const Profile = ({ summonerData }) => {
  const { name, level, profileImageUrl, profileBorderImageUrl, ladderRank, previousTiers } = summonerData;

  return (
    <ProfileOutter>
      <ProfileInner>
        <PreviousTiers {...{ previousTiers }} />
        <ProfileWrap>
          <ProfileImg {...{ level, profileImageUrl, profileBorderImageUrl }} />
          <ProfileInfo {...{ name, ladderRank }} />
        </ProfileWrap>
      </ProfileInner>
    </ProfileOutter>
  );
};

export default Profile;
