import jsonp from '../common/jsonp.js'
import {commonParams, options} from '../common/config'
export function getComicMain (listId, id) {
  const url = 'https://proxy.comicool.cn/epinfo4h5'
  const data = Object.assign({}, commonParams, {
    comic_id: listId,
    ep_id: id,
    ep_pay_support: 1,
    device_id: 'a15fc239afa7b4668adf7e6151abb7c5',
    _: new Date().getDate(),
    callback: 'jsonp_epinfo'
  })
  return jsonp(url, data, options)
}
