<template>
  <div>
    <div v-for="post in filteredList" v-bind:key="post.title">{{post.title}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
       return this.games.filter(post => {
         return post.title.toLowerCase().includes(this.query.toLowerCase())
       })
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
