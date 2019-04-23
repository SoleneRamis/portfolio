<template>
  <div id="app">
    <transition name="fade" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import throttle from 'lodash.throttle';
import _ from 'underscore';
import MobileDetect from 'mobile-detect';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'app',
  data () {
    return {}
  },
  created () {
    this.creditsLog();
    this.resizer();
    this.mobileDetect();
  },
  mounted (){
  },
  methods:{
    ...mapActions(['setUpdateSizeState','setMobileState']),
    creditsLog() {
     /*eslint-disable */
     console.log('%c GITHUB: https://github.com/SoleneRamis', 'padding:5px 5px; font-size: 11px; color: #ff00d4');
     console.log('%c LINKEDIN: https://www.linkedin.com/in/soleneramis/', 'padding:5px 5px; font-size: 11px; color: #ff00d4 ');
     console.log('%c TWITTER: https://twitter.com/soleneramis', 'padding:5px 5px; font-size: 11px; color: #ff00d4');
     /*eslint-enable */
    },
    resizer () {
      var that = this;
      var throttled =  _.throttle(resized, 60, { 'trailing': false })
      var resize = window.addEventListener("resize", () => {
        throttled();
      });
       var resized = () => {
        that.setUpdateSizeState(true);
      }
    },
    mobileDetect () {
       var userAgent = window.navigator.userAgent
       var md = new MobileDetect(userAgent);
       if(md.mobile() != null){
         this.setMobileState(md);
       }
    }
  }
}
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>