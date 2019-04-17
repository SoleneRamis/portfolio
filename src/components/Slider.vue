<template>
  <div class="slider">
    <!-- LEFT PART -->
    <div class="containerLeft">
      <!-- PROJECT TITLE & LINE -->
      <div class="projectContainer">
        <div class="titleContainer" ref="titleContainer">
          <h1 class="titleContainer -title">{{TitleProject}}</h1>
          <div class="titleContainer -line">
            <span class="titleContainer -line-arrow">></span>
          </div>
        </div>
        <!-- PROJECT DESCRIPTION -->
        <div class="descContainer" :class="{'hoverDesc': isHover}">
          <p class="date">{{DateProject}}</p>
          <p class="desc">{{DescProject}}</p>
          <div class="techno">
            <p v-for="(TechnoProject, index) in this.appData[this.$store.state.current].techno" :key="index">
              <span class="glif">✎</span> {{TechnoProject}}
            </p>
          </div>
        </div>
      </div>
      <!-- PAGINATION -->
      <div class="pagination">
        <span class="number">{{this.appData[this.$store.state.current].count}}</span>
        <div class="underline"/>
        <span class="number -last">{{this.appData.length}}</span>
      </div>
    </div>
    <!-- RIGHT PART -->
    <div class="containerRight" ref="containerRight">
      <div class="backgroundColor" :style="backgroundColorStyle"></div>
      <!-- PREVIOUS PROJECT -->
      <div class="previousProject" :class="{'hoverPreviousProject': isHover}">
        <!-- SPHERE FOR PROJECT AR XP -->
        <!-- <sphere></sphere> -->
        <!-- PROJECT PICTURE -->
        <img class="image" :src="imageProject"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Sphere from "./Sphere";
import * as THREE from "three";

export default {
  name: "slider",
  data() {
    return {
      isHover: false,
    };
  },
  components: {
    Sphere
  },
  mounted() {
    // ---- EVENT FOR HOVER ANIMATION ----
    this.$refs.titleContainer.addEventListener('mouseenter', () => {
      this.isHover = true
    });
    this.$refs.titleContainer.addEventListener('mouseleave', () => {
      this.isHover = false
    });
    
  },
  computed: {
    ...mapState({
      appData: "appData",
      current: "current",
    }),
    TitleProject() {
      return this.appData[this.$store.state.current].title;
    },
    DateProject() {
      return this.appData[this.$store.state.current].date;
    },
    DescProject() {
      return this.appData[this.$store.state.current].desc;
    },
    TechnoProject() {
      return this.appData[this.$store.state.current].techno;
    },
    backgroundColorStyle() {
      return {
        backgroundColor: this.appData[this.$store.state.current].color
      };
    },
    imageProject() {
      return this.appData[this.$store.state.current].img;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/config.scss";

.slider {
  width: 100%;
  height: 100%;
  display: inline-flex;
  overflow: hidden;
  overflow: hidden;
  // ---- LEFT PART ----
  .containerLeft {
    width: 60vw;
    height: 100vh;
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
          font-family: "Inria Sans Bold";
          font-size: 80px;
          font-weight: bold;
          letter-spacing: -2.5px;
          line-height: 96px;
          margin-left: -6vw;
          transition-duration: 0.3s;
          transition-timing-function: cubic-bezier(.25, 0.1, 0.25, 1);
          transition-duration: 0.15s;
        }
        &.-line {
          border-top: 1px solid $black;
          width: 38vw;
          margin-top: -5vh;
          margin-bottom: 3vh;
          transition-timing-function: cubic-bezier(.25, 0.1, 0.25, 1);
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
              transform: scale(1.03) translateX(2vw);
              transition-timing-function: cubic-bezier(.25, 0.1, 0.25, 1);
              transition-duration: 0.3s;
              transition-duration: 0.15s;
            }
            &.-line {
              transform: translateX(17vw);
              transition-timing-function: cubic-bezier(.25, 0.1, 0.25, 1);
              transition-duration: 0.3s;
              transition-delay: 0.01s;
              &-arrow {
                opacity: 1;
                transition: opacity 0.3s;
              }
            }
          }
        } 
      }
      // ---- PROJECT DESCRIPTION ----
      .descContainer {
        transition-timing-function: cubic-bezier(.25, 0.1, 0.25, 1);
        transition-duration: 0.35s;
        transition-delay: 0.1s;
      }
      // ---- EVENT HOVER ----
      .descContainer.hoverDesc {
        transform: translateX(2vw);
        transition-timing-function: cubic-bezier(.25, 0.1, 0.25, 1);
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
        margin-left: -11vw;
      }
      .desc {
        color: $black;
        font-family: "Helvetica Neue";
        font-size: 18px;
        font-weight: 300;
        line-height: 24px;
        text-align: justify;
        position: initial;
        width: 28vw;
      }
      .techno {
        display: flex;
        justify-content: space-around;
        margin-left: -1vw;
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
        bottom: 7vh;
        left: 4vw;
        display: flex;
        color: $black;
        font-size: 20px;
        &.-last {
          left: 13.5vw;
          &:before {
            content: '0'
          }
        }
      }
      .underline {
        border-bottom: 1px solid black;
        width: 7%;
        position: absolute;
        bottom: 7.9vh;
        left: 6vw;
      }
    }
  }
  // ---- RIGHT PART ----
  .containerRight {
    width: 40vw;
    height: 100vh;
    .backgroundColor {
      height: 100%;
      width: 40vw;
      position: relative;
      float: right;
    }
    .image {
      width: 740px;
      // z-index: 1;
      right: 100px;
      top: 100px;
      position: absolute;
      object-fit: contain;
    }
    // ---- PREVIOUS PROJECT ----
    .previousProject {
      transition-timing-function: cubic-bezier(.25, 0.1, 0.25, 1);
      transition-duration: 0.46s;
      transition-delay: 0.2s;
    }
    // ---- EVENT HOVER ----
    .previousProject.hoverPreviousProject {
      transform: translateX(1vw);
      transition-timing-function: cubic-bezier(.25, 0.1, 0.25, 1);
      transition-duration: 0.46s;
      transition-delay: 0.2s;
    }
  }
}
</style>