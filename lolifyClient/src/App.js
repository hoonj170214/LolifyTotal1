// 필요한 리액트 모듈 불러오기
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChampionInfo from './components/ChampionInfo.js';
import useHttp from './hooks/usehttp.js';
import useFetchImg from './hooks/usefetchImg.js';

// 메인 앱 컴포넌트 정의
const App = () => {
  const [championDataList, setChampionDataList] = useState([]);
  const [championImgSrc, setChampionImgSrc] = useState('');
  const [itemImgSrc, setItemImgSrc] = useState('');
  const [runesDataList, setRunesDataList] = useState([]);

  /* *transformData 함수가 재실행될때마다 useHttp 안에있는 requestConfig객체, transformRunesData 함수(객체) 가 재싱성되지 않도록 해야 한다.
   * 그래서 useCallback으로 transformRunesData를 감싸줘야 한다.
   * 의존성 배열에는 아무것도 외부에서 사용하고 있는 것이 없으니 빈 배열로 있어도 된다.
   */

  const {
    isLoading: isDataLoading,
    error: dataFetchError,
    sendRequest: fetchData,
  } = useHttp();

  const {
    isLoading: isImgLoading,
    error: imgFetchError,
    sendRequest: fetchImg,
    imgSrc,
  } = useFetchImg();
  /*
  서버에 데이터를 요청하는 방법
  fetch : 기본제공하는 api
  axios : 라이브러리 사용

  - fetch
  
  */
  useEffect(() => {
    /* 익명화살표 함수의 파라미터에 championName을 넣고, 아래에 championName 을 동적으로 받으면 championName 을 동적으로 설정할 수 있다.
     const fetchChampionData = () => {
       const championName = 'Sona';
       fetch(`http://localhost:4001/api/championData/${championName}`)
         .then((response) => response.json())
         .then((data) => setChampionDataList(data));
     };
     fetchChampionData();
    */

    /**
     * fetchRunesData를 useEffect 안에서 실행하게 되면 리렌더링이 발생하게 되는데, 그 이유는 상태를 설정하는 커스텀훅을 만들고, 컴포넌트의 훅을 사용하게 되면 컴포넌트는 커스텀 훅이 설정한 상태를 사용하게 된다.
     * 커스텀 훅에서 구성한 상태를 그 훅을 사용한 컴포넌트에 설정되게 되는 것이다.
     * 커스텀 훅에서 sendRequest 에서 setIsLoading, setError를 호출하면 이는 app 컴포넌트의 재평가를 유발하게 된다.
     * 컴포넌트 안에 있는 커스텀 훅을 사용하는 것이기 때문이다.
     * 그렇게 되면 재평가가 되는 순간 커스텀훅이 다시 호출되고, 훅이 다시 호출되면 다시 sendRequest 함수가 재생성되면서 새로운 함수 객체를 반환하고, useEffect 가 재실행되게 된다.
     * 자바스크립트에서 함수는 객체이다. 내부에 같은 로직을 품고 있더라도 함수가 재생성되면 이는 메모리에서 새로운 객체로 인식되어 useEffect가 이를 새로운 객체로 받아들이게 되어 기술적으로 같은 함수일지라도 재실행을 유발하게 된다.
     * 그래서 이를 피하려면 useHttp로 이동해서 sendRequest를 useCallback으로 감싸야 한다.
     *  */
    const transformRunesData = (taskObj) => {
      const runesData = [];

      for (const key in runesData) {
        runesData.push({ id: key, data: taskObj[key].text });
      }
      setRunesDataList(runesData);
    };

    fetchData(
      { url: 'http://localhost:4001/api/runesData/' },
      transformRunesData
    );

    /**
     *
     */
    const transformChampionImg = (imgSrc) => {
      setChampionImgSrc(imgSrc);
    };

    fetchImg(
      { url: 'http://localhost:4001/api/championImg/' },
      transformChampionImg
    );

    const fetchItemImg = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4001/api/itemImg/1001',
          {
            responseType: 'arraybuffer',
          }
        );
        const imgBlob = new Blob([response.data], {
          type: response.headers['content-type'],
        });
        const imgUrl = URL.createObjectURL(imgBlob);
        setItemImgSrc(imgUrl);
      } catch (error) {
        console.error('아이템을 불러오는 도중에 에러발생!', error);
      }
    };
    fetchItemImg();
    console.log(championDataList);
  }, []);

  // submit 버튼을 눌렀을 때 이벤트 처리하는  발생하는 이벤트 핸들러
  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div>
      <h1>서버에서 온 데이터</h1>
      <label style={{ display: 'none' }}>챔피언 이름 검색</label>
      <input placeholder='챔피언 이름을 검색하세요' type='text' />
      <div>
        챔피언 사진 :
        {championImgSrc && <img src={championImgSrc} alt='챔피언 이미지' />}
      </div>
      <div>
        아이템 사진 :
        {itemImgSrc && <img src={itemImgSrc} alt='아이템 이미지'></img>}
      </div>
      {/* {championDataList &&
        championDataList.map((data) => (
          <div key={data.id}>
            <div>챔피언 이름 : {data.name}</div>
            <div>사진 파일이름 : {data.img}</div>
            <div>고유 아이디 key : {data.key}</div>
          </div>
        ))} */}
      <ChampionInfo championName='Garen' />
      {/* 에러 떳음. 왜냐하면 stats 안에 또 객체가 있기 때문에. 배열안에 객체가 또 있으면 그걸 어떻게 처리해야 하지? 그것도 map으로 처리해야하나? map 안에 map 이 가능한가? */}
      {/* <div key={data.stats}>{data.stats}</div> */}
    </div>
  );
};

// 앱 컴포넌트 내보내기
export default App;
