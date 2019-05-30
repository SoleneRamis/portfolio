// <template>
//   <div class="right-part" ref="containerRight">
//     <div id="backgroundCurrent">
//       <div class="backgroundColor" :class="{'isClicked': isClicked}" :style="backgroundStyle"></div>
//     </div>
//     <div id="backgroundOther">
//       <div class="backgroundColorOther" :style="backgroundStyleOther"></div>
//     </div>
//     <!-- PREVIOUS PROJECT -->
//     <div class="previousProject" :class="{'hoverPreviousProject': isHover}">
//       <!-- SPHERE FOR PROJECT AR XP -->
//       <sphere v-if="title == 'AR Experience'" :class="{'isClicked': isClicked}"></sphere>
//       <!-- PROJECT PICTURE -->
//       <div id="image">
//         <img v-if="title != 'AR Experience'" class="image" :class="{'isClicked': isClicked}" :src="image"/>
//       </div>
//     </div>
//   </div>
// </template>

// <script>
// import Sphere from "./Sphere"
// import * as THREE from "three"

// export default {
//   name: "right-part",
//   props: {
//     isHover: {
//       type: Boolean,
//       required: true
//     },
//     isClicked: {
//       type: Boolean,
//       required: true
//     },
//     title: {
//       type: String,
//       required: false
//     },
//     image: {
//       type: String,
//       required: false
//     },
//     backgroundStyle: {
//       required: false
//     },
//     backgroundStyleOther: {
//       required: false
//     }
//   },
//   data() {
//     return {}
//   },
//   components: {
//     Sphere
//   },
// }
// </script>
// <style lang="scss" scoped>
// @import "@/config.scss";

// .right-part {
//     position: absolute;
//     width: 40%;
//     height: 100%;
//     margin: 0px 0px 0px 60%;
//     padding: 0px;
//     #backgroundCurrent {
//       height: 100%;
//       width: 40vw;
//       position: absolute;
//       float: right;
//       overflow: hidden;
//     }
//     #backgroundOther {
//       height: 100%;
//       width: 40vw;
//       position: absolute;
//       // transform: translateY(900px);
//       overflow: hidden;
//     }
//     .backgroundColor {
//       height: 100%;
//       width: 40vw;
//       position: relative;
//       float: right;
//     }
//     .backgroundColorOther {
//       height: 100%;
//       width: 40vw;
//       z-index: -1;
//       position: relative;
//       float: right;
//     }
//     .sphere {
//       right: 45.5vw;
//       top: 5vh;
//       position: absolute;
//     }
//     #image {
//       overflow-y: hidden;
//       position: absolute;
//       width: 109%;
//       height: 640px;
//       left: -52px;
//       top: 53px;
//     }
//     .image {
//       width: 500px;
//       height: 626px;
//       right: 11vw;
//       position: absolute;
//       object-fit: contain;
//     }
//     // ---- PREVIOUS PROJECT ----
//     .previousProject {
//       transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
//       transition-duration: 0.46s;
//       transition-delay: 0.2s;
//       height: 94%;
//     }
//     // ---- EVENT HOVER ----
//     .previousProject.hoverPreviousProject {
//       transform: scale(1.03) translateX(2vw);
//       transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
//       transition-duration: 0.46s;
//       transition-delay: 0.2s;
//       overflow: initial;
//     }
  
//   .backgroundColor.isClicked {
//     width: 0%;
//     transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
//     transition: all 1s;
//   }
// }
// </style>