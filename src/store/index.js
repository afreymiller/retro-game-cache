import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    query: '',
    genre: '',
    games: [
      { id: 1, title: 'Uncharted', alias: "uncharted", genre: 'adventure', overallRating: "3.5" },
      { id: 2, title: 'Halo 3', alias: "halo_3", genre: 'fps', overallRating: "3.5" },
      { id: 3, title: 'Journey', alias: "journey", genre: 'adventure', overallRating: "3.5"},
      { id: 4, title: 'Uncharted 2', alias: "uncharted_2", genre: 'adventure', overallRating: "4.0"},
      { id: 5, title: 'Psychonauts', alias: "psychonauts", genre: 'adventure', overallRating: "3.5"},
      { id: 6, title: 'NFL Street', alias: "nfl_street", genre: 'sports', overallRating: "3.5"},
      { id: 7, title: 'Braid', alias: "braid", genre: 'puzzle', overallRating: "3.5"}
    ],
    options: [
      {value: "adventure", text: "Adventure", selected: true},
      {value: "fps", text: "First-person shooter", selected: false},
      {value: "puzzle", text: "Puzzle", selected: false},
      {value: "sports", text: "Sports", selected: false}
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