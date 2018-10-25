/*
更新漫画的方法
 */
export function update(id,eqid ,auth,time,title,img,) {
  return new Promise((resolve, reject) => {
    let msg = {id, eqid, auth, time, title, img}
    resolve(msg)
  })
}

