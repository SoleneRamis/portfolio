<template>
  <div class="project">
    <div class="containerLeft">
      <div class="projectContainer">
        <div class="titleContainer">
          <h2
            class="titleContainer -title"
            style="ColorStyle"
            >
              {{TitleProject}}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
import { TweenMax, Expo } from 'gsap'

export default {
  name: "project",
  data() {
    return {
      isAnimate: false,
      isHover: false,
      isClicked: false
    }
  },
  mounted() {
},

  beforeDestroy() {
    // TODO: Kill all timelines
  },


  methods: {},
  computed: {
    ...mapState({
      appData: "appData",
      current: "current"
    }),
    TitleProject() {
      return this.appData[this.$store.state.current].title
    },
    // BackgroundColorStyle() {
    //   return {
    //     backgroundColor: this.appData[this.$store.state.current].color
    //   }
    // },
    ColorStyle() {
      if (this.isClicked == true) {
        return {
          color: this.appData[this.$store.state.current].color
        }
      }
    },
    ImageProject() {
      return this.appData[this.$store.state.current].img
    },
  }
}
</script>
<style lang="scss" scoped>
@import "@/config.scss";

.project {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  // ---- LEFT PART ----
  .containerLeft {
    position: absolute;
    width: 60%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    // ---- PROJECT TITLE + LINE & HOVER ----
    .projectContainer {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: absolute;
      top: 20vh;
      left: 8vw;
      align-items: flex-start;
      // ---- TITLE + LINE  ----
      .titleContainer {
        width: 100%;
        &.-title {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          color: $black;
          font-family: "Inria Sans";
          font-size: 70px;
          font-weight: bold;
          letter-spacing: -2.5px;
          line-height: 96px;
          text-align: left;
          text-decoration: none;
          transform: scale(1);
          transition-duration: 0.3s;
          transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
          transition-duration: 0.15s;
        }
        &.-line {
          border-top: 1px solid $black;
          width: 38vw;
          margin-top: 0;
          margin-bottom: 3vh;
          transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
          transition-duration: 0.3s;
          transition-delay: 0.01s;
          &-arrow {
            position: absolute;
            top: -12px;
            right: -269px;
            opacity: 0;
          }
        }
        &.-title.isClicked {
          z-index: -2 !important;
          width: 110% !important;
          transform: scale(6) translateX(17vw) translateY(3vh) !important;
          transition-timing-function: cubic-bezier(0.95, 0, 0.1, 1) !important;
          transition-delay: 0.05s !important;
          transition-duration: 0.95s !important;
        }
        &.-line.isClicked {
          zoom: 1;
          opacity: 0;
          transition: opcaity 0.2s;
        }
        &.-line-arrow.isClicked {
          zoom: 1;
          opacity: 0;
          transition: opcaity 0.2s;
        }
      }
    }
  }
}
</style>