const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const lankChampion = require('./userInfoCrawler');

async function crawlAndUpdateDomestic(outputPath, apiClient) {
  let prevData = {};
  //const domesticStatPath = path.join(outputPath, 'domestic-stat.json')
  const lankChampionPath = path.join(outputPath, apiClient)


}
