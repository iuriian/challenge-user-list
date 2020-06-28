<template>
  <v-app>
    <AppBar />
    <v-main>
      <UserList />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import AppBar from './components/AppBar.vue';
import UserList from './components/UserList.vue';
import Footer from './components/Footer.vue';

export default Vue.extend({
  name: 'App',

  components: {
    AppBar,
    UserList,
    Footer,
  },

  data: () => ({
    //
  }),
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

html,
body {
  font-family: "Roboto", sans-serif;
  background-color: #f3f3f3;
}
</style>
