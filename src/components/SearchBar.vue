<template>
  <form class="dummy">
    <p>
      <label for="a">Search by game title </label>
      <input id="a" type="text" v-model="search" @change="filterBySearch()">
    </p>
    <p>
      <label for="b">Search by game genre</label>
      <select name="cars" id="b">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
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

form  { display: table;      }
p     { display: table-row;  }
label { display: table-cell; text-align: right;}
input { display: table-cell; width: 20rem; }
select { display: table-cell; text-align: left; width: 20rem; }

.dummy {
  margin: 0 auto;
}
</style>
