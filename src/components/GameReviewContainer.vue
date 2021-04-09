<template>
      <div class="col-md-2 game-review-container">
        <img alt="Vue logo" height="100px" src="../assets/halo_3.png">
                        <div>{{game.title}}</div>

        <rating-bar/>
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
  computed: {}
}
</script>

<style scoped>
.game-review-container {
    border-style: solid;
}
</style>