<template>
  <div class="home">
    <transition name="fade" mode="out-in" appear>
      <div>
        <nav-bar></nav-bar>
        <slider v-on:Clicked="Clicked($event)"></slider>
      </div>
    </transition>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Slider from '../components/Slider'
import TweenLite from "gsap/TweenLite";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: 'home',
  components: {
    NavBar,
    Slider,
  },
  data () {
    return {
      valueTranslate: 0,
      isDraggable: false,
      isClicked: false,
    }
  },
  mounted() {    
    // ---- EVENT FOR SCROLL : CHROME / FIREFOX ----
    window.addEventListener("mousewheel", this.handlemousewheel);
    window.addEventListener("DOMMouseScroll", this.handlemousewheel);
  },
  methods: {
    ...mapMutations({
      next: "next",
      previous: "previous"
    }),
    Clicked (newValue) {
      this.isClicked = newValue;
      console.log(newValue)
    },
    handlemousewheel(event) {
      let deltaScroll = event.wheelDelta || -event.detail;
      if (!this.isDraggable) {
        this.isDraggable = true;
        if (deltaScroll < 0 && this.isClicked == false) {
          setTimeout( () => { this.isDraggable = false; }, 800);
          this.nextSlide();
        }
        if (deltaScroll > 0 && this.isClicked == false) {
          setTimeout( () => { this.isDraggable = false; }, 800);
          this.previousSlide();
        }
      }
    },
    nextSlide() {
      this.next();
      this.valueTranslate += 120;
      if (this.valueTranslate == this.valueMax) {
        this.valueTranslate = 0;
      }
    },
    previousSlide() {
      this.previous();
        this.valueTranslate -= 120;
      if (this.valueTranslate == 0) {
        this.valueTranslate = this.valueMax;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    position: relative;
    scroll-behavior: smooth;
    overflow-y: hidden;
  }
</style>