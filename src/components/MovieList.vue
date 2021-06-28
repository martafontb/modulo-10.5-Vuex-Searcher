<!-- TEMPLATE -->
<template>
<div>

      <div class="container-fluid" v-if="movies.length > 0">
        <div class="row mt-5">
          <Fade>
          <!-- <sequential-entrance fromBottom tag="div"> -->
              <MovieCard class="col-" :movie="movie" v-for="movie in movies" :key="movie.id"></MovieCard>
          <!-- </sequential-entrance> -->
          </Fade> 
      </div>
    </div> 
    
    <div v-else class="alert alert-danger">  
      Nothing found
    </div>

</div>
</template>

 <!-- JAVASCRIPT -->
<script>
import { mapGetters } from "vuex";
import MovieCard from "./../components/MovieCard.vue";
import Fade from "./../components/Animations/Fade.vue";


export default {
name: "MovieList",
  computed: {
    ...mapGetters({
    movies:'filterMovies'
    })
  },
  components: {
    MovieCard,
    Fade
  }
}
</script>

 <!-- CSS -->
<style>
.row div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0; 
}

</style>
