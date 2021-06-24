import { mapGetters } from "vuex";
import MovieCard from "./../components/MovieCard.vue"

export default {
name: "MovieList",
  computed: {
    ...mapGetters({
    movies:'filterMovies'
    })
  },
  components: {
    MovieCard
  }
}