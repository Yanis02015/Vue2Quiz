<template>
  <v-container fluid flat
    ><v-hover v-slot="{ hover }">
      <v-row :style="heightSize">
        <v-col class="ma-0 pa-0" cols="12" md="6">
          <v-card :class="{ 'on-hover': hover }" tile>
            <v-img
              src="https://source.unsplash.com/user/erondu/1600x900"
              lazy-src="https://picsum.photos/id/11/100/60"
              gradient="to bottom, rgba(255,255,255,.1), rgba(0,0,0,.6)"
              :style="imageSize"
              style="margin-right: -3px;"
            />
          </v-card>
        </v-col>

        <v-col class="ma-0 pa-0" cols="12" md="6">
          <v-card :class="{ 'on-hover': hover }" tile>
            <v-img
              src="https://source.unsplash.com/random"
              lazy-src="https://picsum.photos/id/11/100/60"
              gradient="to bottom, rgba(255,255,255,.1), rgba(0,0,0,.6)"
              :style="imageSize"
              style="margin-left: -3px;"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-hover>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      heightSize: "height: calc(100vh - 60px);",
      halfHeightSize: "height: calc(50vh - 30px);",
    };
  },
  computed: {
    imageSize() {
      let breakpoint =
        this.$vuetify.breakpoint.name === "sm" ||
        this.$vuetify.breakpoint.name === "xs";
      return breakpoint ? this.halfHeightSize : this.heightSize;
    },
  },
};
</script>

<style scoped>
  v-card {
    opacity: 1;
  }
</style>