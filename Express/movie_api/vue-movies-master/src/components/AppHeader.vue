<template>
<v-toolbar app class="px-3" color="primary white--text">
  <div @click="resetApp()">
    <v-toolbar-title class="headline white--text" style="cursor: pointer;">
      <v-icon color="white" large>movie_filter</v-icon>
      <span class="display-1 font-weight-light"> Vue Movies</span>
    </v-toolbar-title>
  </div>
</v-toolbar>
</template>

<script>
import { bus } from "../main";
import router from "../router";
export default {
  methods: {
    resetApp: function() {
      bus.$emit("appReset");
      router.push("/");
    }
  }
};
</script>
