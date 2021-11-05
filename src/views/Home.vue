<template>
  <v-container fluid flat>
    <v-row>
      <v-col class="ma-0 pa-0" cols="12" md="6" style="filter: blur(8px);">
        <v-card>
          <v-img
            :src="itemFirst.url"
            gradient="to bottom, rgba(255,255,255,.1), rgba(0,0,0,.6)"
            :style="imageSize"
            class="ma-0 pa-0"
          >
            <template v-slot:placeholder>
              <v-sheet>
                <v-skeleton-loader
                  height="3000"
                  type="image"
                ></v-skeleton-loader>
              </v-sheet>
            </template>
          </v-img>
        </v-card>
      </v-col>

      <v-col class="ma-0 pa-0" cols="12" md="6" style="filter: blur(8px);">
        <v-card>
          <v-img
            :src="itemSecond.url"
            gradient="to bottom, rgba(255,255,255,.1), rgba(0,0,0,.6)"
            :style="imageSize"
            class="ma-0 pa-0"
          >
            <template v-slot:placeholder>
              <v-sheet>
                <v-skeleton-loader
                  height="3000"
                  type="image"
                ></v-skeleton-loader>
              </v-sheet>
            </template>
          </v-img>
        </v-card>
      </v-col>

      <!-- -->
      <v-card
        style="position: absolute;"
        :style="`${barrePosition}`"
        :height="breakpointIsMobile ? barreSize : '100%'"
        :width="!breakpointIsMobile ? barreSize : '100%'"
        class="black barre smooth-resize pa-0 ma-0 d-flex justify-center align-center"
        flat
        tile
        elevation="5"
      >
        <v-btn
          class="d-flex flex-column align-center white--text"
          elevation="5"
          draggable
          color="black text-h6"
          height="60"
        >
          <router-link class="font-weight-black white--text" to="/quiz">Start</router-link>
          <v-icon right light size="30">
            mdi-chevron-right
          </v-icon>
        </v-btn>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      heightSize: "height: calc(100vh - 50px);",
      halfHeightSize: "height: calc(50vh - 10px);",
      positionNoHover: "left: calc(50% - 10px);",
      positionOnMobile: "top: calc(50% + 14px);",
      barreSize: "20px",
      breakpoint: this.$vuetify.breakpoint.name,
      img1Idex: 0,
      img2Idex: 1,
    };
  },
  computed: {
    imageSize() {
      return this.breakpointIsMobile ? this.halfHeightSize : this.heightSize;
    },
    barrePosition() {
      if (!this.breakpointIsMobile) return this.positionNoHover;
      else return this.positionOnMobile;
    },
    breakpointIsMobile() {
      return this.breakpoint === "sm" || this.breakpoint === "xs";
    },
    ...mapState(["resource", "personality"]),
    itemFirst() {
      return this.resource[this.img1Idex];
    },
    itemSecond() {
      return this.resource[this.img2Idex];
    },
  },
};
</script>

<style>
.barre-home {
  position: absolute;
  color: white;
  margin-left: 0;
  margin-right: 0;
}
</style>
