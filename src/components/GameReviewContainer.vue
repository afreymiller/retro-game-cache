<template>
  <div>
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