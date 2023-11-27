// 필요한 모듈 불러오기
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const morgan = require('morgan');

const app = express();

// 요청과 응답에 대한 정보 콘솔에 기록
app.use(morgan('dev'));

// bodyParser를 이용해서 요청(req)의 본문을 JSON으로 파싱
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3001;

// 로컬 JSON 파일이 저장된 디렉토리 경로
// path.join은 __dirname을 사용해서 주어진 상대경로 세그먼트를 결합해서 하나의 경로 세그먼트를 만들어주는 메서드
const jsonFilesPath = path.join(
  __dirname,
  './public/13.23.1/data/ko_KR/champion/'
);

// 파일명을 받아 해당 JSON 파일을 읽어 클라이언트에 전송
// :filename 은 동적인 값을 받아오는 기능이다.
app.get('/api/data/:fileName', async (req, res) => {
  const { fileName } = req.params;
  const filePath = path.join(jsonFilesPath, `${fileName}.json`);

  try {
    // JSON 파일 읽기
    const jsonFileContent = await fs.readFile(filePath, 'utf-8');
    // JSON 문자열을 JavaScript 객체로 변환
    const jsonData = JSON.parse(jsonFileContent);
    // 클라이언트에 JSON 데이터 전송
    res.json(jsonData);
  } catch (error) {
    // 오류 발생 시 서버 에러 응답
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
