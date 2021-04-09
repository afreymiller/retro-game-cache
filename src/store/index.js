import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    query: '',
    games: [
      { id: 1, title: 'Uncharted', overallRating: 8.0 },
      { id: 2, title: 'Halo 3', overallRating: 8.5 },
      { id: 3, title: 'Journey', overallRating: 9.0},
      { id: 4, title: 'Uncharted 2', overallRating: 9.0},
      { id: 5, title: 'Psychonauts', overallRating: 7.5},
      { id: 6, title: 'NFL Street', overallRating: 9.0},
      { id: 7, title: 'Braid', overallRating: 9.0}
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