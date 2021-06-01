<template>
  <form class="dummy">
    <p>
      <label for="a">Search by game title </label>
      <input id="a" type="text" v-model="search" @change="filterBySearch()">
    </p>
    <p>
      <label for="b">Search by game genre</label>
      <select  v-model="selected" name="genres" id="b" @change="changeGenre()">
        <option value="adventure">Adventure</option>
        <option value="fps">First-person Shooter</option>
        <option value="puzzle">Puzzle</option>
        <option value="sports">Sports</option>
      </select>
    </p>
  </form>
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
      search: '',
      selected: ""
    }
  },
  watch: {
    search: function() {
      this.filterBySearch();
    }
  },
  methods: {
    ...mapActions([ // spread operator so that other methods can still be added.
      'updateQuery',
      'updateGenre'
    ]),
    filterBySearch: function() {
      this.updateQuery(this.search)
    },
    changeGenre: function() {
      this.updateGenre(this.selected);
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

form  { display: table;      }
p     { display: table-row;  }
label { display: table-cell; text-align: left;}
input { display: table-cell; width: 20rem; }
select { display: table-cell; text-align: left; width: 20rem; }

.dummy {
  margin: 0 auto;
}
</style>
