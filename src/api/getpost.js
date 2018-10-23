
import jsonp from '../common/jsonp.js'
import {commonParams, options} from '../common/config'

export function getPost (id) {
  const url = 'https://proxy.comicool.cn/getpostlist4h5'
  const data = Object.assign({}, commonParams, {
    comic_id: id,
    include: 'comic',
    order_type: 'update_time',
    post_id: 9637087,
    page_size: 5,
    page_direction: 2,
    device_id: 'a15fc239afa7b4668adf7e6151abb7c5'
  })
  return jsonp(url, data, options)
}
