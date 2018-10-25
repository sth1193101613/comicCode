const mutations = {
  toggleState (state) {
    state.flag = !state.flag
  },
  saveUserName (state, username) {
    state.username = username
    state.flag = false
    try {
      localStorage.setItem('user', username)
    } catch (e) {}
  },
  loginOut (state) {
    state.username = ''
    localStorage.removeItem('user')
  },
  comListFile (state, comList) {
    state.comList = []
    state.comList = comList
    try {
      localStorage.setItem('comList', JSON.stringify(comList))
    } catch (e) {}
  },
  eqIdSave (state, eqId) {
    if (state.eqId.length === 0) {
      state.eqId.unshift(eqId)
    } else {
      for (let i in state.eqId) {
        if (eqId.id === state.eqId[i].id) {
          state.eqId[i].eqid = eqId.eqid
          state.eqId[i].title = eqId.title
        } else {
          let hasItem = state.eqId.some(k => {
            return k.id === eqId.id
          })
          hasItem || state.eqId.unshift(eqId)
        }
      }
    }
    try {
      localStorage.setItem('eqId', JSON.stringify(state.eqId))
    } catch (e) {}
  }
}

export default mutations
