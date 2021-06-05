<template>
  <p>
    <label for="a">{{label}} </label>
    <input id="a" type="text" v-model="search" @change="filterBySearch()">
  </p>
</template>

<script>
import { mapActions } from 'vuex'
import Constants from '../utils/constants.js'


export default {
  name: 'TitleSearchBar',
  props: {
    msg: String
  }, 
  data () {
    return {
      search: '',
      label: Constants.TITLE_LABEL
    }
  },
  watch: {
    search: function() {
      this.filterBySearch();
    }
  },
  methods: {
    ...mapActions([
      'updateQuery'
    ]),
    filterBySearch: function() {
      this.updateQuery(this.search)
    }
  }
}
</script>

<style scoped>

form  { display: table;      }
p     { display: table-row;  }
label { display: table-cell; text-align: left;}
input { display: table-cell; width: 20rem; }
select { display: table-cell; text-align: left; width: 20rem; }

.dummy {
  margin: 0 auto;
}
</style>