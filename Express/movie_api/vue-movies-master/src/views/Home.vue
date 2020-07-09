<template>
  <div>
    <v-form>
      <v-layout justify-center row wrap mt-3>
        <v-flex xs11 sm6 md5>
          <v-text-field append-icon="search" label='Search phrase here' v-model='keyword' class="mx-2 px-1"></v-text-field>
        </v-flex>
        <v-flex xs8 sm6 md3>
          <v-select :items="types" v-model="type" color="primary" menu-props="offset-y" label="Category" class="mx-2 px-1"></v-select>
        </v-flex>
        <v-btn @click="searchMovies()" color="primary">Find {{type}}</v-btn>
      </v-layout>
    </v-form>
    <v-container fill-height justify-center v-if="loading">
      <v-progress-circular indeterminate :size="120" :width="8" color="info">
      </v-progress-circular>
    </v-container>
    <v-container fluid v-if="!loading && moviesData.length">
      <v-layout row wrap>
        <v-flex xs12 sm4 md3 lg3 class="pa-3" v-for="movie in moviesData" :key="movie.imdbID">
          <v-card hover @click="showMovieDetails(movie)">
            <v-img :src="movie.Poster" height="300px"></v-img>
            <v-card-title>
              <div>
                <h2>{{movie.Title}}</h2>
                <div class="secondary--text">Release: {{movie.Year}} </div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout fill-height justify-center v-if="!loading && !moviesData.length">
      <img id="cinema" src="../assets/cinema.png">
    </v-layout>
    <v-snackbar v-model="snackbar" color="error">
      <h3>{{error}}</h3>
      <v-btn dark flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { bus } from "../main";
import axios from "axios";
import router from "../router";
export default {
  components: {},
  data() {
    return {
      keyword: "",
      type: "",
      types: ["movie", "series"],
      loading: false,
      moviesData: [],
      snackbar: false,
      error: ""
    };
  },
  methods: {
    searchMovies: function() {
      if (this.keyword && this.type) {
        this.loading = true;
        axios
          .get(
            `http://www.omdbapi.com/?s=${this.keyword}&apikey=eef831d1&page=1&type=${this.type}`
          )
          .then(response => {
            this.loading = false;
            if (response.data.Search) {
              this.moviesData = response.data.Search;
            } else {
              this.error = response.data.Error;
              this.snackbar = true;
            }
          });
      } else {
        this.error = "Fill details first !";
        this.snackbar = true;
      }
    },
    showMovieDetails(movie) {
      router.push({
        name: "about",
        params: {
          movie: movie
        }
      });
    }
  },
  created() {
    bus.$on("appReset", () => {
      this.keyword = "";
      this.type = "";
      this.moviesData = [];
    });
  }
};
</script>

<style scoped>
#cinema {
  margin-top: 10vh;
}

@media only screen and (max-width: 600px) {
  #cinema {
    width: 95vw;
  }
}
</style>
