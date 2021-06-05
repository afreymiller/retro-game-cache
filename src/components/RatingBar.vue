<template>
  <div class="container">
    <img alt="Vue logo" width="80rem" height="30rem;" :src="getImgUrl()">            
  </div>
</template>

<script>

export default {
  name: 'RatingBar',
  props: {
    stars: Number
  }, 
  methods: {
    getImgUrl() {
      return require(`../assets/stars_${this.stars}.png`)
    }
  }
}
</script>
