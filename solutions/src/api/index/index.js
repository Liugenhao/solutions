import request from '@/utils/request'

// 工地统计
export function getSiteStatisticsData(query) {
  return request({
    url: '/mainScreen/construction',
    method: 'get',
    params: query
  })
}

// 人员分析
export function getStaffAnalyseData(query) {
  return request({
    url: '/mainScreen/personnelAnalysis',
    method: 'get',
    params: query
  })
}
//POST TEST
// export function postTest(data) {
//   return request({
//     url: '/post/test',
//     method: 'post',
//     data: data
//   })
// }
