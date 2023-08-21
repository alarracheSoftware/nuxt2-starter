import Vue from 'vue'

export default {
  state: () => ({
    appInfos: {
      menu: null
    }
  }),
  actions: {
    SET_MENU ({ commit }, value) {
      commit('SET_MENU', value)
    }
  },
  mutations: {
    SET_MENU (state, value) {
      Vue.set(state, 'menu', value)
    }
  }
}
