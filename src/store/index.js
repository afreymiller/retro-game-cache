import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    query: '',
    genre: '',
    games: [
      { id: 1, title: 'Uncharted', alias: "uncharted", genres: ['adventure', 'any'], overallRating: "3.0" },
      { id: 2, title: 'Halo 3', alias: "halo_3", genres: ['fps', 'any'], overallRating: "3.5" },
      { id: 3, title: 'Journey', alias: "journey", genres: ['any', 'adventure'], overallRating: "3.5"},
      { id: 4, title: 'Uncharted 2', alias: "uncharted_2", genres: ['any', 'adventure'], overallRating: "4.0"},
      { id: 5, title: 'Psychonauts', alias: "psychonauts", genres: ['any', 'adventure'], overallRating: "5.0"},
      { id: 6, title: 'NFL Street', alias: "nfl_street", genres: ['any', 'sports'], overallRating: "3.5"},
      { id: 7, title: 'Braid', alias: "braid", genres: ['any', 'puzzle'], overallRating: "3.5"}
    ]
  },
  mutations: {
    mutateQuery: function (state, payload) {
      state.query = payload
    },
    mutateGenre: function (state, payload) {
      state.genre = payload;
    }
  }, 
  actions: {
    updateQuery: function ({commit}, payload) {
      commit('mutateQuery', payload)
    },
    updateGenre: function ({commit}, payload) {
      commit('mutateGenre', payload);
    }
  }
})