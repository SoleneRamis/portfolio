<template>
  <div class="slider">
      <div class="containerLeft">
        <div class="desc">
            <h1 class="title">{{TitleProject}}</h1>
            <div class="line"></div>
            <p class="date">{{DateProject}}</p>
            <p class="desc">{{DescProject}}</p>
            <div class="techno">
                <p v-for="TechnoProject in appData.slider[this.$store.state.current].techno">
                    {{TechnoProject}}
                </p>
            </div>
        </div>
      </div>
      <div class="containerRight">
          <div class="backgroundColor" :style="backgroundColorStyle"></div>
          <!-- <img class="image" :src="imageProject"/> -->
        <div id="canvas"></div>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  el: "#canvas",
  name: "slider",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      geometry: null,
      material: null,
      cubeMaterials: [],
      cube: null,
      controls: null,
      ambientLight: null
    };
  },
  computed: {
    ...mapState({
      appData: "appData"
    }),
    TitleProject() {
      return this.appData.slider[this.$store.state.current].title;
    },
    DateProject() {
      return this.appData.slider[this.$store.state.current].date;
    },
    DescProject() {
      return this.appData.slider[this.$store.state.current].desc;
    },
    TechnoProject() {
      return this.appData.slider[this.$store.state.current].techno;
    },
    backgroundColorStyle() {
      return {
        backgroundColor: this.appData.slider[this.$store.state.current].color
      };
    },
    imageProject() {
      return this.appData.slider[this.$store.state.current].img;
    }
  },
  mounted () {
    this.setThree()
    this.gameLoop()
    
    window.addEventListener('resize', () => {
      this.resize()
    })
  },
  methods: {
      setThree () {
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color( 0xCCCCCC )
      this.scene.fog = new THREE.FogExp2( 0xCCCCCC, 0.002 )
      this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 )
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize( window.innerWidth, window.innerHeight )
      document.getElementById('canvas').appendChild( this.renderer.domElement )
      
    //   this.controls = new THREE.OrbitControls( this.camera, this.renderer.domELement )
      
      this.geometry = new THREE.BoxGeometry( 1,1,1 )
      
      this.cubeMaterials = [
        new THREE.MeshPhongMaterial( { color: 'orange', side: THREE.DoubleSide } ), // Right side
        new THREE.MeshPhongMaterial( { color: 'blue', side: THREE.DoubleSide } ), // Left side
        new THREE.MeshPhongMaterial( { color: 'red', side: THREE.DoubleSide } ), // Top side
        new THREE.MeshPhongMaterial( { color: 'purple', side: THREE.DoubleSide } ), // Bottom side
        new THREE.MeshPhongMaterial( { color: 'aqua', side: THREE.DoubleSide } ), // Front side
        new THREE.MeshPhongMaterial( { color: 'yellow', side: THREE.DoubleSide } ) // Back side
      ]
      
      this.material = this.cubeMaterials
      // this.material = new THREE.MeshBasicMaterial({
      //   color: "blue",
      //   wireframe: true
      // })
      // this.material = new THREE.MeshBasicMaterial({
      //   map: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/4/4c/Logo-Free.jpg')
      // })
      this.cube = new THREE.Mesh( this.geometry, this.material )

      this.camera.position.z = 3
      this.ambientLight = new THREE.AmbientLight( 0xFFFFFF, 1.5 )
      this.scene.add( this.cube, this.ambientLight )
    },
    update () {
      this.cube.rotation.x += 0.01
      this.cube.rotation.y += 0.005
    },
    render () {
      this.renderer.render( this.scene, this.camera )
    },
    gameLoop () {
      requestAnimationFrame(this.gameLoop)
      
      this.update()
      this.render()
    },
    resize () {
      let width = window.innerWidth
      let height = window.innerHeight
      this.renderer.setSize( width, height )
      
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
    }
  }
};
</script>


<style lang="scss" scoped>
@font-face {
  font-family: "Inria Sans Bold";
  src: url("../assets/fonts/InriaSans/InriaSans-Bold.woff") format("woff");
}
.slider {
  width: 100%;
  height: 100%;
  display: inline-flex;
  .containerLeft {
    width: 60%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .desc {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: absolute;
      top: 336px;
      left: 230px;
      align-items: flex-start;
      .title {
        color: #000000;
        font-family: "Inria Sans Bold";
        font-size: 80px;
        font-weight: bold;
        letter-spacing: -2.5px;
        line-height: 96px;
      }
      .line {
        border-top: 1px solid black;
        width: 478px;
        margin-top: -24px;
        margin-bottom: 30px;
      }
      .date {
        color: #7e7e7e;
        font-family: "Helvetica Neue";
        font-size: 14px;
        font-weight: 500;
        line-height: 23px;
        font-style: italic;
      }
      .desc {
        color: #000000;
        font-family: "Helvetica Neue";
        font-size: 18px;
        font-weight: 300;
        line-height: 24px;
        text-align: justify;
        position: initial;
        width: 322px;
      }
      .techno {
        display: flex;
        justify-content: space-around;
        p {
          margin-right: 10px;
          color: #7e7e7e;
          font-family: "Helvetica Neue";
          font-size: 14px;
          font-weight: 500;
          line-height: 23px;
        }
      }
    }
  }
  .containerRight {
    width: 40%;
    height: 100vh;
    canvas {
        width: 100vw;
        height: 100vh;
    }
    .backgroundColor {
      height: 100%;
      width: 720px;
      position: relative;
      float: right;
    }
    .image {
      width: 740px;
      height: 880px;
      z-index: 1;
      right: 100px;
      top: 100px;
      position: absolute;
      object-fit: contain;
    }
  }
}
</style>