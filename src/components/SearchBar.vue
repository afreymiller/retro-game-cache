<template>
  <div>
    <input type="text" v-model="search"
    placeholder="Search over 80 video games..."/>
    <div v-for="post in todos" v-bind:key="post.text">{{post.id}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SearchBar',
  props: {
    msg: String
  }, 
  data () {
    return {
      search: '',
      postList: [{title: 'Uncharted'}, {title: 'Drake'}]
    }
  },
  computed: {
    ...mapState({
      todos: state => state.todos
    }),
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
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
