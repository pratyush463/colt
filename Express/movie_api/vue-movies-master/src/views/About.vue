<template>
<v-layout row wrap px-3 mt-3>
  <v-flex xs12 sm12 md3 mb-3 class="text-xs-center">
    <v-card>
      <v-img :src="movie.Poster"></v-img>
      <v-card-title class="primary--text justify-center">
        <h2 class="font-weight-bold">{{movie.Title}} ({{movie.Year}})</h2>
      </v-card-title>
    </v-card>
  </v-flex>
  <v-flex xs12 sm12 md9>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 mb-3 class="text-xs-center">
        <v-card min-height="230" class="mx-4">
          <v-card-title class="cyan white--text justify-center">
            <h2>Plot</h2>
          </v-card-title>
          <v-card-text class="font-weight-medium text-xs-left">{{movie.Plot}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 mb-3 class="text-xs-center">
        <v-card min-height="230" class="mx-4">
          <v-card-title class="success white--text justify-center">
            <h2>Ratings</h2>
          </v-card-title>
          <v-card-text class="text-xs-left">
            <ul type="none">
              <li v-for="rating in movie.Ratings" :key="rating.Source">
                <h3 class="subheading">{{rating.Source}} <strong>({{rating.Value}})</strong> </h3>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 mb-3 class="text-xs-center">
        <v-card min-height="230" class="mx-4">
          <v-card-title class="info white--text justify-center">
            <h2>Cast</h2>
          </v-card-title>
          <v-card-text class="text-xs-left">
            <ul type="none">
              <li v-for="actor in movie.Actors.split(',')" :key="actor">
                <h3 class="subheading"><strong class="secondary--text">{{actor}}</strong></h3>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 mb-3 class="text-xs-center">
        <v-card min-height="340" class="mx-4">
          <v-card-title class="purple white--text justify-center">
            <h2>Trivia</h2>
          </v-card-title>
          <v-card-text class="text-xs-left">
            <ul type="none">
              <li class="subheading">Box-office: <strong class="secondary--text">{{movie.BoxOffice}}</strong> </li>
              <li class="subheading">Genre: <strong class="secondary--text">{{movie.Genre}}</strong> </li>
              <li class="subheading">Released: <strong class="secondary--text">{{movie.Released}}</strong> </li>
              <li class="subheading">Runtime: <strong class="secondary--text">{{movie.Runtime}}</strong> </li>
              <li class="subheading">Languages: <strong class="secondary--text">{{movie.Language}}</strong> </li>
              <li class="subheading mt-2" v-if="movie.Website"><a :href="movie.Website">{{movie.Website}}</a> </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 mb-3 class="text-xs-center">
        <v-card min-height="340" class="mx-4">
          <v-card-title class="orange white--text justify-center">
            <h2>Awards</h2>
          </v-card-title>
          <v-card-text class="text-xs-left">
            <h3 class="subheading">{{movie.Awards}} </h3>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 mb-3 class="text-xs-center">
        <v-card min-height="340" class="mx-4">
          <v-card-title class="indigo accent-2 white--text justify-center">
            <h2>Team</h2>
          </v-card-title>
          <v-card-text class="text-xs-left">
            <ul type="none">
              <li class="subheading">Director: <strong class="secondary--text">{{movie.Director}}</strong></li>
              <li class="subheading">Producer: <strong class="secondary--text">{{movie.Production}}</strong></li>
              <li class="subheading">Writers: </li>
              <ul>
                <li v-for="writer in movie.Writer.split(',')" :key="writer">
                  <strong class="secondary--text">{{writer}}</strong>
                </li>
              </ul>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</v-layout>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movie: this.$route.params.movie
    };
  },
  methods: {},
  created() {
    axios
      .get(`http://www.omdbapi.com/?i=${this.movie.imdbID}&apikey=eef831d1`)
      .then(result => {
        this.movie = result.data;
      });
  }
};
</script>

<style>
</style>
