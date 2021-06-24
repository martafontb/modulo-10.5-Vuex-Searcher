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