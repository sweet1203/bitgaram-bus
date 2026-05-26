/**
 * 빛가람동 중흥 실시간 버스 — Google Apps Script 백엔드
 * 나주시 BIS 도착정보 API 사용 (BUSSTOP_ID)
 * 배포 URL은 README.md 참고
 */

var NAJU_ARRIVE_API = 'http://121.147.206.212/json/arriveApi';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('빛가람동 중흥 실시간 버스')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * @param {string} stopId 정류소 ID (예: 1851)
 * @param {string} stopName 표시용 정류소명
 * @returns {{stopName:string, buses:Object[]}|{error:boolean}}
 */
function getBusData(stopId, stopName) {
  try {
    var url = NAJU_ARRIVE_API + '?BUSSTOP_ID=' + encodeURIComponent(stopId);
    var response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    if (response.getResponseCode() !== 200) {
      return { error: true };
    }
    var json = JSON.parse(response.getContentText('UTF-8'));
    if (!json.RESULT || json.RESULT.RESULT_CODE !== 'SUCCESS') {
      return { error: true };
    }
    var buses = json.ARRIVE_LIST || [];
    return {
      stopName: stopName,
      buses: buses,
    };
  } catch (e) {
    return { error: true };
  }
}
