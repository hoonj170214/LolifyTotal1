// 필요한 모듈 불러오기
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const mime = require('mime');

const app = express();

// 요청과 응답에 대한 정보 콘솔에 기록
app.use(morgan('dev'));

// bodyParser를 이용해서 요청(req)의 본문을 JSON으로 파싱
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 서버에서 CORS 정책을 해결해주는 라이브러리
// cors() 괄호 안에 아무것도 안넣으면 아무거나 꺼내갈 수 있다는 의미
app.use(cors());

// 포트 번호 설정
const port = 4001;

// 로컬 JSON 파일이 저장된 디렉토리 경로
// path.join은 __dirname을 사용해서 주어진 상대경로 세그먼트를 결합해서 하나의 경로 세그먼트를 만들어주는 메서드
const championDataPath = path.join(
  __dirname,
  './public/13.23.1/data/ko_KR/champion/'
);

// 파일명을 받아 해당 JSON 파일을 읽어 클라이언트에 전송
// :filename 은 동적인 값을 받아오는 기능이다.
// api/data/:fileName 을 정의
app.get('/api/championData/:fileName', async (req, res) => {
  // 요청의 파라미터에서 fileName을 추출함
  const championName = req.params.fileName;
  const filePath = path.join(championDataPath, `${championName}.json`);
  try {
    // JSON 파일 읽기
    // jsonFileContent 는 읽어온 JSON 파일의 내용을 담고 있는 문자열이다.
    const jsonFileContent = await fs.readFile(filePath, 'utf-8');

    /* 
    JSON.parse는 JSON 문자열을 JavaScript 객체로 변환한다. 그래서 JSON 형태의 문자열을 자바스크립트에서 사용할 수 있는 객체로 파싱한다.
     그래서 jsonData 에는 JSON 파일의 내용이 자바스크립트 객체로 저장되어있다. */
    const jsonData = JSON.parse(jsonFileContent);

    /* 클라이언트에 JSON 데이터 전송
    res.json은 클라이언트에게 JSON 형태의 응답을 보내기위한 메서드이다.
    서버는 해당 JSON 데이터를 클라이언트에게 응답으로 보낸다.
    res.json이 없다면 요청에 대한 응답이 없거나 빈 응답이 되어 에러가 난다.*/
    const championDataList = [];
    //챔피언이름이 동적으로 바뀔 때 사용할 코드(일단 지금은 소나 예시코드를 작성했음)
    if (jsonData.data[championName]) {
      const championData = jsonData.data[championName];
      // 필요한 속성들을 추출하여 가공
      const processedData = {
        name: championData.name,
        key: championData.key,
        stats: championData.stats,
        img: championData.image.full,
        passive: championData.passive,
        skills: championData.spells,
        // 추가적인 가공이 필요한 경우 여기에 작성
      };
      championDataList.push(processedData);
    }
    res.json(championDataList);
  } catch (error) {
    // 오류 발생 시 서버 에러 응답
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const runesPath = path.join(__dirname, './public/13.23.1/data/ko_KR/');
app.get('/api/runesData/', async (req, res) => {
  try {
    const jsonFileContent = await fs.readFile(runesPath, 'utf-8');
    const jsonData = JSON.parse(jsonFileContent);
    const runesDataList = [];
    if (jsonData) {
      runesDataList.push(jsonData);
    }
  } catch (error) {
    console.error('Error reading JSON file: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use(express.static('public/13.23.1/img/champion/'));
// 챔피언의 증명사진을 가져오는 경로
const championImgPath = path.join(__dirname, './public/13.23.1/img/champion/');

app.get('/api/championImg/:fileName', (req, res) => {
  try {
    const { fileName } = req.params;
    const filePath = path.join(championImgPath, `${fileName}.png`);
    res.sendFile(filePath);
  } catch (error) {
    console.error('이미지를 전송하는 도중 에러발생!', error);
    res.status(500).send('Internal Server Error');
  }
});

app.use(express.static('public/13.23.1/img/item/'));
//  아이템 사진을 가져오는 경로
const itemImgPath = path.join(__dirname, './public/13.23.1/img/item/');

app.get('/api/itemImg/:fileName', (req, res) => {
  try {
    const { fileName } = req.params;
    const filePath = path.join(itemImgPath, `${fileName}.png`);
    res.sendFile(filePath);
  } catch (error) {
    console.error('아이템 이미지를 전송하는 도중 에러발생!', error);
    res.status(500).send('Internal Server Error');
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`CORS-enabled web server listening on port ${port}`);
});
