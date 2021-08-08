<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      height="60px"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vue2Quiz Logo"
          class="shrink mr-2"
          contain
          src="images/vquiz-logo.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vue2Quiz Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="images/vquiz-name-dark.png"
          transition="scale-transition"
          width="110"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://instagram.com/yanis.indt"
        target="_blank"
        text
      >
        <span class="mr-2">follow me</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
