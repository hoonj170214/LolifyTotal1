import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChampionInfo = ({ championName }) => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [championInfo, setChampionInfo] = useState([]);

  useEffect(() => {
    const fetchChampionInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4001/api/championData/${championName}`
        );
        setChampionInfo(response.data);
      } catch (error) {
        console.error('챔피언 정보를 가져오면서 에러발생!', error);
      }
    };

    fetchChampionInfo();
  }, [championName]);

  if (championInfo.length === 0) {
    return <div>Loading...</div>;
  }

  const { name, key, stats, image, passive, spells } = championInfo[0];
  return (
    <div>
      <p>{championName}</p>
      <p>챔피언 이름 : {name}</p>
      <p>key id : {key}</p>
      <p>능력치 : {stats}</p>
      <p>이미지 : {image.full}</p>
      <p>패시브 : {passive}</p>
      <p>스킬 : {spells}</p>
    </div>
  );
};
export default ChampionInfo;
