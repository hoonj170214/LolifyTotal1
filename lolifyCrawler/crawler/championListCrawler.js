// 책에 있는 내용을 그대로 옮김

const _ = require('lodash');
const axios = require('axios');
const cheerio = require('cheerio');

class championListCrawler {
  constructor() {
    this.client = axios.create({
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      },
    });
  }

  // 크롤링을 수행
  // 메인 HTML 페이지를 로딩하여 원하는 데이터를 추출함.
  // 각 데이터별로 추출함수를 만들었음.
  async crawlStat() {
    const url = `https://fow.kr/stats/${championName}/${position}`;
    const res = await this.client.get(url);
    const $ = cheerio.load(res.data);

    return {
      championThumbnail: this._extractChampionThumbnail($),
      championName: this._extractChampionName($),
      position: _extractPosition($),
      winRate: _extractWinRate($),
      pickRate: _extractPickRate($),
      banRate: _extractBanRate($),
      gameCount: _extractGameCount($),
    };
  }

  // 여기서부터는 예시코드 그대로.
  _extractChampionThumbnail() {
    let result = null;
    const titles = $('.content-container');
    // h5 태그 안에 텍스트(제목)와 span 태그(업데이트 날짜)가 섞여 있는 경우가 존재
    // 여기서 태그를 제외하고 순수 텍스트만 분리
    titles.each((idx, el) => {
      const titleTextEl = $(el)
        .contents()
        .toArray()
        .filter((x) => x.type === 'text');
    });
    if ($(titleTextEl).text().trim() === '누적 검사현황') {
      const tableEl = $(el).next();
      if (!tableEl) {
        throw new Error('table not found');
      }
      // 테이블 셀에 있는 텍스트를읽어서 숫자로 변환
      const cellEls = tableEl.find('tbody tr td');

      // 찾아진 셀에 있는 텍스트를 읽어서 숫자로 반환
      const values = cellEls
        .toArray()
        .map((node) => this._normalize($(node).text()));

      result = {
        confirmed: values[3],
        released: values[3],
        death: values[3],
        tested: values[3],
        testing: values[3],
        negative: values[3],
      };
    }
  }

  if(result == null) {
    throw new Error('Data not found');
  }
  return result;
}




  // 여기서부터 크로링 코드
  import axios from 'axios';
  //import { cheerio } from 'cheerio';
  
  // 빈 객체를 선언해요. 여기 안에 크롤링한 데이터가 들어갈거에요.
  
  const cheerio = require('cheerio');
  
  const crawlingResult = {
    userThumbnail: '',
    userLevel: '',
    prevLank: '',
    lankImg: '',
    gameCount: '',
    championThumbnail: '',
  };
  
  const lankChampion = {
    championThumbnail: '',
    championName: '',
    gameCount: '',
    winRate: '',
    kda: '',
    killCount: '',
    deathCount: '',
    assistCount: '',
    csCount: '',
    averageGold: '',
    winCount: '',
    loseCount: '',
  };
  
  async function main() {
    // axios 객체를 활용해서 해당 URL의 GET 메서드를 사용해서 로드하고 res 상수에 할당 해요.
    const res = await axios.get('/find/Hide+on+bush-KR1', {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      },
    });
    // res 상수(객체)의 data필드에서 cheerio 객체로 파싱 후 $ 상수에 할당 해요.
    const $ = cheerio.load(res.data);
    /* 
        https://fow.kr/stats 사이트의 데이터를 크롤링해요.
        해당 페이지는 테이블로 되어있었어요. map을 통해서 반복하고 championInfoList에 할당해요.
        챔피언 썸네일, 챔피언이름, 포지션, 승률, 픽률, 밴율, 표본수, 티어를 가져와요.
        crawlingResult 객체의 속성들에 하나씩 크롤링을 해오는 코드에요.
        el은 요소 하나하나예요. 그것들을 find라는 cheerio 객체의 메서드로 찾아요.
        찾는데 td(테이블 데이터)에서 nth-of-type은 몇번째 자식요소를 찾겠는지 설정하는 거에요. 
        저번에 cheerio 사용해서 크롤링하는 코드 보여드렸죠? 그거랑 똑같은 방식이에요.
        */
    const championProfile = $('.profile').map((idx, el) => {
      // crawlingResult.championThumbnail 이랑 같아요. 대괄호 표기법은.
      // 속성이름이 champion-thumbnail 이거나 champion thumbnail 일때 사용가능한 표기법이에요.
      crawlingResult['userThumbnail'] = String(
        $(el).find('div:first img').attr('src')
      );
      //  클래스 선택자로 선택했어요.
      crawlingResult['userLevel'] = String($(el).find('a.sbtn').first().text());
      // 속성 선택자로 선택했어요.
      crawlingResult['prevLank'] = String(
        $(el).find('span[style="color:red;"]').text()
      );
      console.log(crawlingResult);
    });
  
    const userLank = $('.table_summary').map((idx, el) => {
      // 랭크 앰블럼
      crawlingResult['lankImg'] = String(
        $(el).find('img[alt="리그 등급"]').attr('src')
      );
      // 랭킹 (숫자)
      crawlingResult['LankingNumber'] = String($(el).find('b').first().text());
      // 랭킹 (퍼센트)
      crawlingResult['LankingPercent'] = String($(el).find('.tipsy_live').text());
      // 등급(브론즈, 실버 ..)
      crawlingResult['Lank'] = String($(el).find('font').first().text());
  
      console.log(crawlingResult);
    });
  
    /*
      crawlingResult['championThumbnail'] = String(
        $(el).find('td:nth-of-type(1) img').attr('src')
      );
      crawlingResult['championName'] = String(
        $(el).find('td:nth-of-type(1)').text()
      );
      crawlingResult['position'] = String($(el).find('td:nth-of-type(2)').text());
      crawlingResult['winRate'] = String($(el).find('td:nth-of-type(3)').text());
      crawlingResult['pickRate'] = String($(el).find('td:nth-of-type(4)').text());
      crawlingResult['banRate'] = String($(el).find('td:nth-of-type(5)').text());
      crawlingResult['count'] = String($(el).find('td:nth-of-type(6)').text());
      console.log(crawlingResult);
    
    */
    const lank13 = $('.rankchamp_S13B_div_all > table > tbody > tr');
    lank13.map((idx, el) => {
      // 등급(브론즈, 실버 ..)
      lankChampion['championThumbnail'] = String(
        $(el).find('td:nth-of-type(1) > img').attr('src')
      );
      lankChampion['championName'] = String(
        $(el).find('td:nth-of-type(1) > img').attr('alt')
      );
      lankChampion['gameCount'] = String($(el).find('td:nth-of-type(2)').text());
      lankChampion['winRate'] = String($(el).find('td:nth-of-type(3)').text());
      lankChampion['kda'] = String($(el).find('td:nth-of-type(4)').text());
      lankChampion['killCount'] = String($(el).find('td:nth-of-type(5)').text());
      lankChampion['deathCount'] = String($(el).find('td:nth-of-type(6)').text());
      lankChampion['assistCount'] = String(
        $(el).find('td:nth-of-type(7)').text()
      );
      lankChampion['csCount'] = String($(el).find('td:nth-of-type(8)').text());
      lankChampion['averageGold'] = String(
        $(el).find('td:nth-of-type(9)').text()
      );
      lankChampion['winCount'] = String($(el).find('td:nth-of-type(13)').text());
      lankChampion['loseCount'] = String($(el).find('td:nth-of-type(14)').text());
  
      console.log(lankChampion);
      // crawlingResult['championThumbnail'] = String(
      //   $(el).find('td').eq(0).attr('src')
      // );
      // crawlingResult['championName'] = String(
      //   $(el).find('td:nth-of-type(1) > img').attr('alt')
      // );
      // crawlingResult['gameCount'] = String(
      //   $(el).find('td:nth-of-type(2)').text()
      // );
      return lankChampion;
    });
  }
  
  main();
  export { main };
  // 노드에서 객체 내보내기 검색해주세요..