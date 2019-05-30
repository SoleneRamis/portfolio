// <template>
//   <div class="slider">
//     <div class="containerLeft">
//       <div class="projectContainer">
//         <div class="titleContainer" ref="titleContainer">
//           <h2 class="titleContainer -title" :class="{'isClicked': isClicked}" @click="Connect">
//             {{TitleProject}}
//           </h2>
//           <div class="titleContainer -line" :class="{'isClicked': isClicked}">
//             <span class="titleContainer -line-arrow" :class="{'isClicked': isClicked}">></span>
//           </div>
//         </div>
//         <description :isClicked="isClicked" :isHover="isHover" :date="DateProject" :desc="DescProject" :techno="TechnoProject"></description>
//       </div>
//       <pagination :counter="Counter" :isClicked="isClicked" :length="Length"></pagination>
//     </div>
//     <right-part :title="TitleProject" :image="ImageProject" :backgroundStyle="BackgroundColorStyleCurrent" :backgroundStyleOther="BackgroundColorStyleOther" :isHover="isHover" :isClicked="isClicked"></right-part>
//   </div>
// </template>

// <script>
//   import {
//     mapState,
//     mapMutations
//   } from "vuex"
//   import RightPart from "./RightPart"
//   import Pagination from "./Pagination"
//   import Description from "./Description"
//   import {
//     TweenMax,
//     Expo
//   } from "gsap"
  
//   export default {
//     name: "slider",
//     data() {
//       return {
//         isAnimate: false,
//         isHover: false,
//         isClicked: false
//       }
//     },
//     components: {
//       RightPart,
//       Pagination,
//       Description
//     },
//     mounted() {
//       // ---- EVENT FOR HOVER ANIMATION ----
//       this.$refs.titleContainer.addEventListener("mouseenter", () => {
//         if (this.isClicked == false) {
//           return (this.isHover = true)
//         }
//       })
//       this.$refs.titleContainer.addEventListener("mouseleave", () => {
//         this.isHover = false
//       })
//       // ---- EVENT FOR CLICK ANIMATION ----
//       this.$refs.titleContainer.addEventListener("click", this.Connect)
//     },
  
//     beforeDestroy() {
//       TweenMax.killAll(true, true, true, true)
//     },
  
//     methods: {
//       Clicked() {
//         this.$emit("Clicked", this.isClicked)
//       },
//       Connect(e) {
//         e.preventDefault()
//         this.isClicked = true
//         this.isHover = false
//         if (this.isClicked) {
//           const timeline = new TimelineMax({
//             onComplete: () => {
//               // this.Clicked()
//               // this.isAnimate = true
//               // this.$router.push({
//               //   name: "/project",
//               //   params: { name: this.appData[this.$store.state.current].url }
//               // })
//             }
//           })
//           timeline
//             .to(".titleContainer", 0.5, {
//               color: this.appData[this.$store.state.current].color,
//             }, "start")
//             .to(".titleContainer", 1, {
//               scale: 3,
//               x: 300,
//               zIndex: '-3 !important',
//               delay: 0.3
//             }, "start")
//             .to("#canvas", 1, {
//               scale: 1.5,
//               x: -350,
//               zIndex: 2,
//               ease: Expo.easeOut
//             }, "start+=1")
//             .to("#image", 1, {
//               scale: 1.5,
//               x: -350,
//               zIndex: 2,
//               ease: Expo.easeOut
//             }, "start+=1")
//         }
//       }
//     },
//     computed: {
//       ...mapState({
//         appData: "appData",
//         current: "current"
//       }),
//       ...mapMutations({
//         next: "next",
//         previous: "previous"
//       }),
//       TitleProject() {
//         return this.appData[this.$store.state.current].title
//       },
//       DateProject() {
//         return this.appData[this.$store.state.current].date
//       },
//       DescProject() {
//         return this.appData[this.$store.state.current].desc
//       },
//       TechnoProject() {
//         return this.appData[this.$store.state.current].techno
//       },
//       BackgroundColorStyleCurrent() {
//         return {
//           backgroundColor: this.appData[this.$store.state.current].color
//         }
//       },
//       BackgroundColorStyleOther() {
//         const colorNext = this.appData[this.$store.state.current] + 1
//         // const colorPrev = this.appData[this.$store.state.current] - 1
//         return {
//           backgroundColor: colorNext.color
//         }
//         // if (this.next()) {
//         //   console.log('next')
//         // }
//         // if (this.previous()) {
//         //   return {
//         //     backgroundColor: colorPrev.color
//         //   }
//         // }
//       },
//       ColorStyle() {
//         if (this.isClicked == true) {
//           return {
//             color: this.appData[this.$store.state.current].color
//           }
//         }
//       },
//       ImageProject() {
//         return this.appData[this.$store.state.current].img
//       },
//       Counter() {
//         return this.appData[this.$store.state.current].count
//       },
//       Length() {
//         return this.appData.length
//       }
//     }
//   }
// </script>

// <style lang="scss" scoped>
//   @import "@/config.scss";
//   .slider {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: flex-start;
//     // ---- LEFT PART ----
//     .containerLeft {
//       position: absolute;
//       width: 60%;
//       height: 100%;
//       margin: 0px;
//       padding: 0px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       // z-index: 1;
//       // ---- PROJECT TITLE + LINE & HOVER ----
//       .projectContainer {
//         width: 100%;
//         z-index: 2;
//         height: 60%;
//         overflow: hidden;
//         display: flex;
//         flex-direction: column;
//         justify-content: flex-start;
//         position: absolute;
//         top: 20vh;
//         left: 8vw;
//         align-items: flex-start;
//         // ---- TITLE + LINE  ----
//         .titleContainer {
//           width: 100%;
//           height: 40%;
//           &.-title {
//             width: 100%;
//             height: 15%;
//             display: flex;
//             justify-content: flex-start;
//             color: $black;
//             font-family: "Inria Sans";
//             font-size: 70px;
//             font-weight: bold;
//             letter-spacing: -2.5px;
//             line-height: 96px;
//             text-align: left;
//             text-decoration: none;
//             transform: scale(1);
//             transition-duration: 0.3s;
//             transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
//             transition-duration: 0.15s;
//           }
//           &.-line {
//             border-top: 1px solid $black;
//             width: 38vw;
//             margin-top: 0;
//             margin-bottom: 3vh;
//             transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
//             transition-duration: 0.3s;
//             transition-delay: 0.01s;
//             &-arrow {
//               position: absolute;
//               top: -12px;
//               // right: -269px;
//               // top: 141px;
//               right: -192px;
//               opacity: 0;
//             }
//           }
//           // &.-title.isClicked {
//           //   // z-index: -2 !important;
//           //   width: 110% !important;
//           //   transform: scale(6) translateX(17vw) translateY(3vh) !important;
//           //   transition-timing-function: cubic-bezier(0.95, 0, 0.1, 1) !important;
//           //   transition-delay: 0.05s !important;
//           //   transition-duration: 0.95s !important;
//           // }
//           &.-line.isClicked {
//             zoom: 1;
//             opacity: 0;
//             transition: opcaity 0.2s;
//           }
//           &.-line-arrow.isClicked {
//             zoom: 1;
//             opacity: 0;
//             transition: opcaity 0.2s;
//           }
//           // ---- HOVER ----
//           &:hover {
//             .titleContainer {
//               &.-title {
//                 // z-index: -4 !important;
//                 transform: scale(1.03) translateX(2vw);
//                 transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
//                 transition-duration: 0.3s;
//                 transition-duration: 0.15s;
//               }
//               &.-line {
//                 transform: translateX(17vw);
//                 transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
//                 transition-duration: 0.3s;
//                 transition-delay: 0.01s;
//                 // z-index: 6 !important;
//                 &-arrow {
//                   opacity: 1;
//                   transition: opacity 0.3s;
//                   // z-index: 6 !important;
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// </style>