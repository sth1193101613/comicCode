let getTime = function () {
  return new Promise((resolve, reject) => {
    let date=new Date()
    let year=date.getFullYear()
    let mon=date.getMonth()+1
    let da=date.getDate()
    let day=toChinesNum(date.getDay())
    let time= `${year}年${mon}月${da}日星期${day}`
    resolve(time)
  })
}
function toChinesNum (num)  {
  let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']; //changeNum[0] = "零"
  let unit = ["", "十", "百", "千", "万"];
  num = parseInt(num);
  let getWan = (temp) => {
    let strArr = temp.toString().split("").reverse();
    let newNum = "";
    for (let i = 0; i < strArr.length; i++) {
      newNum = (i === 0 && strArr[i] === 0 ? "" : (i > 0 && strArr[i] === 0 && strArr[i - 1] === 0 ? "" : changeNum[strArr[i]] + (strArr[i] === 0 ? unit[0] : unit[i]))) + newNum;
    }
    return newNum;
  }
  let overWan = Math.floor(num / 10000);
  let noWan = num % 10000;
  if (noWan.toString().length < 4) noWan = "0" + noWan;
  return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num);
}

export default getTime
