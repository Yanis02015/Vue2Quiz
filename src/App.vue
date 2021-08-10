<template>
  <v-app>
    <v-app-bar elevation="0" app color="black" dark height="50px">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Vue2Quiz Logo"
            class="shrink mr-2"
            contain
            src="images/vquiz-logo.png"
            transition="scale-transition"
            width="27"
        /></router-link>
        <router-link to="/">
          <v-img
            alt="Vue2Quiz Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="images/vquiz-name-dark.png"
            transition="scale-transition"
            width="100"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://instagram.com/yanis.indt" target="_blank" text>
        <span class="mr-2">follow me</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main height="300">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  
  name: "App",

  data: () => ({
    //
  }),
};
</script>
