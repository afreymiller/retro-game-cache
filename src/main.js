import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    query: '',
    games: [
      { id: 1, title: 'Uncharted' },
      { id: 2, title: 'Halo 3' }
    ]
  },
  mutations: {
    mutateQuery: function (state, payload) {
      state.query = payload
    }
  }, 
  actions: {
    updateQuery: function ({commit}, payload) {
      commit('mutateQuery', payload)
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
