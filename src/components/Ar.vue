<template>
  <div class="ar slide">
    <div class="containerLeft">
      <div class="projectContainer">
        <div class="titleContainer" ref="titleContainer">
          <router-link 
            :to="{ name:'/arexperience' }"
            class="titleContainer -title"
          >
              AR Experience
          </router-link>
          <div class="titleContainer -line">
            <span class="titleContainer -line-arrow">></span>
          </div>
        </div>
        <div class="descContainer">
          <p class="date">Projet personnel - 2018.2019</p>
          <p class="desc">Expérience sur réalité augmentée pour tester le framework web A-frame basé sur Three.js.</p>
          <div class="techno">
            <p><span class="glif">✎</span> JavaScript</p>
            <p><span class="glif">✎</span> Three.js </p>
            <p><span class="glif">✎</span> A-frame</p>
          </div>
        </div>
      </div>
      <div class="pagination">
        <span class="number">02</span>
        <div class="underline"/>
        <span class="number -last">08</span>
      </div>
    </div>
    <div class="containerRight" ref="containerRight">
      <div class="backgroundColor"></div>
      <div class="previousProject">
        <sphere></sphere>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Sphere from './Sphere'
import * as THREE from 'three'
import { TweenMax, Expo } from 'gsap'

export default {
  name: 'Ar',
  data() {
    return {}
  },
  components: {
    Sphere
  },
  //   beforeDestroy() {
  //   TweenMax.killAll()
  // },
  mounted() {
    // ---- EVENT FOR HOVER ANIMATION ----
    this.$refs.titleContainer.addEventListener('mouseenter', () => {
      const timeline = new TimelineMax()
      timeline
        .to('.-title', 0.3, {
          x: '2vw',
          sacle: 1.03,
          ease: Expo.easeInOut
        },"start")
        .to('.-line', 0.3, {
          x: '17vw',
          delay: 0.01,
          ease: Expo.easeInOut
        },"start")
        .to('.-line-arrow', 0.3, {
          opacity: 1,
          ease: Expo.easeInOut
        },"start")
        .to('.descContainer', 0.35, {
          x: '2vw',
          delay: 0.01,
          ease: Expo.easeInOut
        },"start")
        .to('.previousProject', 0, {
          x: '3vw',
          sacle: 1.03,
          overflow: 'initial',
          ease: Expo.easeInOut
        },"start")
    })

    this.$refs.titleContainer.addEventListener('mouseleave', () => {
      const timeline = new TimelineMax()
      timeline
        .to('.-title', 0.3, {
          x: 0,
          sacle: 1,
          ease: Expo.easeInOut
        },"start")
        .to('.-line', 0.3, {
          x: 0,
          delay: 0.01,
          ease: Expo.easeInOut
        },"start")
        .to('.-line-arrow', 0.3, {
          opacity: 0,
          ease: Expo.easeInOut
        },"start")
        .to('.descContainer', 0.35, {
          x: 0,
          delay: 0.01,
          ease: Expo.easeInOut
        },"start")
        .to('.previousProject', 0, {
          x: 0,
          sacle: 1,
          overflow: 'initial',
          ease: Expo.easeInOut
        },"start")
    })
  }
}
</script>
<style lang="scss" scoped>
@import "@/config.scss";
.ar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
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
    .projectContainer {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: absolute;
      top: 20vh;
      left: 8vw;
      overflow: hidden;
      align-items: flex-start;
      width: 100%;
      .titleContainer {
        width: 100%;
        margin-bottom: 35px;
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
        }
        &.-line {
          border-top: 1px solid $black;
          width: 38vw;
          margin-top: -20px;
          margin-bottom: 3vh;
          position: absolute;
          z-index: 1;
          &-arrow {
            position: absolute;
            top: -12px;
            right: -269px;
            opacity: 0;
          }
        }
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
      overflow: hidden;
      background-color: #6c3f93;
    }
    .sphere {
      right: 45.5vw;
      top: 5vh;
      position: absolute;
    }
    .previousProject {
      transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
      transition-duration: 0.46s;
      transition-delay: 0.2s;
      overflow: initial;
    }
  }
}
</style>
