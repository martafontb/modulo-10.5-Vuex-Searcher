<template>
<div>
      <div class="container-fluid" v-if="movies.length > 0 ">
        <div class="row mt-5">
          <MovieCard class="col-" :movie="movie" v-for="movie in movies" :key="movie.id"></MovieCard>
      </div>
    </div>
    <div v-else="" class="alert alert-danger">
      Nothing found
    </div>
</div>
</template>

<script type="text/javascript" src="../scripts/MovieList.js"></script>

<style lang="sass">
.row 
  justify-content: space-around
  margin: 0 
</style>