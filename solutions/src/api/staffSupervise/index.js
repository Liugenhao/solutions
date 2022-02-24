import request from '@/utils/request'

// 人员分析
export function getLaborData(query) {
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
