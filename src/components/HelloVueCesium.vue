<template>
  <div>
    <h1>Vue makes Cesium even more awesome!</h1>

    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-entity :position="position" :billboard="billboard" :description="description" :id="id"></vc-entity>
        <vc-entity
          :position="vcPosition"
          :billboard="billboard"
          :description="description"
          :id="idStore"
        ></vc-entity>
      </vc-viewer>
    </div>

    <v-btn @click="moveEntity">Test reactivity</v-btn>

    <v-btn
      href="https://github.com/AnalyticalGraphicsInc/cesium"
      target="_blank"
      class="primary ma-2"
    >
      <span class="ma-2">Cesium Github</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>

    <v-btn href="https://github.com/zouyaoji/vue-cesium" target="_blank" class="primary ma-2">
      <span class="ma-2">Vue-Cesium Github</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: "HelloCesium",
  props: [],
  computed: mapState([
    'count', 'vcPosition'
  ]),
  data() {
    return {
      id: 'This is a billboard',
      idStore: 'This is the IDStore entity',
      description: 'Hello Vue Cesium',
      image: 'https://zouyaoji.top/vue-cesium/favicon.png',
      position: { lng: 18, lat: 35, height: 100000 },
      billboard: {}
    }
  },
  methods: {
    ready(cesiumInstance) {
      const { Cesium, viewer } = cesiumInstance
      this.billboard = new Cesium.BillboardGraphics({
        image: 'https://zouyaoji.top/vue-cesium/favicon.png', // default: undefined
        show: true, // default
        pixelOffset: new Cesium.Cartesian2(0, -50), // default: (0, 0)
        eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
        scale: 0.5, // default: 1.0
        color: Cesium.Color.LIME, // default: WHITE
        // rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0
        alignedAxis: Cesium.Cartesian3.ZERO // default
      })
    },
    moveEntity() {
      this.$store.commit("increment")
      this.position.lng = (Math.random() - 0.5) * 180;
      this.position.lat = (Math.random() - 0.5) * 90;
      console.log("new Position:  " + this.position.lng + ", " + this.position.lat)
      console.log("new VC-Position:  " + this.vcPosition.lng + ", " + this.vcPosition.lat + "," + this.vcPosition.height)
      console.log("store-counting:" + this.count)
    }
  }
};
</script>

<style>
.viewer {
  width: 100%;
  height: 60hv;
}
</style>
