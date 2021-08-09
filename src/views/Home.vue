<template>
  <v-container fluid>
    <v-row :style="heightSize">
      <v-hover v-model="hoverFirstPic" v-slot="{ hover }">
        <v-col
          class="ma-0 pa-0 smooth-resize"
          cols="12"
          :md="hover ? 7 : hoverSecondPic ? 5 : 6"
        >
          <v-card 
            @click="loaded"
            :class="{ 'on-hover': hover }"
            tile
            elevation="0"
          >
            <v-img
              src="https://source.unsplash.com/user/erondu/1600x900"
              gradient="to bottom, rgba(255,255,255,.1), rgba(0,0,0,.6)"
              :style="imageSize"
              @load="img1Loaded = true"
              class="ma-0 pa-0 white--text text-center align-end"
              :class="{ 'align-end': hover }"
            >
              <template v-slot:placeholder>
                <v-sheet>
                  <v-skeleton-loader
                    height="3000"
                    type="image"
                  ></v-skeleton-loader>
                </v-sheet>
              </template>

              <v-card
                v-if="img1Loaded"
                class="black white--text title-card mx-auto smooth-resize"
                :width="hoverFirstPic ? '30%' : '27%'"
                :style="
                  hoverFirstPic && !breakpointIsMobile
                    ? 'margin-bottom: 50%; opacity: 0.8;'
                    : ''
                "
                :class="hoverFirstPic && !breakpointIsMobile ? '' : 'mb-12'"
              >
                <v-list-item-content>
                  <v-list-item-title class="font-weight-black text-h5"
                    >Villa</v-list-item-title
                  >
                  <v-list-item-subtitle>Cluella</v-list-item-subtitle>
                </v-list-item-content>
              </v-card>
            </v-img>
          </v-card>
        </v-col>
      </v-hover>

      <v-hover v-model="hoverSecondPic" v-slot="{ hover }">
        <v-col
          class="ma-0 pa-0 smooth-resize"
          cols="12"
          :md="hover ? 7 : hoverFirstPic ? 5 : 6"
        >
          <v-card
            @click="loaded"
            :class="{ 'on-hover': hover }"
            tile
            elevation="0"
          >
            <v-img
              src="https://source.unsplash.com/user/erondu/1600x800"
              gradient="to bottom, rgba(255,255,255,.1), rgba(0,0,0,.6)"
              :style="imageSize"
              @load="img2Loaded = true"
              class="ma-0 pa-0 text-center align-end"
            >
              <template v-slot:placeholder>
                <v-sheet>
                  <v-skeleton-loader
                    height="3000"
                    type="image"
                  ></v-skeleton-loader>
                </v-sheet>
              </template>

              <v-card
                v-if="img2Loaded"
                class="black white--text title-card mx-auto smooth-resize"
                :width="hoverSecondPic ? '30%' : '27%'"
                :style="
                  hoverSecondPic && !breakpointIsMobile
                    ? 'margin-bottom: 50%; opacity: 0.8;'
                    : ''
                "
                :class="hoverSecondPic && !breakpointIsMobile ? '' : 'mb-12'"
              >
                <v-list-item-content>
                  <v-list-item-title class="font-weight-black text-h5"
                    >Villa</v-list-item-title
                  >
                  <v-list-item-subtitle>Cluella</v-list-item-subtitle>
                </v-list-item-content>
              </v-card>
            </v-img>
          </v-card>
        </v-col>
      </v-hover>

      <v-card
        :style="`${barrePosition}`"
        :height="breakpointIsMobile ? barreSize : '100%'"
        :width="!breakpointIsMobile ? barreSize : '100%'"
        class="black barre smooth-resize pa-0 ma-0 d-flex justify-center align-center"
        flat
        tile
        elevation="5"
      >
        <v-avatar elevation="5" draggable color="black text-h5" size="50">
          <span class="font-weight-black  white--text">OR</span>
        </v-avatar>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      heightSize: "height: calc(100vh - 50px);",
      halfHeightSize: "height: calc(50vh - 8px);",
      positionNoHover: "left: calc(50% - 8px);",
      positionOnHoverFirst: "left: calc(50% - 8px + 8.35%);",
      positionOnHoverSecond: "left: calc(50% - 8px - 8.35%);",
      positionOnMobile: "top: calc(50% + 14px);",
      barreSize: "16px",
      breakpoint: this.$vuetify.breakpoint.name,
      hoverFirstPic: null,
      hoverSecondPic: null,
      img1Loaded: false,
      img2Loaded: false,
    };
  },
  computed: {
    imageSize() {
      return this.breakpointIsMobile ? this.halfHeightSize : this.heightSize;
    },
    barrePosition() {
      if (!this.breakpointIsMobile)
        return this.hoverFirstPic
          ? this.positionOnHoverFirst
          : this.hoverSecondPic
          ? this.positionOnHoverSecond
          : this.positionNoHover;
      else return this.positionOnMobile;
    },
    breakpointIsMobile() {
      return this.breakpoint === "sm" || this.breakpoint === "xs";
    },
    allIsLoaded() {
      return this.img2Loaded && this.img1Loaded;
    },
  },
  methods: {
    loaded() {
      console.log("Votre Choix Est Fait");
    },
  },
};
</script>

<style scoped>
v-card {
  opacity: 1;
}
.smooth-resize {
  transition: all 1s;
}
.barre {
  position: absolute;
  color: white;
  margin-left: 0;
  margin-right: 0;
}

.title-card {
  opacity: 0.5;
  backdrop-filter: blur(10px);
}
</style>
