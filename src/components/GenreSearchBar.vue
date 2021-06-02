<template>
    <p>
      <label for="b">Search by game genre</label>
      <select  v-model="selected" name="genres" id="b" @change="changeGenre()">
        <option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
    </p>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  name: 'GenreSearchBar',
  props: {
    msg: String
  }, 
  data () {
    return {
      selected: "fps",
      options: [
        {value: "adventure", text: "Adventure"},
        {value: "fps", text: "First-person shooter"},
        {value: "puzzle", text: "Puzzle"},
        {value: "sports", text: "Sports"}
      ]
    }
  },
  methods: {
    ...mapActions([ // spread operator so that other methods can still be added.
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
