<template>
  <div class="navbar">
    <router-link to="/" class="name">Solène Ramis</router-link>
    <router-link to="/about">Info</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/config.scss";

 .navbar {
   position: absolute;
   display: flex;
   justify-content: flex-start;
   margin-top: 50px;
   margin-left: 15px;
  a {
     color: $black;
     text-decoration: none;
     margin-left: 50px;
     color: #000000;
     font-family: "Inria Serif";
     font-size: 14px;
     line-height: 14px;
     &.name {
        font-family: "Inria Serif Bold";
       	font-size: 20px;
        font-weight: bold;
        line-height: 20px;
        margin-top: -4px;
     }
   }
 }
</style>
