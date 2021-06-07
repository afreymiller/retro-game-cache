<template>
    <p>
      <label for="genre-search">{{label}}</label>
      <select  v-model="selected" name="genres" id="genre-search" @change="changeGenre()">
        <option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value">
          {{ option.title }}
        </option>
      </select>
    </p>
</template>

<script>
import Constants from '../utils/constants.js'
import { mapActions } from 'vuex'


export default {
  name: 'GenreSearchBar',
  props: {
    msg: String
  }, 
  data () {
    return {
      selected: "any",
      label: Constants.GENRE_LABEL,
      options: [
        {value: "adventure", title: "Adventure"},
        {value: "fps", title: "First-person shooter"},
        {value: "puzzle", title: "Puzzle"},
        {value: "sports", title: "Sports"},
        {value: "any", title: "Any genre"}
      ]
    }
  },
  created: function () {
    this.changeGenre();
  },
  methods: {
    ...mapActions([ 
      'updateGenre'
    ]),
    changeGenre: function() {
      this.updateGenre(this.selected);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
