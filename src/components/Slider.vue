<template>
  <div class="slider">
    <!-- LEFT PART -->
    <div class="containerLeft">
      <!-- PROJECT TITLE & LINE -->
      <div class="projectContainer">
        <div class="titleContainer" ref="titleContainer">
          <h1 class="titleContainer -title" :class="{'isClicked': isClicked}" :style="colorStyle">{{TitleProject}}</h1>
          <div class="titleContainer -line" :class="{'isClicked': isClicked}">
            <span class="titleContainer -line-arrow" :class="{'isClicked': isClicked}">></span>
          </div>
        </div>
        <!-- PROJECT DESCRIPTION -->
        <div class="descContainer" :class="{'hoverDesc': isHover, 'isClicked': isClicked}">
          <p class="date" :class="{'isClicked': isClicked}">{{DateProject}}</p>
          <p class="desc" :class="{'isClicked': isClicked}">{{DescProject}}</p>
          <div class="techno" :class="{'isClicked': isClicked}">
            <p v-for="(TechnoProject, index) in this.appData[this.$store.state.current].techno" :key="index">
              <span class="glif">✎</span> {{TechnoProject}}
            </p>
          </div>
        </div>
      </div>
      <!-- PAGINATION -->
      <div class="pagination" :class="{'isClicked': isClicked}">
        <span class="number">{{this.appData[this.$store.state.current].count}}</span>
        <div class="underline"/>
        <span class="number -last">{{this.appData.length}}</span>
      </div>
    </div>
    <!-- RIGHT PART -->
    <div class="containerRight" ref="containerRight">
      <div class="backgroundColor" :class="{'isClicked': isClicked}" :style="backgroundColorStyle"></div>
      <!-- PREVIOUS PROJECT -->
      <div class="previousProject" :class="{'hoverPreviousProject': isHover}">
        <!-- SPHERE FOR PROJECT AR XP -->
        <sphere v-if="this.appData[this.$store.state.current].title == 'AR Experience'" :class="{'isClicked': isClicked}"></sphere>
        <!-- PROJECT PICTURE -->
        <img v-if="this.appData[this.$store.state.current].title != 'AR Experience'" class="image" :class="{'isClicked': isClicked}" :src="imageProject"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
import Sphere from "./Sphere"
import * as THREE from "three"

export default {
  name: "slider",
  data() {
    return {
      isHover: false,
      isVisible: false,
      isClicked: false,
    }
  },
  components: {
    Sphere
  },
  mounted() {
    // ---- EVENT FOR HOVER ANIMATION ----
    this.$refs.titleContainer.addEventListener("mouseenter", () => {
      if (this.isClicked == false) {
        return this.isHover = true
      }
    })
    this.$refs.titleContainer.addEventListener("mouseleave", () => {
      this.isHover = false
    })
    // ---- EVENT FOR CLICK ANIMATION ----
    this.$refs.titleContainer.addEventListener("click", () => {
      this.isHover = false
      this.isClicked = true
      this.Clicked()
    })
  },
  methods: {
    Clicked() {
      this.$emit('Clicked', this.isClicked);
    }
  },
  computed: {
    ...mapState({
      appData: "appData",
      current: "current"
    }),
    TitleProject() {
      return this.appData[this.$store.state.current].title
    },
    DateProject() {
      return this.appData[this.$store.state.current].date
    },
    DescProject() {
      return this.appData[this.$store.state.current].desc
    },
    TechnoProject() {
      return this.appData[this.$store.state.current].techno
    },
    backgroundColorStyle() {
      return {
        backgroundColor: this.appData[this.$store.state.current].color
      }
    },
    colorStyle() {
      if(this.isClicked == true) {
        return {
          color: this.appData[this.$store.state.current].color
        }
      }
    },
    imageProject() {
      return this.appData[this.$store.state.current].img
    },
    sphereVisible() {
      if (this.appData[this.$store.state.current] == 0) {
        return (this.isVisible = true)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/config.scss";

.slider {
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
        &.-title {
          color: $black;
          font-family: "Inria Sans";
          font-size: 70px;
          font-weight: bold;
          letter-spacing: -2.5px;
          line-height: 96px;
          margin-left: -6px;
          text-align: left;
          transform: scale(1);
          transition-duration: 0.3s;
          transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
          transition-duration: 0.15s;
        }
        &.-line {
          border-top: 1px solid $black;
          width: 38vw;
          margin-top: -5vh;
          margin-bottom: 3vh;
          transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
          transition-duration: 0.3s;
          transition-delay: 0.01s;
          &-arrow {
            position: absolute;
            top: -12px;
            right: -3px;
            opacity: 0;
          }
        }
        // ---- HOVER ----
        &:hover {
          .titleContainer {
            &.-title {
              z-index: -4 !important;
              transform: scale(1.03) translateX(2vw);
              transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
              transition-duration: 0.3s;
              transition-duration: 0.15s;
            }
            &.-line {
              transform: translateX(17vw);
              transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
              transition-duration: 0.3s;
              transition-delay: 0.01s;
              // z-index: 6 !important;
              &-arrow {
                opacity: 1;
                transition: opacity 0.3s;
                // z-index: 6 !important;
              }
            }
          }
        }
      }
      // ---- PROJECT DESCRIPTION ----
      .descContainer {
        transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        transition-duration: 0.35s;
        transition-delay: 0.1s;
      }
      // ---- EVENT HOVER ----
      .descContainer.hoverDesc {
        transform: translateX(2vw);
        transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        transition-duration: 0.35s;
        transition-delay: 0.1s;
      }
      .date {
        color: $gray;
        font-family: "Helvetica Neue";
        font-size: 14px;
        font-weight: 500;
        line-height: 23px;
        font-style: italic;
        text-align: left;
      }
      .desc {
        color: $black;
        font-family: "Helvetica Neue";
        font-size: 18px;
        font-weight: 300;
        line-height: 24px;
        text-align: justify;
        position: initial;
        text-align: left;
        width: 28vw;
      }
      .techno {
        display: flex;
        justify-content: flex-start;
        text-align: left;
        p {
          margin-right: 10px;
          color: $gray;
          font-family: "Helvetica Neue";
          font-size: 14px;
          font-weight: 500;
          line-height: 23px;
          .glif {
            font-size: 20px;
          }
        }
      }
    }
    // ---- PAGINATION ----
    .pagination {
      font-family: "Inria Serif";
      .number {
        position: absolute;
        bottom: 20vh;
        left: 4vw;
        display: flex;
        color: $black;
        font-size: 20px;
        &.-last {
          left: 4vw;
          bottom: 7vh;
          &:before {
            content: "0";
          }
        }
      }
      .underline {
        border-bottom: 1px solid black;
        width: 7%;
        position: absolute;
        bottom: 14.9vh;
        left: 2.7vw;
        transform: rotate(90deg);
      }
    }
  }
  // ---- RIGHT PART ----
  .containerRight {
    position: absolute;
    width: 40%;
    height: 100%;
    margin: 0px 0px 0px 60%;
    padding: 0px;
    .backgroundColor {
      height: 100%;
      width: 40vw;
      position: relative;
      float: right;
    }
    .sphere {
      right: 45.5vw;
      top: 5vh;
      position: absolute;
    }
    .image {
      width: 536px;
      height: 638px;
      right: 11vw;
      top: 5vh;
      position: absolute;
      object-fit: contain;
    }
    // ---- PREVIOUS PROJECT ----
    .previousProject {
      transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
      transition-duration: 0.46s;
      transition-delay: 0.2s;
    }
    // ---- EVENT HOVER ----
    .previousProject.hoverPreviousProject {
      transform: scale(1.03) translateX(2vw);
      transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
      transition-duration: 0.46s;
      transition-delay: 0.2s;
    }
  }

  .titleContainer {
    &.-title.isClicked {
      z-index: -1 !important;
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
  .date.isClicked,
  .desc.isClicked,
  .techno.isClicked {
    zoom: 1;
    opacity: 0;
    transform: translateX(10vw);
    transition: all 0.5s;
  }
  .pagination.isClicked {
    visibility: hidden;
  }
  .pagination.isClicked {
    visibility: hidden;
  }
  .backgroundColor.isClicked {
    width: 0%;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    transition: all 1s;
  }
  .sphere.isClicked {
    z-index: 1 !important;
    height: 100% !important;
    top: 0 !important;
    transform: translateX(-32vw) !important;
    transition-timing-function: cubic-bezier(0.95, 0, 0.1, 1) !important;
    transition-delay: 0.2s !important;
    transition-duration: 1.10s !important;
    canvas.isClicked {
      height: 100% !important;
    } 
  } 

  .image.isClicked {
    z-index: 1 !important;
    height: 100% !important;
    top: 0 !important;
    transform: translateX(-32vw) !important;
    transition-timing-function: cubic-bezier(0.95, 0, 0.1, 1) !important;
    transition-delay: 0.2s !important;
    transition-duration: 1.10s !important;
  } 
}
</style>