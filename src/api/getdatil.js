
import jsonp from '../common/jsonp.js'
import {commonParams, options} from '../common/config'

export function getdatil (id) {
  const url = 'https://proxy.comicool.cn/comicdetail4h5'
  const data = Object.assign({}, commonParams, {
    comic_id: id,
    device_id: 'a15fc239afa7b4668adf7e6151abb7c5'
  })
  return jsonp(url, data, options)
}
