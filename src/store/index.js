import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    query: '',
    games: [
      { id: 1, title: 'Uncharted', alias: "uncharted", overallRating: 4 },
      { id: 2, title: 'Halo 3', alias: "halo_3", overallRating: 4 },
      { id: 3, title: 'Journey', alias: "journey", overallRating: 5},
      { id: 4, title: 'Uncharted 2', alias: "uncharted_2", overallRating: 5},
      { id: 5, title: 'Psychonauts', alias: "psychonauts", overallRating: 4},
      { id: 6, title: 'NFL Street', alias: "nfl_street", overallRating: 4},
      { id: 7, title: 'Braid', alias: "braid", overallRating: 5}
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