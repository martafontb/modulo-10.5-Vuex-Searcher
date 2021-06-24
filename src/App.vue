<template>
  <div id="app" class="container mt-5 text-center">
   <SearchFrom></SearchFrom>
   <MovieList></MovieList>
  </div>
</template>

<script>
import SearchFrom from "./components/SearchForm.vue"
import MovieList from "./components/MovieList.vue"

export default {
  name: "App",
  components: {
    SearchFrom,
    MovieList
  }
}
</script>