<template>
  <div class="container">
    <img alt="Vue logo" width="80%" height="25px" :src="getImgUrl()">            
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
