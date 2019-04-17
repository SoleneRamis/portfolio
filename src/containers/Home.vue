<template>
  <div class="home">
    <div>
      <nav-bar></nav-bar>
      <slider></slider>
    </div>
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
    handlemousewheel(event) {
      let deltaScroll = event.wheelDelta || -event.detail;
      // var delta = event.wheelDelta ? event.wheelDelta/40 : event.detail ? -event.detail/3 : 0;
    
      if (!this.isDraggable) {
        this.isDraggable = true;
        if (deltaScroll < 0) {
          setTimeout( () => { this.isDraggable = false; }, 1000);
          this.nextSlide();
        }
        if (deltaScroll > 0) {
          setTimeout( () => { this.isDraggable = false; }, 1000);
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
      // this.sliderAnimation();
    },
    previousSlide() {
      this.previous();
        this.valueTranslate -= 120;
      if (this.valueTranslate == 0) {
        this.valueTranslate = this.valueMax;
      }
      // this.sliderAnimation();
    },
    // sliderAnimation() {
    //   var Timeline = new Timeline();
    //   Timeline.to(this.skew, 0.5, { skewY: 8, ease: Power3.easeOut });
    //   Timeline.to(this.skew, 0.5, { skewY: 0, ease: Power3.easeOut });
    //   TweenLite.to(this.listImg, 1, {
    //     y: "-" + this.valueTranslate + "%",
    //     ease: Expo.easeInOut
    //   });
    //   TweenLite.to(this.listText, 1, {
    //     y: "-" + this.valueTranslate + "vh",
    //     ease: Expo.easeInOut,
    //   });
    // }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    position: relative;
    scroll-behavior: smooth;
    overflow: hidden;
  }
</style>