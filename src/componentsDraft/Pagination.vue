// <template>
//     <div class="pagination" :class="{'isClicked': isClicked}">
//         <span class="number">{{counter}}</span>
//         <div class="underline"/>
//             <span class="number -last">{{length}}</span>
//         </div>
//     </div>
// </template>

// <script>
// export default {
//   name: "pagination",
//   props: {
//     isClicked: {
//       type: Boolean,
//       required: true
//     },
//     counter: {
//       type: String,
//       required: false
//     },
//     length: {
//       type: Number,
//       required: false
//     }
//   },
//   data() {
//     return {}
//   },
//   methods: {
//     Clicked() {
//       this.$emit("Clicked", this.isClicked)
//     }
//   }
// }
// </script>
// <style lang="scss" scoped>
// @import "@/config.scss";

// .pagination {
//   font-family: "Inria Serif";
//   .number {
//     position: absolute;
//     bottom: 20vh;
//     left: 4vw;
//     display: flex;
//     color: $black;
//     font-size: 20px;
//     &.-last {
//       left: 4vw;
//       bottom: 7vh;
//       &:before {
//         content: "0";
//       }
//     }
//   }
//   .underline {
//     border-bottom: 1px solid black;
//     width: 7%;
//     position: absolute;
//     bottom: 14.9vh;
//     left: 2.7vw;
//     transform: rotate(90deg);
//   }
// }
// .pagination.isClicked {
//   visibility: hidden;
// }
// .pagination.isClicked {
//   visibility: hidden;
// }
// </style>