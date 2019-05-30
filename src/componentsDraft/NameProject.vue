// <template>
//     <div class="name-project">
//             <div class="titleContainer" ref="titleContain   er">
//                 <!-- <router-link 
//                 :to="{ name:'/project', params: { name:url}}"
//                 class="titleContainer -title"
//                 :class="{'isClicked': isClicked}">
//                     {{title}}
//                 </router-link> -->
//                 <h1 class="titleContainer -title">{{ title }}</h1>
//                 <div  class="titleContainer -line" :class="{'isClicked': isClicked}">
//                     <span class="titleContainer -line-arrow" :class="{'isClicked': isClicked}">></span>
//                 </div>
//             </div>
//     </div>
// </template>

// <script>
// import { mapState, mapMutations } from "vuex"

// export default {
//   name: "name-project",
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
//     url: {
//       type: String,
//       required: false
//     }
//   },
//   data() {
//     return {
//       //   isHover: false,
//       //   isClicked: false
//     }
//   },
//   mounted() {
//     // ---- EVENT FOR HOVER ANIMATION ----
//     // this.$refs.titleContainer.addEventListener("mouseenter", () => {
//     //   if (this.isClicked == false) {
//     //     return (this.isHover = true)
//     //   }
//     // })
//     // this.$refs.titleContainer.addEventListener("mouseleave", () => {
//     //   this.isHover = false
//     // })
//     // ---- EVENT FOR CLICK ANIMATION ----
//     // this.$refs.titleContainer.addEventListener("click", (e) => {
//     //   this.isHover = false
//     //   this.isClicked = true
//     //   this.Clicked()
//     // })
//   },
//   methods: {
//     Clicked() {
//       this.$emit("Clicked", this.isClicked)
//     }
//   },
//   computed: {
//     ...mapState({
//       appData: "appData",
//       current: "current"
//     })
//   }
// }
// </script>
// <style lang="scss" scoped>
// @import "@/config.scss";

// .name-project {
//   position: absolute;
//   width: 60%;
//   height: 100%;
//   margin: 0px;
//   padding: 0px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1;
//   // ---- TITLE + LINE  ----
//   .titleContainer {
//     width: 100%;
//     &.-title {
//       width: 100%;
//       display: flex;
//       justify-content: flex-start;
//       color: $black;
//       font-family: "Inria Sans";
//       font-size: 70px;
//       font-weight: bold;
//       letter-spacing: -2.5px;
//       line-height: 96px;
//       text-align: left;
//       text-decoration: none;
//       transform: scale(1);
//       transition-duration: 0.3s;
//       transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
//       transition-duration: 0.15s;
//     }
//     &.-line {
//       border-top: 1px solid $black;
//       width: 38vw;
//       margin-top: 0;
//       margin-bottom: 3vh;
//       transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
//       transition-duration: 0.3s;
//       transition-delay: 0.01s;
//       &-arrow {
//         position: absolute;
//         top: -12px;
//         right: -269px;
//         opacity: 0;
//       }
//     }
//     // ---- HOVER ----
//     &:hover {
//       .titleContainer {
//         &.-title {
//           z-index: -4 !important;
//           transform: scale(1.03) translateX(2vw);
//           transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
//           transition-duration: 0.3s;
//           transition-duration: 0.15s;
//         }
//         &.-line {
//           transform: translateX(17vw);
//           transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
//           transition-duration: 0.3s;
//           transition-delay: 0.01s;
//           // z-index: 6 !important;
//           &-arrow {
//             opacity: 1;
//             transition: opacity 0.3s;
//             // z-index: 6 !important;
//           }
//         }
//       }
//     }
//   }

//   .titleContainer {
//     &.-title.isClicked {
//       z-index: -2 !important;
//       width: 110% !important;
//       transform: scale(6) translateX(17vw) translateY(3vh) !important;
//       transition-timing-function: cubic-bezier(0.95, 0, 0.1, 1) !important;
//       transition-delay: 0.05s !important;
//       transition-duration: 0.95s !important;
//     }
//     &.-line.isClicked {
//       zoom: 1;
//       opacity: 0;
//       transition: opcaity 0.2s;
//     }
//     &.-line-arrow.isClicked {
//       zoom: 1;
//       opacity: 0;
//       transition: opcaity 0.2s;
//     }
//   }
// }

// // .backgroundColor.isClicked {
// //   width: 0%;
// //   transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
// //   transition: all 1s;
// // }
// </style>