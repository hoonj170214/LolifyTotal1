const _ = require('lodash');
const axios = require('axios');

// 유저의 정보(id 정보)를 담는 클래스 정의
/*
  puuid 를 가져오는 모듈이에요. 
  여기서 모듈은 js 파일을 모듈이라고 해요.
  다시 말하면 puuid를 가져오기 위한 js 파일이에요.
  라이엇 정책이 바뀌어서 puuid를 사용해야 해요. 
  근데 사용자는 puuid를 모르잖아요. 그래서 그걸 시스템으로 처리해야 하는데 그걸 하기 위해서 한다고 생각하시면 돼요.
  소환사 아이디 폐지이슈 관련링크 :   https://www.gamemeca.com/view.php?gid=1742133
 */
class summonerInfo {
  constructor() {
    // 클라이언트 생성
    this.client = axios.create({
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        Origin: 'https://developer.riotgames.com',
        'X-Riot-Token': 'RGAPI-631e49f3-4a39-4adc-9a97-831011e91b1c',
      },
    });
  }
  // 소환사 이름을 매개변수로 받아서 get요청을 하고 응답을 리턴하는 함수
  // 응답은 소환사의 id 정보
  async getSummonerName(summonerName) {
    try {
      const url = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`;
      const res = await this.client.get(url);
      return res.data;
    } catch (error) {
      console.error('Error fetching summoner info : ', error);
      throw error;
    }
  }
}

// 클래스를 실제로 만들고, 유저의 id 정보를 가져오는 함수
const getSummonerId = async (summonerName) => {
  const summonerIdInfo = new summonerInfo();
  try {
    const result = await summonerIdInfo.getSummonerName(summonerName);
    console.log(result);
    const { accountId, puuid } = result;
    console.log(`accountId : ${accountId}`);
    console.log(`puuid : ${puuid}`);
  } catch (error) {
    console.error('Error in example usage:', error);
  }
};
getSummonerId('hide on bush');
