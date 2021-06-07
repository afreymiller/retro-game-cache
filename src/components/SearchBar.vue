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

form  { display: table;      }

.dummy {
  margin: 0 auto;
}
</style>
