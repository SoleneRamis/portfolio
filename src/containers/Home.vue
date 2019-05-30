<template>
  <div class="home">
    <transition name="fade" mode="out-in" appear>
      <div>
        <nav-bar></nav-bar>
        <div class="slider">
          <ar></ar>
          <louvre></louvre>
          <worakls></worakls>
          <soundlines></soundlines>
          <dataviz></dataviz>
          <chatroom></chatroom>
          <laboscope></laboscope>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import NavBar from "../components/NavBar"
import Ar from "../components/Ar"
import Louvre from "../components/Louvre"
import Worakls from "../components/Worakls"
import Soundlines from "../components/Soundlines"
import Dataviz from "../components/Dataviz"
import Chatroom from "../components/Chatroom"
import Laboscope from "../components/Laboscope"
import { mapState, mapMutations, mapGetters } from "vuex"
import { TweenMax, Expo } from "gsap"

export default {
  name: "Home",
  components: {
    NavBar,
    Ar,
    Louvre,
    Worakls,
    Soundlines,
    Dataviz,
    Chatroom,
    Laboscope
  },
  data() {
    return {
      isClicked: false,
      isSlided: false,
      isWheeling: true,
      directionSlide: null,
      currentIndex: 0,
      nextIndex: 1,
      previousIndex: null
    }
  },
  mounted() {
    // ---- EVENT FOR SCROLL : CHROME / FIREFOX ----
    window.addEventListener("wheel", this.handlewheel)
    window.addEventListener("DOMMouseScroll", this.handlewheel)

    this.previousIndex = document.querySelectorAll(".slide").length - 1
  },
  // beforeDestroy() {
  //   TweenMax.killAll()
  // },
  watch: {
    isWheeling: function() {
      if (!this.isWheeling)
        if (this.directionSlide == 1) {
          this.animationNext()
           TweenMax.killChildTweensOf()
        } else {
          this.animationPrev()
           TweenMax.killChildTweensOf()
        }
    }
  },
  methods: {
    ...mapMutations({
      next: "next",
      previous: "previous"
    }),
    Clicked(newValue) {
      this.isClicked = newValue
    },
    handlewheel(e) {
      this.isWheeling = false
      if (e.deltaY > 0) {
        this.directionSlide = 1
      } else {
        this.directionSlide = -1
      }
    },
    changeIndexSlides(direction) {
      this.currentIndex += direction * 1
      this.currentIndex = this.controlLimitsSlides(this.currentIndex)

      this.nextIndex += direction * 1
      this.nextIndex = this.controlLimitsSlides(this.nextIndex)

      this.previousIndex += direction * 1
      this.previousIndex = this.controlLimitsSlides(this.previousIndex)
    },
    controlLimitsSlides(index) {
      let numberSlides = document.querySelectorAll(".slide").length - 1
      if (index < 0) {
        return numberSlides
      } else if (index > numberSlides) {
        return 0
      } else {
        return index
      }
    },
    animationNext() {
      const slides = document.getElementsByClassName("slide")
      const currentSlide = slides[this.currentIndex]
      const nextSlide = slides[this.nextIndex]

      const size = document.querySelector(".projectContainer").clientHeight

      const currentTitle = currentSlide.querySelector(".titleContainer")
      const currentDesc = currentSlide.querySelector(".descContainer")
      const currentImg = currentSlide.querySelector(".image")
      const currentCanvas = currentSlide.querySelector("canvas")
      const currentPagination = currentSlide.querySelector(".number")
      const currentBackground = currentSlide.querySelector(".backgroundColor")

      const nextTitle = nextSlide.querySelector(".titleContainer")
      const nextDesc = nextSlide.querySelector(".descContainer")
      const nextImg = nextSlide.querySelector(".image")
      const nextCanvas = nextSlide.querySelector("canvas")
      const nextBackground = nextSlide.querySelector(".backgroundColor")
      const nextPagination = nextSlide.querySelector(".number")

      const timeline = new TimelineMax({
        onComplete: () => {
          this.isWheeling = true
          this.changeIndexSlides(this.directionSlide)
        }
      })
      timeline
        // current slide
        .to(currentTitle, 1, {
          y: -size
        },"start")
        .to(currentDesc,1, {
          y: -size * 1.5
        },"start")
        .to(currentBackground, 1, {
          y: -size * 2.48,
          delay: 0.6
        },"start")
        .to(currentPagination, 0, {
          visibility: 'hidden'
        },"start")

        // next slide
        .to(nextSlide, 0, {
          autoAlpha: 1,
          position: "absolute",
          zIndex: -2
        },"start")
        .to(nextTitle, 0, {
          y: size * 1.2,
          position: "absolute",
          zIndex: -2
        },"start")
        .to(nextDesc, 0, {
          y: size,
          position: "absolute",
          zIndex: -2
        },"start")
        .to(nextBackground, 0, {
          y: size * 2.48,
        },"start")
        //
        .to(nextTitle, 1, {
          y: 0,
          position: "initial",
          zIndex: 1,
          delay: 0.6
        },"start")
        .to(nextDesc, 1, {
          y: 0,
          position: "initial",
          zIndex: 1,
          delay: 0.6
        },"start")
        .to(nextBackground, 1, {
          y: 0,
          delay: 0.5
        },"start")
        .to(nextPagination, 1, {
          visibility: 'visible'
        },"start")

      // current canvas / img
      if (currentCanvas) {
        timeline
        .to(currentCanvas, 1, {
          y: -size * 2.18
        },"start")
      } else {
        timeline
        .to( currentImg, 1, {
          y: -size * 2.35
        },"start")
      }

      // next canvas / img
      if (nextCanvas) {
        timeline
          .to(nextCanvas, 0, {
            y: size * 2.2
          },"start")
          .to(nextCanvas, 1, {
            y: 0,
            delay: 0.8
          },"start")
      } else {
        timeline
          .to(nextImg, 0, {
            y: size * 2.2
          },"start")
          .to(nextImg, 1, {
            y: 0,
            delay: 0.7
          },"start")
      }
    },
    animationPrev() {
      const slides = document.getElementsByClassName("slide")
      const currentSlide = slides[this.currentIndex]
      const previousSlide = slides[this.previousIndex]

      const size = document.querySelector(".projectContainer").clientHeight

      const currentTitle = currentSlide.querySelector(".titleContainer")
      const currentDesc = currentSlide.querySelector(".descContainer")
      const currentImg = currentSlide.querySelector(".image")
      const currentCanvas = currentSlide.querySelector("canvas")
      const currentPagination = currentSlide.querySelector(".number")
      const currentBackground = currentSlide.querySelector(".backgroundColor")

      const prevTitle = previousSlide.querySelector(".titleContainer")
      const prevDesc = previousSlide.querySelector(".descContainer")
      const prevImg = previousSlide.querySelector(".image")
      const prevCanvas = previousSlide.querySelector("canvas")
      const prevBackground = previousSlide.querySelector(".backgroundColor")
      const prevPagination = previousSlide.querySelector(".number")

      const timeline = new TimelineMax({
        onComplete: () => {
          this.isWheeling = true
          this.changeIndexSlides(this.directionSlide)
        }
      })
      timeline
        // current slide
        .to(currentTitle, 1, {
          y: size * 2
         }, "start")
        .to(currentDesc, 1, {
          y: size * 2
        },"start")
        .to(currentBackground, 1, {
          y: size * 2.48,
          delay: 0.6
        }, "start" )
        .to(currentPagination, 0,{
          autoAlpha: 0
        },"start")

        // prev slide
        .to(previousSlide, 0, {
          autoAlpha: 1,
          position: "absolute",
          zIndex: -2
        },"start")
        .to(prevTitle, 0, {
          y: -size * 1.2,
          position: "absolute",
          zIndex: -2
        },"start")
        .to(prevDesc, 0, {
          y: -size,
          position: "absolute",
          zIndex: -2
        },"start")
        .to(prevBackground, 0, {
          y: -size * 2.48
        },"start")
        //
        .to(prevTitle, 1, {
          y: 0,
          position: "initial",
          zIndex: 1,
          delay: 1
        },"start")
        .to(prevDesc, 1, {
          y: 0,
          position: "initial",
          zIndex: 1,
          delay: 1
        },"start")
        .to(prevBackground, 1, {
          y: 0
        },"start")
        .to(prevPagination, 1, {
          autoAlpha: 1
        },"start")

      // current canvas / img
      if (currentCanvas) {
        timeline
          .to(currentCanvas, 1, {
            y: size * 2.2,
            delay: 0.3
          },"start")
      } else {
        timeline
          .to(currentImg, 1, {
            y: size * 2.2,
            delay: 0.3
          },"start" )
      }

      // prev canvas / img
      if (prevCanvas) {
        timeline
          .to(prevCanvas, 0, {
            y: -size * 2.4
          },"start")
          .to(prevCanvas, 1, {
            y: 0,
            delay: 0.8
          },"start")
      } else {
        timeline
          .to(prevImg, 0, {
            y: -size * 2.4
          },"start")
          .to(prevImg, 1, {
            y: 0,
            delay:  0.7
          },"start")
      }
    }
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
  .slide:not(:first-child) {
    visibility: hidden;
  }
}
</style>