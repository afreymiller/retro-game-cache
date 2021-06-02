<template>
  <form class="dummy">
    <title-search-bar/>
    <genre-search-bar/>
  </form>
</template>

<script>
import GenreSearchBar from './GenreSearchBar.vue'
import TitleSearchBar from './TitleSearchBar.vue'

export default {
  name: 'SearchBar',
  components: { TitleSearchBar, GenreSearchBar }
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
