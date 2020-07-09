<template>
<v-app>
  <app-header></app-header>
  <v-content>
      <router-view></router-view>
  </v-content>
</v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    "app-header": AppHeader
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>