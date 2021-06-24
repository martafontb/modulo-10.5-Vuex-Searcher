import Vue from "vue";
import Vuex from "vuex";
import Movies from "./../assets/MOCK_DATA.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: Movies,
    filter: {
      input: '', 
      available: true
    }
  },
  mutations: {
    setSearch(state, search) {
      state.filter.input = search;
    },
    setAvailable(state) {
      state.filter.available = !state.filter.available;
    }
  },
  getters: {
    filterMovies: (state) => {
      let movies = state.movies.filter( movie => movie.available === state.filter.available)
      if (state.filter.input.length > 2) {
        return movies.filter(movie => movie.title.toLowerCase().includes(state.filter.input));
      }
      return movies;
    }
  }
});
