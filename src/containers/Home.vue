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
export default {
  name: 'home',
  components: {
    NavBar,
    Slider,
  },
  data () {
    return {
    }
  },
  mounted: function () {
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: hidden;
  }
</style>