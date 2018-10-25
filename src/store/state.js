const state = {
  flag: false,
  comList: [],
  username: '',
  eqId: []
}
let comList = JSON.parse(localStorage.getItem('comList'))
if (localStorage.getItem('comList')) {
  state.comList = JSON.parse(localStorage.getItem('comList'))
} else {
  localStorage.setItem('comList', comList)
}

let username = localStorage.getItem('user')
if (localStorage.getItem('user')) {
  state.username = localStorage.getItem('user')
} else {
  localStorage.setItem('user', username)
}

let eqId = []
if (localStorage.getItem('eqId')) {
  state.eqId = JSON.parse(localStorage.getItem('eqId'))
} else {
  localStorage.setItem('eqId', JSON.stringify(eqId))
}

export default state
