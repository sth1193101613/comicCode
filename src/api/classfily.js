
import jsonp from '../common/jsonp.js'
import {commonParams, options} from '../common/config'

export function getClassFiy () {
  const url = 'https://proxy.comicool.cn/categorylist4h5?'
  const data = Object.assign({}, commonParams, {
    device_id: '=a15fc239afa7b4668adf7e6151abb7c5',
    _: new Date().getDate(),
    callback: 'jsonp_allcomic'
  })
  return jsonp(url, data, options)
}
