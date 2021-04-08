<template>
  <div class="container game-review-container">
      <p>{{game.title}}</p>
      <p>{{game.id}}</p>
  </div>
</template>

<script>

export default {
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