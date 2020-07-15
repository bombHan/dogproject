export default {
  state: {
    userInfo: {
      name: 'han',
      age: 123
    }
  },
  getters: {
    userName: state => {
      return state.userInfo.name
    }
  },
  mutations: {
    saveUserInfo(state, data) {
      state.userInfo = data;
    }
  },
  actions: {
    saveUserInfoActions({ commit, state }, data) {
      console.log(data)
      const userInfo = data
      commit('saveUserInfo', userInfo)
    }
  }
};
