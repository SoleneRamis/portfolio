<template>
  <div  class="sphere">
    <div :class="{'sphereVisible': this.appData[this.$store.state.current] == 0}" ref="canvas" id="canvas"></div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { mapState } from "vuex";

export default {
  name: "sphere",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      sphere: null
    };
  },
  computed: {
    ...mapState({
      appData: "appData",
    }),
  },
  methods: {
    init: function() {
        let winW = window.innerWidth/2.4 // 768;
        let winH = window.innerHeight // 1080;
        let container = this.$refs.canvas;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(80, winW / winH, 0.01, 10);
        this.camera.position.z = 8;

        this.scene = new THREE.Scene();

        let geometry = new THREE.SphereGeometry(3, 50, 50);
        let material = new THREE.MeshBasicMaterial({
          map: new THREE.TextureLoader().load('https://res.cloudinary.com/dn32la6ny/image/upload/v1553163458/pawel-czerwinski-1392547-unsplash.jpg')
        });

        this.sphere = new THREE.Mesh(geometry, material);
        this.scene.add(this.sphere);

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(winW, winH);
        this.renderer.setClearColor('rgb(192, 198, 214)', 1)
        container.appendChild(this.renderer.domElement);
    },

    animate: function() {
        requestAnimationFrame(this.animate);
        this.sphere.rotation.x += 0.005;
        this.sphere.rotation.y += 0.005;
        this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
      this.init();
      this.animate();
  }
}
</script>


<style lang="scss" scoped>
#canvas {
    position: absolute;
     // visibility: hidden;
  // #canvas >  .sphereVisible {
  //     visibility: visible;
  //   }
}
</style>