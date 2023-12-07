import { useState, useCallback } from 'react';
import axios from 'axios';

// applyData 는 함수. 자바스크립트에서는 함수도 객체이다.
// 이 함수는 커스텀 훅을 사용하는 컴포넌트가 받은 데이터를 조작해서 사용할 수 있도록 하는 함수
// requestConfig 는 객체이다.
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        // JSON.stringify는 값이나 객체를 JSON 문자열로 바꾸는 메서드
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      // 응답이 성공적으로 완료했는지, 아닌지를 관리
      if (!response.ok) {
        throw new Error('Request Failed!');
      }
      // 응답을 json 데이터로 변환
      const data = await response.json;
      // applyData 함수로 데이터를 커스텀 훅을 사용하는 컴포넌트로 전달.
      // 데이터를 사용하는 세부적인 로직은 커스텀 훅을 사용하는 컴포넌트에게 위임
      applyData(data);
    } catch (error) {
      setError(error.message || `${requestConfig.url}를 가져오면서 에러발생!`);
      console.error('데이터를 불러오는 도중 에러발생!', error);
    }
    setIsLoading(false);
    // useCallback은 의존성 배열이 필요하다. 이 의존성 배열은 useCallback 안에서 사용되는 모든 것을 나열해야 한다.
    // requestConfig, applyData를 useCallback의 매개변수로 넣어줬기 때문에 의존성 배열은 빈 배열로 사용할 수 있다.
  }, []);

  // 커스텀 훅을 사용하는 컴포넌트에게 반환(return)
  // 필요한 건 무엇이든지 반환할 수 있음(숫자, 문자, 배열, 함수, 객체 등)
  return {
    isLoading,
    error,
    sendRequest,
  };
};
export default useHttp;
