import { useCallback, useState } from 'react';
import axios from 'axios';

const useFetchImg = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imgSrc, setImgSrc] = useState('');

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers
          ? requestConfig.headers
          : { responseType: 'arraybuffer' },
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : '',
      });

      if (!response.ok) {
        throw new Error('Img Request Failed!');
      }

      const imgBlob = new Blob([response.data], {
        type: response.headers['Content-Type'],
      });
      const imgUrl = URL.createObjectURL(imgBlob);
      setImgSrc(imgUrl);
    } catch (error) {
      setError(error.message || '이미지를 가져오면서 에러발생!');
      console.error('이미지를 불러오는 도중에 에러발생!', error);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
    imgSrc,
  };
};
export default useFetchImg;
