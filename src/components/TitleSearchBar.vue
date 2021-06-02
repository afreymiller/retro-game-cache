<template>
  <p>
    <label for="a">Search by game title </label>
    <input id="a" type="text" v-model="search" @change="filterBySearch()">
  </p>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  name: 'TitleSearchBar',
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

form  { display: table;      }
p     { display: table-row;  }
label { display: table-cell; text-align: left;}
input { display: table-cell; width: 20rem; }
select { display: table-cell; text-align: left; width: 20rem; }

.dummy {
  margin: 0 auto;
}
</style>