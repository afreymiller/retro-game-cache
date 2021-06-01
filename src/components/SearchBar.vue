<template>
  <div class="container">
    <input type="text" style="width: 20rem;" v-model="search" @change="filterBySearch()"
    placeholder="Search over 80 video games..."/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  name: 'SearchBar',
  props: {
    msg: String
  }, 
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: function() {
      this.filterBySearch();
    }
  },
  methods: {
    ...mapActions([ // spread operator so that other methods can still be added.
      'updateQuery'
    ]),
    filterBySearch: function() {
      this.updateQuery(this.search)
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
