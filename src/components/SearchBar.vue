<template>
  <div>
    <input type="text" v-model="search"
    placeholder="Search over 80 video games..."/>
    <div v-for="post in filteredList" v-bind:key="post.title">{{post.title}}</div>
  </div>
</template>

<script>
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
