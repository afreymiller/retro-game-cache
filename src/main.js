import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    query: '',
    todos: [
      { id: 1, text: 'abc', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
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
