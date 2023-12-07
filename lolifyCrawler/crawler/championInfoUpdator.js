const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const { format, utcToZonedTime } = require('date-fns-tz');

const championInfoList = require('./index');

async function crawlAndUpdateChampionInfo(outputPath, apiClient) {
  let prevData={};
  const championStatPath = path.join(outputPath, '')
}
