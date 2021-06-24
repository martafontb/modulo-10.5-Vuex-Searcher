<template>
  <div class="card text-white bg-secondary mb-4" style="max-width: 20rem;">
  <div class="card-header bg-danger">{{ movie.title }}</div>
  <div class="card-body">
    <h5 class="card-title">Available: {{ movie.available }}</h5>
    <p class="card-text"> {{ movie.description }}Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
</template>

<script type="text/javascript" src="../scripts/MovieCard.js"></script>