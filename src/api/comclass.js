
import jsonp from '../common/jsonp.js'
import {commonParams, options} from '../common/config'

export function gecomfily (id) {
  const url = 'https://proxy.comicool.cn/allcomic4h5?'
  const data = Object.assign({}, commonParams, {
    req_id: id,
    page_size: 10,
    device_id: '=a15fc239afa7b4668adf7e6151abb7c5',
    _: new Date().getDate(),
    callback: 'jsonp_allcomic'
  })
  return jsonp(url, data, options)
}
