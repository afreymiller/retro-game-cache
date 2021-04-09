<template>
  <div>
    <div class="container">
      <div class="row">
        <game-review-container v-for="game in filteredList" v-bind:key="game.title" :game="game"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GameReviewContainer from './GameReviewContainer.vue'


export default {
  components: { GameReviewContainer },
  name: 'SearchResults',
  props: {
    msg: String
  }, 
  computed: {
    ...mapState({
      games: state => state.games,
      query: state => state.query
    }),
    filteredList() {
       return this.games.filter(game => {
         return game.title.toLowerCase().includes(this.query.toLowerCase())
       })
    }
  }
}
</script>


