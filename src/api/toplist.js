import jsonp from '../common/jsonp.js'
import {commonParams, options} from '../common/config'

export function topList () {
  const url = 'https://proxy.comicool.cn/allcomic4h5'
  const data = Object.assign({}, commonParams, {
    comic_id: 0,
    page_size: 10,
    page_direction: 2,
    list_type: 'all',
    order_type: 'rating',
    req_id: 0,
    req_param: 0,
    device_id: 'a15fc239afa7b4668adf7e6151abb7c5'
  })
  return jsonp(url, data, options)
}
