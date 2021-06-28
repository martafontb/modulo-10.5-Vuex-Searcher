<template>
    <div>
        <h1>{{title}}</h1>

        <form>
            <div class="form-group">
                <label for="formGroupExampleInput">{{ label }}</label>
                <input 
                type="text" 
                class="form-control" 
                v-model="search"
                id="formGroupExampleInput" 
                :placeholder="placeholder">
            </div>
        </form>

        <div class="form-check form-check-inline">
            <input 
            class="form-check-input" 
            type="radio" 
            v-model="available"
            id="inlineRadio1" 
            :value="true">
            <label class="form-check-label" for="inlineRadio1">Available</label>
        </div>
        <div class="form-check form-check-inline">
            <input 
            class="form-check-input" 
            type="radio" 
            v-model="available"
            id="inlineRadio2" 
            :value="false">
            <label class="form-check-label" for="inlineRadio2">Not Available</label>
        </div>
    </div>
</template>


<script>
export default {
    name:"SearchForm",
    data() {
    return {
      title: "Search Form With Vuex",
      label: "Search for a movie",
      placeholder: "Choose a movie to see if it's available",
      availableMsg: "Available",
      unavailable: "Unavailable",
      msg: "No movies available"
    }
  },
    computed: {
        search: {
            get(){
             return this.$store.state.filter.input;
            },
            set(val){
                this.$store.commit('setSearch', val);
            }
        },
        available: {
            get(){
             return this.$store.state.filter.available;
            },
            set(){
                this.$store.commit('setAvailable');
            }
        }
    }
}
</script>
