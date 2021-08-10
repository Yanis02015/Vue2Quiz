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
            @click="goNext(1)"
            :disabled="disabledPic"
            :class="{ 'on-hover': hover }"
            tile
            elevation="0"
          >
            <v-img
              :src="itemFirst.url"
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
                draggable
                v-if="img1Loaded && !disabledPic"
                class="black white--text title-card mx-auto smooth-resize"
                :width="hoverFirstPic ? '30%' : '27%'"
                :style="
                  hoverFirstPic && !breakpointIsMobile
                    ? 'margin-bottom: 50%; opacity: 0.8;'
                    : ''
                "
                :class="hoverFirstPic && !breakpointIsMobile ? '' : 'mb-12'"
              >
                <v-list-item-content class="px-3">
                  <v-list-item-title
                    class="font-weight-black text-h5 text-center"
                    >{{ itemFirst.title }}</v-list-item-title
                  >
                  <v-list-item-subtitle>{{
                    itemFirst.subtitle
                  }}</v-list-item-subtitle>
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
            @click="goNext(2)"
            :disabled="disabledPic"
            :class="{ 'on-hover': hover }"
            tile
            elevation="0"
          >
            <v-img
              :src="itemSecond.url"
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
                draggable
                v-if="img2Loaded && !disabledPic"
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
                  <v-list-item-title class="font-weight-black text-h5">{{
                    itemSecond.title
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    itemSecond.subtitle
                  }}</v-list-item-subtitle>
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
        <v-avatar
          class="d-flex flex-column align-center"
          elevation="5"
          draggable
          color="black text-h5"
          size="50"
        >
          <span class="font-weight-black  white--text">OR</span>
          <v-card
            class="red"
            style="margin-top: -4px;"
            height="3"
            width="25"
          ></v-card>
        </v-avatar>
      </v-card>
    </v-row>

    <!-- Result -->
    <v-dialog
      v-model="dialogResult"
      transition="dialog-bottom-transition"
      scrollable
      persistent
      max-width="600"
      max-height="300"
    >
      <template>
        <v-card max-height="500">
          <v-toolbar class="font-weight-black" color="black" dark>
            <v-toolbar-items>
              <v-img width="70" contain src="/images/vquiz-name-dark.png" />
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-subheader>The result of the VQuiz :</v-subheader>
            <v-card-text>
              <div class="text-h6 font-weight-black black--text">
                Your personality :
              </div>
              <v-card-text
                ><span class="font-weight-black black--text"
                  >{{ yourPrsonality.name }},&nbsp;</span
                >{{ yourPrsonality.description }}</v-card-text
              >
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text>
              <div class="text-h6 font-weight-black black--text">
                Tips and tricks :
              </div>
              <v-card-text>{{ yourPrsonality.horoscope }}</v-card-text>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text>
              <div class="text-h6 font-weight-black black--text">
                How are you in :
              </div>
              <v-card-text>
                <v-list>
                  <v-list-item
                    v-for="personnage in yourPrsonality.personnages"
                    :key="personnage.name"
                  >
                    <v-list-item-avatar class="hidden-sm-and-down">
                      <v-icon color="red">
                        mdi-star
                      </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title>{{ personnage.name }}</v-list-item-title>
                    <v-list-item-subtitle class="hidden-sm-and-down">{{
                      personnage.actor
                    }}</v-list-item-subtitle>
                    <v-list-item-action>
                      <v-btn
                        :href="
                          `https://www.google.com/search?q=${personnage.name +
                            ' ' +
                            personnage.actor}`
                        "
                        target="_blank"
                        text
                      >
                        <v-icon>mdi-open-in-new</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text>
              <div class="text-h6 font-weight-black black--text">
                Your favorite wallpapr :
              </div>
              <v-card>
                <v-img
                  lazy-src="https://source.unsplash.com/random"
                  src="https://source.unsplash.com/random"
                  max-height="50%"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-card-text>
          </v-card-text>
          <v-card-actions class="justify-end">
            <router-link class="font-weight-black white--text" to="/">
              <v-btn class="red--text" text plain @click="dialogResult = false"
                >Game Over</v-btn
              >
            </router-link>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

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
      img1Idex: 0,
      img2Idex: 1,
      disabledPic: false,
      dialogResult: false,
      loremIpsum:
        "Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat. Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc.",
    };
  },
  computed: {
    ...mapGetters(["yourPrsonality"]),
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
    ...mapState(["resource"]),
    itemFirst() {
      return this.resource[this.img1Idex];
    },
    itemSecond() {
      return this.resource[this.img2Idex];
    },
  },
  methods: {
    goNext(choice) {
      this.disabledPic = true;
      let item;
      choice === 1 ? (item = this.itemFirst) : (item = this.itemSecond);
      this.nextPic();
      this.newChoice(item.cost);
      this.disabledPic = false;
    },
    nextPic() {
      if (this.img2Idex + 2 > this.resource.length) {
        this.dialogResult = true;
      } else {
        this.img1Idex += 2;
        this.img2Idex += 2;
      }
    },
    ...mapActions(["newChoice", "resetSelected"]),
  },
  destroyed() {
    this.img1Idex = 0;
    this.img2Idex = 1;
    this.resetSelected();
    console.log("destroyed");
  },
};
</script>

<style scoped>
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
