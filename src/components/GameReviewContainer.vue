<template>
  <div class="col-md-3 game-review-container">
    <img alt="" height="70rem" width="50rem" :src="getImgUrl()">
    <div>{{game.title}}</div>
    <rating-bar :stars="game.overallRating"/>
  </div>
</template>

<script>
import RatingBar from "./RatingBar.vue"


export default {
  components: { RatingBar }, 
  name: 'GameReviewContainer',
  props: {
    game: Object
  },
  methods: {
    getImgUrl() {
      return require(`../assets/${this.game.alias}.png`)
    }
  }
}
</script>

<style scoped src="@/assets/styles/game-review-container.css">
</style>