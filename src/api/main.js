import jsonp from '../common/jsonp.js'
import {commonParams} from '../common/config.js'
export function mainList () {
  const url = 'https://proxy.comicool.cn/homepage4h5'
  const data = Object.assign({}, commonParams, {
    device_id: 'a15fc239afa7b4668adf7e6151abb7c5'
  })
  return jsonp(url, data)
}
