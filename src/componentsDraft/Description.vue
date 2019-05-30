// <template>
//     <div class="description">
//         <div class="descContainer" :class="{'hoverDesc': isHover, 'isClicked': isClicked}">
//             <p class="date" :class="{'isClicked': isClicked}">{{date}}</p>
//             <p class="desc" :class="{'isClicked': isClicked}">{{desc}}</p>
//             <div class="techno" :class="{'isClicked': isClicked}">
//                 <p v-for="(techno, index) in techno" :key="index">
//                     <span class="glif">✎</span> {{techno}}
//                 </p>
//             </div>
//         </div>
//     </div>
// </template>

// <script>
// export default {
//   name: "slider",
//   props: {
//     isHover: {
//       type: Boolean,
//       required: true
//     },
//     isClicked: {
//       type: Boolean,
//       required: true
//     },
//     date: {
//       type: String,
//       required: false
//     },
//     desc: {
//       type: String,
//       required: false
//     },
//     techno: {
//       type: Object,
//       required: false
//     }
//   },
//   data() {
//     return {}
//   }
// }
// </script>
// <style lang="scss" scoped>
// @import "@/config.scss";

// .description {
//   // margin-top: -50px;
//   .descContainer {
//     transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
//     transition-duration: 0.35s;
//     transition-delay: 0.1s;
//   }
//   // ---- EVENT HOVER ----
//   .descContainer.hoverDesc {
//     transform: translateX(2vw);
//     transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
//     transition-duration: 0.35s;
//     transition-delay: 0.1s;
//   }
//   .date {
//     color: $gray;
//     font-family: "Helvetica Neue";
//     font-size: 14px;
//     font-weight: 500;
//     line-height: 23px;
//     font-style: italic;
//     text-align: left;
//   }
//   .desc {
//     color: $black;
//     font-family: "Helvetica Neue";
//     font-size: 18px;
//     font-weight: 300;
//     line-height: 24px;
//     text-align: justify;
//     position: initial;
//     text-align: left;
//     width: 28vw;
//   }
//   .techno {
//     display: flex;
//     justify-content: flex-start;
//     text-align: left;
//     p {
//       margin-right: 10px;
//       color: $gray;
//       font-family: "Helvetica Neue";
//       font-size: 14px;
//       font-weight: 500;
//       line-height: 23px;
//       .glif {
//         font-size: 20px;
//       }
//     }
//   }
//   .date.isClicked,
//   .desc.isClicked,
//   .techno.isClicked {
//     zoom: 1;
//     opacity: 0;
//     transform: translateX(10vw);
//     transition: all 0.5s;
//   }
// }
// </style>