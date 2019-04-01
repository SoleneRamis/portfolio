<template>
  <div class="slider">
      <div class="containerLeft">
        <div class="desc">
            <h1 class="title">{{TitleProject}}</h1>
            <div class="line"></div>
            <p class="date">{{DateProject}}</p>
            <p class="desc">{{DescProject}}</p>
            <div class="techno">
                <p v-for="TechnoProject in appData.slider[this.$store.state.current].src.techno">
                  {{TechnoProject}}
                </p>
            </div>
        </div>
      </div>
      <div class="containerRight" ref="containerRight">
          <div class="backgroundColor" :style="backgroundColorStyle"></div>
          <sphere></sphere>
      </div>
      <div class="counter -first">
        {{counter}} <div class="underline"></div>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Sphere from './Sphere'
import * as THREE from 'three';

export default {
  name: "slider",
  data() {
    return {};
  },
  components: {
    Sphere
  },
  computed: {
    ...mapState({
      appData: "appData"
    }),
    TitleProject() {
      return this.appData.slider[this.$store.state.current].src.title;
    },
    DateProject() {
      return this.appData.slider[this.$store.state.current].src.date;
    },
    DescProject() {
      return this.appData.slider[this.$store.state.current].src.desc;
    },
    TechnoProject() {
      return this.appData.slider[this.$store.state.current].src.techno;
    },
    backgroundColorStyle() {
      return {
        backgroundColor: this.appData.slider[this.$store.state.current].src.color
      };
    },
    imageProject() {
      return this.appData.slider[this.$store.state.current].src.img;
    },
    counter() {
      if(this.appData.slider[this.$store.state.current].src) {
        
      }
      return this.appData.slider[this.$store.state.current].src.count; //Object.values(this.appData.slider).map(slider => slider.coun.srct).join(' ');
    }
  },
}
</script>
<style lang="scss" scoped>
@import "@/config.scss";

.slider {
  width: 100%;
  height: 100%;
  display: inline-flex;
  .containerLeft {
    width: 60%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .desc {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: absolute;
      top: 336px;
      left: 230px;
      align-items: flex-start;
      .title {
        color: $black;
        font-family: "Inria Sans Bold";
        font-size: 80px;
        font-weight: bold;
        letter-spacing: -2.5px;
        line-height: 96px;
      }
      .line {
        border-top: 1px solid $black;
        width: 478px;
        margin-top: -24px;
        margin-bottom: 30px;
      }
      .date {
        color: $gray;
        font-family: "Helvetica Neue";
        font-size: 14px;
        font-weight: 500;
        line-height: 23px;
        font-style: italic;
      }
      .desc {
        color: $black;
        font-family: "Helvetica Neue";
        font-size: 18px;
        font-weight: 300;
        line-height: 24px;
        text-align: justify;
        position: initial;
        width: 322px;
      }
      .techno {
        display: flex;
        justify-content: space-around;
        p {
          margin-right: 10px;
          color: $gray;
          font-family: "Helvetica Neue";
          font-size: 14px;
          font-weight: 500;
          line-height: 23px;
        }
      }
    }
  }
  .containerRight {
    width: 40%;
    height: 100vh;
    .backgroundColor {
      height: 100%;
      width: 720px;
      position: relative;
      float: right;
    }
    .image {
      width: 740px;
      height: 880px;
      z-index: 1;
      right: 100px;
      top: 100px;
      position: absolute;
      object-fit: contain;
    }
  }

  .counter {
    position: absolute;
    bottom: 98.5px;
    left: 64px;
    font-family: "Inria Serif";
    &.-first {
      font-size: 54px;
    }
    &.-suite {
    }
    .underline {
      border-bottom: 1px solid black;
      width: 300%;
      position: absolute;
      bottom: 15px;
      left: 65px;
    }
  }
}
</style>