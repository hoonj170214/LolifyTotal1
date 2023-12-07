const axios = require('axios');

class ApiClient {
  constructor() {
    // API 서버의 기본 주소가 저장된 HTTP 클라이언트 생성
    const client = axios.create({
      baseURL: process.env.CB_API_BASE_URL || 'http://localhost:8080',
    });

    client.interceptors.response.use((res) => {
      return res.data;
    });
    this.client = client;
  }
  // API 와 1대1 매칭되도록 ApiClient 클래스에 함수 생성
  async upsertChampionStat(data) {
    return await this.client.post('lankChampion', data);
  }

  async upsertKeyValue(key, value) {
    return await this.client.post('key-value', {
      key,
      value,
    });
  }
}

module.exports = ApiClient;
